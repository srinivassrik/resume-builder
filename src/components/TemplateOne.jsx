function TemplateOne({
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
      <h1 style={nameStyle}>{name}</h1>
      <p style={centerText}>
        {place} | Mobile: {mobile} | Email: {email}
      </p>

      <Divider />

      {/* Career Objective */}
      <Section title="Career Objective">
        <p>{objective}</p>
      </Section>

      {/* Education */}
      <Section title="Educational Qualifications">
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Qualification</th>
              <th style={th}>Institution</th>
              <th style={th}>Board / University</th>
              <th style={th}>Year</th>
              <th style={th}>Result</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, i) => (
              <tr key={i}>
                <td style={td}>{edu.level}</td>
                <td style={td}>{edu.institution}</td>
                <td style={td}>{edu.board}</td>
                <td style={td}>{edu.year}</td>
                <td style={td}>{edu.score || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* Strengths */}
      <Section title="Strengths">
        <ul>
          {strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      {/* Certificates */}
      {certificates.length > 0 && (
        <Section title="Certificates">
          <ul>
            {certificates.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Personal Details */}
      <Section title="Personal Details">
        <p>Father’s Name : {guardian}</p>
        <p>Mother’s Name : {mother}</p>
        <p>Date of Birth : {dob}</p>
        <p>Gender : {gender}</p>
        <p>Languages Known : {languages}</p>
        <p>Hobbies : {hobbies.length ? hobbies.join(", ") : "N/A"}</p>
      </Section>

      {/* Declaration */}
      <Section title="Declaration">
        <p>
          I hereby declare that the above information is true and correct to the
          best of my knowledge.
        </p>
        <p style={{ textAlign: "right", marginTop: "30px" }}>
          <strong>{name}</strong>
        </p>
      </Section>
    </div>
  );
}

/* Small reusable components */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "15px" }}>
    <h3 style={sectionTitle}>{title}</h3>
    {children}
  </div>
);

const Divider = () => <hr style={{ margin: "15px 0" }} />;

/* Styles */
const container = {
  maxWidth: "800px",
  margin: "auto",
  padding: "20px",
  fontFamily: "Times New Roman, serif",
  color: "#000",
};

const nameStyle = {
  textAlign: "center",
  marginBottom: "5px",
};

const centerText = {
  textAlign: "center",
  fontSize: "14px",
};

const sectionTitle = {
  fontSize: "16px",
  marginBottom: "5px",
  textTransform: "uppercase",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  border: "1px solid #000",
  padding: "6px",
  fontSize: "13px",
};

const td = {
  border: "1px solid #000",
  padding: "6px",
  fontSize: "13px",
};

export default TemplateOne;
