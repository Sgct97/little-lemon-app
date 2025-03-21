import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  test('renders the BookingForm heading', () => {
    // Mock props that BookingForm expects
    const availableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    
    // Render the BookingForm component
    render(
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );
    
    // Check for static text elements
    const nameLabel = screen.getByText("Name");
    const emailLabel = screen.getByText("Email");
    const phoneLabel = screen.getByText("Phone");
    const dateLabel = screen.getByText("Date");
    const submitButton = screen.getByText("Submit reservation");
    
    // Assert that these elements are in the document
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(phoneLabel).toBeInTheDocument();
    expect(dateLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
}); 