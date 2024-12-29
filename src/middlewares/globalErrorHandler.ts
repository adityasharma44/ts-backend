/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "An unknown error occurred",
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
