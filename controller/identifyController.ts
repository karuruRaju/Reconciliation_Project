import { Request, Response } from 'express';
import { identifyContactService } from '../services/identifyService';

export const identifyContact = async (req: Request, res: Response) => {
  try {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
      return res.status(400).json({ error: 'Either email or phoneNumber must be provided' });
    }

    const contact = await identifyContactService(email, phoneNumber);

    return res.status(200).json({ contact });
  } catch (error) {
    console.error('Error in identifyContact:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
