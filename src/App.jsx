import Homepage from "./Layouts/HomePage"
import Navbar from "./Components/NavBar"
import Profile from "./Layouts/Profile"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from "react-router-dom"
import Card from "./Layouts/Card"
import Payment from "./Layouts/Payment"
import Product from "./Layouts/Product"
import Category from "./Layouts/Category"
import Search from "./Layouts/Search"
import Notifications from "./Layouts/Notifications"
import Login from "./Layouts/Login"



function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navbar />} >
          <Route index element={<Homepage />} />
          <Route path = "/profile" element= {<Profile />} />
          <Route path = "/product/:id" element= {<Product />} />
          <Route path = "/category/:id" element= {<Category />} />
          <Route path="/search/:product" element = {<Search />} />
          <Route path = "/card" element= {<Card />} />
          <Route path = "/notifications" element= {<Notifications />} />
          <Route path = "/search" element= {<Profile />} />
          <Route path="payment" element = {<Payment />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
     )
}

export default App
