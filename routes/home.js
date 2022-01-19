const { response } = require("express");
const db = require("../src/database/connection.js");

function get(request, response) {
    response.send("Hello");
}

module.exports = { get }