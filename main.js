'use strict';
const features = document.querySelector('#features');
const company = document.querySelector('#company');
const featuresList = document.querySelector('#featuresList');
const companyList = document.querySelector('#companyList');
const featuresArrow = document.querySelector('#featuresArrow');
const companyArrow = document.querySelector('#companyArrow');


features.addEventListener('click', () => {
  featuresList.classList.toggle('hidden');
  let arrowCheck = String(featuresArrow.src);
  if (arrowCheck.includes('down')) {
    featuresArrow.src = './images/icon-arrow-up.svg';
  } else {
    featuresArrow.src = './images/icon-arrow-down.svg';
  }
});
company.addEventListener('click', () => {
  companyList.classList.toggle('hidden');
  let arrowCheck = String(companyArrow.src);
  if (arrowCheck.includes('down')) {
    companyArrow.src = './images/icon-arrow-up.svg';
  } else {
    companyArrow.src = './images/icon-arrow-down.svg';
  }
});

