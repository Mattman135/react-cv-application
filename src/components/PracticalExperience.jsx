import React, { useState } from "react"
import "../styles/PracticalExperience.css"

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateTo: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleEdit = () => setIsEditing(!isEditing)

  return (
    <div className="practical-experience">
      {isEditing ? (
        <form>
          <label>
            Company Name:{" "}
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <label>
            Position Title:{" "}
            <input
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
            />
          </label>
          <label>
            Main Responsibilities:{" "}
            <textarea
              name="mainResponsibilities"
              value={formData.mainResponsibilities}
              onChange={handleChange}
            />
          </label>
          <label>
            Date From:{" "}
            <input
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </label>
          <label>
            Date To:{" "}
            <input
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>Company Name: {formData.companyName}</p>
          <p>Position Title: {formData.positionTitle}</p>
          <p>Main Responsibilities: {formData.mainResponsibilities}</p>
          <p>Date From: {formData.dateFrom}</p>
          <p>Date To: {formData.dateTo}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default PracticalExperience
