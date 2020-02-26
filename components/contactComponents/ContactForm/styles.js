import styled from 'styled-components';
import { MainButton } from '../../utils';

export const FormContainer = styled.div`
	width: 100%;
	background: white;
	-webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
	-moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
	box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
	height: 50rem;
	box-sizing: border-box;
	padding: 2rem;
`;

export const InpuContainer = styled.div`margin: 1rem 0;`;

export const Input = styled.input`
	display: block;
	width: 100%;
	padding: .5rem;
	border: 0;
	background: white;
	box-sizing: border-box;
	margin: .5rem 0;
	border: 1px solid #dedede;
`;

export const ContactButton = styled(MainButton)`
margin-top:3rem;
@media (max-width:900px) {
	
	max-width:none;

}

`;

export const H2 = styled.h2`
	font-size: 2.7rem;
	color: #a80038;

	margin-bottom: 2rem;
`;
