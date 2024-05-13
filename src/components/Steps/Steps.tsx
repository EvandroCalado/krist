import { ClipboardList, CreditCard, Home } from 'lucide-react';
import { FC, useState } from 'react';

import { Address, Button, CartTotals } from 'components';

import * as S from './Steps.styles';

export interface StepsProps {}

export const Steps: FC<StepsProps> = () => {
  const [step, setStep] = useState('address');

  return (
    <S.Container>
      <S.Steps>
        <S.ButtonsContainer>
          <S.ButtonContainer>
            <Button
              onClick={() => setStep('address')}
              className={
                step === 'address' || step === 'payment' || step === 'review'
                  ? 'active'
                  : ''
              }
              variant="secondary"
            >
              <Home />
            </Button>
            <span>endereço</span>
          </S.ButtonContainer>

          <hr
            className={step === 'payment' || step === 'review' ? 'active' : ''}
          />

          <S.ButtonContainer>
            <Button
              onClick={() => setStep('payment')}
              className={
                step === 'payment' || step === 'review' ? 'active' : ''
              }
              variant="secondary"
            >
              <CreditCard />
            </Button>
            <span>pagamento</span>
          </S.ButtonContainer>

          <hr className={step === 'review' ? 'active' : ''} />

          <S.ButtonContainer>
            <Button
              onClick={() => setStep('review')}
              className={step === 'review' ? 'active' : ''}
              variant="secondary"
            >
              <ClipboardList />
            </Button>
            <span>revisar</span>
          </S.ButtonContainer>
        </S.ButtonsContainer>

        {step === 'address' && <Address>content</Address>}
        {step === 'payment' && <div>pagamento</div>}
        {step === 'review' && <div>revisar</div>}
      </S.Steps>

      <S.Totals>
        <CartTotals />
      </S.Totals>
    </S.Container>
  );
};
