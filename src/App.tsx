import React from "react";
import {UserContext} from "./context/UserContext";

export default function App() {
    const [user, setUser] = React.useState<any>({
        id: '',
        username: '',
        email: '',
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
        </UserContext.Provider>
    );
};
