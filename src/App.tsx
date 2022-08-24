import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form";
import Certificate from "./pages/Certificate";
import Approver from "./pages/Approver";
import NavigationBar from "./components/NavBar";
import SignInForm from "./pages/SignInForm";
import {UserContext} from "./context/UserContext";

export default function App() {
    const [user, setUser] = React.useState<any>({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                {/*<NavigationBar />*/}
                <Routes>
                    <Route path={"/"} element={<SignInForm/>}/>
                    <Route path={"certificate"} element={<Certificate/>}/>
                    <Route path={"approver"} element={<Approver/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};
