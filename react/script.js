  var Task = function(props){
    return (
      <tbody>
        <tr> 
          <td >{props.name}</td>
          <td><input type="checkbox" className="done"></input>{props.done}</td>
        </tr>
      </tbody>
    );
  }

  var ToDoApp = React.createClass({
    getInitialState() {
      return {
        tasksCount: tasks.length
      };
    },

    submit() {
      if(this.input.value == ""){
      } else {
        tasks.push({
          name: this.input.value,
          done: false
        });
        this.setState({ fieldsCount: this.state.fieldsCount + 1 });
        this.input.value = "";
      }
    },

    render() {
      return (
        <div className="container" id="container" style={{paddingTop: 20}} >
          <div className="form-group input-group">
            <input type="text" className="form-control" id="task" placeholder="Enter task" ref={(input) => this.input = input}  />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default" onClick={this.submit} >Enter</button>
            </span>
          </div>
          <table className="table table-hover">
            {tasks.map(function(task) {
              return <Task name={task.name} done={task.done} />;
            })}
          </table>
        </div>
      )
      console.log(tasks);
    }
  });

  var tasks = [
    {name: '1 First task', done: false},
    {name: '2 Second task', done: false},
    {name: '3 Third task', done: false},
  ];
  
  ReactDOM.render(<ToDoApp />, document.body);