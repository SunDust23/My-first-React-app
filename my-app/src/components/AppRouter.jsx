import React, { useContext } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Error from '../pages/Error';
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />

                )}
                {/* <Route path="*" element={<Error />} /> */}
                <Route path="*" element={<Navigate to="/posts" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />

                )}
                {/* <Route path="*" element={<Login />} />  */}
                <Route path="*" element={<Navigate to="/login" />}
                />
            </Routes>
    );
};

export default AppRouter;