import { todos } from './data';

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const list = document.getElementById('todo-list');
const totalCounter = document.getElementById('total-counter');
const doneCounter = document.getElementById('done-task-counter');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

totalCounter.textContent = 0;
button.addEventListener('click', () => {
  todos.push(input.value);
  input.value = '';

  new Promise((resolve, reject) => {
    if (todos) {
      const newListItem = document.createElement('li');
      newListItem.classList.add('todo-list__item');
      newListItem.textContent = todos[todos.length - 1];
      resolve(list.appendChild(newListItem));
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');
      newListItem.appendChild(checkbox);

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          newListItem.classList.add('inactive');
        } else {
          newListItem.classList.remove('inactive');
        }
        function updateCheckedCounter() {
          const checkedCheckboxes = document.querySelectorAll(
            '.checkbox:checked',
          );
          doneCounter.textContent = checkedCheckboxes.length;
        }
        updateCheckedCounter();
      });
    } else {
      reject(null);
    }
  });
  totalCounter.textContent = todos.length;
});
