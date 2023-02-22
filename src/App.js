import React,{useEffect, useState} from 'react';
import './App.css';
import Navbar from './navbar';
import Card from './card';
import  Modal from'./Modal';
import  Data from'./data';
import Login from './Login';



function App() {


  
  var product=JSON.parse(localStorage.getItem("poste"))
      Data.push(product)
      var producteupdate=JSON.parse(localStorage.getItem("productes"))
      if(producteupdate.id===1){
        Data[0]=producteupdate

      }else if(producteupdate.id===2){
        Data[1]=producteupdate

      }else if(producteupdate.id===3){
        Data[2]=producteupdate

      }else if(producteupdate.id===4){
        Data[3]=producteupdate

      }
      else if(producteupdate.id===5){
        Data[4]=producteupdate

      }
      
      const [click,setClick]=useState(false)
  return (
    <>
    <div className="App">
      
    {click==true? <button onClick={()=>setClick(false)}>logout</button>:null}
       {click==false ?<Login click={click} setClick={setClick}/>:null}
    {click==true ? 
    Data.map((el)=>
    <div key={el.id}>
      <Card product={el} />
     </div>
    ) :null}
        
       
        
        
        <Modal/>
    </div>
    

    </>
  );
}

export default App;
