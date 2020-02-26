import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	margin-top: 1.3rem;
	cursor: pointer;
	&:hover {
		color: #7e7e7e;
		opacity: 0.7;
	}
`;
export const Title = styled.a`
	display: block;
	font-weight: bold;
	font-size: 1rem;
	margin-top: 12px;
	margin-left: 1rem;
	width: 100%;
	cursor: pointer;

	@media (max-width: 900px) {
		font-size: 12px;
	}
`;

export const ImgContainer = styled.div`
	width: 8rem;
	flex-shrink: 0;
`;
