import React, { useState } from "react"
import "../styles/GeneralInfo.css"

const GeneralInfo = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleEdit = () => setIsEditing(!isEditing)

  return (
    <div className="general-info">
      {isEditing ? (
        <form>
          <label>
            Name:{" "}
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:{" "}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:{" "}
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default GeneralInfo
