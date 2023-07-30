const router = require('express').Router();
const appService = require('../services/appService');

router.get('/catalog', async (req, res) => {
    const allFurnitures = await appService.getAll();
    res.json(allFurnitures);
});

router.post('/catalog', async (req, res) => {
    const data = req.body;
    const token = req.headers['x-authorization'];
    const decodedToken = await appService.decodeTokenService(token);
    const createdFurniture = await appService.createFurniture({ ...data, _ownerId: decodedToken._id });
    res.json(createdFurniture); 
});

module.exports = router;