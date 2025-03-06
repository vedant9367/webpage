// Data for languages and currencies
const languages = [
    'English', 'Español', 'Français',
    'Deutsch', 'Italiano', 'Português',
    'Русский', '中文', '日本語'
  ];
  
//   const currencies = [
//     'USD', 'EUR', 'GBP', 'JPY',
//     'AUD', 'CAD', 'CHF', 'CNY',
//     'SEK', 'NZD', 'MXN', 'SGD'
//   ];
  
  // Function to open the modal
  function openModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const languagesGrid = document.querySelector('.languages-grid');
    // const currenciesGrid = document.querySelector('.currencies-grid');
  
    // Clear existing grid items
    languagesGrid.innerHTML = '';
    // currenciesGrid.innerHTML = '';
  
    // Populate languages grid
    languages.forEach(language => {
      const div = document.createElement('div');
      div.textContent = language;
      div.addEventListener('click', () => {
        alert('Selected Language: ' + language);
        closeModal();
      });
      languagesGrid.appendChild(div);
    });
  
    // Populate currencies grid
    // currencies.forEach(currency => {
    //   const div = document.createElement('div');
    //   div.textContent = currency;
    //   div.addEventListener('click', () => {
    //     alert('Selected Currency: ' + currency);
    //     closeModal();
    //   });
    //   currenciesGrid.appendChild(div);
    // });
  
    // Display the modal
    modalOverlay.style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'none';
  }
  
  // Event listeners for language and currency selectors
  document.getElementById('languageSelector').addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
  });
  
//   document.getElementById('currencySelector').addEventListener('click', (event) => {
//     event.preventDefault();
//     openModal();
//   });
  
  // Event listener for closing the modal when clicking the close button
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    closeModal();
  });
  
  // Event listener for closing the modal when clicking outside the modal content
  document.getElementById('modalOverlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('modalOverlay')) {
      closeModal();
    }
  });
  