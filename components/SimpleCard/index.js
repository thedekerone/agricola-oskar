import React from 'react';
import { StandardImg } from '../StandardImg';
import { Container, ImgContainer, Title } from './styles';

import Link from 'next/link';

export const SimpleCard = ({ title = 'example', src, id }) => {
	return (
		<Link href={`blog?post=${id}`}>
			<Container>
				<ImgContainer>
					<StandardImg src={src} width='100%' alt='mango-avocado' />
				</ImgContainer>

				<Title> {title}</Title>
			</Container>
		</Link>
	);
};
