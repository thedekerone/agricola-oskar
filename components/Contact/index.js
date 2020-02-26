import React, { useState } from 'react';
import { NewsContainer, Title, Input, ContactButton, InputContainer } from './styles';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

export const Contact = () => {
	const [
		email,
		setEmail
	] = useState();

	const handleChange = (e) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handlePress = () => {
		fetch('/api/send-email', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ email: email })
		});
	};
	const { lang } = useContext(ThemeContext);
	return (
		<NewsContainer id='contact'>
			<Title>{lang == 'es' ? 'Ponte en contacto con nosotros' : 'Get in contact with us'}</Title>
			<InputContainer
				onSubmit={(e) => {
					e.preventDefault();
					handlePress();
				}}>
				<label htmlFor='email'>Email:</label>
				<Input
					onChange={(e) => {
						handleChange(e);
					}}
					id='email'
					placeholder='example@gmail.com'
					type='email'
				/>
				<ContactButton type='submit' size='12px'>
					{lang == 'es' ? 'enviar' : 'submit'}
				</ContactButton>
			</InputContainer>
		</NewsContainer>
	);
};
