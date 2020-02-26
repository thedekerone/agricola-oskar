import styled, { keyframes } from 'styled-components';
import { reflect } from './animation';

export const MainButton = styled.button`
	font-size: 16px;
	padding: 0.6470588235294rem 4.5294117647058rem;
	border: 0;
	cursor: pointer;
	display: inline-block;
	/* text-align: center; */
	font-weight: bold;
	letter-spacing: 0.069em;
	margin: ${(props) => props.margin};
	box-sizing: border-box;
	background: #ffba30;
	color: #484848;
	@media (max-width: 1200px) {
		font-size: 12px;
	}
	@media (max-width: 650px) {
		width: 100%;
		margin: 1rem 0;
	}
`;

export const CenterContainer = styled.div`
	max-width: 1354px;

	margin: 0 auto ${(props) => (props.no_margin ? '0' : '4rem')} auto;
	width: 100%;
	box-sizing: border-box;
	padding: 0 1.5rem;
`;

export const Label = styled.h3`
	position: relative;
	margin-bottom: 2.5rem;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: .1em;
	color: #2e2e2e;
	& span {
		margin: 0 2rem;
	}
	&::before,
	&::after {
		content: "";
		height: 1px;
		width: 100%;
		background: rgb(235, 235, 235);

		background: linear-gradient(
			90deg,
			rgba(235, 235, 235, 1) 0%,
			rgba(210, 210, 210, 1) 50%,
			rgba(226, 226, 226, 1) 100%
		);
	}
`;
export const Img = styled.img`
	width: 100%;
	position: absolute;
	left: 0;
	object-fit: cover;

	height: 100%;
`;

export const ImgContainer = styled.div`
	width: 100%;
	overflow: hidden;
	background: #cecece;
	height: 0;
	padding-bottom: 80%;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		height: 100%;
		width: 30%;
		background: rgb(224, 224, 224);
		background: linear-gradient(
			90deg,
			rgba(224, 224, 224, 0.3393732492997199) 26%,
			rgba(238, 238, 238, 0.4374124649859944) 50%,
			rgba(207, 207, 207, 0.23573179271708689) 74%
		);
		transform: skewX(30deg);
		display: ${(props) => (props.show ? 'block' : 'none')};

		animation: .8s ${reflect} linear 2 forwards;
	}
`;

export const ImgLink = styled(ImgContainer)`
/* -webkit-box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.51);
	-moz-box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.51);
	box-shadow: 0px 2px 18px -1px rgba(0, 0, 0, 0.51); */

	&:hover{
		cursor: pointer;

		opacity:0.8
	}

`;
