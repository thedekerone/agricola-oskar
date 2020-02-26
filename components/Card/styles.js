import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.article`
	width: ${(props) => (props.width ? props.width : '100%')};
	text-align: center;
`;

export const TextContainer = styled.div`padding: ${(props) => props.padding};`;

export const Topic = styled.h4`
	font-weight: bold;
	letter-spacing: .18rem;
	display: block;
	margin-top: 1.3rem;
	text-align: center;
	font-size: .8rem;
	color: #6e6e6e;
	text-transform: uppercase;
	position: relative;
`;

export const Title = styled.a`
	font-size: ${(props) => (props.size ? props.size : '1.1rem')};
	text-align: center;
	color: #0e0e0e;
	font-weight: bold;
	margin-top: .6rem;
	display: block;
	cursor: pointer;
	margin-bottom: .4rem;
	&:hover {
		color: #aeaeae;
	}
	@media (max-width: 900px) {
		font-size: ${(props) => (props.size ? props.size : '12px')};
	}
`;

export const Description = styled.span`
	font-size: ${(props) => (props.size ? props.size : '1.5rem')};

	display: block;
	color: #3e3e3e;
	text-align: center;
	@media (max-width: 500px) {
		font-size: 13px;
	}
`;
