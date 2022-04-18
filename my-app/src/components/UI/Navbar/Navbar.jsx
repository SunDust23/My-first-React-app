import React, { useContext } from 'react';
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';
import MyButton from '../Button/MyButton';
import { AuthContext } from '../../../context/context';

function Navbar() {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar}>

            <MyButton onClick={logout}>
                Выйти
            </MyButton>

            <div className={classes.navbar__links}>

                <Link to="/about">О сайте</Link>

                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar;
