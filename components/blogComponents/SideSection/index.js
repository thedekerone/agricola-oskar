import React, { useContext } from 'react';
import { SimpleCard } from '../../SimpleCard';
import { Container, Title } from './styles';
import { CardColleciton } from '../../CardCollection';
import { ThemeContext } from 'styled-components';

export const SideSection = () => {
	const { data } = useContext(ThemeContext);
	return (
		<Container>
			<Title>Featured</Title>
			<CardColleciton minWidth='25rem' gap='1.5rem 2rem'>
				{data.length > 0 &&
					data.map((post) => {
						return <SimpleCard key={post.id} {...post} />;
					})}
			</CardColleciton>
		</Container>
	);
};
