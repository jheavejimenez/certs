import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form";
import  Certificate  from "./pages/Certificate";
import Approver from "./pages/Approver";
import NavigationBar from "./components/NavBar";
import SignInForm from "./pages/SignInForm";

export default function App() {
    return (
        <BrowserRouter>
            {/*<NavigationBar />*/}
            <Routes>
                <Route path={"/"} element={<SignInForm/>}/>
                <Route path={"certificate"} element={<Certificate/>}/>
                <Route path={"approver"} element={<Approver/>}/>
            </Routes>
        </BrowserRouter>
    );
};
