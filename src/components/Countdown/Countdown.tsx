import { FC, useEffect, useState } from 'react';

import * as S from './Countdown.styles';

export interface CountdownProps {
  date: string;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export const Countdown: FC<CountdownProps> = ({ date, setIsFinish }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(date) - +new Date();
    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const timeLeft: TimeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (
    timeLeft.dias === 0 &&
    timeLeft.horas === 0 &&
    timeLeft.minutos === 0 &&
    timeLeft.segundos === 0
  )
    setIsFinish(true);

  const timerComponents: JSX.Element[] = Object.keys(timeLeft).map(
    (interval, index) => (
      <S.DateContainer key={interval + index}>
        <S.Counter>{timeLeft[interval as keyof TimeLeft]}</S.Counter>
        <S.Name>{interval}</S.Name>
      </S.DateContainer>
    ),
  );

  return <S.Container>{timerComponents.length && timerComponents}</S.Container>;
};
