import React from 'react';
import { Title, Date, Article, Paragraph, Content } from './styles';
import { StandardImg } from '../../StandardImg';
import ReactHtmlParser from 'react-html-parser';

export const Post = ({ title = 'example', content, src, srcSet, description }) => {
	return (
		<Article>
			<Date>Jan 29, 2020</Date>
			<Title>{title}</Title>
			{description && <p style={{ marginBottom: '1.4rem' }}>{description}</p>}
			<StandardImg src={src} srcSet={srcSet} alt='mango-avocado' width='70%' />
			<Content>{ReactHtmlParser(content)}</Content>
		</Article>
	);
};
