import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../components/error-message'
import { auth } from '../firebase/firebase'
import { FaFacebook } from "react-icons/fa";

interface IForm {
  email: string,
  password: string
};

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const { loading, error, signIn, loginWithFacebook } = useAuth()
  const navigate = useNavigate()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target

    if (target.name === 'email') setEmail(target.value)
    else setPassword(target.value)
  };


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email?.length && password?.length) {
      await signIn(email, password)
    } else {
      alert('Please fill the form')
    }
  }


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigate('/')
    })
  }, [])


  return (
    <div
      style={{ width: '100%', height: '100vh', display: 'flex', userSelect: 'none' }}
      className='has-background-dark is-align-items-center is-justify-content-center'
    >
      <form className='box' onSubmit={onSubmit}>
        {error && <ErrorMessage error={error.message.toString()} />}
        <h1 className="title is-3">Login</h1>
        <div className="field mb-5">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
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
              type="password"
              placeholder='********'
              name='password'
              onChange={onChange}
            />
          </div>
          <Link to={'/sign-up'}>if you don't have an account</Link>
        </div>
        <button className='button has-background-danger has-text-white mb-2' disabled={loading}>
          {loading ? 'loading...' : 'login'}
        </button> <br />

        <Link to={'/reset-password'} style={{ textAlign: 'center' }}>
          <a>forgot password?</a>
        </Link>

      </form>
    </div >
  )
}
