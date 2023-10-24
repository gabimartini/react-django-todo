import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Tasks from '../pages/tasks/index.js'

test('Tasks', () => {
    render(<Tasks />);
    const button = screen.getByRole('button')
    const title = screen.getByRole('list')
    expect(button).toBeInTheDocument()
    expect(title).toBeInTheDocument()    
  });