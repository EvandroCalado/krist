import styled, { css } from 'styled-components';

import { HeadingProps } from './Heading';

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size, transform }) => css`
    font-size: ${theme.font.sizes[size!]};
    text-transform: ${transform};
  `}
`;
