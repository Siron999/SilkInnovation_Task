import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import axios from 'axios';
import UserContext from "../../context/UserContext";
import {useHistory} from 'react-router-dom';

export const LoginComponent = () => {
    //for initially storing formData on change
    const [formData, setFormData] = useState({
        field1: '',
        field2: ''
    });

    //final request that will be sent to server
    const [finalReqBody, setFinalReqBody] = useState({});

    //email/mobile validation error
    const [error, setError] = useState({
        msg: '',
        exists: false
    });

    //server error
    const [serverError, setServerError] = useState('');

    //to store the type of mobile
    const [mobileType, setMobileType] = useState('');

    const history = useHistory();

    const passwordRef = useRef();

    //to get value of user context
    const {setUserState} = useContext(UserContext);

    //toggle show/hide password
    const showPassword = (e) => {
        if (e.target.checked) {
            passwordRef.current.type = "text";
        } else {
            passwordRef.current.type = "password";
            console.log("changed to password")
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error.msg === '') {
            setError({...error, exists: false});
            try {
                //getting response from server
                const {data} = await axios.post("https://stagingapi.icash.com.np/api/login", finalReqBody, {headers: {"App-Authorizer": 647061697361}});

                //assigning the response to the context value
                setUserState({
                    token: data.access_token,
                    user: data.user,
                });

                //storing the token in local storage
                localStorage.setItem("auth-token", data.access_token);

                //storing the token in local storage
                localStorage.setItem("user", JSON.stringify(data.user));

                history.push("/");
            } catch (e) {
                //catching the server error and assigning to state
                setServerError(e.message);
            }
        } else {
            //assigning validation error to its state
            setError({...error, exists: true});
        }
    }

    //useEffect will run every time formData changes and every time the validation functions will run to check the type of case(i.e mobile/email and password/pin)
    useEffect(() => {
        //checking if it is email then if true adding parameter email to final reqbody
        if (validateEmail()) {
            finalReqBody.email=formData.field1;
        } else {
            delete finalReqBody.email;
        }

        //checking if it is mobile then if true adding parameter mobile to final reqbody
        if (validateMobile()) {
            //finding out the type of mobile number
            if (formData.field1.startsWith("984") || formData.field1.startsWith("986")) {
                setMobileType("NTC Prepaid");
            }
            if (formData.field1.startsWith("985")) {
                setMobileType("NTC PostPaid");
            }
            if (formData.field1.startsWith("974") || formData.field1.startsWith("975")) {
                setMobileType("NTC CDMA");
            }
            if (formData.field1.startsWith("980") || formData.field1.startsWith("981") || formData.field1.startsWith("982")) {
                setMobileType("NCELL");
            }
            if (formData.field1.startsWith("988") || formData.field1.startsWith("961") || formData.field1.startsWith("962")) {
                setMobileType("SmartCell");
            }
            if (formData.field1.startsWith("972")) {
                setMobileType("UTL");
            }
            finalReqBody.mobile_no=formData.field1;
        } else {
            delete finalReqBody.mobile_no;
            setMobileType('');
        }

        //if both mobile and email are invalid error is set
        if (!validateMobile() && !validateEmail()) {
            setError({...error, msg: 'Error : Enter Valid Email/Mobile'})
        } else {
            setError({...error, msg: '', exists: false});
        }

        //checking if it is a pin then if true adding parameter pin to final reqbody else adding parameter password
        if (validatePin()) {
            delete finalReqBody.password;
            finalReqBody.pin=formData.field2;
        } else {
            finalReqBody.password=formData.field2;
            delete finalReqBody.pin;
        }

    }, [formData]);

    //if token exists in local storage, redirecting the user to the dashboard
    useEffect(()=>{
        if(localStorage.getItem("auth-token")){
            history.push("/");
        }
    },[]);

    const validateEmail = () => {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailCheck.test(formData.field1.toLowerCase());
    }

    const validateMobile = () => {
        const mobileCheck = /^\d{10}$/;
        return mobileCheck.test(formData.field1.toLowerCase());
    }

    const validatePin = () => {
        const pinCheck = /^\d{4}$/;
        return pinCheck.test(formData.field2.toLowerCase());
    }

    return (
        <>
            <h2 className="mb-3 text-center ">LOGIN</h2>
            {(serverError !== '') ?
                <p className="mt-2" style={{color: "red"}}>{serverError}</p>
                : null}
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <Label><h5>Email/Mobile</h5></Label>
                    <Input type="text" value={formData.field1} name="field1" onChange={(e) => handleChange(e)}
                           required/>
                    {(error.exists) ?
                        <p className="mt-2" style={{color: "red"}}>{error.msg}</p>
                        : null}
                    {(mobileType !== '') ?
                        <p className="mt-2" style={{color: "blue"}}>{mobileType}</p>
                        : null}
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label><h5>Password/Pin</h5></Label>
                    <Row>
                        <Col md="8"><Input type="password" innerRef={passwordRef} value={formData.field2} name="field2"
                                           onChange={(e) => handleChange(e)} required/></Col>
                        <Col md="4">
                            <Input type="checkbox" className="mx-2" onChange={(e) => showPassword(e)}/>
                            <Label>Show Password</Label>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" className="mt-3" type="submit">Submit</Button>
                </FormGroup>
            </Form>
        </>
    )
}