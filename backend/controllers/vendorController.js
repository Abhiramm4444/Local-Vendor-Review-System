const db = require('../config/db.config');

exports.getAllVendors = async (req, res) => {
    try {
        const [vendors] = await db.query(`
            SELECT v.*, 
                   COALESCE(AVG(r.rating), 0) as average_rating,
                   COUNT(r.id) as review_count
            FROM vendors v
            LEFT JOIN reviews r ON v.id = r.vendor_id
            GROUP BY v.id
        `);
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVendorById = async (req, res) => {
    try {
        const [vendor] = await db.query(`
            SELECT v.*, 
                   COALESCE(AVG(r.rating), 0) as average_rating,
                   COUNT(r.id) as review_count
            FROM vendors v
            LEFT JOIN reviews r ON v.id = r.vendor_id
            WHERE v.id = ?
            GROUP BY v.id
        `, [req.params.id]);

        if (vendor.length === 0) {
            return res.status(404).json({ message: "Vendor not found" });
        }

        const [reviews] = await db.query(`
            SELECT r.*, u.username
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.vendor_id = ?
            ORDER BY r.created_at DESC
        `, [req.params.id]);

        res.json({
            ...vendor[0],
            reviews
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addVendor = async (req, res) => {
    try {
        const { name, address, phone, category } = req.body;
        const [result] = await db.query(
            'INSERT INTO vendors (name, address, phone, category) VALUES (?, ?, ?, ?)',
            [name, address, phone, category]
        );
        res.status(201).json({
            id: result.insertId,
            name,
            address,
            phone,
            category
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};