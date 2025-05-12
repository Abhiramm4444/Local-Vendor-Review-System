const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, reviewController.addReview);
router.get('/vendor/:vendorId', reviewController.getVendorReviews);

module.exports = router;