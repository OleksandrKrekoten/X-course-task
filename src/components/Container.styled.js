import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  @media screen and (min-width: 400px) {
    width: 400px;
  }

  @media screen and (min-width: 720px) {
    width: 720px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
