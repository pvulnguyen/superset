import type { NextFunction, Request, Response } from 'express';

/** A middleware function to centralize error handling. */

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.message);
    if (res.headersSent) return next(err);
    res.status(500).json({ error: 'Internal Server Error' });
}
