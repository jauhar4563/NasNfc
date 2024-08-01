import './App.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
       <div  className="flex justify-start  gap-2 p-10 pl-16">
          <img onClick={()=>navigate('/')} src="https://nasscript.com/static/media/Nlogo_black_s.7e657e079d58d8b9380094c8b21ca57d.svg" className='h-10 cursor-pointer w-10' alt="" />
            <p onClick={()=>navigate('/')} className="text-3xl font-semibold cursor-pointer">NasscriptNFC</p>
        </div>
      <Outlet />
    </div>
  );
}

export default App;
