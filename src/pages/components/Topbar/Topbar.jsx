import React from 'react'
import {Search, Chat, Notifications, AccountCircle } from '@mui/icons-material';

export const Topbar = () => {
    return (
    <div style={{display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', padding: '0 10px 0 10px', backgroundColor: 'gray'}}>
      <div>real sns</div>
      <div>
        <Search />
        <input />
      </div>
      <div>
        <span>
          <Chat />
        </span>
        <span>
          <Notifications />
        </span>
        <span>
          <AccountCircle />
        </span>
      </div>
    </div>
    )
}