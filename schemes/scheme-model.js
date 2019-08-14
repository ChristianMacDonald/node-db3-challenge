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

async function add(scheme) {
    const [id] = await db('schemes').insert(scheme);
    return findById(id);
}

async function update(changes, id) {
    await db('schemes').where({ id }).update(changes);
    return findById(id);
}

async function remove(id) {
    let scheme = await db('schemes').where({ id });
    await db('schemes').where({ id }).delete();
    return scheme;
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};