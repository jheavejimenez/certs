import React from "react";
import {UserContext} from "./context/UserContext";
import NavigationBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import Form from "./pages/Form";
import Certificate from "./pages/Certificate";
import Approver from "./pages/Approver";
import Dashboard from "./pages/Dashboard";
import OTP from "./pages/OTP";
import { DidContext } from "./context/DidContext";

export default function App() {
    const [user, setUser] = React.useState<any>({
        id: '',
        username: '',
        email: '',
    });
    const [did, setDid] = React.useState<any>({did: ''});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <DidContext.Provider value={{did, setDid}}>
                <div>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path={"/sign-in"} element={<SignInForm/>}/>
                        <Route path={"/request-certificate"} element={<Form/>}/>
                        <Route path={"confirmation-code"} element={<OTP/>}/>
                        <Route path={"/certificates"} element={<Certificate/>}/>
                        <Route path={"/admin"} element={<Approver/>}/>
                    </Routes>
                </div>
            </DidContext.Provider>
        </UserContext.Provider>
    );
};
