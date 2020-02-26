import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration:none
    }
    body{
        /* background: #fbf9fa; */
        background: #FDFFFC;
        font-family: 'Montserrat', sans-serif;
    }
    html{
        font-size: 10px;

    }
    a{
        color: #1e1e1e;
    }
    p{
        margin-top: 2rem;
        font-size: 14px;
        
            
        
        line-height: 30px;
    }
    span,label{
        font-size:14px
    }
    ul{
        list-style: none
    }

    @media (min-width: 705px) {
        html{
            font-size: 10px;
        }
    }
    @media (min-width: 1050px) {
        html{
            font-size: 13px;
        }
    }

    @media (min-width: 1500px) {
        html{
            font-size: 16px;
        }
        p{
            font-size:16px;
        }
    }
`;
