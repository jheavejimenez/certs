import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form";
import  Certificate  from "./pages/Certificate";
import Approver from "./pages/Approver";

export const App: React.FC<{}> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Form/>}/>
                <Route path={"certificate"} element={<Certificate/>}/>
                <Route path={"approver"} element={<Approver/>}/>
            </Routes>
        </BrowserRouter>
    );
};
