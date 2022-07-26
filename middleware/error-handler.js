import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);

    // when we throwing new Error('message'), the err property comes with a message attached to it,
    // so in order to see our Error messages we simply check first if err has message property,
    // if it does, use it - if not, use hardcoded.
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, try again later"
    };

    // Schema validation errors
    if (err.name === "ValidationError") {
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        // defaultError.msg = err.message
        defaultError.msg = Object.values(err.errors)
            .map(error => error.message)
            .join(", ");
    }

    // unique value in Schema error (duplicate)
    if (err.code && err.code === 11000) {
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = `${Object.keys(err.keyValue)} already in use`;
    }

    res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default ErrorHandlerMiddleware;
