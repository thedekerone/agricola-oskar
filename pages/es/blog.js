import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { BlogSchema } from '../../components/blogComponents/BlogSchema';
import { ThemeContext } from 'styled-components';
import { CardColleciton } from '../../components/CardCollection';
import { Card } from '../../components/Card';
import { CenterContainer } from '../../components/utils';
import Head from 'next/head';
import { Loading } from '../../components/views/Loading';
import { useGetPosts } from '../../hooks/useGetPosts';

export const Blog = ({ query }) => {
	const [
		data
	] = useGetPosts('es');

	return (
		<ThemeContext.Provider value={{ data: data, lang: 'es' }}>
			<Layout>
				<Head>
					<link rel='canonical' href='https://agricolaoskar.company/es/blog' />
					<meta
						name='description'
						content='Agricola Oskar es una empresa peruana exportadora de mango kent ubicada en Yautan, Casma. Estamos dedicados a brindar la mejor fruta posible a nuestros clientes y siempre en temporada.'
					/>
					<title>Blog de noticias sobre la exportación de mango en Perú - Agricola Oskar</title>
					<link rel='alternate' hrefLang='es' />
					<html lang='es' />
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
