import React from 'react'

interface IError {
    error: string
}

export const ErrorMessage = ({ error }: IError): JSX.Element => {
    const simplified = error

    console.log(simplified.split(' ')[2].split(' '))

    return (
        <article className="message is-danger">
            <div className="message-header">
                <p>Error</p>
            </div>
            <div className="message-body">
                {simplified.split(' ')[2].split('')}
            </div>
        </article>
    )
}
