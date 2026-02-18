'use strict';

// write code here

const list = document.querySelector('ul');
const items = [...document.querySelectorAll('li')];

items.sort((a, b) => {
  const getNumericSalary = (el) => {
    return parseFloat(el.dataset.salary.replace(/[^0-9.-]+/g, ''));
  };

  return getNumericSalary(a) - getNumericSalary(b);
});

items.forEach((item) => list.appendChild(item));
