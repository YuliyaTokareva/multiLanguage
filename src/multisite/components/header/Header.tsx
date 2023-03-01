import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../../../entities/Redux';
import * as Styled from './Header.styled';

const lngs = {
  uk: { nativeName: 'Укр' },
  en: { nativeName: 'En' }
};
type MenuTab = '/' | '/news' | '/authorization' | '/profile';

type HeaderProps = {
  getStatusAutorization: (loginStatus: boolean) => void;
  loginstatusState: null | boolean;
};

const Header: React.FC<HeaderProps> = ({ getStatusAutorization, loginstatusState }) => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState<MenuTab>('/');
  const statusAutorizeStorage: null | boolean = JSON.parse(localStorage.getItem('authorization'));
  const [statusAutorize, setstatusAutorize] = React.useState(statusAutorizeStorage);
  React.useEffect(() => {
    if (loginstatusState === null) {
      getStatusAutorization(statusAutorize);
    }
    setstatusAutorize(loginstatusState);
  }, [loginstatusState]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Styled.Header component="header">
      <Styled.MenuBlock>
        <Styled.HamburgerBlock>
          <Styled.IconButtonMob
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          />
          <Styled.MobMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}>
            <Styled.MenuItemMob onClick={handleCloseNavMenu}>
              <Link to="/">{t('menu.home')}</Link>
            </Styled.MenuItemMob>

            <Styled.MenuItemMob onClick={handleCloseNavMenu}>
              <Link to="/news">{t('menu.news')}</Link>
            </Styled.MenuItemMob>
            {!statusAutorize ? (
              <Styled.MenuItemMob onClick={handleCloseNavMenu}>
                <Link to="/authorization">{t('menu.authorization')}</Link>
              </Styled.MenuItemMob>
            ) : (
              <Styled.MenuItemMob onClick={handleCloseNavMenu}>
                <Link to="/profile">{t('menu.profile')}</Link>
              </Styled.MenuItemMob>
            )}
          </Styled.MobMenu>
        </Styled.HamburgerBlock>
        <Styled.Navbar>
          <Link to="/">{t('menu.home')}</Link>
          <Link to="/news">{t('menu.news')}</Link>
          {!statusAutorize ? (
            <Link to="/authorization">{t('menu.authorization')}</Link>
          ) : (
            <Link to="/profile">{t('menu.profile')}</Link>
          )}
        </Styled.Navbar>
        <Styled.LangButtonBlock>
          {Object.keys(lngs).map((lng) => (
            <Styled.LangButton
              key={lng}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </Styled.LangButton>
          ))}
        </Styled.LangButtonBlock>
      </Styled.MenuBlock>
    </Styled.Header>
  );
};
const mapDispatch = (dispatch: ThunkDispatch<State, undefined, any>) => {
  return {
    getStatusAutorization: (status: boolean) => dispatch(newsActions.getStatusAutorization(status))
  };
};
const mapState = (state: State) => {
  return {
    loginstatusState: newsSelectors.statusAutorization(state)
  };
};

export default connect(mapState, mapDispatch)(Header);
