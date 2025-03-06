// Get the dropdown button and menu
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle the dropdown menu on button click
dropdownButton.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('#dropdownButton') && !event.target.matches('.dropdown-content')) {
    dropdownMenu.style.display = 'none';
  }
});
