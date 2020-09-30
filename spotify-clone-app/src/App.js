import React, { useEffect  } from "react";
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
  const [{token }, dispatch] = useDataLayerValue();

  //Run Code Based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //To cklear the accessToken from the URL-- for security
    window.location.hash = "";

    const _token = hash.access_token;
    //Sanity Check if there is a token
    //Just set it as the Token afterall
    if(_token){
      //give the access token to spotify WebAPI

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

//if there is a token, Log me into Spotify, Otherwise display the Login Page 
  return (
    <div className="app">
      {
        token ? (
         <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
