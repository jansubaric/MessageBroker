const { ERROR_MAPPING } = require('./data')
const { logger } = require(`./logging`)

const errorHandlerMiddleware = (err, req, res, next) => {
    if(ERROR_MAPPING[400].includes(err.name)){
        res.status(400).json({
            error: 'Malformed syntax'
        })
    } else {
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
    logger.warn(`${err.name}: ${err.message}`);
    logger.log("trace", err.stack);
}

module.exports = {
    errorHandlerMiddleware: errorHandlerMiddleware
}