import React from 'react';
import { Resizable } from 're-resizable';

import { useSelector, useDispatch } from 'react-redux';
import { toggleWrapperActive } from '../redux/reducers/sidebarSlice';

import { ReactComponent as AddIcon } from '../assets/img/add__icon.svg';
import { ReactComponent as DropArrow } from '../assets/img/dropArrow.svg';

import Folder from './Folder.jsx';

const Sidebar = () => {
  const dispatch = useDispatch();

  const folders = useSelector((state) => state.folders.folders);
  const projectFolders = useSelector((state) => state.folders.projectFolders);
  const wrapperActive = useSelector((state) => state.sidebar.wrapperActive);

  return (
    <Resizable
      minWidth={200}
      maxWidth={320}
      defaultSize={{
        width: 250,
      }}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}>
      <div className="sidebar">
        <div className="content">
          <ul className="folder__block">
            <li>
              <Folder {...projectFolders.find((folder) => folder.icon)} />
            </li>
            {folders.map((folder) => {
              return (
                <li key={folder.id}>
                  <Folder {...folder} />
                </li>
              );
            })}
          </ul>
          <div className="project">
            <div className="project__wrapper">
              <div
                onClick={() => {
                  dispatch(toggleWrapperActive());
                }}
                className={`project__wrapper__left${wrapperActive ? ' active' : ''}`}>
                <DropArrow />
                <span>Проекты</span>
              </div>
              <div className="project__wrapper__right">
                <button className="header__hover add__button button">
                  <AddIcon />
                </button>
              </div>
            </div>
            <ul className={`project__content${wrapperActive ? ' active' : ''}`}>
              {projectFolders
                .filter((folder) => folder.color)
                .map((folder) => {
                  return (
                    <li key={folder.id}>
                      <Folder {...folder} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </Resizable>
  );
};

export default Sidebar;
