import React, { useState } from 'react'
import { formatJsonDireccion } from '@/helpers/helper'
import StoreSchedule from '@/components/StoreSchedule'
import { Button } from 'primereact/button'

/**
 * StoreInfo component.
 * Renders the information and editing functionality for a store.
 * @param {object} info - The store information object.
 * @param {boolean} editable - Indicates whether the store information is editable.
 * @returns {JSX.Element} The rendered StoreInfo component.
 */
function StoreInfo({ info, editable }) {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: info?.name,
        address: info?.address,
        email: info?.email,
    });

    /**
     * Handles the input change event and updates the form data.
     * @param {object} e - The input change event.
     */
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    /**
     * Handles the form submission event.
     * @param {object} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault()
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
