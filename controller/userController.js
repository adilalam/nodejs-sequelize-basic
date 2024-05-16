const db = require('../model');

const User = db.user;

const addUser = async (req, res) => {
    const user = await User.build({ firstName: "sohan", lastName: "kumar" });
    await user.save();

    res.status(201).json(user.toJSON(user));
}

const createUser = async (req, res) => {
    // console.log('req.body ', req.body);
    const { firstName, lastName } = req.body;

    const user = await User.build({ firstName, lastName });
    await user.save();

    res.status(201).json(user.toJSON(user));
}

const getUsers = async (req, res) => {
    const data = await User.findAll({});
    res.status(200).json({ data });
}

const getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data });
}

const updateUser = async (req, res) => {
    const updatedData = req.body;
    const data = await User.update(updatedData, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data });
}

module.exports = { addUser, getUsers, getUser, createUser, updateUser }