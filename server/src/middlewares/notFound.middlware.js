import { ApiError } from "../utils/ApiError.js";

export const notFoundMiddleware = (req,res,next)=> { 
    next(new ApiError(`Route not Found : ${req.url}`,404));
}; 