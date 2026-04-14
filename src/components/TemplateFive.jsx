import React from "react";

function TemplateFive({
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
    <div style={page}>
      {/* Accent Strip */}
      <div style={accent} />

      {/* Card */}
      <div style={card}>
        {/* Header */}
        <div style={header}>
          <h1 style={{ margin: 0 }}>{name}</h1>
          <p style={subtitle}>{place}</p>
          <p style={contact}>
            📞 {mobile} &nbsp; | &nbsp; ✉️ {email}
          </p>
        </div>

        {/* Objective */}
        <Section title="Career Objective">
          <p style={text}>{objective}</p>
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((edu, i) => (
            <div key={i} style={eduRow}>
              <div style={eduDot} />
              <div>
                <strong>{edu.level}</strong>
                <p style={eduText}>{edu.institution}</p>
                <small>
                  {edu.board} • {edu.year} {edu.score && `• ${edu.score}`}
                </small>
              </div>
            </div>
          ))}
        </Section>

        {/* Grid Section */}
        <div style={grid}>
          <Section title="Strengths">
            <ul>
              {strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Personal Details">
            <Info label="Father" value={guardian} />
            <Info label="Mother" value={mother} />
            <Info label="DOB" value={dob} />
            <Info label="Gender" value={gender} />
            <Info label="Languages" value={languages} />
          </Section>
        </div>

        {/* Certificates & Hobbies */}
        <div style={grid}>
          <Section title="Certificates">
            <ul>
              {certificates.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>

          <Section title="Hobbies">
            <p>{hobbies.length ? hobbies.join(", ") : "N/A"}</p>
          </Section>
        </div>

        {/* Declaration */}
        <Section title="Declaration">
          <p>
            I hereby declare that the information furnished above is true to the
            best of my knowledge.
          </p>
          <p style={{ textAlign: "right", marginTop: "30px" }}>
            <strong>{name}</strong>
          </p>
        </Section>
      </div>
    </div>
  );
}

/* ===== Reusable ===== */
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
const page = {
  background: "#f3f4f6",
  padding: "30px",
};

const accent = {
  height: "6px",
  background: "linear-gradient(90deg, #6366f1, #22c55e)",
  marginBottom: "10px",
};

const card = {
  maxWidth: "900px",
  margin: "auto",
  background: "#fff",
  padding: "30px",
  fontFamily: "Arial, sans-serif",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const header = {
  textAlign: "center",
  marginBottom: "25px",
};

const subtitle = {
  margin: "5px 0",
  fontWeight: "500",
};

const contact = {
  fontSize: "14px",
  color: "#555",
};

const section = {
  marginBottom: "22px",
};

const sectionTitle = {
  borderLeft: "5px solid #6366f1",
  paddingLeft: "10px",
  marginBottom: "10px",
};

const text = {
  textAlign: "justify",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const eduRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "12px",
};

const eduDot = {
  width: "10px",
  height: "10px",
  background: "#22c55e",
  borderRadius: "50%",
  marginTop: "6px",
};

const eduText = {
  margin: "2px 0",
};

export default TemplateFive;
