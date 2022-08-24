import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Certificate from "./pages/Certificate";
import Approver from "./pages/Approver";
import SignInForm from "./pages/SignInForm";
import {UserContext} from "./context/UserContext";

export default function App() {
    const [user, setUser] = React.useState<any>({
        id: '',
        username: '',
        email: '',
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
        </UserContext.Provider>
    );
};
