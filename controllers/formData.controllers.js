const model = require('../models/formData.models')

const add = async (req, res) => {
    const user = new model(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports.add = add

const read = async (req, res) => {
    const users = await model.find({})
    res.send(users)
}

module.exports.read = read