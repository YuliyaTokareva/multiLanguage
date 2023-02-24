import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { authorizationStatus } from '../../../common/utils/statusAutorization';

import * as Styled from './Header.styled';

const lngs = {
  uk: { nativeName: 'Укр' },
  en: { nativeName: 'En' }
};
type MenuTab = '/' | '/news' | '/authorization' | '/profile';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState<MenuTab>('/');
  // const [statusAutorize, setstatusAutorize] = React.useState(authorizationStatus);
  // useEffect(() => {}, [statusAutorize]);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log(localStorage.getItem('authorization'));
  return (
    <Styled.Header>
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
            <Styled.MenuItemMob onClick={handleCloseNavMenu}>
              <Link to="/authorization">{t('menu.authorization')}</Link>
            </Styled.MenuItemMob>
          </Styled.MobMenu>
        </Styled.HamburgerBlock>
        <Styled.Navbar>
          <Link to="/">{t('menu.home')}</Link>
          <Link to="/news">{t('menu.news')}</Link>
          {/* {!statusAutorize ? (
              <Link to="/authorization">{t('menu.authorization')}</Link>
            ) : (
              <Link to="/profile">{t('menu.profile')}</Link>
            )} */}
          <Link to="/authorization">{t('menu.authorization')}</Link>
          <Link to="/profile">{t('menu.profile')}</Link>
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

export default Header;
////2

// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as React from 'react';
// import { useTranslation } from 'react-i18next';

// import * as Styled from './Menu.styled';
// const lngs = {
//   uk: { nativeName: 'Українська' },
//   en: { nativeName: 'English' }
// };

// const Menu = () => {
//   const { t, i18n } = useTranslation();

//   return (
//     <>
//       <Styled.Header>
//         <Styled.Navbar>
//           <Styled.NavbarContent>
//             <Styled.NavTabs value={'/'}>
//               <Styled.NavTab>
//                 <Link to="/">{t('menu.home')}</Link>
//               </Styled.NavTab>
//               <Link to="/news">{t('menu.news')}</Link>

//               <Link to="/authorization">{t('menu.authorization')}</Link>
//             </Styled.NavTabs>
//           </Styled.NavbarContent>
//         </Styled.Navbar>
//         <div>
//           {Object.keys(lngs).map((lng) => (
//             <button
//               key={lng}
//               style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
//               type="submit"
//               onClick={() => i18n.changeLanguage(lng)}>
//               {lngs[lng].nativeName}
//             </button>
//           ))}
//         </div>
//       </Styled.Header>
//     </>
//   );
// };

// export default Menu;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch, { SwitchProps } from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Header: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const [value, setValue] = React.useState<MenuTab>('/');
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
//       <Container maxWidth="desktop">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { mobile: 'none', tablet: 'flex' }, mr: 1 }} />

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { mobile: 'flex', tablet: 'none' }
//             }}>
//             <IconButton
//               sx={{ backgroundColor: '#076ad3' }}
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit">
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left'
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left'
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { mobile: 'block', tablet: 'none' }
//               }}>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to="/">{t('menu.home')}</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to="/news">{t('menu.news')}</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to="/authorization">{t('menu.authorization')}</Link>
//               </MenuItem>
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { mobile: 'flex', tablet: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { mobile: 'flex', tablet: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none'
//             }}>
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { mobile: 'none', tablet: 'flex' } }}>
//             <Styled.Navbar>
//               <Link to="/" onClick={handleCloseNavMenu}>
//                 {t('menu.home')}
//               </Link>
//               <Link to="/news">{t('menu.news')}</Link>
//               <Link to="/authorization">{t('menu.authorization')}</Link>
//             </Styled.Navbar>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             {/* <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} mobile={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip> */}
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right'
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right'
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}>
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Header;
