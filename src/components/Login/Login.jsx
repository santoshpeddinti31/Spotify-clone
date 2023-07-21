import React from "react";
import "../Login/Login.css";
export default function Login() {
  const handleClick = () => {
    const client_id = "d902bf7f52fc46fd88e456693479d741";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      //users
      "user-read-email",
      "user-read-private",
      //spotify connect
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      //Listening History
      "user-read-recently-played",
      // "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="logo">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  );
}
