import React from "react"
import GeneralInfo from "./GeneralInfo"
import EducationExperience from "./EducationExperience"
import PracticalExperience from "./PracticalExperience"
import "../styles/CV.css"

const CV = () => {
  return (
    <div className="cv">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationExperience />
      <PracticalExperience />
    </div>
  )
}

export default CV
