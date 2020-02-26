import React, { useContext } from 'react';
import { Featured } from '../Featured';
import { Contact } from '../Contact';
import { CardColleciton } from '../CardCollection';
import { Card } from '../Card';
import { useGetPosts } from '../../hooks/useGetPosts';
import { CenterContainer, Label } from '../utils';
import { ThemeContext } from 'styled-components';

export const PostCards = () => {
	const {data} = useContext(ThemeContext);

	return (
		<React.Fragment>
			{data.length > 0 ? (
				<React.Fragment>
					<Featured />

					<Contact />

					<CenterContainer>
						<CardColleciton title='Collection' gap='3rem 8rem'>
							{data.slice(1, 4).map((post) => {
								return <Card {...post} key={post.id} />;
							})}
						</CardColleciton>

						<CardColleciton title='Another' gap='3rem 8rem'>
							{data.slice(4, 7).map((post) => {
								return <Card {...post} key={post.id} />;
							})}
						</CardColleciton>
					</CenterContainer>
				</React.Fragment>
			) : (
				<div style={{ width: '100%', height: '80vh' }} />
			)}
		</React.Fragment>
	);
};
