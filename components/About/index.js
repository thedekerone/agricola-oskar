import React, { useContext } from 'react';
import { Label, CenterContainer } from '../utils';
import { AboutContainer, Tag, Container, Title, Text, ImagesContainer, Image } from './styles';
import { ThemeContext } from 'styled-components';

export const About = () => {
	const { lang } = useContext(ThemeContext);
	return (
		<React.Fragment>
			<Container id='about'>
				<CenterContainer no_margin={true}>
					<Tag>About us</Tag>
					<Title>We are a mango exporter company located on Yautan, Casma</Title>
					<Text>
						{lang == 'es' ? (
							<React.Fragment>
								De esta manera, el mango Kent y el aguacate Hass se conocen como los principales
								productos de exportación en el región, impulsando a la agricultura a convertirse en una
								de las actividades económicas más importantes de Ancash.
							</React.Fragment>
						) : (
							<React.Fragment>
								In this way, Kent mango and Hass avocado are referred to as the main export products in
								the region, driving agriculture to become one of the most important economic activities
								in Ancash.
							</React.Fragment>
						)}
					</Text>
					<Text>
						{lang == 'es' ? (
							<React.Fragment>
								Cabe recordar que con la apertura de nuevos mercados internacionales, como Japón, Corea
								y China, la expectativa entre los productores ha aumentado considerablemente debido a la
								gran demanda generados por sus frutos y los nuevos requisitos fitosanitarios solicitados
								para su compra.
							</React.Fragment>
						) : (
							<React.Fragment>
								It should be remembered that with the opening of new international markets, such as
								Japan, Korea and China, the expectation among producers has increased considerably due
								to the great demand generated by their fruits and the new phytosanitary requirements
								requested for their purchase.
							</React.Fragment>
						)}
					</Text>
				</CenterContainer>
				<ImagesContainer>
					<Image
						src={
							require('../../static/images/Senasa-Ancash.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.src
						}
						srcSet={
							require('../../static/images/Senasa-Ancash.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.srcSet
						}
						alt='about image'
					/>
					<Image
						src={
							require('../../static/images/mangos-casma.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.src
						}
						srcSet={
							require('../../static/images/mangos-casma.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.srcSet
						}
						alt='about image'
					/>
					<Image
						src={
							require('../../static/images/000484171W.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.src
						}
						srcSet={
							require('../../static/images/000484171W.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=800')
								.srcSet
						}
						alt='about image'
					/>
				</ImagesContainer>
			</Container>
		</React.Fragment>
	);
};
