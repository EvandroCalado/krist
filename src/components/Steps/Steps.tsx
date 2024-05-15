import { ClipboardList, CreditCard, Home, Plus } from 'lucide-react';
import { FC, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import {
  Address,
  AddressCard,
  AddressModal,
  Button,
  CartTotals,
  Heading,
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
  const [currentAddress, setCurrentAddress] = useState({
    address: '',
    zipCode: '',
  });
  const [card, setCard] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
  });

  const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    value = value.slice(0, 19);

    setCard({
      ...card,
      cardNumber: value,
    });
  };

  const handleExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    value = value.slice(0, 5);

    setCard({
      ...card,
      expiry: value,
    });
  };

  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    value = value.replace(/\D/g, '');
    value = value.slice(0, 3);

    setCard({
      ...card,
      cvc: value,
    });
  };

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
                <AddressCard
                  key={address.id}
                  address={address}
                  currentAddress={currentAddress}
                  setCurrentAddress={setCurrentAddress}
                />
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
              <Input
                type="text"
                label="número do cartão"
                name="cardNumber"
                value={card.cardNumber}
                onChange={handleCardNumber}
              />
              <Input
                type="text"
                label="nome no cartão"
                name="cardName"
                value={card.cardName}
                onChange={(e) => setCard({ ...card, cardName: e.target.value })}
              />
              <S.StepPayment>
                <Input
                  type="text"
                  name="expiry"
                  placeholder="MM/AA"
                  label="data de vencimento"
                  value={card.expiry}
                  onChange={handleExpiry}
                />
                <Input
                  type="text"
                  label="CVC"
                  name="cvc"
                  value={card.cvc}
                  onChange={handleCvc}
                />
              </S.StepPayment>
            </Payment>

            <Button onClick={() => setStep('review')} type="button">
              continuar
            </Button>
          </>
        )}
        {step === 'review' && (
          <Review>
            <Heading as="h3" transform="capitalize" fontWeight="700">
              endereço de entrega
            </Heading>

            <p>{currentAddress.address}</p>

            <Heading as="h3" transform="capitalize" fontWeight="700">
              método de pagamento
            </Heading>

            <p>crédito - terminado em ({card.cardNumber.slice(-4)})</p>
          </Review>
        )}
      </S.Steps>

      <S.Totals>
        <CartTotals />

        {step === 'review' && <Button type="button">finalizar</Button>}
      </S.Totals>
    </S.Container>
  );
};
