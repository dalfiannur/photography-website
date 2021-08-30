import React, { FC, useState } from 'react';

const navigator = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/gallery',
    text: 'Gallery'
  }
]

const Header: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-red-600 md:bg-transparent flex flex-wrap justify-between items-center">
      <h1 className="text-3xl text-white font-extrabold pt-2 pb-2">Photography's</h1>

      <button className="block md:hidden mr-2" onClick={() => setShow(!show)}>
        <img src={require('../../assets/icons/hamburger-menu.svg').default} className="w-10 h-10" />
      </button>

      <ul
        className="md:flex bg-red-600 md:bg-transparent"
      // {{
      //   ['flex-column w-full']: show(),
      //   ['hidden']: !show(),
      // }}
      >
        {navigator.map((item) => (
          <li
            key={item.href}
            className="pl-5 pr-5">
            <a
              href={item.href}
              className="font-bold text-white"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Header;