import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: auto;
	grid-template-columns: repeat(auto-fit, minmax(${(props) => (props.minWidth ? props.minWidth : '15rem')}, 1fr));
	gap: ${(props) => (props.gap ? props.gap : '0')};
	margin-bottom: 4rem;
	/* @media (max-width: 900px) {
		gap: 2em;
	} */
`;
