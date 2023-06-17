import React from 'react'
import { HiOutlineLocationMarker,HiOutlineCalendar } from "react-icons/hi";
import UserInfo from './UserInfo';
const PLACEHOLDER='./Images/placeholder.jpg'
function PostItem({post,modal=false}) {
  return (
   <>
{post?
  <div className="max-w-sm bg-white border
 border-gray-200 rounded-lg shadow cursor-pointer
  dark:bg-gray-800 dark:border-gray-700 ">
    
        <img className="rounded-t-lg 
        w-full h-[180px] object-cover" 
        src={post.image?post.image:PLACEHOLDER}
         alt="banner" />
   
    <div className="p-5">
       
    <h5 className="mb-2 text-xl 
    font-bold tracking-tight 
    text-gray-900 dark:text-white">
      {post.title}
      </h5>
      <div className='flex items-center text-orange-500 gap-2 mb-2'>
        <HiOutlineCalendar className='text-[20px]'/>
        {post.date}
      </div>
      <div className='flex items-center 
      text-blue-500 gap-2 mb-2'>
        <HiOutlineLocationMarker className='text-[20px]'/>
        {post.location}
      </div>
        <p className="mb-3 font-normal
         text-gray-700 
         dark:text-gray-400">
          {post.desc}</p>

      {!modal? <UserInfo user={post} />:null}
      {modal? 
     <div>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
      </a>
        </div>
        :null}
    </div>
</div>:null}
</> 
  )
}

export default PostItem