import { Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "./Header"

const RootLayout = () => {
  return (
    <Stack
      width='100%'
      minHeight='100vh'
      bgcolor='#fff'
    >
      <Header />
      <Outlet />
    </Stack>
  )
}

export default RootLayout
