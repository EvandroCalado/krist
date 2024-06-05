import { AxiosError } from 'axios';
import { FilePenLine, Filter, FilterX, ImagePlus } from 'lucide-react';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import {
  Addresses,
  Button,
  Heading,
  Input,
  OrderCard,
  Pagination,
  Wishlist,
} from 'components';
import { StrapiOrdersType, StrapiUserType } from 'types';
import { customFetch, formatDate, linksProfileMenu } from 'utils';

import * as S from './Profile.styles';

export interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { user, orders } = useLoaderData() as {
    user: StrapiUserType;
    orders: StrapiOrdersType;
  };

  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [menu, setMenu] = useState(queryParams.get('step') || 'profile');
  const [userName, setUserName] = useState(user.username);
  const [userPhone, setUserPhone] = useState(user?.phone || '');
  const [userAvatar, setUserAvatar] = useState(
    user?.avatar?.formats?.thumbnail?.url || '/avatar.jpg',
  );
  const [currentSearch, setCurrentSearch] = useState(
    queryParams.get('search') || '',
  );

  function formatPhone(value: string) {
    let phone = value.replace(/\D/g, '');

    if (phone.length > 2) {
      phone = phone.replace(/^(\d{2})(\d)/, '$1 $2');
    }

    if (phone.length > 8) {
      phone = phone.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return phone;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setUserPhone(formattedPhone);
  };

  const handleAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const image = e.target.files[0];

    if (!image) return;

    setUserAvatar(URL.createObjectURL(e.target.files[0]));

    try {
      const data = new FormData();

      data.append('ref', 'plugin::users-permissions.user');
      data.append('refId', user.id.toString());
      data.append('field', 'avatar');
      data.append('files', image);

      const avatarResponse = await customFetch.post('/upload', data);

      if (avatarResponse.status !== 200) {
        toast.error('Erro ao alterar imagem');
      }

      toast.success('Alterado com sucesso');
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        toast.error('Erro ao alterar imagem');
      }
    }
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userResponse = await customFetch.put(`/users/${user.id}`, {
        username: userName,
        phone: userPhone,
      });

      if (userResponse.status !== 200) {
        toast.error('Erro ao alterar perfil');
      }

      toast.success('Alterado com sucesso');
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        toast.error('Erro ao alterar imagem');
      }
    }
  };

  const handleSearch = () => {
    queryParams.set('search', currentSearch);
    navigate(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <S.ProfileContainer>
      <Heading as="h2" size="2xl" transform="capitalize" fontWeight="600">
        meu perfil
      </Heading>

      <S.ProfileMenus>
        <S.ProfileSideMenu>
          <S.ProfileAvatar>
            <img src={userAvatar} alt="avatar" />

            <div>
              <span>olá 👋</span>
              <span>{user.username}</span>
            </div>
          </S.ProfileAvatar>

          {linksProfileMenu.map((link) => (
            <Button
              type="button"
              onClick={() => {
                setMenu(link.path);
                navigate(`/profile?step=${link.path}`);
              }}
              variant="secondary"
              key={link.id}
              className={link.path === menu ? 'active' : ''}
            >
              {link.icon} <span>{link.label}</span>
            </Button>
          ))}
        </S.ProfileSideMenu>

        <S.ProfileMainMenu>
          {menu === 'profile' && (
            <form onSubmit={handleUpdate}>
              <S.ProfileInfo>
                <div className="avatar">
                  <div className="avatar_img">
                    <img src={userAvatar} alt="avatar" />

                    <label htmlFor="avatar">
                      <ImagePlus size={12} />
                    </label>
                    <input
                      type="file"
                      id="avatar"
                      onChange={handleAvatar}
                      hidden
                    />
                  </div>

                  <Button type="submit">
                    <FilePenLine size={16} /> editar
                  </Button>
                </div>

                <div className="inputs">
                  <Input
                    type="text"
                    label="nome"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <Input
                    type="email"
                    label="email"
                    name="email"
                    disabled
                    value={user.email}
                  />
                </div>
                <div className="inputs">
                  <Input
                    type="text"
                    label="criado em"
                    name="createdAt"
                    disabled
                    value={formatDate(user.createdAt)}
                  />
                  <Input
                    type="text"
                    label="telefone"
                    name="phone"
                    value={userPhone}
                    onChange={handleInputChange}
                    maxLength={13}
                  />
                </div>
              </S.ProfileInfo>
            </form>
          )}

          {menu === 'orders' && (
            <S.ProfileOrders>
              <div className="order_top">
                <S.ProfileOrderSearch>
                  <input
                    type="number"
                    name="search"
                    placeholder="Número do pedido"
                    value={currentSearch}
                    onChange={(e) => setCurrentSearch(e.target.value)}
                  />

                  {queryParams.get('search') ? (
                    <Button onClick={() => navigate('/profile?step=orders')}>
                      <FilterX size={16} /> apagar
                    </Button>
                  ) : (
                    <Button onClick={handleSearch}>
                      <Filter size={16} /> filtrar
                    </Button>
                  )}
                </S.ProfileOrderSearch>
              </div>

              <div className="order_cards">
                {orders.data.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>

              <Pagination />
            </S.ProfileOrders>
          )}

          {menu === 'wishlist' && <Wishlist wishlists={user.wishlists} />}

          {menu === 'addresses' && <Addresses />}
        </S.ProfileMainMenu>
      </S.ProfileMenus>
    </S.ProfileContainer>
  );
};
