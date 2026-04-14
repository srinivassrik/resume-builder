function TemplateFour({
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
      {/* Header */}
      <div style={header}>
        <h1 style={{ margin: 0 }}>{name}</h1>
        <p style={{ margin: "5px 0" }}>{place}</p>
        <p style={{ margin: 0 }}>
          📞 {mobile} | ✉️ {email}
        </p>
      </div>

      <div style={content}>
        {/* Left Column */}
        <div style={leftCol}>
          <Section title="Personal Info">
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

        {/* Right Column */}
        <div style={rightCol}>
          <Section title="Career Objective">
            <p style={{ textAlign: "justify" }}>{objective}</p>
          </Section>

          <Section title="Education">
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Level</th>
                  <th style={th}>Institution</th>
                  <th style={th}>Year | Score</th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu, i) => (
                  <tr key={i}>
                    <td style={td}>{edu.level}</td>
                    <td style={td}>{edu.institution}</td>
                    <td style={td}>
                      {edu.year}
                      {edu.score && ` | ${edu.score}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="Certificates">
            <ul>
              {certificates.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Section>

          <Section title="Declaration">
            <p>
              I hereby declare that the above information is true to the best of
              my knowledge.
            </p>
            <p style={{ textAlign: "right", marginTop: "30px" }}>
              <strong>{name}</strong>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */
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

/* Styles */
const container = {
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
  background: "#fff",
  border: "1px solid #ddd",
};

const header = {
  background: "#2c3e50",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

const content = {
  display: "grid",
  gridTemplateColumns: "30% 70%",
};

const leftCol = {
  background: "#f7f9fb",
  padding: "20px",
};

const rightCol = {
  padding: "20px",
};

const section = {
  marginBottom: "20px",
};

const sectionTitle = {
  borderBottom: "2px solid #2c3e50",
  paddingBottom: "4px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#eee",
};

const td = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default TemplateFour;
