import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  padding: 10px;
  list-style: none;
  img {
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 8px 8px -1px rgb(0 0 0 / 20%),
    0px 8px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const NoPosterImg = styled.div`
  width: 200px;
  height: 300px;
  background-color: light-gray;
  border-radius: 15px;
  box-shadow: 0px 8px 8px -1px rgb(0 0 0 / 20%),
  0px 8px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

