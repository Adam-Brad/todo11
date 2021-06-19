import React from 'react';
import Todo from '../../interfaces/Todo';
import DeleteButton from '../DeleteButton/DeleteButton';
import ListItemText from '../ListItemText/ListItemText';
import ToggleCompleteButton from '../ToggleCompleteButton/ToggleCompleteButton';

interface ItemProps {
  todo: Todo;
}

export default function Item(props: ItemProps) {

  const {todo} = props;


  return (
    <>
      <ListItemText
        todo={todo}
      />
      <DeleteButton
        todo={todo}
      />
      <ToggleCompleteButton
        todo={todo}
      />
    </>
  );
}