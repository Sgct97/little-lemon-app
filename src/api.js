// API functions for the Little Lemon booking system

// Function to generate random times for a given date
const fetchAPI = (date) => {
  // In a real app, this would fetch from an API endpoint
  // For this exercise, we'll simulate available times based on the date
  
  // Convert the date string to a Date object if it's not already
  const selectedDate = date instanceof Date ? date : new Date(date);
  
  // Get day of week (0-6, where 0 is Sunday)
  const dayOfWeek = selectedDate.getDay();
  
  // Base times available for all days
  let availableTimes = ['17:00', '18:00', '19:00', '20:00'];
  
  // Add more times for weekends
  if (dayOfWeek === 5 || dayOfWeek === 6) { // Friday or Saturday
    availableTimes = [...availableTimes, '21:00', '22:00'];
  }
  
  // If it's a Monday, fewer times available
  if (dayOfWeek === 1) { // Monday
    availableTimes = availableTimes.filter((_, index) => index % 2 === 0);
  }
  
  // Use the date itself to add some variability
  const day = selectedDate.getDate();
  if (day % 2 === 0) { // Even days have a lunch slot
    availableTimes.unshift('12:00');
  }
  if (day % 3 === 0) { // Every third day has a 13:00 slot
    availableTimes.unshift('13:00');
  }
  
  return availableTimes;
};

// Function to simulate submitting the form
const submitAPI = (formData) => {
  // In a real app, this would submit to an API endpoint
  // For this exercise, we'll return true to simulate a successful submission
  console.log('Form submitted:', formData);
  
  // Simulate a small chance of failure (5%)
  const randomSuccess = Math.random() < 0.95;
  return randomSuccess;
};

export { fetchAPI, submitAPI }; 