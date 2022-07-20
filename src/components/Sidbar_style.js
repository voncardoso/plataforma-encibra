import styled from "styled-components";

export const Menu = styled.aside`
    background: var(--white);

   .infoMenu{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "logo"
    "menu"
    "avatar";
    padding: 0px 10px 0px 10px;

        img{
            grid-area: logo;
            width: 150px;
            
            height: 10vh;
        }

        ul{
            padding: 0px 10px 0px 10px;
            grid-area: menu;
            height: 80vh;

            li{
                display: flex;
                font-size: 1.125rem;
                padding: 10px 5px 10px 5px;
                border-radius: 5px;
                color: var(--gray-400);
                font-weight: 400;
                cursor: pointer;
            }
            li > img{
                height: 20px;
                width: 20px;
            }
            li > p{
                align-self: flex-end;
                margin-left: 5px;
            }
            li:hover{
                background: var(--gold-200);
                color: var(--gold-400);
            }
        }
        div{
            padding: 0px 10px 0px 10px;
            grid-area: avatar;
            height: 10vh;
        }
   }

`;