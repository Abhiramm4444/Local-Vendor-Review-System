const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const db = require('./config/db.config'); // This is a promise-based pool

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/vendors', require('./routes/vendor.routes'));
app.use('/api/reviews', require('./routes/review.routes'));

// Health check (async for promise pool)
app.get('/health', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1');
        res.json({ status: 'OK', db: 'Connected', timestamp: new Date() });
    } catch (err) {
        res.status(500).json({ status: 'Database connection failed', error: err.message });
    }
});

// Error handling
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);

    // Test DB connection
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS result');
        console.log('Database connected successfully. Test query result:', rows[0].result);
    } catch (err) {
        console.error('Database connection failed at startup:', err.message);
    }
});

// Catch unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection:', err);
});
