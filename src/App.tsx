import React from "react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Form from "./components/Form";

export const App: React.FC<{}> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Form />} />
            </Routes>
        </BrowserRouter>
    );
};
