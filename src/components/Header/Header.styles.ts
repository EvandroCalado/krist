import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.md} ${theme.spacings['5xl']};
  `}
`;
