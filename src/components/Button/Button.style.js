import styled from "styled-components";
import { rem } from "../../utils/style.util.js";
import {
  ACCENT,
  WHITE,
  LIGHTRED,
  LIGHTGREY,
  GREY,
} from "../../constants/style.constants";

export const Container = styled.button`
  color: ${(props) => (props.isDisabled ? GREY : WHITE)};
  background-color: ${(props) => (props.isDisabled ? LIGHTGREY : ACCENT)};
  border-color: ${(props) => (props.isDisabled ? LIGHTGREY : ACCENT)};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  width: ${rem(340)};
  height: ${rem(40)};
  border-radius: ${rem(4)};
  font-size: ${rem(18)};
  margin-top: ${(props) => (props.marginTop ? rem(props.marginTop) : 0)};
  cursor: pointer;
  touch-action: manipulation;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  :focus,
  :hover {
    outline: 0;
    background-color: ${(props) => (props.isDisabled ? LIGHTGREY : LIGHTRED)};
    border-color: ${(props) => (props.isDisabled ? LIGHTGREY : LIGHTRED)};
  }
  @media (max-width: 524px) and (min-width: 300px) {
    width: 100%;
  }
`;
