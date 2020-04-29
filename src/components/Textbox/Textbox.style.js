import styled from "styled-components";
import { rem } from "Utils/style.util";
import { WHITE, GREY, LIGHTRED, BLOODRED } from "Constants/style.constants";

export const Container = styled.input`
  font-family: Lato;
  box-sizing: border-box;
  margin: ${rem(15)} 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: ${rem(340)};
  height: ${rem(40)};
  padding: ${rem(4)} ${rem(11)};
  line-height: ${rem(1.5)};
  background-color: ${WHITE};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? BLOODRED : GREY)};
  border-radius: ${rem(4)};
  transition: all 0.3s;
  font-size: ${rem(18)};
  :focus {
    outline: 0;
    border-color: ${LIGHTRED};
    box-shadow: 0 0 0 2px rgba(239, 68, 55, 0.2);
  }
  :hover {
    border-color: ${BLOODRED};
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
  @media (max-width: 524px) and (min-width: 300px) {
    width: 100%;
  }
`;

export const Error = styled.p`
  color: ${BLOODRED};
  font-size: ${rem(14)};
  width: ${rem(340)};
  margin: 0;
  @media (max-width: 524px) and (min-width: 300px) {
    width: 100%;
  }
`;
