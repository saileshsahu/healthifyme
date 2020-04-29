import styled from "styled-components";
import { rem } from "Utils/style.util";

export const Container = styled.div`
  min-height: calc(100vh - ${rem(56)});
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
