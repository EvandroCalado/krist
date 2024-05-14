import { AxiosError } from 'axios';
import { FilePenLine, Trash2 } from 'lucide-react';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';

import { AddressModal, Button, Input } from 'components';
import { StrapiAddressType } from 'types';
import { customFetch } from 'utils';

import * as S from './AddressCard.styles';

export interface AddressCardProps {
  address: StrapiAddressType;
}

export const AddressCard: FC<AddressCardProps> = ({ address }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleInput, setTitleInput] = useState(address.attributes.title);
  const [addressInput, setAddressInput] = useState(address.attributes.address);
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
        <label htmlFor="address">
          {address.attributes.user.data.attributes.username}
        </label>
        <input type="checkbox" id="address" name="address" />
      </S.AddressCardTitle>

      <S.AddressCardName>{address.attributes.title}</S.AddressCardName>

      <S.AddressCardDescription>
        {address.attributes.address}
      </S.AddressCardDescription>

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
