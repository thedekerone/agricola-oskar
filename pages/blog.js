import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { BlogSchema } from '../components/blogComponents/BlogSchema';
import { ThemeContext } from 'styled-components';
import { CardColleciton } from '../components/CardCollection';
import { Card } from '../components/Card';
import { CenterContainer } from '../components/utils';
import Head from 'next/head';
import { Loading } from '../components/views/Loading';
import { useGetPosts } from '../hooks/useGetPosts';

export const Blog = ({ query }) => {
	const [
		data
	] = useGetPosts();

	return (
		<ThemeContext.Provider value={{ data: data, lang: '' }}>
			<Layout>
				<Head>
					<link rel='canonical' href='https://agricolaoskar.company/blog' />
					<title>Blog page for mango kent news in Peru - Agricola Oskar</title>
				</Head>
				{query.post !== undefined ? (
					<React.Fragment>
						<BlogSchema query={query} imgPath='/static/images/mango-peru.jpg' />
					</React.Fragment>
				) : (
					<CenterContainer>
						<CardColleciton title='Posts' gap='1rem 8rem'>
							{data.length > 0 ? (
								data.map((post) => {
									return <Card {...post} key={post.id} />;
								})
							) : (
								<Loading />
							)}
						</CardColleciton>
					</CenterContainer>
				)}
			</Layout>
		</ThemeContext.Provider>
	);
};
Blog.getInitialProps = async ({ query }) => {
	return { query };
};

export default Blog;
