const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not found", 
                message: err.message,
                stackTrace: err.stack,
            });            
            break;
        case constants.VALIDATEION_ERROR:
            res.status(statusCode).json({
            title: "Validation Failed", 
            message: err.message,
            stackTrace: err.stack,
        });
        
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
            title: "Unauthorized", 
            message: err.message,
            stackTrace: err.stack,
        });

        case constants.FORBIDDEN:
            res.status(statusCode).json({
            title: "Forbidden", 
            message: err.message,
            stackTrace: err.stack,
        });

        case constants.INTERNAL_SERVER_ERROR:
            res.status(statusCode).json({
            title: "SERVER MORE GECHE", 
            message: err.message,
            stackTrace: err.stack,
        });
        
        default:
            console.log("All good!")
            break;
    }

};

module.exports = errorHandler;
