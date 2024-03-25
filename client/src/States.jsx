import { createContext, useContext, useEffect, useState } from "react";
import AdminService from "./services/AdminService";
import UserService from "./services/UserService";
import { adminApi } from "./apis/axios";
const Context = createContext();
export const States = ({ children }) => {
    const [signUp, setSignUp] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useState({});

    const GetUserDetails = async () => {
        if (localStorage.getItem('role') == 'ADMIN') {
        await AdminService.GetUser().then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.log(error);
        })
        }
        else if (localStorage.getItem("role") == 'USER') {
            await UserService.GetUser().then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }
    
    return (
        <Context.Provider
            value={{
                signUp, setSignUp,
                login, setLogin,
                user, setUser,
                GetUserDetails,

            }}>
            {children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);