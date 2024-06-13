import { HttpError } from "http-errors";

const errorHandlerMiddleware = (err, req, res, next,) => { 
        if (err instanceof HttpError) {
                res.status(err.status).json({
                        status: err.status,
                        message: err.name,
                        data: err,
                });
                return;
        }

        res.status(500).json({
                massage: 'Somethiing went wrong',
                error: err.message,
        });
};

export default errorHandlerMiddleware;