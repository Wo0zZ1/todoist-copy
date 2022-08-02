import React from 'react';

import { ReactComponent as SidebarButton } from '../assets/img/sidebar__button.svg';
import { ReactComponent as HomeButton } from '../assets/img/home__button.svg';
import { ReactComponent as SearchIcon } from '../assets/img/search__icon.svg';
import { ReactComponent as AddIcon } from '../assets/img/add__icon.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="content">
          <div className="content__left">
            <button className="header__hover sidebar__button button">
              <SidebarButton />
            </button>
            <button className="header__hover home__button button">
              <HomeButton />
            </button>
            <div className="input-block">
              <input autoComplete="none" placeholder="Поиск" type="text" />
              <SearchIcon />
            </div>
          </div>
          <div className="content__right">
            <button className="header__hover add__button button">
              <AddIcon />
            </button>
            <button className="menu__button button">
              {/* <Account /> */}
              <img src="https://avatars.doist.com/?fullName=%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC&email=mr.kleikaia.lenta123%40gmail.com&size=195&bg=ffffff" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
