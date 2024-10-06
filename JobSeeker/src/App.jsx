import Layout from "./Pages/Layout"
import Analysis from "./Pages/Analysis"
import Job from "./Pages/Job"
import Jobdescription from "./Pages/Jobdescription"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {path:"/", element:<Layout/>, children:[
    {path:"analysis", element: <Analysis/>},
    {path:"Jobs", element: <Job/>},
    // {path:"jobdescription", element: <Jobdescription/>}
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
