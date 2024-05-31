import { Phone, Plus, SquarePen, Trash2 } from 'lucide-react';
import { FC, useState } from 'react';
import { Form } from 'react-router-dom';

import { AddressModal, Button, Heading, Input } from 'components';
import { StrapiUserType } from 'types';

import * as S from './Addresses.styles';

export interface AddressesProps {
  addresses: StrapiUserType['addresses'];
}

export const Addresses: FC<AddressesProps> = ({ addresses }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.Addresses>
      <Form method="post">
        <AddressModal openModal={openModal} setOpenModal={setOpenModal}>
          <Input label="nome" type="text" name="title" placeholder="ex: casa" />
          <Input label="endereço" type="text" name="address" />
          <Input label="cidade" type="text" name="city" />
          <Input label="estado" type="text" name="state" />
          <Input label="CEP" type="number" name="zipCode" />
          <Button type="submit">salvar</Button>
        </AddressModal>
      </Form>

      <Button onClick={() => setOpenModal(!openModal)}>
        <Plus /> Adicionar endereço
      </Button>

      {addresses.map((address) => (
        <S.AddressCard key={address.id}>
          <S.Address>
            <Heading as="h3" transform="capitalize" fontWeight="600">
              {address.user.username}
            </Heading>

            <p>{address.address}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.zipCode}</p>

            <span>
              <Phone /> {address.user.phone}
            </span>
          </S.Address>

          <S.AddressButtons>
            <Button>
              <SquarePen /> Editar
            </Button>
            <Button>
              <Trash2 /> Delete
            </Button>
          </S.AddressButtons>
        </S.AddressCard>
      ))}
    </S.Addresses>
  );
};
