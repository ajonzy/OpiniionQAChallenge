import Image from 'next/image'
import React from 'react'

export default function UserActivityCard(props) {
    return (
        <div className='user-activity-card card'>
            <h3>User Activity</h3>
            <Image src={"/placeholder-chart.png"} height={0} width={0} sizes="100%" alt="Chart" style={{ width: '100%', height: '500px' }} priority />
        </div>
    )
}