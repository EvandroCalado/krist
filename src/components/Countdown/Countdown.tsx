import { FC, useEffect, useState } from 'react';

import * as S from './Countdown.styles';

export interface CountdownProps {}

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export const Countdown: FC<CountdownProps> = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-4-22') - +new Date();
    let timeLeft: TimeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return;
    }

    timerComponents.push(
      <S.DateContainer>
        <S.Counter key={interval}>
          {timeLeft[interval as keyof TimeLeft]}
        </S.Counter>
        <S.Name>{interval}</S.Name>
      </S.DateContainer>,
    );
  });

  return (
    <S.Container>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Countdown&apos;s over!</span>
      )}
    </S.Container>
  );
};
