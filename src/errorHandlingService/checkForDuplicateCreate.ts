import Todo from "../interfaces/Todo";

export default function checkForDuplicateCreate(list: Todo[], task: string) {
  const checkForDuplicate = list.reduce((haveSeenDuplicate: boolean, todo: Todo) => {
    if (task === todo.text) {
      haveSeenDuplicate = true;
    }
    return haveSeenDuplicate;
  }, false);

  if (checkForDuplicate) {
    alert('Duplicate');
    return false;
  }
  return true;
};