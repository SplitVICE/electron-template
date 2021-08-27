require('dotenv').config();
module.exports = {
    DEV: (() => {
        return process.env.DEV != undefined && process.env.DEV.toLowerCase() == 'true'
            ? true : false;
    })()
}