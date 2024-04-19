import * as React from 'react';
//import * as ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import QuestionList from './QuestionList';

const Welcome = () => {
  return (
    <div className='container'>
      <h1>Hello World! Welcome to CodeGym.</h1>
      <p className="lead">this is the first lecture.</p>
      <QuestionList />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('welcome'));
  //const root = ReactDOM.createRoot(document.getElementById('welcome'));
  root.render(
    <React.StrictMode>
       <Welcome />
    </React.StrictMode>
  );
})

export default Welcome;