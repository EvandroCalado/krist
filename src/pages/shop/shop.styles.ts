import { Form } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.md} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};
    }
  `}
`;

export const FiltersContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xl};
  `}
`;

export const Filters = styled(Form)`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.md};

    & > button {
      width: 100%;
    }
  `}
`;
