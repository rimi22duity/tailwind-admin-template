import React from 'react'
import '../css/card.css'
import TableCard from './TableCard'
import CardContent from './CardContent'
import { FaUsers } from 'react-icons/fa'
import { FaArrowTrendUp, FaCartShopping } from 'react-icons/fa6'
import CustomLineChart from './CustomLineChart'

const MainContent = () => {

    const cardItems = [
        { icon: <FaUsers size={50} />, label: 'Clients', value: '512', iconColor: 'text-green-500' },
        { icon: <FaCartShopping size={50} />, label: 'Sales', value: '$770', iconColor: 'text-red-500' },
        { icon: <FaArrowTrendUp size={50} />, label: 'Performance', value: '256%', iconColor: 'text-red-500' }
    ];

    return (
        <section className="section main-section">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
                {cardItems.map((item, index) => (
                    <div key={index}><CardContent label={item.label} value={item.value} icon={item.icon} iconColor={item.iconColor} /></div>
                ))}
            </div>

            <div className="card mb-6">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon"><i className="mdi mdi-finance"></i></span>
                        Performance
                    </p>
                    <a href="#" className="card-header-icon">
                        <span className="icon"><i className="mdi mdi-reload"></i></span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="chart-area">
                        <div className="h-full">
                            <CustomLineChart />
                        </div>
                    </div>
                </div>
            </div>

            <div className="notification blue">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                    <div>
                        <span className="icon"><i className="mdi mdi-buffer"></i></span>
                        <b>Responsive table</b>
                    </div>
                    <button type="button" className="button small textual --jb-notification-dismiss">Dismiss</button>
                </div>
            </div>

            <TableCard />
        </section>

    )
}

export default MainContent