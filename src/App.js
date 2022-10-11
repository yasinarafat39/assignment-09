

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import './App.css';
import Topics from './components/Topics';
import ErrorPage from './ErrorPage';
import Main from './Main';
import Statistics from './components/Statistics';
import QuizPage from './components/QuizPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      {
        path: '/',
        element: <Topics />,
      },
      {
        path: '/topics',
        element: <Topics />,
      },
      {
        path: '/topic/:topicId',
        element: <QuizPage />,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`) 
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/statistics',
        element: <Statistics />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
