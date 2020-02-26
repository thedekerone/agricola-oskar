import styled from 'styled-components';

export const Text = styled.h5`
	color: #a80038;
	font-size: 1.3rem;
`;

export const H5 = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 2rem;
`;

export const Container = styled.div`
	width: 100%;
	padding-left: 4rem;
	box-sizing: border-box;
	@media (max-width: 900px) {
		flex-direction: column;
		padding-left: 0;
		margin-top: 5rem;
	}
`;
