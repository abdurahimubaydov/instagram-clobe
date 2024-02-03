import {
  AuthError,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updatePassword,
  sendPasswordResetEmail
} from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

interface IError {
  error: IError
}
export const useAuth = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<AuthError>();
  const navigate = useNavigate();
  const actionCodeSettings = {
    url: 'http://localhost:3000/login',
  }

  const actionCodeSettingsResetPassword = {
    url: 'http://localhost:3000/login',
  }

  const signUp = async (email: string, password: string, repeatPassword: string) => {
    if (password == repeatPassword) {
      setLoading(true)
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        setUser(res.user)
        setLoading(false)
        await sendEmailVerification(res.user, actionCodeSettings)
      } catch (error: any) {
        setLoading(false)
        setError(error)
      }
    } else {
      alert("Passwords don't match")
    }
  };

  const signIn = async (email: string, password: string,) => {
    setLoading(true)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      setUser(res.user)
      setLoading(false)
      navigate('/')
    }
    catch (err: any) {
      setError(err)
      setLoading(false)
    }
  }

  const logOut = async () => {
    await auth.signOut()
    navigate('/login')
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email, actionCodeSettings)
  }


  return { user, loading, signUp, error, signIn, logOut, resetPassword }
}
