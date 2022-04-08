import { render, screen } from '@testing-library/react';
import Login from './pages/Login';
import Create from './pages/Create';
import Form from './components/Form';
import Footer from './components/Footer';
import Header from './components/Header';


test('renderizar o título do login', () => {
  render(<Login />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renderizar um texto do cadastro', () => {
  render(<Create />);
  const linkElement = screen.getByText(/Cadastro/i);
  expect(linkElement).toBeInTheDocument();
});

test('renderizar um texto do form', () => {
  render(<Form />);
  const linkElement = screen.getByLabelText("Nome Completo");
  expect(linkElement).toBeInTheDocument();
  
});

test('renderizar um texto do footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/danielle/i);
  expect(linkElement).toBeInTheDocument();
});

test('renderizar um texto do header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Lista de Clientes/i);
  expect(linkElement).toBeInTheDocument();
});

// test('verificar o tipo do botão', () => {
//   render(<Form />);
//   const linkElement = screen.getByText('Enviar');
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveAtributte('type', 'submit');
// });







