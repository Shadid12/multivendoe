import { getAccessToken } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function token(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    console.log('accessToken ==>', accessToken)
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(200).json({
      accessToken: process.env.NEXT_PUBLIC_FAUNA_KEY,
    })
  }
};
