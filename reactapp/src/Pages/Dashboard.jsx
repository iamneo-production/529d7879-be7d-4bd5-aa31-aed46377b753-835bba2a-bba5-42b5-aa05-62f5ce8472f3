import React from 'react'
import '../Assets/CSS/Dashboard.css'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import { LineChart } from '@mui/x-charts/LineChart';
import { Label } from '@mui/icons-material'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminFooter from '../Components/AdminFooter'

function Dashboard() {
  const data = [
    { value: 30, label: 'Upcoming Books' },
    { value: 45, label: 'Books issued' },
    { value: 25, label: 'Books to be Returned' },
    { value: 15, label: 'New Members' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div className='dash'>
    <h1>Dashboard</h1>
    <div className='nor'>
    <div className='bor'>
    <h5>25<br/>
    <br/>
    Books Issued</h5>
    </div>
    <div className='bor'>
    <h5>34<br/>
    <br/>
    Books to be returned</h5>
    </div>
    <div className='bor'>
    <h5>100<br/>
    <br/>
    New Members</h5>
    </div>
    <div className='bor'>
    <h5>140<br/>
    <br/>
    Upcoming Books</h5>
    </div>

    </div>
    <div className='bar'>
    <h3>Booking Stats</h3>
    <BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [23, 15, 30,5,12,10,40,60,12,3,19,27],
      },
    ]}
    width={500}
    height={300}
  />
  <div className='piechart'>
  <PieChart
  series={[
    {
      arcLabel: (item) => ` ${item.value}`,
      arcLabelMinAngle: 45,
      data,
    },
  ]}
  sx={{
    [`& .${pieArcLabelClasses.root}`]: {
      fill: 'white',
      fontWeight: 'bold',
    },
  }}
  {...size}
/>
</div>
  </div>
    </div>
  
    
<AdminFooter/>

    </>
  )
}

export default Dashboard