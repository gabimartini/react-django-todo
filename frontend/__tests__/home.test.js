import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import Layout from '../components/layout';
import Form from "../components/form";
import AddTask from '../pages/add';
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders a Layout', () => {
    render(<Layout />);
    const navbar = screen.getByRole('nav');
    const navbarlink = screen.getByRole('link', {name: 'Tasks'});

    expect(navbar).toBeInTheDocument();
    expect(navbarlink).toBeInTheDocument();
  })
})

describe('Home', () => {
  it('renders a home page', () => {
    render(<Home />);
    const button = screen.getByRole('link', {name: 'Add new task'})
    expect(screen.getByText(`Home page`)).toBeInTheDocument()
    expect(button).toBeInTheDocument();
  })
})

test('Form', () => {
    render(<AddTask />);
    const title = screen.getByLabelText('Title')
    const button = screen.getByRole('button')
    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    
  });
