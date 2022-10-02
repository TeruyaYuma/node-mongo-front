import React from 'react'
import { Topbar } from '../components/Topbar/Topbar'
import { Rightbar } from '../components/rightbar/Rightbar'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Timeline } from '../components/timeline/Timeline'

export const Home = () => {
    return (
      <>
        <Topbar />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Sidebar/>
          <Timeline/>
          <Rightbar/>
        </div>
      </>
    )
}