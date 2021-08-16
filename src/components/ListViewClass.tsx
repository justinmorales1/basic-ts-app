import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo, addCount, subtractCount} from '../actions';
import { countState } from '../reducers/count';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[]; //State from the reducer
  nums: countState; //State from the reducer
  fetchTodos: Function; //This is because its a redux thunk and it will cause an error.
  deleteTodo: typeof deleteTodo;
  addCount: typeof addCount; //Action Creator
  subtractCount: typeof subtractCount; //Action Creator
}


interface AppState {
  fetching: boolean;
}


class _ListViewClass extends React.Component<AppProps, AppState>  {
  
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false}
  }


  componentDidUpdate(prevProps: AppProps) : void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false});
    }
  }

  onButtonClick = () => {
    this.props.fetchTodos();
    this.setState({fetching: true})
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  addButton = () => {
    this.props.addCount();
  }

  subtractButton = () => {
    this.props.subtractCount();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          The count is: {this.props.nums.count}
          <button onClick={this.props.addCount}>Click to Add</button>
          <button onClick={this.props.subtractCount}>Click to Subtract</button>
        </div>
        <button onClick={this.onButtonClick}> Fetch</button>
        {this.state.fetching ? 'Loading': null}
        {this.renderList()}
      </div>
    )
  }
}


const mapStateToProps = (state: StoreState) : {todos: Todo[] ; nums: countState}  => {
  return {
    todos: state.todos,
    nums: state.nums
  }
}

export const ListViewClass = connect(mapStateToProps,{fetchTodos, deleteTodo, addCount, subtractCount})(_ListViewClass);
