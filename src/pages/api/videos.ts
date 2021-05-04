import type { NextApiRequest, NextApiResponse } from 'next';

const GCN_ENDPOINT = 'https://globalcyclingnetwork.com/api/devtask.';

type Data = {
  name: string;
};

export default async function videos(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const gcnResponse = await fetch(GCN_ENDPOINT);
  const gcnData = await res.status(200).json({ name: 'John Doe' });
}
