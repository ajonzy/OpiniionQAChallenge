import React, { useState } from 'react'

export default function UserInfoCard(props) {
    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Smith")
    const [phone, setPhone] = useState("(555)-555-5555")
    const [email, setEmail] = useState("qa@opiniion.com")
    const [formEnabled, setFormEnabled] = useState(false)

    const handleSave = () => console.error("Error 500: Failed to save.")

    return (
        <div className='user-info-card card'>
            <div className="info-header">
                <h3>John Smith</h3>
                <p>Role: <span className="header-role">Manager</span></p>
            </div>

            <div className="form">
                <label>
                    First Name
                    <input type="text" placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} disabled={!formEnabled} />
                </label>

                <label>
                    Last Name
                    <input type="text" placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} disabled={!formEnabled} />
                </label>

                <label>
                    Phone Number
                    <input type="text" placeholder='Phone Number' value={phone} onChange={event => setPhone(event.target.value)} disabled={!formEnabled} />
                </label>

                <label>
                    Email
                    <input type="text" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} disabled={!formEnabled} />
                </label>
            </div>

            {
                formEnabled
                ? (
                    <div className="buttons-wrapper">
                        <button onClick={() => setFormEnabled(false)}>Cancel</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                )
                : (
                    <div className="buttons-wrapper">
                        <button style={{height: "35px"}} onClick={() => setFormEnabled(true)}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}