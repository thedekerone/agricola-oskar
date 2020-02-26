import styled from 'styled-components';

export const Container = styled.div`
	max-width: 40%;
	margin-top: 2rem;
	margin-left: 4rem;
	@media (max-width: 900px) {
		max-width: none;

		width: 100%;
		margin: 4rem 0 0;
	}
`;

export const Title = styled.h4`font-size: 1.8rem;`;
