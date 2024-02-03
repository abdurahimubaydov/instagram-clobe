import React from 'react'
import { Link } from 'react-router-dom';

// icons
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExploreOff } from "react-icons/md";

export const MenuLayout = () => {


    return (
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%',
            height: '100%',

        }} className='is-fullwidth pt-5 pl-4 pb-4'>
            <div>
                <Link to={'/'} className=''>
                    <h1 className='title active-class is-active mb-6 has-text-white'>Instagram</h1>
                </Link>

                <Link to={'/'}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: '.2s'
                    }} className='title is-size-5 active-class pt-3 pb-3 pl-2 is-active mb-2 has-text-white class-hover'>
                        <IoMdHome style={{ marginRight: 10 }} /> Home
                    </h1>
                </Link>

                <Link to={'/'}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: '.2s'
                    }} className='title is-size-5 active-class pt-3 pb-3 pl-2 is-active mb-2 has-text-white class-hover'>
                        <IoSearch style={{ marginRight: 10 }} /> Search
                    </h1>
                </Link>


                <Link to={'/'}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: '.2s'
                    }} className='title is-size-5 active-class  pt-3 pb-3 pl-2 is-active mb-2 has-text-white class-hover'  >
                        <MdOutlineExploreOff style={{ marginRight: 10 }} /> Explore
                    </h1>
                </Link>

                <Link to={'/'}>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: '.2s'
                    }} className='title is-size-5 active-class pt-3 pb-3 pl-2 is-active mb-2 has-text-white class-hover'>
                        <IoSearch style={{ marginRight: 10 }} /> Profile
                    </h1>
                </Link>



            </div>


            <div>
                <Link to={'/'} className='mb-6'>
                    <h1 className='title has-text-white'>Instagram</h1>
                </Link>
            </div>
        </div>
    );
};
