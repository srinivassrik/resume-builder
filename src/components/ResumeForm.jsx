import React, { useEffect, useRef } from "react";

const careerObjectives = {
  "Software Developer":
    "A motivated software developer seeking an entry-level position where I can apply my programming skills and problem-solving abilities to build efficient and scalable applications.",
  "Web Developer":
    "An enthusiastic web developer aiming to create responsive and user-friendly web applications using modern web technologies.",
  "Frontend Developer":
    "A detail-oriented frontend developer seeking to design intuitive user interfaces and enhance user experience using HTML, CSS, JavaScript, and React.",
  "Backend Developer":
    "A dedicated backend developer looking to contribute to server-side logic, database management, and API development while ensuring application performance and security.",
  "Data Analyst":
    "An analytical graduate seeking a data analyst role to transform raw data into meaningful insights for data-driven decision-making.",
  "HR Executive":
    "An aspiring HR professional looking to contribute to talent acquisition, employee engagement, and HR operations.",
  "Fresher":
    "A highly motivated graduate seeking an entry-level opportunity to learn, grow, and contribute to organizational success.",
};

function ResumeForm({
  name, setName,
  father, setFather,
  mother, setMother,
  dob, setDob,
  gender, setGender,
  languages, setLanguages,
  place, setPlace,
  mobile, setMobile,
  email, setEmail,

  jobRole, setJobRole,
  objective, setObjective,

  // Graduation
  gradCollege, setGradCollege,
  gradUniversity, setGradUniversity,
  gradYear, setGradYear,
  gradStatus, setGradStatus,
  gradSpecialization, setGradSpecialization,

  // Intermediate
  interCollege, setInterCollege,
  interBoard, setInterBoard,
  interYear, setInterYear,
  interScore, setInterScore,
  interSpecialization, setInterSpecialization,

  // SSC
  schoolName, setSchoolName,
  schoolBoard, setSchoolBoard,
  schoolYear, setSchoolYear,
  schoolScore, setSchoolScore,
  schoolSpecialization, setSchoolSpecialization,

  strengths, setStrengths,
  hobbies, setHobbies,
  certificates, setCertificates,
}) {

  const autoFilled = useRef(false);

  useEffect(() => {
    if (jobRole) {
      setObjective(careerObjectives[jobRole] || "");
      autoFilled.current = true;
    }
  }, [jobRole, setObjective]);

  const handleObjectiveChange = (e) => {
    autoFilled.current = false;
    setObjective(e.target.value);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "350px" }}>
      <h2 style={{ textAlign: "center" }}>Resume Details</h2>

      {/* Personal Details */}
      <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Father's Name" value={father} onChange={(e) => setFather(e.target.value)} />
      <input placeholder="Mother's Name" value={mother} onChange={(e) => setMother(e.target.value)} />
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <input placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      <input placeholder="Languages Known" value={languages} onChange={(e) => setLanguages(e.target.value)} />
      <input placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} />
      <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      {/* Job Role */}
      <select value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
        <option value="">Select Job Applying For</option>
        {Object.keys(careerObjectives).map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      {/* Objective */}
      <textarea
        placeholder="Career Objective"
        rows={4}
        value={objective}
        onChange={handleObjectiveChange}
      />

      {/* Graduation */}
      <h3>Graduation</h3>
      <input placeholder="College Name" value={gradCollege} onChange={(e) => setGradCollege(e.target.value)} />
      <input placeholder="University" value={gradUniversity} onChange={(e) => setGradUniversity(e.target.value)} />
      <input placeholder="Specialization" value={gradSpecialization} onChange={(e) => setGradSpecialization(e.target.value)} />
      <input placeholder="Year of Passing" value={gradYear} onChange={(e) => setGradYear(e.target.value)} />
      <input placeholder="Status" value={gradStatus} onChange={(e) => setGradStatus(e.target.value)} />

      {/* Intermediate */}
      <h3>Intermediate</h3>
      <input placeholder="College Name" value={interCollege} onChange={(e) => setInterCollege(e.target.value)} />
      <input placeholder="Board" value={interBoard} onChange={(e) => setInterBoard(e.target.value)} />
      <input placeholder="Specialization" value={interSpecialization} onChange={(e) => setInterSpecialization(e.target.value)} />
      <input placeholder="Year" value={interYear} onChange={(e) => setInterYear(e.target.value)} />
      <input placeholder="Score" value={interScore} onChange={(e) => setInterScore(e.target.value)} />

      {/* SSC */}
      <h3>SSC</h3>
      <input placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      <input placeholder="Board" value={schoolBoard} onChange={(e) => setSchoolBoard(e.target.value)} />
      <input placeholder="Specialization" value={schoolSpecialization} onChange={(e) => setSchoolSpecialization(e.target.value)} />
      <input placeholder="Year" value={schoolYear} onChange={(e) => setSchoolYear(e.target.value)} />
      <input placeholder="Score" value={schoolScore} onChange={(e) => setSchoolScore(e.target.value)} />

      {/* Other */}
      <h3>Other Details</h3>
      <input placeholder="Strengths" value={strengths} onChange={(e) => setStrengths(e.target.value)} />
      <input placeholder="Hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
      <input placeholder="Certificates" value={certificates} onChange={(e) => setCertificates(e.target.value)} />
    </div>
  );
}

export default ResumeForm;