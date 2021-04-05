import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;        
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x:hidden;

        button{
            font-weight:bold;
            font-size:1.1rem;
            cursor: pointer;
            padding:1rem 2rem;
            border: 3px solid #23d997;
            background:transparent;
            color:white;
            transition: all .5s ease;
            &:hover{
                background:#23d997;
                color:white;
            }
        }
    }
    h1{
        font-weight:lighter;
        font-size: 3rem;
    }
    h2{
        font-size:2rem;
        font-weight:lighter;
    }
    h3{
        color:white;
   
    }
    h4{
        font-weight:bold;
        font-size:2rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
        font-family: 'Lobster', cursive;
    }
    a{
        font-size:1.1rem;
    }
    p{
        padding:2rem 0rem;
        color:#ccc;
        font-size:1.2rem;
        line-height:150%;
    }

    .icon{
        color:#fedc56;

    }
    .hide{
        overflow:hidden;
    }

`;

export default GlobalStyle;
