import { FilePenLine, ImagePlus } from 'lucide-react';
import { FC, useState } from 'react';

import { Button, Heading, Input } from 'components';
import { linksProfileMenu } from 'utils';

import * as S from './Profile.styles';

export interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const [menu, setMenu] = useState('profile');

  return (
    <S.ProfileContainer>
      <Heading as="h2" size="2xl" transform="capitalize" fontWeight="600">
        meu perfil
      </Heading>

      <S.ProfileMenus>
        <S.ProfileSideMenu>
          <S.ProfileAvatar>
            <img
              src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe"
              alt="avatar"
            />

            <div>
              <span>olá 👋</span>
              <span>evandro calado</span>
            </div>
          </S.ProfileAvatar>

          {linksProfileMenu.map((link) => (
            <Button
              onClick={() => setMenu(link.path)}
              variant="secondary"
              key={link.id}
              className={link.path === menu ? 'active' : ''}
            >
              {link.icon} {link.label}
            </Button>
          ))}
        </S.ProfileSideMenu>

        <S.ProfileMainMenu>
          {menu === 'profile' && (
            <S.ProfileInfo>
              <div className="avatar">
                <div className="avatar_img">
                  <img
                    src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe"
                    alt="avatar"
                  />

                  <Button>
                    <ImagePlus size={12} />
                  </Button>
                </div>

                <Button>
                  <FilePenLine /> editar
                </Button>
              </div>

              <div className="inputs">
                <Input type="text" label="nome" name="username" />
                <Input type="email" label="email" name="email" />
              </div>
              <div className="inputs">
                <Input type="password" label="senha" name="password" />
                <Input type="number" label="telefone" name="phone" />
              </div>
            </S.ProfileInfo>
          )}

          {menu === 'orders' && (
            <div>
              <h1>orders</h1>
            </div>
          )}

          {menu === 'wishlist' && (
            <div>
              <h1>wishlist</h1>
            </div>
          )}

          {menu === 'addresses' && (
            <div>
              <h1>addresses</h1>
            </div>
          )}

          {menu === 'settings' && (
            <div>
              <h1>settings</h1>
            </div>
          )}
        </S.ProfileMainMenu>
      </S.ProfileMenus>
    </S.ProfileContainer>
  );
};
