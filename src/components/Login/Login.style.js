import styled from "styled-components";
import { rem } from "Utils/style.util";
import { WHITE, DARKGREY, LIGHTGREY } from "Constants/style.constants";

export const Container = styled.div`
  background-color: ${WHITE};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px;
  margin-top: ${rem(20)};
  margin-bottom: ${rem(20)};
  padding: ${rem(32)};
  border-radius: ${rem(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 524px) and (min-width: 300px) {
    width: 75vw;
  }
`;

export const Image = styled.img`
  height: ${rem(29.64)};
  width: ${rem(120)};
  margin-right: ${rem(10)};
`;

export const Title = styled.p`
  font-size: ${rem(24)};
  color: ${DARKGREY};
  font-weight: 500;
  margin: ${rem(20)} 0;
`;

export const Desc = styled.p`
  font-size: ${rem(16)};
  color: ${DARKGREY};
  font-weight: 500;
  margin-bottom: ${rem(15)};
  margin-top: 0;
`;

export const Response = styled.p`
  font-size: ${rem(16)};
  color: ${DARKGREY};
  font-weight: 500;
  margin: ${rem(20)} 0;
  background-color: ${LIGHTGREY};
  padding: ${rem(10)};
  border-radius: ${rem(4)};
`;
