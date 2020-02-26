import React, { useEffect } from 'react';
import { Navbar } from '../Navbar';
import { GlobalStyles } from '../../GlobalStyles';
import { initGA, logPageView } from '../../analytics';

import { Footer } from '../Footer';
import Head from 'next/head';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function Layout({ children }) {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}, []);

	return (
		<div>
			<GlobalStyles />
			<Head>
				<meta
					name='description'
					content='Agricola Oskar is a peruvian mango kent exporting company located on Yautan, Casma. Peru has begun one of the best mango exporter countries of the world'
				/>
				<link rel='alternate' hrefLang='en' />
				<link rel='apple-touch-icon' sizes='57x57' href='static/favi/apple-icon-57x57.png' />
				<link rel='apple-touch-icon' sizes='60x60' href='static/favi/apple-icon-60x60.png' />
				<link rel='apple-touch-icon' sizes='72x72' href='static/favi/apple-icon-72x72.png' />
				<link rel='apple-touch-icon' sizes='76x76' href='static/favi/apple-icon-76x76.png' />
				<link rel='apple-touch-icon' sizes='114x114' href='static/favi/apple-icon-114x114.png' />
				<link rel='apple-touch-icon' sizes='120x120' href='static/favi/apple-icon-120x120.png' />
				<link rel='apple-touch-icon' sizes='144x144' href='static/favi/apple-icon-144x144.png' />
				<link rel='apple-touch-icon' sizes='152x152' href='static/favi/apple-icon-152x152.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='static/favi/apple-icon-180x180.png' />
				<link rel='icon' type='image/png' sizes='192x192' href='static/favi/android-icon-192x192.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='static/favi/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='96x96' href='static/favi/favicon-96x96.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='static/favi/favicon-16x16.png' />
				<link rel='manifest' href='static/favi/manifest.json' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-TileImage' content='static/favi/ms-icon-144x144.png' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
