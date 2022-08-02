import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import inbox__icon from '../../assets/img/inbox__icon.svg';
import calendar__icon from '../../assets/img/calendar__icon.svg';
import upcoming__icon from '../../assets/img/upcoming__icon.svg';

const initialState = {
  folders: [
    {
      id: '626aef58-28a7-4068-94fa-49a91fb7299e',
      link: '/today',
      icon: calendar__icon,
      content: 'Сегодня',
    },
    {
      id: '5979bf68-707c-48ed-b396-41840d002581',
      link: '/upcoming',
      icon: upcoming__icon,
      content: 'Предстоящее',
    },
  ],
  projectFolders: [
    {
      id: '8554f5c0-b08e-4d89-b22f-3e755b222b94',
      icon: inbox__icon,
      content: 'Входящие',
      tasks: [
        {
          id: uuid(),
          content:
            'Помыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посудуПомыть посуду',
          completed: false,
        },
        {
          id: uuid(),
          content: 'Крикнуть в окно',
          completed: true,
          time: '1day',
        },
      ],
    },
    {
      id: 'b455e611-9745-4aef-925e-432841d3ced3',
      color: 'grey',
      icon: inbox__icon, //icon
      content: 'Todoist ау',
      tasks: [
        {
          id: uuid(),
          content: 'Погулять',
          completed: false,
        },
        {
          id: uuid(),
          content: 'Заварить дошик',
          completed: false,
          time: '1day',
        },
      ],
    },
    {
      id: 'a180c598-cbdf-428b-9a72-a4a39320a71b',
      color: 'grey',
      icon: inbox__icon, //icon
      content: '222222222',
      tasks: [
        {
          id: uuid(),
          content: 'ау',
          completed: false,
        },
      ],
    },
  ],
  activeFolderId: '8554f5c0-b08e-4d89-b22f-3e755b222b94',
};

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    fetchProjectFolders(state, action) {
      try {
        const projectFolders = JSON.parse(window?.localStorage?.getItem('projectFolders'));
        if (projectFolders) state.projectFolders = projectFolders;
      } catch (e) {
        console.log(e);
      }
    },
    fetchActiveFolder(state) {
      try {
        const path = decodeURIComponent(window.location.pathname.split('/')?.[1]);
        const id = decodeURIComponent(window.location.pathname.split('/')?.[2]);

        let folder =
          state.folders.find((folder) => folder.link === `/${path}`) ||
          state.projectFolders.find((folder) => folder.id === id);

        state.activeFolderId = folder.id;

        document.title = `${folder.content}: Todoist-copy`;
      } catch (e) {
        console.log(e);
      }
    },
    toggleTaskCompleted(state, action) {
      try {
        const id = decodeURIComponent(window.location.pathname.split('/')?.[2]);
        const folder = state.projectFolders.find((folder) => folder.id === id);
        if (!folder) return;
        const task = folder.tasks.find((task) => task.id === action.payload);
        if (!task) return;
        task.completed = !task.completed;

        window.localStorage.setItem('projectFolders', JSON.stringify(state.projectFolders));
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { fetchProjectFolders, fetchActiveFolder, toggleTaskCompleted } = foldersSlice.actions;

export default foldersSlice.reducer;
