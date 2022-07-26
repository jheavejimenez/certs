import React from "react";

export interface IAppProps {
    
}
export const App: React.FC<{IAppProps: any}> = props => {
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    );
};
