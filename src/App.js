import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routs/Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
