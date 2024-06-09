const db = require('../model');
const { Op } = require('sequelize')

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
    const data = await User.findAll({
        attributes: ['firstName']
    });
    res.status(200).json({ data });
}

const getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: {
                [Op.eq]: req.params.id
            }
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

const queryUser = async (req, res) => {
    const data = await User.findAll({
        attributes: ['id', 'firstName', 'lastName'],

    });
    res.status(200).json({ data });
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    createUser,
    updateUser,
    queryUser
}