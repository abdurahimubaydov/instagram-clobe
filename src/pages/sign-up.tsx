import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import { ErrorMessage } from '../components/error-message'
import { Link, useNavigate } from 'react-router-dom'
import { VerifyEmailModal } from '../components/verify-email-modal'
import { auth } from '../firebase/firebase'

interface IForm {
    email: string,
    password: string
}

export const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repeatPassword, setRepeatPassword] = useState<string>();
    const { signUp, loading, error } = useAuth();
    const [modalActive, setModaltActive] = useState<boolean>(false);
    const navigate = useNavigate();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        if (target.name === 'email') setEmail(target.value);
        else if (target.name === 'password') setPassword(target.value);
        else if (target.name === 'repeat-password') setRepeatPassword(target.value);
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email?.length && password?.length && repeatPassword?.length) {
            signUp(email, password, repeatPassword);
            setModaltActive(true)
        } else {
            alert('Please fill the form')
        }
    };


    useEffect(() => {
        if (modalActive) navigate('/sign-up')
    }, [modalActive])

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) navigate('/')
        })
    }, [])


    return (
        <div
            style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}
            className='has-background-dark is-align-items-center is-justify-content-center'
        >
            {modalActive && <VerifyEmailModal active={modalActive} setActive={setModaltActive} />}
            <form className='box' onSubmit={e => onSubmit(e)}>
                {error && <ErrorMessage error={error.message.toString()} />}
                <h1 className="title is-3">Sign up</h1>
                <div className="field mb-5">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            placeholder="e.g. alexsmith@gmail.com"
                            name='email'
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field mb-5">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            placeholder='********'
                            name='password'
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field mb-5">
                    <label className="label">Repeat password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder='********'
                            name='repeat-password'
                            onChange={onChange}
                        />
                    </div>
                    <Link to={'/login'}>If you have an account</Link>
                </div>
                <button className='button has-background-danger has-text-white' disabled={loading}>
                    {loading ? 'loading...' : 'sign-up'}
                </button>
            </form>


        </div>
    )
}
