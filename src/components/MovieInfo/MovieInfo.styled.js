import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 30px;
  padding: 15px 0;
  img {
    width: 300px;
    height: auto;

    border-radius: 15px;
    box-shadow: 0px 8px 8px -1px rgb(0 0 0 / 20%),
    0px 8px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  h1 {
    margin-bottom: 10px;
    font-size: 30px;
  }

  h2 {
    margin-top: 15px;
    font-size: 20px;
    text-decoration: underline;
  }
`;


