import React from "react";
import {UserContext} from "./context/UserContext";
import NavigationBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import SignInForm from "./pages/SignInForm";

export default function App() {
    const [user, setUser] = React.useState<any>({
        id: '',
        username: '',
        email: '',
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
            <div>
                <NavigationBar/>
                <Routes>
                    <Route path={"/"} element={<SignInForm/>}/>
                </Routes>
            </div>
        </UserContext.Provider>
    );
};
