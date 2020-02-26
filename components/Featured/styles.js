import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1150px;
	margin: 0 auto 4rem;
	padding: 0 1.5rem;
`;

export const FeaturedGrid = styled.div`
	display: grid;

	gap: 1rem 4rem;
	grid-template: 350px 350px/1fr 2fr 1fr;
	@media (max-width: 900px) {
		grid-template: auto auto auto / 1fr 1fr;
		gap: 3rem 2rem;
	}
`;

export const GridCell = styled.div`position: relative;`;

export const MainGrid = styled(GridCell)`
	grid-row: 1/ 3;
	position:relative;
	grid-column: 2/3;
	-webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.43);
-moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.43);
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.43);

	@media (max-width: 900px){
		grid-row: 1/2;
		grid-column: 1/3;
	}

`;
