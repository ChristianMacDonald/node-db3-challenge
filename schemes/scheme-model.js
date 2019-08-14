const db = require('../data/dbConfig');

function find() {
    return db('schemes');
}

function findById(id) {
}

function add(user) {
}

function update(changes, id) {
}

function remove(id) {
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};