import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Grandpa from './compontents/Grandpa/Grandpa';
import Home from'./compontents/Home/Home';
import Orders from'./compontents/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[{
        path:'/',
        loader:()=>fetch('tshirt.json'),
        element:<Home></Home>
      },
      {
        path:'/orders',
        element:<Orders></Orders>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
    }

  ])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
