

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog';
import './App.css';
import Topics from './components/Topics';
import ErrorPage from './ErrorPage';
import Main from './Main';
import Statistics from './components/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Topics />,
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        }
      },
      {
        path: '/topics',
        element: <Topics />,
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        }
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
