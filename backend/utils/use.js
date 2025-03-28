const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();


const generate_Token = async (data) => {
    try {
        let token = await jwt.sign(data, process.env.private_key);
        return token;
    } catch (error) {
        throw new Error("Could Not Sign Token : " + error);
    }
};

const hash_password = async (password) => {
    let hash = await bcrypt.hash(password, 10);
    return hash;
};

const compare_password = async (hash, password) => {
    return await bcrypt.compare(password, hash);
};

module.exports = { generate_Token, compare_password, hash_password };