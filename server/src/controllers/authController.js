const router = require('express').Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        const result = await authService.registerUser(data);

        if (typeof result !== 'string') {
            const token = await authService.generateToken(result);
            res.json({
                _id: result._id,
                email: result.email,
                accessToken: token
            });
        } else {
            throw result;
        }
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/logout', (req, res) => {
    res.json('Successfully Logged out!');
});

module.exports = router;