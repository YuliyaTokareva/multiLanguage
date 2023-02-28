import { Box, Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const Header = styled((props) => <Box component="header" {...props} />)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  margin: ${({ theme }) => theme.spacing(0, 'auto')};
  padding: ${({ theme }) => theme.spacing(2, 1)};
  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    padding: ${({ theme }) => theme.spacing(2, 2)};
  }
`;
export const Navbar = styled((props) => <Box component="nav" {...props} />)`
  display: none;
  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    display: flex;
    gap: 8px;
    align-items: center;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.text.primary};
      cursor: pointer;
      flex-shrink: 0;
      font-size: 1.2rem;
      line-height: 2.15rem;
      font-weight: 600;
      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const IconButtonMob = styled((props) => (
  <IconButton
    size="large"
    variant="dashed"
    sx={{ backgroundColor: '#ffffff', color: 'rgba(0, 0, 0, 0.54)' }}
    {...props}>
    <MenuIcon />
  </IconButton>
))`
  background-color: #ffffff;
`;
export const MobMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
    {...props}
  />
))`
  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    display: none;
  }
`;

export const MenuItemMob = styled((props) => <MenuItem {...props} />)`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.2rem;
    line-height: 2.15rem;
    font-weight: 600;
  }
`;
export const HamburgerBlock = styled(Box)`
  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    display: none;
  }
`;

export const LangButtonBlock = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const LangButton = styled((props) => <Button {...props} />)`
  min-width: auto;
  padding: ${({ theme }) => theme.spacing(1, 1.5)};
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
`;

export const MenuBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;
  flexgrow: 1;
`;
