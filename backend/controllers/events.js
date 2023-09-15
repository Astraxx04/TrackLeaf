const Events = require("../models/events");
const { NotFoundError } = require("../errors");

const getAllEvents = async (req, res) => {
    const events = await Events.find({});
    res.status(200).json({ events });
};

const getEvent = async (req, res) => {
  const { id: eventID } = req.params;
  const event = await Events.findOne({ _id: eventID });
  if (!event) {
    throw new NotFoundError(`No event with id: ${eventID}`);
  }
  res.status(200).json({ event });
};

const createNewEvent = async (req, res) => {
  const event = await Events.create(req.body);
  res.status(201).json({ event });
};

const updateItem = async (req, res) => {
  const { id: itemID } = req.params;
  const item = await Items.findOneAndUpdate({ qrId: itemID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    throw new NotFoundError(`No item with id: ${itemID}`);
  }
  res.status(200).json({ item });
};

const deleteEvent = async (req, res) => {
  const { id: itemID } = req.params;
  const item = await Items.findOneAndDelete({ qrId: itemID });
  if (!item) {
    throw new NotFoundError(`No item with id: ${itemID}`);
  }
  res.status(200).json({ item });
};

module.exports = {
  getAllItems,
  getItem,
  insertNewItem,
  updateItem,
  deleteItem,
};
