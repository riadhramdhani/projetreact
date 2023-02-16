
import './App.css';
import Navbar from './navbar';
import Card from './card';
import  Modal from'./modal';
import  Data from'./data';


function App() {
  return (
    <div className="App">
      
        hello
        <>
        {/* <Navbar /> */}
        {Data.map((el)=><div key={el.id}><Card product={el}/></div>)}
        
        {/* <Modal /> */}
        {/* <Data  /> */}
        
        </>
        
        
     
        
      
    </div>
  );
}

export default App;
