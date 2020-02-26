import styled from 'styled-components';
import { CenterContainer } from '../utils';

export const H6 = styled.h6`
	font-size: 12px;
	letter-spacing: .2em;
	text-align: center;
	color: white;
`;
export const H3 = styled.h3`
	font-size: 1.4rem;
	letter-spacing: .2em;
	text-align: center;
`;
export const Hr = styled.hr`
	margin: 2rem 0;
	width: 100%;
	max-width: 28rem;
`;
export const Background = styled.div`
	width: 100%;
	position: relative;
	bottom: 0;
	background: #30343f;
`;

export const Container = styled(CenterContainer)`
	width: 100%;
    margin:0 auto;
	padding: 4rem 2rem;
	display: flex;
	box-sizing: border-box;
	& li,
	& h2,
	& h3,
	& svg,
	& span {
		color: white;
		fill: white;
	}
	align-items: center;
	justify-content: space-between;
	flex-direction:column;
`;

export const Social = styled.div`
	height: 6rem;
	width: 100%;
	max-width: 14rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const List = styled.ul`
	width: 100%;
	display: flex;
	color: white;
	justify-content: space-between;
`;

export const Anchor = styled.a`
	font-size: .8rem;
	letter-spacing: .2em;
	text-transform: uppercase;
	display: block;
	color: white;
	padding: 1rem 0 0;
`;
