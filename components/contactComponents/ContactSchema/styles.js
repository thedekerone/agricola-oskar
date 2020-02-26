import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
