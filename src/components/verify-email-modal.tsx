import React from 'react'
import { useNavigate } from 'react-router-dom';

interface IActive {
    active: boolean,
    setActive: (value: boolean) => void
}

export const VerifyEmailModal = ({ active, setActive }: IActive): JSX.Element => {
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
                    <h1 className="title">Verify your email</h1>
                    <p className='p is-size-4 mb-3'>
                        Email verification have sent your email. Please, check and verify your email
                    </p>
                    <button
                        className='button is-info'
                        onClick={() => basic()}
                    >okay</button>
                </div>
            </div>
        </div>
    );
};