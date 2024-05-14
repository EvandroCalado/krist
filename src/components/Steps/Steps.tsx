import { ClipboardList, CreditCard, Home, Plus } from 'lucide-react';
import { FC, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import {
  Address,
  AddressCard,
  AddressModal,
  Button,
  CartTotals,
  Input,
  Payment,
  Review,
} from 'components';
import { StrapiAddressesType } from 'types';

import * as S from './Steps.styles';

export interface StepsProps {}

export const Steps: FC<StepsProps> = () => {
  const { addresses } = useLoaderData() as { addresses: StrapiAddressesType };

  const [step, setStep] = useState('address');
  const [openModal, setOpenModal] = useState(false);

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

        {step === 'address' && (
          <>
            <Address>
              {addresses.data.map((address) => (
                <AddressCard key={address.id} address={address} />
              ))}

              <Button onClick={() => setOpenModal(true)} variant="secondary">
                novo endereço <Plus size={16} />
              </Button>

              <Form method="post">
                <AddressModal openModal={openModal} setOpenModal={setOpenModal}>
                  <Input label="nome" type="text" name="title" />
                  <Input label="endereço" type="text" name="address" />
                  <Input label="CEP" type="number" name="zipCode" />
                  <Button type="submit">salvar</Button>
                </AddressModal>
              </Form>
            </Address>

            <Button onClick={() => setStep('payment')} type="button">
              continuar
            </Button>
          </>
        )}
        {step === 'payment' && (
          <>
            <Payment>
              <Input type="number" label="número do cartão" name="number" />
              <Input type="text" label="nome no cartão" name="name" />
              <S.StepPayment>
                <Input
                  type="text"
                  pattern="[0-9]{2}\/(0[1-9]|1[0-2])"
                  placeholder="MM/AA"
                  label="data de vencimento"
                  name="date"
                />
                <Input type="number" label="CVV" name="cvv" />
              </S.StepPayment>
            </Payment>

            <Button onClick={() => setStep('review')} type="button">
              continuar
            </Button>
          </>
        )}
        {step === 'review' && <Review>content</Review>}
      </S.Steps>

      <S.Totals>
        <CartTotals />

        {step === 'review' && <Button type="button">finalizar</Button>}
      </S.Totals>
    </S.Container>
  );
};
