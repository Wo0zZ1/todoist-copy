import React from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Ellipsis } from '../assets/img/ellipsis.svg';

import Task from './Task';

const Project = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const folder = useSelector((state) =>
    state.folders.projectFolders.find((folder) => folder.id === params.id),
  );

  return (
    <div className="Project">
      <div className="content">
        <div className="content__top">
          <h1>{folder.content}</h1>
          <div>
            <button className="button">
              <Ellipsis />
            </button>
          </div>
        </div>
        <ul className="content__bottom">
          {folder.tasks.map((task) => (
            <li key={task.id}>
              <Task {...task} folderId />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
