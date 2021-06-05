import React, {useState} from "react";
import {connect} from "react-redux";

interface InputProps {
    handleAddToList: (task: string) => void;
}

function Input(props: InputProps) {
    const [task, setTask] = useState<string>('');

    const { handleAddToList } = props;

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
          <input onChange={handleChange} value={task} id="input" />
          <button onClick={addToList}>Click to add a Todo</button>
      </>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    handleAddToList: (task: string) => dispatch({
        type: 'ADD',
        payload: task
    })
});

export default connect(
    null,
    mapDispatchToProps
)(Input)