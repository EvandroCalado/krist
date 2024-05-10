import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > h3 {
      margin-bottom: ${theme.spacings.sm};
    }
  `}
`;
