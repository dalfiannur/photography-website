import React, { FC, useEffect } from 'react';
import MenuItem from '../MenuItem';

export interface MenuProp {
  isActive?: boolean;
  text: string;
  path?: string;
  icon?: string;
  nested?: MenuProp[];
}

const MenuComponent: FC<{
  data: MenuProp[]
}> = ({
  data
}) => {

    const collapse = (menuDropdown: any, menuItem: any) => {
      clean();

      const sectionHeight = menuDropdown.scrollHeight
      const elementTransition = menuDropdown.style.transition;
      menuDropdown.style.transition = '';

      requestAnimationFrame(() => {
        menuDropdown.style.height = sectionHeight + 'px';
        menuDropdown.style.transition = elementTransition;
      });

      menuItem.classList.add('active')
    }

    const expand = (menuDropdown: any, menuItem: any) => {
      requestAnimationFrame(() => {
        if (menuDropdown) menuDropdown.style.height = '0px';
      });

      if (menuItem) menuItem.classList.remove('active')
    }

    const clean = () => {
      const menuItems = document.querySelectorAll<HTMLLIElement>('.menu__item');
      if (menuItems) {
        menuItems.forEach((item) => {
          if (item.classList.contains('active')) {
            const md = item.querySelector<HTMLUListElement>('.menu__dropdown')
            if (md) {
              md.style.height = '0px';
            }
            item.classList.remove('active');
          }
        })
      }
    }

    useEffect(() => {
      const menuItems = document.querySelectorAll<HTMLLIElement>('.menu__item');

      menuItems.forEach((menuItem, key) => {
        const menuToggle = menuItem.querySelector<HTMLAnchorElement>('.menu__toggle');
        const menuDropdown = menuItem.querySelector('.menu__dropdown');
        if (menuToggle) {
          menuToggle.addEventListener('click', (el) => {
            if (menuItem.classList.contains('active')) {
              expand(menuDropdown, menuItem);
              menuItem.classList.remove('active');
            } else {
              menuItem.classList.add('active');
              collapse(menuDropdown, menuItem);
            }
          });
        }
      });
    }, [MenuItem]);

    return (
      <ul>
        {data.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
      </ul>
    )
  }

export default MenuComponent;