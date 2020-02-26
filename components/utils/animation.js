import { keyframes } from 'styled-components';
export const reflect = keyframes`
	0%{
		left:-100%;
	}

	100%{
		left:200%;
	}


`;
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const showIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
    
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;
