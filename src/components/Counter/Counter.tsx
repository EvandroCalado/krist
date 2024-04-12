import { useState } from 'react';

import * as S from './Counter.styles';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <S.Container>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </S.Container>
  );
};
