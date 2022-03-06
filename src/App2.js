import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){

  let [data ,setdata] = useState([])
  let [name,setname] = useState("asad")
  
  console.log("satate")

 
  useEffect(()=>{
    console.log("run agin ")
  })  
   //rUN ON EVERY sTATE  uPDATE


  useEffect(()=>{
  // axios.delete("https://jsonplaceholder.typicode.com/todos",{
  //   id: 1
  // })
  // axios.post("https://newsapi.org/v2/everything?q=tesla&from=$now.year-$now.month-$now.day&sortBy=publishedAt&apiKey=1866ed19591c4d99880992a3ca614497",{
  //   name: "shhshshsh"
  // })
   axios.get("https://newsapi.org/v2/everything?q=tesla&from=$now.year-$now.month-$now.day&sortBy=publishedAt&apiKey=1866ed19591c4d99880992a3ca614497")
  .then((snap)=>{
    console.log(snap)
    const data1 = snap.data["articles"]
    console.log(data1)
    var getdata =[]
    data1.map((v,i)=>{
      console.log(v)
      getdata.push(v)

    })
    
    console.log(getdata)

    
   
  
  })
  },[]) 
  console.log(data)  //component did Mount 
  
  useEffect(()=>{
    console.log("data update")
  },[name])   

  return(
    
    <div>
      <h1>Hello</h1>
      {name}
      <button onClick={()=>setdata(++data)}>Change value</button>
{data}
      <button onClick={()=>setname("omer")}>Change value 2</button>

    </div>
  )
}

export default App;