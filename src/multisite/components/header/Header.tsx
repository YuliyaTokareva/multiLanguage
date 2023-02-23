// import React from 'react';

import React, { useEffect } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { authorizationStatus } from '../../../common/utils/statusAutorization';

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
  console.log(localStorage.getItem('authorization'));
  return (
    <>
      <Styled.Header>
        <Styled.MenuBlock>
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
