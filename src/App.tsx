import React from "react";
import {UserContext} from "./context/UserContext";
import NavigationBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import SignUpForm from "./pages/SignInForm";
import Form from "./pages/Form";
import Certificate from "./pages/Certificate";
import Approver from "./pages/Approver";

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
                    <Route path={"/"} element={<SignUpForm />}/>
                    <Route path={"/request-certificate"} element={<Form />} />
                    {/*<Route path={"/confirm-signup"} element={<ConfirmSignUp />} />*/}
                    <Route path={"/certificates"} element={<Certificate />} />
                    <Route path={"/admin"} element={<Approver />} />
                </Routes>
            </div>
        </UserContext.Provider>
    );
};
