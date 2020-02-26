import styled from 'styled-components';
import { CenterContainer, MainButton } from '../utils';

export const CenterContainerHero = styled(CenterContainer)`
	z-index: 3;
	display:flex;
	justify-content:center;
	height: calc(100vh - 15rem);
	align-items:center;
	@media (max-width: 750px) {
		/* display: none; */
		height: auto;
		margin: 5rem 0;
		flex-direction:column-reverse;
	}
	
`;

export const Hr = styled.hr`
	margin: 1.40625rem 0 2.3125rem;
	border-color: #2f4858;
	width: 6.9375rem;
`;

export const ButtonContainer = styled.div`margin: 3.8rem 0 0 0;`;

export const HeroMainText = styled.h3`
	color: #2f4858;
	max-width: 40.8125rem;
	width: 100%;
	font-size: 4rem;
	font-weight: bold;
	letter-spacing: 0.131em;
	line-height: 4.875rem;
	@media (max-width: 750px) {
		width: auto;
		font-size: 3rem;
	}
	/* @media (max-width: 1400px) {
		font-size: 2.8rem;
	} */
`;

export const HeroSecText = styled.span`
	color: #262626;
	font-size: 16px;
	max-width: 43rem;
	width: 100%;
	text-align: justify;
	display: inline-block;
	letter-spacing: 0.234em;
	@media (max-width: 900px) {
		width: auto;
		font-size: 13px;
	}
`;

export const SecButton = styled(MainButton)`
	background: #2F4858;
	color: #fff;
	margin: 0 0 0 2.6875rem;
`;

export const HeroInfo = styled.div`
	margin-left: 4rem;

	@media (max-width: 750px) {
		margin-left: 0rem;
	}
`;

export const HeroContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	margin-top: -1px;
	width: 100%;

	/* height: 42.875rem; */
`;

export const Img = styled.img`
	width: calc(13.8rem + 14vw);
	@media (max-width: 750px) {
		width: calc(60%);
	}
`;
