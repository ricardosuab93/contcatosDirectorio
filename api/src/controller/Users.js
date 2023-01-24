const { User } = require('../models/User')

const allUsers = async (req, res) => {
    await User.find({}).then((user) => {
        res.json(user)
    })
};

// * Agregar async, await
const userById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Vas a obtener el usuario con id ${id}`})
};

const updateUserById = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Vas a actualizar el usuario con id ${id}`})
};

module.exports = {
    allUsers,
    userById,
    updateUserById
}