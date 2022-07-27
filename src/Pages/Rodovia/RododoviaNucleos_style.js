import styled from "styled-components";

export const Container = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;

    h1 {
      font-family: "Roboto Condensed", sans-serif;
      font-size: 1.5rem;
      color: var(--text);
    }

    a {
      color: var(--text);
      font-size: 0.875;
      text-decoration: none;
      align-self: center;
    }

    a::before {
      content: "+";
      margin-right: 5px;
      padding: 1px 5px;
      border-radius: 6px;
      background: var(--gold-400);
      color: var(--white);
    }

    a:hover {
      text-decoration: underline;
      text-decoration-color: var(--gold-400);
      color: var(--gold-400);
    }

    a::before:hover {
      text-decoration: underline;
      text-decoration-color: var(--gold-400);
    }
  }
`;

export const Grafico = styled.div`
  padding: 20px 30px;
  > div {
    background: var(--white);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 25%);
    width: 80vw;
    height: 350px;
    width: 100%;
  }
`;

export const Nucleos = styled.div`
  margin: 0 auto;
  ul {
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 0px 0px 0px;
    width: 85vw;
    margin: 0 auto;
    // margin-bottom: 20px;
    li {
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 25%);
      padding: 30px 55px;
      background: var(--white);
      border-radius: 10px;
      border-bottom: 5px solid red;
      text-align: center;
      color: var(--gray-400);
      cursor: pointer;

      h1 {
        font-size: 1.25rem;
      }

      h2 {
        margin-top: 10px;
        font-size: 2rem;
      }

      div {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 0.875;

        p {
          max-width: 70px;
          margin-left: 10px;
        }
      }
    }
  }

  .NR-01 {
    border-bottom: 5px solid #b0e4d2;
  }

  .NR-02 {
    border-bottom: 5px solid #f4b48b;
  }

  .NR-03 {
    border-bottom: 5px solid #efd8ce;
  }

  .NR-04 {
    border-bottom: 5px solid #a6aa6f;
  }

  .NR-05 {
    border-bottom: 5px solid #afe4d0;
  }

  .NR-06 {
    border-bottom: 5px solid #f4d58a;
  }

  .NR-07 {
    border-bottom: 5px solid #a8deeb;
  }

  .NR-08 {
    border-bottom: 5px solid #d79bdd;
  }

  .NR-09 {
    border-bottom: 5px solid #e5ebcc;
  }

  .NR-10 {
    border-bottom: 5px solid #7bacb8;
  }

  @media (max-width: 1260px) {
    .NR-05 {
      margin-right: 100px;
    }
    .NR-10 {
      margin-right: 100px;
    }
  }
`;
