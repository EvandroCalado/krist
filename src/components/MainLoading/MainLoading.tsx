import * as S from './MainLoading.styles';

export const MainLoading = () => {
  return (
    <S.Container>
      <svg
        data-testid="svg"
        id="SVGRoot"
        width="100"
        height="100"
        version="1.1"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="matrix(.5277 0 0 .52555 .36018 -5.0307)"
          stroke="#000"
          strokeWidth="1px"
        >
          <path d="m-0.09638 10.718 12.51 10.912-12.51 9.7809z" />
          <path d="m0.86201 37.182 35.08-27.046 19 9.66e-4 -32.121 27.035z" />
          <path d="m-0.096472 45.676 12.352 9.8645-12.347 10.088z" />
          <path d="m0.90032 40 21.927-6e-3 32.083 26.197-18.915-0.0079z" />
        </g>
      </svg>

      <S.Span>Carregando...</S.Span>
    </S.Container>
  );
};
