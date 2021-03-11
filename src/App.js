import "./styles.css";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Load from "./Load";
export default function App() {
  const [state, setState] = useState('start')

  function triggerLoad(event) {
    setState('load');
  }
  const [photo, setPhoto] = useState("");
  const clientId= "SCd8Kl1yM02DpS8zAd-voT40LZUaZJz3VqJDnn1TnPI";

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function changeResult(){
    setResult([]);
  }

  function handleSubmit(event) {
    
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=1&per_page=8&orientation=landscape&query=" + photo + "&client_id=" + clientId;
    axios.get(url).then((response) => {
      // console.log(response);
      setResult(response.data.results);
    });
  }
  return (
    <>
      <div className="App ">
        <div className="container">
          <br />
          <br />
          <h1 className="text-center">Image Search Engine</h1>
          <br />
          
          <div className="input-group">
              <input
                onChange={handleChange}
                className="form-control input-lg shadow-sm bg-body rounded "
                type="text"
                name="photo"
                placeholder="Search for photos"
              />
              <span className="input-group-btn input-space">
                <button
                  onClick={()=>{handleSubmit();triggerLoad();}}
                  type="submit"
                  className="btn btn-dark"
                >
                  <i className="fa fa-search"></i>
                </button>
              </span>
          </div>
          <br />

          <div>
            {state==="load" && <h3 class="search_term">Search results for "{photo}" :</h3>}
          </div>
        
          <div className="result">
            {result.map((image) => (
            <>
              <div className="card img-fluid">
                <img src={image.urls.thumb} alt="pic" />
          
              </div>
              
            </>
            ))}

          </div>
          <div className="align-center">
            {state === 'load' && <Load changeResult={changeResult} photo={photo} clientId={clientId}/>}
           
          </div>

            


   
        </div>
      </div>
    </>
  );
}
