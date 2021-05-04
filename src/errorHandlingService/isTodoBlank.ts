export default function isTodoBlank(task: string) {
    if (task.length === 0) {
        alert('Blank todo');
        return false;
    }
    return true;
}