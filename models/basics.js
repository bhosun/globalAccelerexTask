const express       = require("express");
const Pool          = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'codechallenge',
    password: 'bosunbosun71',
    port: 5432
});

module.exports = pool;
