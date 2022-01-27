import React from "react";

import Navbar from "./components/navbar/navbar.component";
import Cards from "./components/cards/cards.component";

import { posts } from "./data.js";

import "./App.css";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [user, setUser] = React.useState("");

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Cards key={post.id} post={post} />
          ))}
          <span className="username">{username}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
