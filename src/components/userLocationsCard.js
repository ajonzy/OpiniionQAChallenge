import React, { useState } from 'react'

export default function UserLocationsCard(props) {
    const [locations, setLocations] = useState(["Provo", "Orem", "Lindon"])
    const [filteredLocations, setFilteredLocations] = useState(["Provo", "Orem", "Lindon"])
    const [filter, setFilter] = useState("")
    const [formEnabled, setFormEnabled] = useState(false)
    const [newLocation, setNewLocation] = useState("")

    const handleSearch = value => {
        setFilter(value)
        setFilteredLocations(locations.filter(location => location.includes(value)))
    }

    const handleSave = () => {
        setLocations([...locations, newLocation])
        setFilteredLocations([...locations, newLocation].filter(location => location.includes(filter)))
        setNewLocation("")
        setFormEnabled(false)
    }

    const handleDelete = index => {
        locations.splice(index, 1)
        setLocations([...locations])
        setFilteredLocations([...locations])
    }

    const renderLocations = () => {
        return filteredLocations.map((location, index) => (
            <div key={`location-${index}`} className='location-wrapper'>
                <div className="location-data">
                    <div className="data-grid">
                        <p>{location}</p>
                        <p>Manager</p>
                    </div>
                    <p className='delete' onClick={() => handleDelete(index)}>Delete</p>
                </div>
                <hr />
            </div>
        ))
    }

    return (
        <div className='user-locations-card card'>
            <div className="options-wrapper">
                {
                    formEnabled
                    ? (
                        <div className="buttons-wrapper">
                            <button style={{marginRight: "5px", transition: "0s"}} onClick={() => setFormEnabled(false)}>Cancel</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    )
                    : (
                        <div className="buttons-wrapper">
                            <button onClick={() => setFormEnabled(true)}>Add Location</button>
                        </div>
                    )
                }

                <input type="text" placeholder='Search' value={filter} onChange={event => handleSearch(event.target.value)} />
            </div>

            <div className="locations-wrapper">
                <div className="locations-header">
                    <h4>Name</h4>
                    <h4>Role</h4>
                </div>
                <hr />

                {renderLocations()}

                { formEnabled &&
                    (
                        <div className="new-location-wrapper">
                            <input type="text" placeholder='Location Name' value={newLocation} onChange={event => setNewLocation(event.target.value)} />
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
    )
}