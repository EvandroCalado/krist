import styled, { css } from 'styled-components';

import { HeadingProps } from '.';

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size = 'md', transform = 'lowercase', align = 'left' }) => css`
    font-size: ${theme.font.sizes[size!]};
    text-transform: ${transform};
    text-align: ${align};
  `}
`;
