import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import {BounceLoader}from 'react-spinners'
import Headers from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import './Styles/style.css'

// const Loading = () =>{
//   return(
// <div><h1>Loading</h1></div>
//   )
// }



function App() {
  const [country, setCountry] = useState([])
  const [loading, isLoading] = useState(true)
  const [search, setSearch] = useState("")
  useEffect(()=>{
fetchCountry()
  },[])
  const fetchCountry = async() =>{
    const url = 'https://restcountries.eu/rest/v2/all'
    isLoading(true)
    try {
      const response = await axios.get(url)
      isLoading(false)
      setCountry(response.data)
    } catch (error) {
      isLoading(false)
      console.log(error)
    }
  }
  function Search(country){
return country.filter((country) => country.name.indexOf(search) > -1)
  }

  return (
    <div className="App">
     {loading? <div className="loader"><BounceLoader size={100} color='orange' /></div>: (
       <div>
         <Headers  data={country}/>
      <div id="country-filter">
        <input type="text" value={search} placeholder="Search Country" onChange={(event) => setSearch(event.target.value)}/>
      </div>
     <Main  data={Search(country)}/>
     <Footer/>
       </div>
     )}
    </div>
  );
}

export default App;
