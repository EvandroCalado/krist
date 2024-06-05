import styled, { css } from 'styled-components';

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings['2xl']};
  `}
`;
