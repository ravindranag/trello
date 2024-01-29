import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import BoardPage from "./features/board/BoardPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <BoardPage />
      }
    ]
  }
])


const App = () => {
  return <RouterProvider router={router} />
}

export default App
