import React from 'react';
import { Container, Social, List, H6, H3, Background, Anchor, Hr } from './styles';
import { FaFacebookF, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {
	return (
		<Background>
			<Container>
				<Social>
					<H3>Follow us</H3>
					<List>
						<li>
							<FaFacebookF size='30' />
						</li>
						<li>
							<FaTwitterSquare size='30' />
						</li>
						<li>
							<FaInstagram size='30' />
						</li>
					</List>
				</Social>
				<Hr />
				<H6>Copyright © 2020 Agricola Oskar - Perú</H6>
			</Container>
		</Background>
	);
};
