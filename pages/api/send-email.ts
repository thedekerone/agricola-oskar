import { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../components/utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { content, email } = req.body;
		await sendEmail({ content, email });
		await sendEmail({ content: email, email: 'agricolaoskar@gmail.com' });
		return res.status(200).end();
	}
	return res.status(404).json({
		error: {
			code: 'not_found',
			messgae: "The requested endpoint was not found or doesn't support this method."
		}
	});
};
