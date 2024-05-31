import { Phone, Plus, SquarePen, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Form, FormMethod, useLoaderData } from 'react-router-dom';

import { AddressModal, Button, Heading, Input } from 'components';
import { StrapiAddressesType } from 'types';

import * as S from './Addresses.styles';

interface Address {
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export const Addresses = () => {
  const { addresses } = useLoaderData() as { addresses: StrapiAddressesType };

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [methodType, setMethodType] = useState<FormMethod>('post');
  const [formData, setFormData] = useState<Address>({
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <S.Addresses>
      <Button
        onClick={() => {
          setOpenModal(true),
            setMethodType('post'),
            setFormData({
              title: '',
              address: '',
              city: '',
              state: '',
              zipCode: '',
            });
        }}
      >
        <Plus /> Adicionar endereço
      </Button>

      {addresses.data.map((address) => (
        <S.AddressCard key={address.id}>
          <S.Address>
            <Heading as="h3" transform="capitalize" fontWeight="600">
              {address.attributes.title}
            </Heading>

            <p>{address.attributes.address}</p>
            <p>{address.attributes.city}</p>
            <p>{address.attributes.state}</p>
            <p>{address.attributes.zipCode}</p>

            <span>
              <Phone /> {address.attributes.user.data.attributes.phone}
            </span>
          </S.Address>

          <Form method={methodType}>
            <AddressModal openModal={openModal} setOpenModal={setOpenModal}>
              <Input
                label="nome"
                type="text"
                name="title"
                placeholder="ex: casa"
                value={formData.title}
                onChange={handleChange}
              />
              <Input
                label="endereço"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <Input
                label="cidade"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                label="estado"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <Input
                label="CEP"
                type="number"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
              {methodType === 'put' && (
                <input type="hidden" name="id" value={address.id} />
              )}
              <Button type="submit" onClick={() => setOpenModal(false)}>
                salvar
              </Button>
            </AddressModal>
          </Form>

          <S.AddressButtons>
            <Button
              onClick={() => {
                setOpenModal(true),
                  setMethodType('put'),
                  setFormData({
                    title: address.attributes.title,
                    address: address.attributes.address,
                    city: address.attributes.city,
                    state: address.attributes.state,
                    zipCode: address.attributes.zipCode,
                  });
              }}
            >
              <SquarePen /> Editar
            </Button>

            <Form method="delete">
              <input type="hidden" name="id" value={address.id} />
              <Button type="submit">
                <Trash2 /> Delete
              </Button>
            </Form>
          </S.AddressButtons>
        </S.AddressCard>
      ))}
    </S.Addresses>
  );
};
