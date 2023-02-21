// import React from 'react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Menu.styled';
const lngs = {
  uk: { nativeName: 'Українська' },
  en: { nativeName: 'English' }
};

const Menu = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Styled.Header>
        <Link to="/">{t('menu.home')}</Link>

        <Link to="/news">{t('menu.news')}</Link>

        <Link to="/authorization">{t('menu.authorization')}</Link>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </Styled.Header>
    </>
  );
};

export default Menu;
