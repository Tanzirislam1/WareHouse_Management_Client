import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../src/Style/SignUp/SignUp.scss';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
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

    /* Create user with Email & Password */
    const [
        createUserWithEmailAndPassword,
        signUpUser,
        signUpLoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [passValidate, setPassValidate] = useState('');

    if (googleUser) {
        return (
            navigate('/home')
        );
    }

    if (signUpUser) {
        return (
            navigate('/home')
        );
    }

    if (signUpLoading || googleLoading) {
        return <div className='spiner_container'>
            <img className='spiner_gif' src="https://i.ibb.co/HV59wsq/giphy.gif" alt="spiner" />
        </div>;
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value.trim();
        const passwordInputFieldName = event.target.name;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log('hello', firstName, lastName, email, password, confirmPassword);

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

        await createUserWithEmailAndPassword(email, password);
        const url = `https://warehouse-server-nu.vercel.app/signup`;
        const { data } = await axios.post(url, { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        event.target.reset();
        toast('Signup Successfully');
    }

    return (
        <section className="signUp_section">
            <div className='container'>
                <div className="row">
                    <form className='signup_form' onSubmit={handleFormSubmit}>
                        <h2 className='text-left signup_form_title'>Create an account</h2>
                        <div className="input_group">
                            <label for="firstName" className="signup_form_label">First Name</label>
                            <input type="text" className="signup_form_input" name='firstName' id="firstName" aria-describedby="emailHelp" required />
                        </div>

                        <div className="input_group">
                            <label for="lastName" className="signup_form_label">Last Name</label>
                            <input type="text" className="signup_form_input" name='lastName' id="lastName" aria-describedby="emailHelp" required />
                        </div>

                        <div className="input_group">
                            <label for="email" className="signup_form_label">Email address</label>
                            <input type="email" className="signup_form_input" name='email' id="email" aria-describedby="emailHelp" required />
                        </div>

                        <div className="input_group">
                            <label for="password" className="signup_form_label ">Password</label>
                            <input type="password" className="signup_form_input" name='password' passwordValue={passwordInput.password}
                                passwordError={passwordError} id="password" required />
                        </div>

                        <div className="input_group">
                            <label for="confirmPassword" className="signup_form_label">Confirm Password</label>
                            <input type="password" className="signup_form_input" name='confirmPassword' confirmPasswordValue={passwordInput.confirmPassword}
                                confirmPasswordError={confirmPasswordError} id="confirmPassword" required />
                        </div>

                        <div className='password_validate_message'>{passValidate}</div>

                        <button type="submit" className="signup_form_btn">Create an Account</button>

                        {/* google error showing */}
                        <h4 className='error_message'>{signUpError && signUpError.message}</h4>
                        <h4 className='error_message'>{googleError && googleError.message}</h4>

                        {/* password error Showing */}
                        <h4 className='error_message' style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{passwordError}</h4>

                        <div className="signup_form_bottom">
                            <h2 className='signup_form_bottom-text'>Already have an Account?</h2>
                            <Link className='signup_form_bottom-login' to="/login">Login</Link>
                        </div>
                    </form>

                    <div className='or_line'>
                        <span>Or</span>
                    </div>

                    <div className="google_signup">
                        <button onClick={handleGoogleSignIn} className='google_signup_btn'><img class="google_signup_btn_icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /><span>Continue with Google</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;