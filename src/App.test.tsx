import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserDetails from './components/userDetails';
import QuesOne from './components/quesOne';
import QuesFive from './components/quesFive';
import QuesFour from './components/quesFour';
import QuesThree from './components/quesThree';
import QuesTwo from './components/quesTwo';

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

test('Render question 3 Page', () => {
  //verify if UI is ready or not
 const{ getByText,  getByTestId} = render(<BrowserRouter> <QuesTwo /></BrowserRouter>);
 getByText('Question');
 getByTestId('question-2');
});

test('Render question 3 Page', () => {
  //verify if UI is ready or questh
 const{ getByText,  getByTestId} = render(<BrowserRouter> <QuesThree /></BrowserRouter>);
 getByText('Question');
 getByTestId('question-3');
});

test('Render question 4 Page', () => {
  //verify if UI is ready or not
 const{ getByText,  getByTestId} = render(<BrowserRouter> <QuesFour /></BrowserRouter>);
 getByText('Question');
 getByTestId('question-4');
});

test('Render question 5 Page', () => {
  //verify if UI is ready or not
 const{ getByText,  getByTestId} = render(<BrowserRouter> <QuesFive /></BrowserRouter>);
 getByText('Question');
 getByTestId('question-5');
});
