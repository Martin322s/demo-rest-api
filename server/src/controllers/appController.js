const router = require('express').Router();
const appService = require('../services/appService');

router.get('/catalog', async (req, res) => {
    if (req.query.where) {
        let userId = req.query.where.split('=')[1];
        userId = userId.substring(1, userId.length - 1);
        const allMy = await appService.myFurnitures(userId);
        res.json(allMy);
    } else {
        const allFurnitures = await appService.getAll();
        res.json(allFurnitures);
    }
});

router.post('/catalog', async (req, res) => {
    const data = req.body;
    const token = req.headers['x-authorization'];
    const decodedToken = await appService.decodeTokenService(token);
    const createdFurniture = await appService.createFurniture({ ...data, _ownerId: decodedToken._id });
    res.json(createdFurniture);
});

router.get('/catalog/:id', async (req, res) => {
    const furniture = await appService.getOne(req.params.id);
    res.json(furniture);
});

router.put('/catalog/:id', async (req, res) => {
    const edittedFurniture = await appService.editFurniture(req.params.id, req.body);
    res.json(edittedFurniture);
});

router.delete('/catalog/:id', async (req, res) => {
    const deletedFurniture = await appService.deleteFurniture(req.params.id, req.body);
    res.json(deletedFurniture);
});

module.exports = router;