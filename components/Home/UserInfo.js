import Image from 'next/image'
import React from 'react'

function UserInfo({user}) {
    console.log(user)
  return (
    <div>
         <p className='font-bold'>Posted By :</p>
   
    <div className='flex gap-2 items-center mb-3 mt-2'>
       
        <Image src={user?.userImage}
         width={40} height={40} className='rounded-full' />
         <div>
            <h2 className='text-[14px] font-medium'>{user.userName}</h2>
            <h2 className='text-[14px] font-light'>{user.email}</h2>

         </div>
         </div>
    </div>
  )
}

export default UserInfo