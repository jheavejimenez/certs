import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./Pages/Form";
import Certificate from "./Pages/Certificate";

export const App: React.FC<{}> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Form/>}/>
                <Route path={"certs"} element={<Certificate/>}/>
            </Routes>
        </BrowserRouter>
    );
};
