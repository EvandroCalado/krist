import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.lg};

    & > svg {
      stroke-width: 1px;
      stroke-dasharray: 360;
      stroke-dashoffset: 1000;
      animation: draw 2s ease-in-out;

      @keyframes draw {
        0% {
          clip-path: inset(100% 0 0 0);
        }
        100% {
          clip-path: inset(0 0 0 0);
        }
      }
    }
  `}
`;

export const Span = styled.span`
  text-transform: uppercase;
  animation: blink 800ms ease-in-out infinite;

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;
