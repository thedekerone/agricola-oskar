import fetch from 'node-fetch';
const { SENDGRID_API, SENDGRID_API_KEY } = process.env;

const sendEmail = async ({ content = 'Agricola Oskar', email }) => {
	try {
		await fetch(process.env.SENDGRID_API, {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				Authorization  : `Bearer ${process.env.SENDGRID_API_KEY}`
			},
			body    : JSON.stringify({
				personalizations : [
					{
						to      : [
							{
								email
							}
						],
						subject : 'Agricola Oskar'
					}
				],
				from             : {
					email : 'noreply@agricolaoskar.com',
					name  : content
				},

				template_id      : process.env.TEMPLATE_ID
			})
		});
	} catch (error) {
		console.log(error);
	}
};

export { sendEmail };
