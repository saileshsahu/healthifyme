import styled from "styled-components";
import { rem } from "Utils/style.util";
import { DARKGREY } from "Constants/style.constants";

export const Container = styled.div`
  height: ${rem(56)};
  width: calc(100vw - ${rem(40)});
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${rem(20)};
`;

export const Image = styled.img`
  height: ${rem(24)};
  width: ${rem(97.13)};
  margin-right: ${rem(10)};
`;

export const Breadcrumb = styled.p`
  font-size: ${rem(14)};
  color: ${DARKGREY};
  line-height: ${rem(21)};
  padding-left: ${rem(10)};
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  border-left: 1px solid rgb(168, 167, 167);
`;
