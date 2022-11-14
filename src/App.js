import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Routes';
function App() {
  
  return (
    <div data-theme="garden" className="max-w-screen-lg mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
