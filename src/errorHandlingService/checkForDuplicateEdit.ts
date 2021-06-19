import Todo from "../interfaces/Todo";

export default function checkForDuplicateEdit(updatedTodo: Todo, list: Todo[]) {
  const hasDuplicateEdit = list.reduce((haveSeenDuplicate: boolean, todo: Todo) => {
    if (updatedTodo.text === todo.text && updatedTodo.id !== todo.id) {
      haveSeenDuplicate = true;
    }
    return haveSeenDuplicate;
  }, false);

  if (hasDuplicateEdit === true) {
    alert('Duplicate');
    return true;
  }
  return false;
};