import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import QuizPage from "./components/QuizPage";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";
import ErrorPage from "./ErrorPage";
import Main from "./Main";



export const router = createBrowserRouter([
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
          path: '/quiz/:topicId',
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