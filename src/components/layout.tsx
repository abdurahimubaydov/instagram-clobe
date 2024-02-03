import { ReactNode } from 'react'
import { MenuLayout } from './menu-layout'

interface ILayout {
    children: ReactNode
}

export const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <div className='columns' >
            <div className="column is-2 has-background-dark" style={{
                borderRight: '2px solid #ccc',
            }} >
                <MenuLayout />
            </div>
            <div className="column is-10 has-background-dark">
                {children}
            </div>
        </div>
    )
}
