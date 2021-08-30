import React, { CSSProperties, FC, LiHTMLAttributes, useEffect, useRef, useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import './style.sass';

interface MenuItem {
  path?: string;
  icon?: string;
  text: string;
}

interface MenuItemComponent extends MenuItem {
  nested?: MenuItem[]
}

const MenuItemComponent: FC<MenuItemComponent> = ({ path, icon, text, nested }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const anchorElementRef = useRef<HTMLAnchorElement>();
  const uListElementRef = useRef<HTMLUListElement>();
  const liElementRef = useRef<HTMLLIElement>();

  useEffect(() => {
    if (path && path.includes(window.location.pathname)) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [window.location.pathname])

  return (
    <li ref={liElementRef} className="menu__item">
      <a ref={anchorElementRef} href={path ? !nested ? path : '#' : '#'} className="menu__toggle">
        <div className="menu__icon">
          <i className={`fas fa-${icon ? icon : 'dot-circle'}`} />
        </div>

        <div className="menu__title">
          {text}

          {nested && (
            <div className="menu__sub-icon">
              <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} />
            </div>
          )}
        </div>
      </a>

      {nested && (
        <ul
          ref={uListElementRef}
          className="menu__dropdown"
        >
          {nested.map((item) => (
            <li>
              <a href={item.path} className="side-menu">
                <div className="side-menu__icon">
                  <i className={`fas fa-${item.icon ? item.icon : 'dot-circle'} text-white`} />
                </div>
                <div className="side-menu__title">{item.text}</div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default MenuItemComponent;