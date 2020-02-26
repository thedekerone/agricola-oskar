import styled from 'styled-components';

export const Container = styled.div`
	background: #fbf9fa;
	width: 100%;
`;

export const Title = styled.h2`
	font-size: 2.6875rem;
	margin: 0 auto;
	display: block;
	margin-top: 7.1875rem;

	margin-bottom: 4rem;
	text-align: center;
	max-width: 70.125rem;
	color: #403f4c;
	width: 100%;
`;

export const Text = styled.p`
	font-size: 1.25rem;
	/* width: 78.125rem; */
	/* margin: 0 auto; */
	margin: 0;
	text-align: justify;
	color: #403f4c;
	display: block;
	margin-bottom: 2.1rem;
`;

export const Tag = styled.h5`
	font-size: 2rem;
	letter-spacing: 0.234em;
	color: #2f4858;
	position: relative;
	margin-top: 5.875rem;
	display: inline-block;
	&::after {
		content: "";
		position: absolute;
		bottom: -5px;
		left: 0;
		height: 5px;
		width: 55%;
		background: #ffc914;
	}
`;

export const ImagesContainer = styled.div`
	margin-top: 6.5625rem;
	margin-bottom: 6.5625rem;

	width: 100%;
	display: grid;
	grid-template-rows: 23.4375rem;
	overflow: hidden;
	grid-template-columns: 1fr 1fr 1fr;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
