import React from "react";
import {UserContext} from "./context/UserContext";
import NavigationBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import Form from "./pages/Form";
import Certificate from "./pages/Certificate";
import Approver from "./pages/Approver";
import OTP from "./pages/OTP";

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
                    <Route path={"/"} element={<SignInForm />}/>
                    <Route path={"/request-certificate"} element={<Form />} />
                    <Route path={"confirmation-code"} element={<OTP />} />
                    <Route path={"/certificates"} element={<Certificate />} />
                    <Route path={"/admin"} element={<Approver />} />
                </Routes>
            </div>
        </UserContext.Provider>
    );
};
