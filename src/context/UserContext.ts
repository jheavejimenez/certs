import {createContext} from "react";

type TUserContextType = {
    user: any;
    setUser: (user: any) => void;
}
export const UserContext = createContext<TUserContextType>({
    user: {
        id: null,
        username: ''
    },
    setUser: (user: any) => {}
});