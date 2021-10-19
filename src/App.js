import "./App.css";

import app from "./firebase";
import React, { Component } from "react";
import { getMessaging, getToken } from "firebase/messaging";

export default class App extends Component {
  componentDidMount() {
    const messaging = getMessaging(app);

    console.log(messaging);

    getToken(messaging, {
      vapidKey:
        "BLlXu8xBAdIUSLGXLBET_eSF1v53PsP45bHCkHq2xyhZaB-1bPfGEiobvCUEjHmwolgySCA6EHJHAckiXihy8Y0",
    })
      .then((currentToken) => {
        console.log("Get Token promise satisfied");
        if (currentToken) {
          console.log(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  }
  render() {
    return (
      <div className="App">
        {" "}
        <h1>HELLo</h1>
      </div>
    );
  }
}
