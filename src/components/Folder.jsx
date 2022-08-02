import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Folder = ({ id, link, icon, content }) => {
  const activeFolderId = useSelector((state) => state.folders.activeFolderId);

  return (
    <Link className="Folder" to={link || `/project/${id}`}>
      <div className={`folder${activeFolderId === id ? ' active' : ''}`}>
        <img src={icon} alt="folder_icon" />
        <span>{content}</span>
      </div>
    </Link>
  );
};

export default Folder;
