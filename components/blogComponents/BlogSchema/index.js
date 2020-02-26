import React, { useContext } from 'react';
import { SideSection } from '../SideSection';
import { Post } from '../Post';
import { BlogContainer } from './styles';
import { ThemeContext } from 'styled-components';
import Head from 'next/head';
import { Loading } from '../../views/Loading';

export const BlogSchema = ({ children, imgPath, query }) => {
	const { data } = useContext(ThemeContext);
	const choosen = data.find((post) => {
		return query.post === post.id;
	});
	console.log(choosen);
	return (
		<BlogContainer>
			{choosen !== undefined ? (
				<React.Fragment>
					<Head>
						<title>{choosen.title} - Agricola Oskar</title>
					</Head>
					<Post {...choosen} />
					<SideSection />
				</React.Fragment>
			) : (
				<Loading />
			)}
		</BlogContainer>
	);
};
