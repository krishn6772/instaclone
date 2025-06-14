import React from 'react'
import { Outlet } from 'react-router-dom'
import RightSidebar from './RightSidebar'
import useGetAllPost from '@/hooks/useGetAllPost'
import Feed from './Feed'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const Home = () => {
  useGetAllPost();
  useGetSuggestedUsers();
  return (
    <div className='flex'>
      <div className='flex-grow'>
        <Feed />
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  )
}

export default Home
