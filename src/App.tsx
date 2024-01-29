import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import HomePage from "./features/home/HomePage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
])


const App = () => {
  return <RouterProvider router={router} />
}

export default App
