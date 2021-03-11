import React, { useState } from "react";
import axios from "axios";

const Load = ({changeResult,photo,clientId}) => {
  
  const [result1, setResult1] = useState([]);
  const[start,setStart]=useState(2);
  

  function handleSubmit(event) {
    changeResult();
    const url =
      "https://api.unsplash.com/search/photos?page="+start+"&per_page=8&orientation=landscape&query=" +
      photo +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      // console.log(response);
      setResult1(response.data.results);
      
    });
    setStart(start+1);
  }

  return (

    <div >
      <br />
      <div className="result">
              {result1.map((image) => (
              <>
                <div className="card img-fluid">
                  <img src={image.urls.thumb} alt="pic" />
            
                </div>
                
              </>
              ))}
      </div>
      <div className="mx-auto">
        <br />
      <button type="submit" onClick={() => handleSubmit()} class="btn btn-dark" id="load-button">Load more</button>
      </div>
    </div>
  );
};

export default Load;