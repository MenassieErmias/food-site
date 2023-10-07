import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);
    return (
        <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setSideNav(prev => !prev)} className="cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className="text-2xl md:text-3xl px-2">
                    Monafromz <span>Restaurant</span>
                </h1>
                <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[13px]">
                    <p className="bg-orange-700 text-white rounded-full p-2 font-bold">Free</p>
                    <p>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search Meals'

                />
            </div>
            <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} />
                &nbsp;Cart
            </button>
            {
                sideNav &&
                <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                    onClick={() => setSideNav(prev => !prev)}
                >

                </div>
            }

            <div
                className={sideNav ?
                    "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" :
                    "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose size={25} onClick={() => setSideNav(prev => !prev)}
                    className='absolute right-4 cursor-pointer top-2'
                />
                <h2 className='text-2xl p-4 my-4'>
                    Monafromz <span className='text-orange-700 font-bold'>Restaurant</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex items-center'>
                            <BsPerson size={25} className='mr-4 text-white bg-black rounded-full ' />
                            My Account
                        </li>
                        <li className='text-xl py-4 flex items-center'>
                            <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full ' />
                            Delivery
                        </li>
                        <li className='text-xl py-4 flex items-center'>
                            <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full ' />
                            My Favorite
                        </li>
                        <li className='text-xl py-4 flex items-center'>
                            <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full ' />
                            My Account
                        </li>
                        <li className='text-xl py-4 flex items-center'>
                            <MdHelp size={25} className='mr-4 text-white bg-black rounded-full ' />
                            Help
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default TopNav