document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    setupForm();
    animateWelcomeText();
  });
  
  async function fetchMeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    return data.meals;
  }
  
  async function renderCards() {
    const appElement = document.getElementById('app');
    const meals = await fetchMeals();
  
    meals.forEach((meal) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      // Placeholder link for food image (replace with actual image URLs)
      image.src = meal.strMealThumb;
      image.alt = meal.strMeal;
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = meal.strMeal;
  
      const description = document.createElement('p');
      description.classList.add('card-description');
      description.textContent = meal.strInstructions.substring(0, 150) + '...';
  
      const checkBtn = document.createElement('a');
      checkBtn.classList.add('check-btn');
      checkBtn.textContent = 'Check Recipe';
      checkBtn.href = meal.strSource;
  
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(checkBtn);
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      appElement.appendChild(card);
    });
  }
  
  function setupForm() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Handle form submission logic (e.g., send data to server)
      alert('Booking submitted!');
    });
  }
  
  function animateWelcomeText() {
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.style.opacity = '1';
    welcomeText.style.transform = 'translateY(0)';
  }
  document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    setupForm();
    animateWelcomeText();
    setupTableBooking();
  });
  
  function setupTableBooking() {
    const bookTableBtn = document.getElementById('bookTableBtn');
    const bookingFormContainer = document.getElementById('bookingFormContainer');
  
    bookTableBtn.addEventListener('click', () => {
      bookingFormContainer.classList.toggle('visible');
      scrollToElement(bookingFormContainer);
    });
  
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Handle form submission logic (e.g., send data to server)
      alert('Table booked successfully!');
    });
  }
  
  function scrollToElement(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  