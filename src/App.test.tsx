import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserDetails from './components/userDetails';
import QuesOne from './components/quesOne';

// Render App and Home page

test('Render App', () => {
  //verify if UI is ready or not
 const{ getByText,  getByLabelText} = render(<BrowserRouter> <App /></BrowserRouter>);
 getByText('Enter Your Details')
});

test('Render User Details Page', () => {
  //verify if UI is ready or not
 const{ getByText,  getByLabelText} = render(<BrowserRouter> <UserDetails /></BrowserRouter>);
 getByText('Question Type');
 getByText('Gender');
 getByText('Submit');
});

test('Render question 1 Page', () => {
  //verify if UI is ready or not
 const{ getByText,  getByTestId} = render(<BrowserRouter> <QuesOne /></BrowserRouter>);
 getByText('Question');
 getByTestId('question-1');
});
