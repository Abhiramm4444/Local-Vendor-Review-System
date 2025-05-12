const db = require('../config/db.config');

exports.addReview = async (req, res) => {
    try {
        const { vendor_id, rating, comment } = req.body;
        const user_id = req.userId; // From auth middleware

        const [result] = await db.query(
            'INSERT INTO reviews (user_id, vendor_id, rating, comment) VALUES (?, ?, ?, ?)',
            [user_id, vendor_id, rating, comment]
        );

        const [review] = await db.query(`
            SELECT r.*, u.username
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.id = ?
        `, [result.insertId]);

        res.status(201).json(review[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVendorReviews = async (req, res) => {
    try {
        const [reviews] = await db.query(`
            SELECT r.*, u.username
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.vendor_id = ?
            ORDER BY r.created_at DESC
        `, [req.params.vendorId]);
        
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};