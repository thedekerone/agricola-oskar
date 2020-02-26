import React from 'react';
import {
	HeroContainer,
	HeroMainText,
	HeroInfo,
	HeroSecText,
	Img,
	ImgMini,
	CenterContainerHero,
	Hr,
	SecButton,
	ButtonContainer
} from './styles';
import { MainButton } from '../utils';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

export const Hero = () => {
	const { lang } = useContext(ThemeContext);
	const heroImage = require('../../static/images/mango-hero.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=700');
	return (
		<HeroContainer>
			<CenterContainerHero>
				<Img src={heroImage.src} srcSet={heroImage.srcSet} alt='' />
				<HeroInfo>
					<HeroMainText>{lang == 'es' ? 'Mangos de alta calidad' : 'High quality mangoes'}</HeroMainText>
					<Hr />
					<HeroSecText>
						{lang == 'es' ? (
							'Nuestra empresa está firmemente comprometida a brindar solo las mejores frutas posibles, tomando todas las precauciones necesarias'
						) : (
							'Our company is strongly committed to only bring the best possible fruits that we can, taking all the precaution necessary'
						)}
					</HeroSecText>
					<ButtonContainer>
						<a href='#contact'>
							<MainButton>{lang == 'es' ? 'Contactanos' : 'Contact us'} </MainButton>
						</a>
						<a href='#about'>
							<SecButton>{lang == 'es' ? 'Conoce más' : 'Learn more'} </SecButton>
						</a>
					</ButtonContainer>
				</HeroInfo>
			</CenterContainerHero>
		</HeroContainer>
	);
};
