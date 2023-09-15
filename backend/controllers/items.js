

const getAllItems = async(req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
};

const insertNewItem = async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
};

const updatetItem = async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
};

const deletetItem = async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
};
