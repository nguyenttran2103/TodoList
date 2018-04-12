import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Toolbar from './components/Toolbar';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      displayForm: false,
      edittingTask: null
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ tasks: tasks });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    if (this.state.edittingTask) {
      this.setState({
        displayForm: true,
        edittingTask: null
      });
    } else {
      this.setState({
        displayForm: !this.state.displayForm,
        edittingTask: null
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      displayForm: false
    });
  }

  onOpenForm = () => {
    this.setState({
      displayForm: true
    });
  }

  onSubmit = (data) => {
    const { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateId();
      tasks.push(data);
    } else {
      var foundIndex = tasks.findIndex(task => task.id === data.id);
      tasks[foundIndex] = data;
    }

    this.setState({
      tasks: tasks,
      edittingTask: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  onChangeStatus = (itemId) => {
    const { tasks } = this.state;
    let foundItem = tasks.find(item => item.id === itemId);
    if (foundItem) {
      foundItem.status = !foundItem.status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDelete = (itemId) => {
    const { tasks } = this.state;
    let foundIndex = tasks.findIndex(item => item.id === itemId);
    if (foundIndex !== -1) {
      tasks.splice(foundIndex, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onEdit = (itemId) => {
    const { edittingTask, tasks } = this.state;
    let task = tasks.find(item => item.id === itemId);
    this.setState({
      displayForm: true,
      edittingTask: task
    });
  }

  render() {
    const { tasks, displayForm } = this.state;
    let taskFormElement = displayForm ? <TaskForm onCloseForm={this.onCloseForm}
      onSubmit={this.onSubmit}
      task={this.state.edittingTask} /> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Mangement</h1>
          <hr />
        </div>
        <div className="row">
          <div className={displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {/* TaskForm */}
            {taskFormElement}
          </div>
          <div className={displayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>New Task
            </button>
            {/* Toolbar */}
            <Toolbar />
            {/* TaskList */}
            <TaskList tasks={tasks} onChangeStatus={this.onChangeStatus} onDelete={this.onDelete} onEdit={this.onEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
