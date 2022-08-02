import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompleted } from '../redux/reducers/foldersSlice.js';

// const Trash = require('../assets/img/trash.svg').ReactComponent;
// const Mark = require('../assets/img/mark.svg').ReactComponent;

import { ReactComponent as Mark } from '../assets/img/mark.svg';
import { ReactComponent as Trash } from '../assets/img/trash.svg';

const Task = ({ id, content, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className={`Task${completed ? ' active' : ''}`}>
      <CSSTransition
        in={completed}
        timeout={150}
        classNames={{ enter: 'active', exit: 'disActive' }}>
        <button
          onClick={() => {
            dispatch(toggleTaskCompleted(id));
          }}
          className="button mark">
          <Mark />
        </button>
      </CSSTransition>
      <div className="content">
        <span>{content}</span>
      </div>

      <button className="button trash">
        <Trash />
      </button>
    </div>
  );
};

export default Task;
