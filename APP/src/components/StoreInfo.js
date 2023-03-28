import React, { useState } from 'react'
import { formatJsonDireccion } from '@/helpers/helper'
import StoreSchedule from '@/components/StoreSchedule'
import { Button } from 'primereact/button'

function StoreInfo({ info, editable }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: info?.name,
    address: info?.address,
    email: info?.email,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Submit the form data to the server
    // ...
    setEditMode(false)
  }

  return (
    <div>
      {editable && (
            <Button onClick={() => setEditMode(!editMode)}><i className="pi pi-pencil"> Edit My store</i></Button>
          )}
      <div>
          <i className="pi pi-building" style={{ color: 'slateblue' }}></i>{' '}
        {editMode ? (
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        ) : (
          formatJsonDireccion(info.address)
        )}
        {editable && (
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        )}
        <br />
        <i className="pi pi-envelope" style={{ color: 'slateblue' }}></i>{' '}
        {editMode ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        ) : (
          info.email
        )}
        <br />
        <StoreSchedule schedule={info?.schedules} />
      </div>
    </div>
  )
}

export default StoreInfo
