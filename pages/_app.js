import * as React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../src/createEmotionCache';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport"
					content="initial-scale=1, width=device-width" />
				<title>Joshua Izu</title>
				<meta name="description" content="My Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
				
				{/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}
				
				<CssBaseline />
				<Component {...pageProps} />
			
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
