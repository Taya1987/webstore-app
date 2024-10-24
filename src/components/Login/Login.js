import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  //creating state variables for login/username
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username) setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div>
      {!loggedIn ? (
        <div className={styles.login__name}>
          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>
            {" "}
            <button
              onClick={handleLogin}
              className={`${styles.buttons__btn} ${styles.buttons__add}`}
            >
              Login
            </button>{" "}
          </div>
        </div>
      ) : (
        <div className={styles.welcome__message}>
          {/*welcome message when user logs in HEADER*/}
          <h1 className={styles.welcome__message}>Welcome {username}!</h1>

          <div>
            {/*handle log out*/}
            <button onClick={handleLogout} className={styles.buttons__logout}>
              Logout
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
