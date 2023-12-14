const express = require('express');
const router = express.Router();
const Item = require('../models/item');

//Get all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(400).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Get a single item by ID
router.get('/items/:id', async (req, res) => {
    try {
        const { id } = await req.body;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ error: 'Producto not found' });
        }
        res.status(400).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;