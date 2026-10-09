import React from "react";
// import Todo from "../models/todo";

// this function receives an object,
// that object has an item property, and item is a Todo.
// function TodoItem({item} : {item: Todo}) {
//   return (<li>{item.text}</li>)
// }

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
