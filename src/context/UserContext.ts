import {createContext} from "react";

type TUserContextType = {
    user: {
        id: string,
        name: string,
    },
    setUser: (user: {id: string, name: string}) => void,
}
export const UserContext = createContext<TUserContextType>({
    user: {
        id: '',
        name: '',
    },
    setUser: (user: any) => {},
});
