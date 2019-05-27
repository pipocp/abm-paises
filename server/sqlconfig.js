const sql = require("mssql");

const config = {
    user: 'advertmind',
    password: '',
    server: 'WILLY', 
    database: 'MP3_V38_CARATMEXICO' 
};

module.exports.sql = sql;
module.exports.config = config;