import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { ClipboardList, CreditCard, Home, Plus } from 'lucide-react';
import { FC, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { clearCart } from 'slices/cartSlice';

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
  SuccessModal,
} from 'components';
import { StrapiAddressesType } from 'types';
import { customFetch } from 'utils';

import * as S from './Steps.styles';

export interface StepsProps {}

export const Steps: FC<StepsProps> = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAppSelector((state) => state.userState);
  const { cartTotal } = useAppSelector((state) => state.cartState);
  const dispatch = useAppDispatch();
  const { addresses } = useLoaderData() as { addresses: StrapiAddressesType };

  const [initialAddresses, setInitialAddresses] =
    useState<StrapiAddressesType>(addresses);
  const [step, setStep] = useState('address');
  const [openModal, setOpenModal] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const response = await customFetch.post('/orders', {
        amount: Math.round((cartTotal + 5) * 100),
      });

      const { clientSecret } = response.data;

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement!,
            billing_details: {
              name: user.username,
              email: user.email,
              address: {
                line1: currentAddress.address,
                city: currentAddress.city,
                state: currentAddress.state,
                postal_code: currentAddress.zipCode,
                country: 'BR',
              },
            },
          },
        },
      );

      if (error) {
        setErrorMessage(error.message ?? 'Erro ao processar o pagamento');
        setIsProcessing(false);
      } else if (paymentIntent.status === 'succeeded') {
        setIsProcessing(false);
        dispatch(clearCart());
        setSuccessModal(true);
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        setErrorMessage(error.response?.data?.error);
      }
    }

    setIsProcessing(false);
  };

  return (
    <S.StepsContainer>
      <SuccessModal successModal={successModal} />

      <S.Steps>
        <S.StepsButtons>
          <S.StepsButton>
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
          </S.StepsButton>

          <hr
            className={step === 'payment' || step === 'review' ? 'active' : ''}
          />

          <S.StepsButton>
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
          </S.StepsButton>

          <hr className={step === 'review' ? 'active' : ''} />

          <S.StepsButton>
            <Button
              onClick={() => setStep('review')}
              className={step === 'review' ? 'active' : ''}
              variant="secondary"
            >
              <ClipboardList />
            </Button>
            <span>revisar</span>
          </S.StepsButton>
        </S.StepsButtons>

        {step === 'address' && (
          <>
            <Address>
              {initialAddresses.data.length > 0 &&
                initialAddresses.data.map((address) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    setInitialAddresses={setInitialAddresses}
                    currentAddress={currentAddress}
                    setCurrentAddress={setCurrentAddress}
                  />
                ))}

              <Button onClick={() => setOpenModal(true)} variant="secondary">
                novo endereço <Plus size={16} />
              </Button>
              <Form method="post">
                <AddressModal openModal={openModal} setOpenModal={setOpenModal}>
                  <Input
                    label="nome"
                    type="text"
                    name="title"
                    placeholder="ex: casa"
                  />
                  <Input label="endereço" type="text" name="address" />
                  <Input label="cidade" type="text" name="city" />
                  <Input label="estado" type="text" name="state" />
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
              <S.StepsPayment>
                <input
                  type="radio"
                  name="payment"
                  id="cartão"
                  checked={paymentMethod === 'cartão'}
                  value="cartão"
                  onChange={() => setPaymentMethod('cartão')}
                />
                <label htmlFor="cartão">cartão</label>
              </S.StepsPayment>
              <S.StepsPayment>
                <input
                  type="radio"
                  name="payment"
                  id="boleto"
                  checked={paymentMethod === 'boleto'}
                  value="boleto"
                  onChange={() => setPaymentMethod('boleto')}
                />
                <label htmlFor="boleto">boleto</label>
              </S.StepsPayment>
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

            <div>
              <p>{currentAddress.address}</p>
              <p>{currentAddress.city}</p>
              <p>{currentAddress.state}</p>
              <p>{currentAddress.zipCode}</p>
            </div>

            <Heading as="h3" transform="capitalize" fontWeight="700">
              método de pagamento
            </Heading>

            <p>{paymentMethod}</p>
          </Review>
        )}
      </S.Steps>

      <S.StepsTotals>
        <CartTotals />
        {step === 'review' && paymentMethod === 'cartão' && (
          <form onSubmit={handleSubmit}>
            <CardElement />
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <Button type="submit" disabled={!stripe || isProcessing}>
              {isProcessing ? 'Processando...' : 'Pagar'}
            </Button>
          </form>
        )}

        {step === 'review' && paymentMethod === 'boleto' && <div>boleto</div>}
      </S.StepsTotals>
    </S.StepsContainer>
  );
};
