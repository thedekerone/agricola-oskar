import React from 'react';
import { ContactForm } from '../ContactForm';
import { Alternative } from '../Alternative';
import { Container } from './styles';

export const ContactSchema = () => {
	return (
		<Container>
			<ContactForm />
			<Alternative />
		</Container>
	);
};
