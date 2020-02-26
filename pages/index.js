import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

import { ThemeContext } from 'styled-components';
import { useGetPosts } from '../hooks/useGetPosts';
import { About } from '../components/About';
import { PostCards } from '../components/PostCards';

function Index() {
	const [
		data
	] = useGetPosts();
	return (
		<ThemeContext.Provider value={{ data: data, lang: '' }}>
			<Layout>
				<Head>
					<link rel='canonical' href='https://agricolaoskar.company/' />
					<title>Mango Export - Agricola Oskar</title>
					<meta
						name='description'
						content='Agricola Oskar is a peruvian mango kent exporting company located on Yautan, Casma. We are dedicated to only bring the best fruit posible to our costumer and always on season.'
					/>
				</Head>
				<Hero />
				<About />
				<PostCards data={data} />
			</Layout>
		</ThemeContext.Provider>
	);
}
export default Index;
