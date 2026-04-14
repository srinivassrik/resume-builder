import React from "react";

function TemplateTwo({
  name,
  guardian,
  mother,
  dob,
  gender,
  languages,
  place,
  mobile,
  email,
  objective,
  education = [],
  strengths = [],
  hobbies = [],
  certificates = [],
}) {
  return (
    <div style={container}>
      {/* ===== Header Bar ===== */}
      <div style={header}>
        <h1 style={nameStyle}>{name}</h1>
        <p style={contact}>
          {place} • {mobile} • {email}
        </p>
      </div>

      {/* ===== Body ===== */}
      <div style={body}>
        {/* LEFT SIDE */}
        <div style={left}>
          <Section title="Career Objective">
            <p style={text}>{objective}</p>
          </Section>

          <Section title="Education">
            {education.map((edu, i) => (
              <div key={i} style={eduBlock}>
                <strong>{edu.level}</strong>
                <p>{edu.institution}</p>
                <small>
                  {edu.board} | {edu.year} {edu.score && `| ${edu.score}`}
                </small>
              </div>
            ))}
          </Section>

          <Section title="Certificates">
            <ul>
              {certificates.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>
        </div>

        {/* RIGHT SIDE */}
        <div style={right}>
          <Section title="Personal Details">
            <Info label="Father" value={guardian} />
            <Info label="Mother" value={mother} />
            <Info label="DOB" value={dob} />
            <Info label="Gender" value={gender} />
            <Info label="Languages" value={languages} />
          </Section>

          <Section title="Strengths">
            <ul>
              {strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Hobbies">
            <p>{hobbies.length ? hobbies.join(", ") : "N/A"}</p>
          </Section>
        </div>
      </div>

      {/* ===== Declaration ===== */}
      <div style={footer}>
        <p>
          I hereby declare that the information provided above is true to the
          best of my knowledge.
        </p>
        <p style={{ textAlign: "right", marginTop: "30px" }}>
          <strong>{name}</strong>
        </p>
      </div>
    </div>
  );
}

/* ===== Reusable Components ===== */
const Section = ({ title, children }) => (
  <div style={section}>
    <h3 style={sectionTitle}>{title}</h3>
    {children}
  </div>
);

const Info = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

/* ===== Styles ===== */
const container = {
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
  border: "1px solid #ddd",
  background: "#fff",
};

const header = {
  background: "#1e3a8a",
  color: "#fff",
  padding: "20px",
};

const nameStyle = {
  margin: 0,
};

const contact = {
  marginTop: "6px",
  fontSize: "14px",
};

const body = {
  display: "grid",
  gridTemplateColumns: "65% 35%",
};

const left = {
  padding: "20px",
};

const right = {
  padding: "20px",
  background: "#f1f5f9",
};

const section = {
  marginBottom: "20px",
};

const sectionTitle = {
  borderBottom: "2px solid #1e3a8a",
  paddingBottom: "4px",
  marginBottom: "10px",
};

const text = {
  textAlign: "justify",
};

const eduBlock = {
  marginBottom: "12px",
};

const footer = {
  padding: "20px",
  borderTop: "1px solid #ddd",
  fontSize: "14px",
};

export default TemplateTwo;
