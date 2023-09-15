const Items = require("../models/items");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllItems = async(req, res) => {
    const { category } = req.query;

    let items;
    if(category) {
        items = await Items.find({ category: category });
    } else{
        items = await Items.find({});
    }

    res.status(200).json( {items} );
};

const getItem = async(req, res) => {
    const { id: itemID } = req.params;
    const item = await Items.findOne({ _id: itemID });
    if(!item) {
        throw new NotFoundError(`No item with id: ${itemID}`);
    }
    res.status(200).json({ item });      
};

const insertNewItem = async(req, res) => {
    const item = await Items.create(req.body);
    res.status(201).json({ item });
};

const updateItem = async(req, res) => {
    const { id: itemID } = req.params;
    const item = await Items.findOneAndUpdate({ _id: itemID }, req.body, {
        new: true,
        runValidators: true
    });
    if(!item) {
        throw new NotFoundError(`No item with id: ${itemID}`);
    }
    res.status(200).json({ item }); 
};

const deleteItem = async(req, res) => {
    const {id: itemID} = req.params;
    const item = await Items.findOneAndDelete({ _id: itemID });
    if(!item) {
        throw new NotFoundError(`No item with id: ${itemID}`);
    }
    res.status(200).json({ item });
};

module.exports = {
    getAllItems,
    getItem,
    insertNewItem,
    updateItem,
    deleteItem
};
