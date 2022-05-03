
import './App.scss';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar'
import Mainbody from './components/Mainbody';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='Appbody'>
        <Sidebar/>
        <Mainbody/>
      </div>
    </div>
  );
}

export default App;
