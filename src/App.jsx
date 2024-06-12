
import Riyadh from "./Pages/riyadh"
import AbuDhabi from "./Pages/abu-dhabi"
import Cairo from "./Pages/cairo"
import London from "./Pages/london"
import Paris from "./Pages/paris"



import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Riyadh/>
  },
  {
    path: "/abu-dhabi",
    element: <AbuDhabi/>
  },
  {
    path: "/cairo",
    element: <Cairo/>
  },
  {
    path: "/london",
    element: <London/>
  },
  {
    path: "/paris",
    element: <Paris/>
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  )
}

export default App
