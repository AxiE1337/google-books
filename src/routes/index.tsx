import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import App from './App'
import BookPage from './BookPage'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/book/:id',
        element: <BookPage />,
      },
    ],
  },
])

export default router
