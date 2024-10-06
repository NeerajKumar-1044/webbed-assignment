import Layout from "./Pages/Layout"
import Analysis from "./Pages/Analysis"
import Job from "./Pages/Job"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {path:"/", element:<Layout/>, children:[
    {path:"", element: <Analysis/>},
    {path:"Jobs", element: <Job/>},
  ]} 
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
