import styled from 'styled-components';
import { MainButton, CenterContainer } from '../utils';

export const NewsContainer = styled(CenterContainer)`
	background: #f2f2f2;

	padding: 50px 3rem;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const Title = styled.h2`
	font-size: 22px;
	text-transform: uppercase;
	letter-spacing: .2em;
	@media (max-width: 900px) {
		margin-bottom: 2rem;
	}
`;
export const InputContainer = styled.form`
	width: 100%;
	max-width: 400px;
`;

export const Input = styled.input`
	padding: .8rem 1rem;
	box-sizing: border-box;
	display: block;
	margin-left: auto;
	width: 100%;
	max-width: 400px;
	border: 0;
	background: #fefefe;
`;

export const ContactButton = styled(MainButton)`
margin-top: 10px;
@media (max-width: 900px) {
	width:100%;
	margin-top: 10px;

	}
`;
