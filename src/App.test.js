import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';


test('renderizar um texto do footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/danielle/i);
  expect(linkElement).toBeInTheDocument();
});











