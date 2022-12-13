const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownContent.style.display = 'none';

dropdownButton.addEventListener('click', () => {
  if (dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'flex';
  } else {
    dropdownContent.style.display = 'none';
  }
})