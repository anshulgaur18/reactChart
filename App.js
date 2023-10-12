import { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
import {Chart as Chartjs} from "chart.js/auto";

function App() {

const [arrest,setArrest] = useState(null);

useEffect(()=>{
getData();
},[])

async function getData(){
const data = await fetch ("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
const json = await data.json();
console.log(json)
setArrest({
  labels: json.data.map((year)=>year.data_year),
  datasets: [{
    label: 'Crime',
    data:json.data.map((burglary)=>burglary.Burglary),
    
  }]
});
}

  return (
    <div className="App">
{
  arrest!==null?(
    <div style={{width:"800px",margin:"100px"}}>
    <Line data={arrest}/>
    </div>
   
  ):(
    <div><h1>Please Wait......</h1></div>
  )
}
    </div>
  );
}

export default App;
