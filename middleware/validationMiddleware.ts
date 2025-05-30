import { Request, Response, NextFunction } from 'express';

export function validateIdentifyRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, phoneNumber } = req.body;

  if (!email && !phoneNumber) {
    return res.status(400).json({
      error: 'At least one of email or phoneNumber must be provided',
    });
  }

  // Simple email format check if email is provided
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
    });
  }

  // Simple phone number check (digits only, length 5 to 15)
  if (
    phoneNumber &&
    !(typeof phoneNumber === 'string' || typeof phoneNumber === 'number')
  ) {
    return res.status(400).json({
      error: 'phoneNumber must be a string or number',
    });
  }

  const phoneStr = phoneNumber?.toString() ?? '';
  if (phoneStr && !/^\d{5,15}$/.test(phoneStr)) {
    return res.status(400).json({
      error: 'Invalid phoneNumber format',
    });
  }

  next();
}
