import { todos } from './data';

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const list = document.getElementById('todo-list');
const totalCounter = document.getElementById('total-counter');
const doneCounter = document.getElementById('done-task-counter');

// Инициализация счетчиков
totalCounter.textContent = 0;
doneCounter.textContent = 0;

// Функция обновления счетчика выполненных задач
const updateCheckedCounter = () => {
  const checkedCheckboxes = document.querySelectorAll(
    '.checkbox:checked',
  );
  doneCounter.textContent = checkedCheckboxes.length;
};

// Функция создания элемента списка
const createListItem = (todoText) => {
  const newListItem = document.createElement('li');
  newListItem.classList.add('todo-list__item');
  newListItem.textContent = todoText;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  checkbox.addEventListener('change', () => {
    newListItem.classList.toggle('inactive', checkbox.checked);
    updateCheckedCounter();
  });

  newListItem.appendChild(checkbox);
  return newListItem;
};

// Функция добавления задачи
const addTodo = (todoText) => {
  todos.push(todoText);
  const newListItem = createListItem(todoText);
  list.appendChild(newListItem);
  totalCounter.textContent = todos.length;
};

// Обработчик отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Обработчик кнопки добавления задачи
button.addEventListener('click', () => {
  const todoText = input.value.trim();
  if (todoText) {
    addTodo(todoText);
    input.value = ''; // Очистка поля ввода
  }
});
