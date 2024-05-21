import { AxiosError } from 'axios';
import { FilePenLine, Trash2 } from 'lucide-react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';

import { AddressModal, Button, Input } from 'components';
import { StrapiAddressType } from 'types';
import { customFetch } from 'utils';

import * as S from './AddressCard.styles';

export interface AddressCardProps {
  address: StrapiAddressType;
  currentAddress: {
    address: string;
    zipCode: string;
  };
  setCurrentAddress: Dispatch<
    SetStateAction<{
      address: string;
      city: string;
      state: string;
      zipCode: string;
    }>
  >;
}

export const AddressCard: FC<AddressCardProps> = ({
  address,
  currentAddress,
  setCurrentAddress,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleInput, setTitleInput] = useState(address.attributes.title);
  const [addressInput, setAddressInput] = useState(address.attributes.address);
  const [cityInput, setCityInput] = useState(address.attributes.city);
  const [stateInput, setStateInput] = useState(address.attributes.state);
  const [zipCodeInput, setZipCodeInput] = useState(address.attributes.zipCode);

  const handleDelete = async (id: number) => {
    try {
      const addressesResponse = await customFetch.delete(`/addresses/${id}`);

      if (addressesResponse.status !== 200) {
        toast.error('Erro ao deletar endereço');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        throw new Error(error.response.data.error.message);
      }
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const addressesResponse = await customFetch.put(`/addresses/${id}`, {
        data: {
          title: titleInput,
          address: addressInput,
          city: cityInput,
          state: stateInput,
          zipCode: zipCodeInput,
        },
      });

      if (addressesResponse.status !== 200) {
        toast.error('Erro ao editar endereço');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        throw new Error(error.response.data.error.message);
      }
    }
  };

  return (
    <S.AddressCardContainer>
      <S.AddressCardTitle>
        <label htmlFor={address.attributes.title}>
          {address.attributes.user.data.attributes.username}
        </label>
        <input
          type="checkbox"
          id={address.attributes.title}
          name="address"
          checked={currentAddress.zipCode === address.attributes.zipCode}
          value={address.attributes.zipCode}
          onChange={() =>
            setCurrentAddress({
              address: address.attributes.address,
              city: address.attributes.city,
              state: address.attributes.state,
              zipCode: address.attributes.zipCode,
            })
          }
        />
      </S.AddressCardTitle>

      <S.AddressCardName>{address.attributes.title}</S.AddressCardName>

      <S.AddressCardDescription>
        {address.attributes.address}
      </S.AddressCardDescription>

      <S.AddressCardCity>{address.attributes.city}</S.AddressCardCity>

      <S.AddressCardState>{address.attributes.state}</S.AddressCardState>

      <S.AddressCardZipcode>
        CEP: {address.attributes.zipCode}
      </S.AddressCardZipcode>

      <Form method="get">
        <S.AddressCardButtons>
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="edit"
          >
            <FilePenLine /> editar
          </button>

          <AddressModal openModal={openModal} setOpenModal={setOpenModal}>
            <Input
              label="nome"
              type="text"
              name="title"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <Input
              label="endereço"
              type="text"
              name="address"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
            />
            <Input
              label="cidade"
              type="text"
              name="city"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            <Input
              label="estado"
              type="text"
              name="state"
              value={stateInput}
              onChange={(e) => setStateInput(e.target.value)}
            />
            <Input
              label="CEP"
              type="number"
              name="zipCode"
              value={zipCodeInput}
              onChange={(e) => setZipCodeInput(e.target.value)}
            />
            <Button onClick={() => handleUpdate(address.id)} type="submit">
              salvar
            </Button>
          </AddressModal>

          <button onClick={() => handleDelete(address.id)} className="delete">
            <Trash2 /> apagar
          </button>
        </S.AddressCardButtons>
      </Form>
    </S.AddressCardContainer>
  );
};
