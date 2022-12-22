import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import { GamePage } from "../pages/game";
import { WelcomePage } from "../pages/welcome";
export{} //

export const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: 'wordle',
          element: <GamePage />
        },
        {
          path: 'welcome',
          element: <WelcomePage/>
        },
      ]
    },
  
  ])