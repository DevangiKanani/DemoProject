const { ValidationError } = require("express-validation");

const errorHandler = (err, req, res, next) => {
console.log("🚀 ~ errorHandler ~ err:", err)

    let errorStatus = err.statusCode || 500
    let msg;
    if (err instanceof ValidationError) {
        console.log("==========================");
        errorStatus = 422;
        msg = err
    }
    if (err.details) {
        console.log("-------------------");
        if (err.details.body) { msg = err.details.body[0].message }
        else if (err.details.params) { msg = err.details.params[0].message }
        else if (err.details.query) { msg = err.details.query[0].message }
        else if (err instanceof Error) {
            errorStatus = 401;
            msg = err
        }
        else { msg = err.message }
    }
    res.status(errorStatus).json({
        status: errorStatus,
        error: err.message,
    })
}

module.exports = errorHandler;