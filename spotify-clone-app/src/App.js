import React, { useEffect, useState  } from "react";
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import {useDataLayerValue} from './DataLayer'

//Super object for interaction between the reactApp and spotify
//Creating an instance of Spotify
const spotify = new SpotifyWebApi();

//BEM Convention for Naming
function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  //Run Code Based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //To cklear the accessToken from the URL-- for security
    window.location.hash = "";

    const _token = hash.access_token;
    //Sanity Check if there is a token
    //Just set it as the Token afterall
    if(_token){
      setToken(_token)
      //give the access token to spotify WebAPI
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    }
    console.log("my Token is ", hash.access_token);
    console.log('User', user);
  }, []);


//if there is a token, Log me into Spotify, Otherwise display the Login Page 
  return (
    <div className="app">
      {
        token ? (
         <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
