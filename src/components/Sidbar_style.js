import styled from "styled-components";

export const Menu = styled.aside`
  background: var(--white);

  .infoMenu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "menu"
      "configuracao"
      "avatar";
    padding: 0px 10px 0px 10px;

    img {
      grid-area: logo;
      width: 150px;

      height: 10vh;
    }

    ul {
      padding: 0px 10px 0px 10px;
      grid-area: menu;
      height: 76vh;

      li {
        display: flex;
        font-size: 1.125rem;
        padding: 10px 5px 10px 5px;
        margin-bottom: 4px;
        border-radius: 5px;
        color: var(--gray-400);
        font-weight: 400;
        cursor: pointer;
      }
      li > img {
        height: 20px;
        width: 20px;
      }
      li > p {
        align-self: flex-end;
        margin-left: 5px;
      }
      li:hover {
        background: var(--gold-200);
        color: var(--gold-400);
      }
    }

    > a {
      max-width: 160px;
      width: 100%;
      display: flex;
      font-size: 1.125rem;
      //padding: 10px 12px 10px 12px;
      border-radius: 5px;
      color: var(--gray-400);
      font-weight: 400;
      cursor: pointer;
      grid-area: configuracao;
      height: 5vh;
      align-self: flex-end;
      margin-bottom: 10px;
      margin-left: 10px;
      padding-left: 5px;
      svg {
        margin-right: 5px;
        align-self: center;
      }
      p {
        align-self: center;
      }
    }

    > a:hover {
      background: var(--gold-200);
      color: var(--gold-400);
    }

    .avatar {
      padding: 0px 10px 0px 10px;
      grid-area: avatar;
      height: 6vh;
      border: 1px solid var(--gray-400);
      display: flex;
      align-items: center;
      border-radius: 10px;
      color: var(--gray-400);
      cursor: pointer;

      img {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
      strong {
        font-size: 14px;
      }

      p {
        margin-top: 2px;
        font-size: 12px;
      }
    }
  }

  .liAtivo {
    background: var(--gold-200);
    color: var(--gold-400);
    p,
    svg {
      color: var(--gold-400);
    }
  }
`;
