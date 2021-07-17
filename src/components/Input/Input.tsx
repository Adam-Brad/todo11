import React, {useState} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Todo from "../../interfaces/Todo";
import {v4 as uuidv4} from 'uuid';

interface InputProps {
  handleAddToList: (task: string) => void;
}

interface AddTodoAction {
  type: string;
  payload: Todo;
}

function Input(props: InputProps) {
  const [task, setTask] = useState<string>('');

  const {handleAddToList} = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addToList = () => {
    handleAddToList(task);
    setTask('');
  };

  return (
    <>
      <label htmlFor="input">Add a todo to the list</label>
      <input onChange={handleChange} value={task} id="input"/>
      <button onClick={addToList}>Click to add a Todo</button>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => ({
  handleAddToList: (task: string) => dispatch({
    type: 'ADD',
    payload: {
      text: task,
      isCompleted: false,
      id: uuidv4()
    }
  })
});

export default connect(
  null,
  mapDispatchToProps
)(Input)