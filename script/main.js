import { todos } from './data';

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

button.addEventListener('click', () => {
  todos.push(input.value);
  input.value = '';

  new Promise((resolve, reject) => {
    if (todos) {
      const newListItem = document.createElement('li');
      newListItem.classList.add('todo-list__item');
      newListItem.textContent = todos[todos.length - 1];
      resolve(list.appendChild(newListItem));
    } else {
      reject(null);
    }
  });
});
