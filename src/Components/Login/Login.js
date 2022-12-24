import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../../src/Style/Login/Login.scss';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput] = useState({
        password: '',
        confirmPassword: ''
    });

    /* Google SignIn */
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    /* SignIn with email & password */
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    /* Forget password */
    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
    );

    /* redirect form */
    let from = location?.state?.from?.pathname || "/";

    /* after user login then get the token then navigate  */
    if (user) {
        navigate(from, { replace: true });
    } 

    if (googleUser) {
        return (
            navigate('/home')
        );
    }

    if (signInUser) {
        return (
            navigate('/home')
        );
    }

    if (signInLoading || googleLoading || resetSending) {
        return <div className='spiner_container'>
            <img className='spiner_gif' src="https://i.ibb.co/HV59wsq/giphy.gif" alt="spiner" />
        </div>;
    }

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value.trim();
        const passwordInputFieldName = event.target.name;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log('hello', email, password, confirmPassword);

        //for password 
        if (password) {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-10])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{10,}/;

            const passwordLength = password.length;
            const uppercasePassword = uppercaseRegExp.test(password);
            const lowercasePassword = lowercaseRegExp.test(password);
            const digitsPassword = digitsRegExp.test(password);
            const specialCharPassword = specialCharRegExp.test(password);
            const minLengthPassword = minLengthRegExp.test(password);

            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "Password is empty";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 10 characters";
            } else {
                errMsg = "";
            }
            setPasswordErr(errMsg);
        }


        // for confirm password
        if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

            if (passwordInput.confirmPassword !== passwordInput.password) {
                setConfirmPasswordError("Confirm password is not matched");
            } else {
                setConfirmPasswordError("");
            }
        }

        await signInWithEmailAndPassword(email, password);
        /* store token in localStorage */
        const { data } = await axios.post('http://localhost:5000/login', { email });
        // console.log(data);
        if(data){
            localStorage.setItem('accessToken', data.accessToken);
        }
        event.target.reset();
        // navigate(from, { replace: true });
    }

    const handlePasswordReset = async (event) => {
        event.preventDefault();
        const success = await sendPasswordResetEmail(
            email
        );
        if (success) {
            toast('Sent email');
        }
    }

    return (
        <div>
            <section className="login_section">
                <div className='container'>
                    <div className="row">
                        <form className='login_form' onSubmit={handleLoginFormSubmit}>
                            <h2 className='text-left login_form_title'>Please Login</h2>

                            <div className="input_group">
                                <label for="email" className="login_form_label">Email address</label>
                                <input value={email}
                                    onChange={(event) => setEmail(event.target.value)} type="email" className="login_form_input" name='email' id="email" aria-describedby="emailHelp" required />
                            </div>

                            <div className="input_group">
                                <label for="password" className="login_form_label ">Password</label>
                                <input type="password" className="login_form_input" name='password'
                                    passwordValue={passwordInput.password}
                                    passwordError={passwordError} id="password" required />
                            </div>

                            <div className="input_group">
                                <label for="confirmPassword" className="login_form_label">Confirm Password</label>
                                <input type="password" className="login_form_input" confirmPasswordValue={passwordInput.confirmPassword}
                                    confirmPasswordError={confirmPasswordError} name='confirmPassword' id="confirmPassword" required />
                            </div>

                            <div className="forget_password">
                                <button onClick={handlePasswordReset} className='forget_password_link'>Forget Password</button>
                            </div>

                            <button type="submit" className="login_form_btn">Login</button>

                            {/* error showing */}
                            <h4 className='error_message' style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{signInError && signInError.message}</h4>

                            <h4 className='error_message' style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{googleError && googleError.message}</h4>

                            <h4 className='error_message' style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{resetError && resetError.message}</h4>

                            <h4 className='error_message' style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{passwordError}</h4>

                            <div className="login_form_bottom">
                                <h2 className='login_form_bottom-text'>Don’t have an account? </h2>
                                <Link className='login_form_bottom-login' to="/signup">Create an account</Link>
                            </div>
                        </form>

                        <div className='or_line'>
                            <span>Or</span>
                        </div>

                        <div className="google_login">
                            <button onClick={handleGoogleSignIn} className='google_login_btn'><img class="google_login_btn_icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /><span>Continue with Google</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Login;