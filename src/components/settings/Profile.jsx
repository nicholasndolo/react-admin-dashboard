import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <SettingSection icon={User} title='Profile'>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img
         src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
        alt='profile'
        className='rounded-full w-20 h-20 object-cover mr-4'
         />
        <div>
          <h3 className='text-lg font-semibold text-gray-100'>Nick Ndolo</h3>
          <p className='text-gray-400'>nickndolo95@gmail.com</p>
        </div>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>Edit Profile</button>
    </SettingSection>
  )
}

export default Profile