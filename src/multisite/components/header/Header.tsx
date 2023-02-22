// import React from 'react';

import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { Box, Button, Container, Tab, Tabs, Grid } from '@mui/material';

import * as Styled from './Header.styled';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const lngs = {
  uk: { nativeName: 'Укр' },
  en: { nativeName: 'En' }
};
type MenuTab = '/' | '/news' | '/authorization';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState('/');

  return (
    <>
      <Styled.Header>
        <Styled.MenuBlock>
          <Styled.Navbar>
            <Link to="/">{t('menu.home')}</Link>
            <Link to="/news">{t('menu.news')}</Link>
            <Link to="/authorization">{t('menu.authorization')}</Link>
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
    </>
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
