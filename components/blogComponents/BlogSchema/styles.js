import styled from 'styled-components';
import { CenterContainer } from '../../utils';

export const BlogContainer = styled(CenterContainer)`
    display:flex;
    justify-content:space-between;
    margin-top: 2rem;

    @media (max-width: 900px){
        flex-direction:column;
		
	}
`;
