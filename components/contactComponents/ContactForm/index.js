import React, { useState } from 'react';
import { FormContainer, Input, ContactButton, InpuContainer, H2 } from './styles';

export const ContactForm = () => {
	const [
		state,
		setState
	] = useState({ name: '', email: '' });
	const handleChange = (event) => {
		const { name, value } = event.target;
		setState({
			...state,
			[name] : value
		});
	};
	const handlePress = () => {
		fetch('/api/send-email', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ name: state.name, email: state.email })
		});
	};
	return (
		<React.Fragment>
			<FormContainer>
				<H2>Get in touch</H2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handlePress();
					}}>
					<InpuContainer>
						<label htmlFor='name'>Name: </label>
						<Input type='text' name='name' id='name' onChange={handleChange} />
					</InpuContainer>
					<InpuContainer>
						<label htmlFor='email'>Email Adress: </label>
						<Input
							name='email'
							placeholder='example@gmail.com'
							required
							type='email'
							id='email'
							onChange={handleChange}
						/>
					</InpuContainer>
					<InpuContainer>
						<label htmlFor='company'>Company: </label>
						<Input type='text' id='company' />
					</InpuContainer>
					<InpuContainer>
						<label htmlFor='phone'>Phone Number: </label>
						<Input type='text' id='phone' />
					</InpuContainer>
					<ContactButton>Send</ContactButton>
				</form>
			</FormContainer>
		</React.Fragment>
	);
};
