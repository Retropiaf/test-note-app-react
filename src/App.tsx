import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskList } from "./TaskList/TaskList";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {Task, TaskProps} from "./Task/Task";


const App: React.FC = () => {
    const taskListName = "My Task List";
    const taskObjects: TaskProps[] = [
        {description: 'description1', title: 'title1', dueDate: '123456789'},
        {description: 'description2', title: 'title2', dueDate: '123456789'},
        {description: 'description3', title: 'title3', dueDate: '123456789'}
    ];
    const taskListTasks = [<Task description="description1" title="title1" dueDate="1234567"></Task>, <Task description="description2" title="title2" dueDate="1234567"></Task>];
  return (
      <TaskList
          name={taskListName}
          tasks={taskObjects}>
      </TaskList>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //
    // </div>
  );
};

export default App;
