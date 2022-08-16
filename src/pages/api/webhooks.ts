import { NextApiRequest, NextApiResponse } from "next";
//stripe listen --forward-to localhost:3000/api/webhooks
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("evento recebido");
  res.status(200).json({ ok: true });
};
