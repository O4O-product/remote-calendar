import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default async function handler(req, res) {
  const { credential } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    res.status(200).json({
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
