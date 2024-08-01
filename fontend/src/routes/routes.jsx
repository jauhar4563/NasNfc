import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Protect from "./protect";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CompanyForm from "../pages/CompanyForm";
import CompanyDetails from "../pages/CompanyDetails";
import Congratulations from "../pages/SuccessPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
    //   <Protect>
        <App />
    //   </Protect>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/add-company',
        element:<CompanyForm />
      },
      {
        path:"/congratulations/:nfcCode",
         element:<Congratulations />
      }
    ],
  },
  {
    path:'/:nfcCode',
    element:<CompanyDetails/>
  },
  {
    path: "/login",
    element: <Login />,
  },
//   {
//     path: "/signup",
//     element: <Login />,
    
//   },
]);

export default appRouter;