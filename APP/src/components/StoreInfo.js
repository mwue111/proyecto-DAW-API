import React from 'react'
import { formatJsonDireccion } from '@/helpers/helper'
import StoreSchedule from '@/components/StoreSchedule'

function StoreInfo({info}) {
    console.log(info)
  return (
    <div>
      <div>
        <h1><i className="pi pi-building" style={{ color: 'slateblue' }}></i> {formatJsonDireccion(info.address)}</h1>
        <StoreSchedule schedule={info.schedules} />
      </div>
    </div>
  )
}

export default StoreInfo