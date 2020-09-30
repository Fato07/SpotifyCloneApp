//

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "a71b96402199420e9abfa83da81e2eac";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  
  //This is to get the access Token from the Url
  export const getTokenFromUrl = () => {
      
      //goes to the location of the Url where there is a #
      //And then gets the first substring and split at the &
      return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
          //e.g accessToken=mysuperscretKey&name=sFathin
          //split is at the part of the "="
          let parts = item.split("=");

          //grab the accessToken since its parts[0]
          initial[parts[0]] = decodeURIComponent(parts[1]);
          return initial;

      }, {});
  }

  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;