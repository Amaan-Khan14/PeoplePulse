const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.BAD_REQ:
            res.json({
                title: "Bad Request",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unautorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.NOT_PERMITEED:
            res.json({
                title: "Not permitted",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        default:
            console.log("No error all good")
            break;
    }
}

module.exports = errorHandler;