import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Hero } from '../../components/Hero';

import { ThemeContext } from 'styled-components';
import { useGetPosts } from '../../hooks/useGetPosts';
import { About } from '../../components/About';
import { PostCards } from '../../components/PostCards';

function Index() {
	const [
		data
	] = useGetPosts('es');

	return (
		<ThemeContext.Provider value={{ data: data, lang: 'es' }}>
			<Layout>
				<Head>
					<link rel='canonical' href='https://agricolaoskar.company/es' />
					<meta
						name='description'
						content='Agricola Oskar es una empresa peruana exportadora de mango kent ubicada en Yautan, Casma. Estamos dedicados a brindar la mejor fruta posible a nuestros clientes y siempre en temporada.'
					/>
					<title>Exportación de Mango - Agricola Oskar</title>
					<link rel='alternate' hrefLang='es' />
					<html lang='es' />
				</Head>

				<Hero />
				<About />
				<PostCards data={data} />
			</Layout>
		</ThemeContext.Provider>
	);
}
export default Index;
