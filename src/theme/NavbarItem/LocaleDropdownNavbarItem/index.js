import React from 'react';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
// ==== 2022.09.27 | Modified to add links to subdomains (not officially supported) ====
export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const location = useLocation();
  const localeItems = [
    {
      label: 'English',
      to: 'https://frourio.com' + location.pathname,
      target: '_self',
      autoAddBaseUrl: false,
      className: mobile ? 'menu__link--active' : 'dropdown__link--active',
    },
    {
      label: '日本語',
      to: 'https://ja.frourio.com' + location.pathname,
      target: '_self',
      autoAddBaseUrl: false,
      className: '',
    },
  ];
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  const dropdownLabel = mobile ? 'Languages' : 'English';
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
