import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './SideNav.sass';

import Menu, { MenuProp } from './components/Menu';

const SideNavComponent = () => {
  const [sideMenu, setSideMenu] = useState({})

  const sideMenuOpen = (key: string) => {
    return sideMenu[key] ? true : false;
  }

  const setSideMenuOpen = (key: string) => {
    setSideMenu({
      ...sideMenu,
      [key]: !sideMenu[key]
    })
  }

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((el) => {
      el.addEventListener('click', (e) => {
        //@ts-ignore
        const id = e.currentTarget.dataset.id
        const menu = document.querySelector('#menu-' + id);
        const rightIcon = document.querySelector('#right-icon-' + id);

        if (menu) {
          if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open')
          } else {
            menu.classList.add('menu-open')
            // menu.classList.replace('transition-close', 'transition-open');
          }
        }

        if (rightIcon) {
          if (rightIcon.classList.contains('fa-chevron-down')) {
            rightIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
          } else {
            rightIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
          }
        }
      })
    })
  }, [])

  const menuData: MenuProp[] = [
    {
      path: '/admin',
      text: 'Dashboard',
      icon: 'home',
      nested: [
        {
          text: 'Dashboard 1',
          path: '/'
        },
        {
          text: 'Dashboard 2',
          path: '/'
        }
      ]
    },
    {
      text: 'Inbox',
      icon: 'home',
      path: '/inbox'
    },
    {
      path: '/portfolio',
      text: 'Portfolio',
      icon: 'home',
      nested: [
        {
          text: 'Dashboard 1',
          path: '/'
        },
        {
          text: 'Dashboard 2',
          path: '/'
        }
      ]
    },
  ]

  return (
    <nav className="side-nav">
      <a className="flex items-center pl-5 pt-4">
        <img className="w-6" src={require('../../../../assets/icons/logo.svg').default} />
        <span className="hidden xl:block text-white text-lg ml-3">Admin</span>
      </a>
      <div className="side-nav__divider my-6" />

      <Menu data={menuData} />
    </nav>
  )
}

export default SideNavComponent;