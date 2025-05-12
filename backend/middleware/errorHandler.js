const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: err.errors
        });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }

    return res.status(500).json({
        message: 'Something went wrong!'
    });
};

module.exports = errorHandler;