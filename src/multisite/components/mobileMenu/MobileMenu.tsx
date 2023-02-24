import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from '@mui/material/MenuItem';

import * as Styled from './MobileMenu.styled';

const MobileMenu: React.FC = () => {
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
    <Box
      sx={{
        flexGrow: 1,
        display: { mobile: 'flex', tablet: 'none' }
      }}>
      {/* <IconButton
        sx={{ backgroundColor: '#076ad3' }}
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit">
        <MenuIcon />
      </IconButton> */}
      {/* <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { mobile: 'block', tablet: 'none' }
        }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <Link to="/">{t('menu.home')}</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Link to="/news">{t('menu.news')}</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Link to="/authorization">{t('menu.authorization')}</Link>
        </MenuItem>
      </Menu> */}
    </Box>
  );
};

export default MobileMenu;
