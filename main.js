'use strict';
const features = document.querySelector('#features');
const company = document.querySelector('#company');
const featuresList = document.querySelector('#featuresList');
const companyList = document.querySelector('#companyList');


features.addEventListener('click', () => {
  featuresList.classList.toggle('hidden');
});
company.addEventListener('click', () => {
  companyList.classList.toggle('hidden');
});

