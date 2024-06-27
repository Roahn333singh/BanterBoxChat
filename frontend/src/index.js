import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
    </ChakraProvider>
   
);

// ** for removing  CORS (Cross-Origin Resource Sharing) error while making call from frontend api to backened as they have different port we added proxy in frontened package.json

// we have install react-router-dom@5 version 5 for this project for routing purpose

// for using  react-router-dom we have to wrap up our app --> <App/> with <BrowserRouter>

// to fetch api we need package called as axios we have installed it befor writing fetchChat function in Chatpage.js page


//  password iDQmDWBiEqrLELmW

//  mongodb+srv://doubtnut333:iDQmDWBiEqrLELmW@cluster0.up6zon7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0