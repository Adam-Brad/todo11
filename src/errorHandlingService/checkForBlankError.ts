export default function checkForBlankError(task: string) {
  if (task.length === 0) {
    alert('Blank todo');
    return false;
  }
  return true;
}