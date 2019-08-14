const db = require('../data/dbConfig');

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('steps as st').join('schemes as sc', 'st.scheme_id', 'sc.id').select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions').where({ scheme_id: id });
}

function add(scheme) {
}

function update(changes, id) {
}

function remove(id) {
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};