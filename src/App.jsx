import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./styles/App.css";

function App() {
  // ✅ Default Template
  const [template, setTemplate] = useState("five");

  /* ================= Personal Details ================= */
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [place, setPlace] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  /* ================= Job & Objective ================= */
  const [jobRole, setJobRole] = useState("");
  const [objective, setObjective] = useState("");

  /* ================= Graduation ================= */
  const [gradCollege, setGradCollege] = useState("");
  const [gradUniversity, setGradUniversity] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [gradStatus, setGradStatus] = useState("");
  const [gradSpecialization, setGradSpecialization] = useState("");

  /* ================= Intermediate ================= */
  const [interCollege, setInterCollege] = useState("");
  const [interBoard, setInterBoard] = useState("");
  const [interYear, setInterYear] = useState("");
  const [interScore, setInterScore] = useState("");
  const [interSpecialization, setInterSpecialization] = useState("");

  /* ================= School ================= */
  const [schoolName, setSchoolName] = useState("");
  const [schoolBoard, setSchoolBoard] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [schoolScore, setSchoolScore] = useState("");
  const [schoolSpecialization, setSchoolSpecialization] = useState("");

  /* ================= Other ================= */
  const [strengths, setStrengths] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [certificates, setCertificates] = useState("");

  /* ================= Education Array ================= */
  const education = [
    {
      level: "Graduation",
      specialization: gradSpecialization,
      institution: gradCollege,
      board: gradUniversity,
      year: gradYear,
      score: gradStatus,
    },
    {
      level: "Intermediate",
      specialization: interSpecialization,
      institution: interCollege,
      board: interBoard,
      year: interYear,
      score: interScore,
    },
    {
      level: "SSC",
      specialization: schoolSpecialization,
      institution: schoolName,
      board: schoolBoard,
      year: schoolYear,
      score: schoolScore,
    },
  ];

  /* ================= Utility ================= */
  const toArray = (value) =>
    value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>
        Indian Student Resume Builder
      </h1>

      {/* ✅ Template Selector */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <label style={{ marginRight: "10px" }}>Choose Template:</label>
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option value="one">Template One</option>
          <option value="two">Template Two</option>
          <option value="three">Template Three</option>
          <option value="four">Template Four</option>
          <option value="five">🔥 Template Five (Modern)</option>
        </select>
      </div>

      {/* ================= Form + Preview ================= */}
      <div className="flex-container">
        <ResumeForm
          name={name}
          setName={setName}
          father={father}
          setFather={setFather}
          mother={mother}
          setMother={setMother}
          dob={dob}
          setDob={setDob}
          gender={gender}
          setGender={setGender}
          languages={languages}
          setLanguages={setLanguages}
          place={place}
          setPlace={setPlace}
          mobile={mobile}
          setMobile={setMobile}
          email={email}
          setEmail={setEmail}

          jobRole={jobRole}
          setJobRole={setJobRole}
          objective={objective}
          setObjective={setObjective}

          gradCollege={gradCollege}
          setGradCollege={setGradCollege}
          gradUniversity={gradUniversity}
          setGradUniversity={setGradUniversity}
          gradYear={gradYear}
          setGradYear={setGradYear}
          gradStatus={gradStatus}
          setGradStatus={setGradStatus}
          gradSpecialization={gradSpecialization}
          setGradSpecialization={setGradSpecialization}

          interCollege={interCollege}
          setInterCollege={setInterCollege}
          interBoard={interBoard}
          setInterBoard={setInterBoard}
          interYear={interYear}
          setInterYear={setInterYear}
          interScore={interScore}
          setInterScore={setInterScore}
          interSpecialization={interSpecialization}
          setInterSpecialization={setInterSpecialization}

          schoolName={schoolName}
          setSchoolName={setSchoolName}
          schoolBoard={schoolBoard}
          setSchoolBoard={setSchoolBoard}
          schoolYear={schoolYear}
          setSchoolYear={setSchoolYear}
          schoolScore={schoolScore}
          setSchoolScore={setSchoolScore}
          schoolSpecialization={schoolSpecialization}
          setSchoolSpecialization={setSchoolSpecialization}

          strengths={strengths}
          setStrengths={setStrengths}
          hobbies={hobbies}
          setHobbies={setHobbies}
          certificates={certificates}
          setCertificates={setCertificates}
        />

        <ResumePreview
          template={template}
          name={name}
          guardian={father}
          mother={mother}
          dob={dob}
          gender={gender}
          languages={languages}
          place={place}
          mobile={mobile}
          email={email}
          objective={objective}
          education={education}
          strengths={toArray(strengths)}
          hobbies={toArray(hobbies)}
          certificates={toArray(certificates)}
        />
      </div>
    </div>
  );
}

export default App;
