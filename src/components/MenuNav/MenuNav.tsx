import * as S from './MenuNav.styles';

const navLinks = [
  {
    id: 1,
    name: 'home',
    link: '/',
  },
  {
    id: 2,
    name: 'loja',
    link: '/shop',
  },
];

export const MenuNav = () => {
  return (
    <S.Nav className="menu-nav">
      {navLinks.map((link) => (
        <S.Navlink key={link.id} to={link.link}>
          {link.name}
        </S.Navlink>
      ))}
    </S.Nav>
  );
};
