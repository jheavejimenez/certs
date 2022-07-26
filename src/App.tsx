import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./Pages/Form";
import { Certificate } from "./Pages/Certificate";
import Approver from "./Pages/Approver";

export const App: React.FC<{}> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Form/>}/>
                <Route path={"certs"} element={<Certificate/>}/>
                <Route path={"approver"} element={<Approver/>}/>
            </Routes>
        </BrowserRouter>
    );
};
