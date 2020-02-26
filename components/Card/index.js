import React, { useContext } from 'react';
import { Container, Topic, Title, Description, TextContainer } from './styles';
import { StandardImg } from '../StandardImg';

import Link from 'next/link';
import { ThemeContext } from 'styled-components';
export const Card = ({
	title = '',
	topic = '',
	description = '',
	width = '100%',
	src = '',
	srcSet = '',
	titleSize,
	descriptionSize,
	children,
	padding = '0',
	id,
	isLink = true,
	mini = true
}) => {
	const { lang } = useContext(ThemeContext);

	return (
		<Container width={width}>
			<Link href={`${lang && '/' + lang}/blog?post=${id}`}>
				<a>
					<StandardImg
						isLink={isLink}
						width='100%'
						src={src}
						alt='card'
						title='Card image for news'
						srcSet={srcSet}
					/>
				</a>
			</Link>
			<TextContainer padding={padding}>
				{topic.lengt !== 0 && <Topic>{topic}</Topic>}
				<Link href={`${lang && '/' + lang}/blog?post=${id}`}>
					{title.length !== 0 && (
						<Title size={titleSize}>{title.length > 30 ? title.slice(0, 32) + '...' : title}</Title>
					)}
				</Link>
				{description.length !== 0 && !mini && <Description size={descriptionSize}>{description}</Description>}
				{children}
			</TextContainer>
		</Container>
	);
};
