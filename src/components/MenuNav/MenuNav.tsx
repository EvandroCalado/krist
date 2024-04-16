import * as S from './MenuNav.styles';

const navLinks = [
  {
    id: 1,
    label: 'home',
    path: '/',
  },
  {
    id: 2,
    label: 'loja',
    path: '/shop',
  },
  {
    id: 3,
    label: 'contato',
    path: '/contact',
  },
];

export const MenuNav = () => {
  return (
    <S.Nav className="menu-nav">
      {navLinks.map((link) => (
        <S.Navlink key={link.id} to={link.path}>
          {link.label}
        </S.Navlink>
      ))}
    </S.Nav>
  );
};
