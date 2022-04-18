import React, { useContext } from "react";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";
import {AuthContext} from "../context/context";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>
                <form onSubmit={login}>
                    <h3>Войти в систему</h3>
                    <MyInput type="text" placeholder="Введите логин" />
                    <MyInput type="password" placeholder="Введите пароль" />
                    <MyButton>Войти</MyButton>
                </form>
            </h1>
        </div>
    );
};

export default Login;