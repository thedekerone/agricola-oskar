import styled from 'styled-components';

export const MainTitle = styled.h1`
	font-size: 2.9375rem;
	letter-spacing: .10em;
	& a {
		color: #2f4858;
	}
	& span {
		font-size: 2.9375rem;
		color: #ffba30;
	}
	text-transform: uppercase;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 2.5rem;
	}
`;

export const MainDescription = styled.h2`
	font-size: 1.2rem;
	letter-spacing: .2rem;
	text-align: center;
	font-weight: normal;
	text-transform: uppercase;
`;

export const NavbarContainer = styled.div`
	display: flex;
	max-width: 1600px;
	padding: 0 2rem;
	margin: 2rem auto;
	text-align: center;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 900px) {
		justify-content: center;
	}
`;

export const NavbarExtras = styled.span`
	width: 10rem;
	text-transform: uppercase;
	font-weight: bold;
	color: #1e1e1e;
	font-size: .8rem;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const List = styled.ul`
	width: 10rem;
	@media (max-width: 900px) {
		display: none;
	}
	display: flex;

	justify-content: flex-end;
	align-items: center;
`;

export const Social = styled.li`margin: 0 1rem;`;

export const NavList = styled(List)`
	width: 100%;
	max-width:46.875rem;
	justify-content: space-between;

	margin: 0 auto;	
	border-top: 1px solid #BEBEBE;
	/* border-bottom: 1px solid #dedede; */
	padding: .9rem 10rem;
	
	& li{
		font-size: 0.875rem;
		cursor:pointer;
		text-transform:uppercase;	
		color:#1E1E1E;
		font-weight: bold
	}
	@media (max-width: 900px) {
		display: flex;
		padding: 1rem 0;
		justify-content:space-around;

	}
`;
