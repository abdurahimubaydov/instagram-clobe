import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../firebase/firebase';


interface IActive {
    active: boolean,
    setActive: (value: boolean) => void
}

export const ResetPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
    const navigate = useNavigate()

    const { resetPassword } = useAuth()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email.length) {
            try {
                await resetPassword(email)
                setActive(true)
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('Enter your email')
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) navigate('/')
        })
    }, [])

    return (
        <div
            style={{ width: '100%', height: '100vh', display: 'flex' }}
            className='has-background-dark is-align-items-center is-justify-content-center'
        >
            {active && <Modal active={active} setActive={setActive} />}
            <form
                className="box"
                onSubmit={onSubmit}
            >
                <h1 className="title">Type your email to reset password</h1>

                <input
                    type="email"
                    className="input mb-4"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <button className='button is-info'>reset</button>

            </form>
        </div>
    );
};


const Modal = ({ active, setActive }: IActive) => {
    const navigate = useNavigate()

    const basic = () => {
        setActive(false)
        navigate('/login')
    }

    return (
        <div className={`modal ${active ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title is-2">Message has sent your email to reset password</h1>
                    <button className="button is-info" onClick={basic}>okay</button>
                </div>
            </div>
        </div>
    )
} 