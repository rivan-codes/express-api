var User = require('../models/UsersModel');

exports.list = async (req, res) => {
    const users = await User
        .query()
        .select('id', 'first_name', 'email');
    console.log(users);
    res.json(users);
}

exports.detail = async (req, res) => {
    const users = await User
        .query()
        .select('id', 'first_name', 'email')
        .findById(req.params.id);
    res.json(users);
}

exports.formUpdate = async (req, res) => {
    const users = await User
        .query()
        .select('id', 'first_name', 'email')
        .findById(req.params.id);
    res.json(users);
}

exports.create = async (req, res) => {
    const users = await User
        .query()
        .insert({
            first_name: 'Habibi',
            last_name: 'Habibah'
        });
    res.json(users);
}

exports.update = async (req, res) => {
    const users = await User
        .query()
        .patchAndFetchById(req.params.id, {
            first_name: 'Habibah',
            last_name: 'Habibi'
        });
    res.json(users);
}

exports.delete = async (req, res) => {
    const users = await User
        .query()
        .deleteById(req.params.id);
    res.json(users);
}