import styled, { css } from 'styled-components';

import { HeadingProps } from './Heading';

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size, transform, align }) => css`
    font-size: ${theme.font.sizes[size!]};
    text-transform: ${transform};
    text-align: ${align};
  `}
`;
