import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Project from './Project';
import Today from './Today';
import Upcoming from './Upcoming';
// import NotFound from './NotFound';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="project">
          <Route index element={<span>Не указан id папки.</span>} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="today" element={<Today />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="*" element={<span>Ничего не найдено</span>} /> {/* <NotFound /> */}
      </Routes>
    </main>
  );
};

export default Main;
