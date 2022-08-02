import React from 'react';
import { useLocation } from 'react-router';

import { useDispatch } from 'react-redux';
import { fetchActiveFolder, fetchProjectFolders } from '../redux/reducers/foldersSlice';

import Header from '../components/Header.jsx';
import Content from '../components/Content.jsx';

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProjectFolders());
  }, []);

  React.useEffect(() => {
    dispatch(fetchActiveFolder());
  }, [location]);

  return (
    <div className="Home">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
