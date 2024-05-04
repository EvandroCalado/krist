import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 33rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: ${theme.spacings.lg};

    & .subtotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: capitalize;
    }

    & > span {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
      font-weight: 600;
    }

    & > button {
      width: 100%;
    }
  `}
`;
