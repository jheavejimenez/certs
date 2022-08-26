import {createContext} from "react";

type TUserContextType = {
    user: any;
    setUser: (user: any, name: any) => void;
}
export const UserContext = createContext<TUserContextType>({
    user: {
        id: '',
        username: ''
    },
    setUser: (user: any) => {}
});