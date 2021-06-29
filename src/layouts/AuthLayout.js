import React from 'react';
import {Container} from "reactstrap";
import './Layout.css';
import {LoginComponent} from "../components/login/Login";

export const AuthLayout = () => {
    return (
        <>
            <Container className='auth-container mt-4 p-4'>
                <LoginComponent/>
            </Container>
        </>
    )
}