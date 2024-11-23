import React, { useState } from "react"
import "../styles/EducationExperience.css"

const EducationExperience = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [formData, setFormData] = useState({
    school: "",
    titleOfStudy: "",
    dateOfStudy: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const toggleEdit = () => setIsEditing(!isEditing)

  return (
    <div className="education-experience">
      {isEditing ? (
        <form>
          <label>
            School Name:{" "}
            <input
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </label>
          <label>
            Title of Study:{" "}
            <input
              name="titleOfStudy"
              value={formData.titleOfStudy}
              onChange={handleChange}
            />
          </label>
          <label>
            Date of Study:{" "}
            <input
              name="dateOfStudy"
              value={formData.dateOfStudy}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={toggleEdit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>School Name: {formData.school}</p>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date of Study: {formData.dateOfStudy}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default EducationExperience
