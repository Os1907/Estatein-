import { RouterProvider, createHashRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import ContextContianer from "./components/Context/Scroll"
import About from "./components/About/About"
import Properties from "./components/Properties/Properties"
import Product from "./components/Product/Product"
import Service from "./components/Service/Service"
import NotFound from "./components/NotFound/NotFound"
import Contact from "./components/Contact/Contact"


function App() {

  const routes = createHashRouter([
    { path: "/" , element : <Layout/> , children: [
      {index : true , element: <Home/>},
      {path: 'home', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'properties', element: <Properties/>},
      {path: 'product', element: <Product/>},
      {path: 'service', element: <Service/>},
      {path: 'contact', element: <Contact/>},
      
      {path: '*', element: <NotFound/>},
    ]}
  ])
  return (
    <>
          <ContextContianer>
      <RouterProvider router={routes} />
      </ContextContianer>


      
    </>
  )
}

export default App
