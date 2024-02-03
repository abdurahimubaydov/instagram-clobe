import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { auth } from './firebase/firebase'
import { ResetPassword } from "./pages/reset-password";
import { useAppDispatch } from "./app/hooks";
import { getUser } from "./reducer/user";

export default function App(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) navigate('/login')
      dispatch(getUser(user))
    })
  }, [])

  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  );
};
