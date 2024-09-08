import { todos } from './data';

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

button.addEventListener('click', () => {
  todos.push(input.value);
  input.value = '';
});
