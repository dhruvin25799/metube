import React from "react";
import { createRoot } from "react-dom/client";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/theme-context";
import { makeServer } from "./server";
import { ModalProvider } from "./context/modal-context";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { UserDataProvider } from "./context/userdata-context";

// Call make Server
makeServer();
const container = document.getElementById("root");
//const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <UserDataProvider>
//         <BrowserRouter>
//           <ThemeProvider>
//             <ModalProvider>
//               <App />
//             </ModalProvider>
//           </ThemeProvider>
//         </BrowserRouter>
//       </UserDataProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </ThemeProvider>
        </BrowserRouter>
      </UserDataProvider>
    </AuthProvider>
  </React.StrictMode>
, container);
