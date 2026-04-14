function TemplateThree({
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
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        maxWidth: "800px",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.5",
      }}
    >
      {/* Header */}
      <h2 style={{ textAlign: "center" }}>{name}</h2>

      <p>
        <strong>Place:</strong> {place}
      </p>

      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <p style={{ margin: 0 }}>
          <strong>Mobile:</strong> {mobile}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <hr />

      {/* Career Objective */}
      <h3>Career Objective</h3>
      <p style={{ textAlign: "justify" }}>{objective}</p>

      <hr />

      {/* Education */}
      <h3>Educational Qualifications</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Level</th>
            <th style={thStyle}>Specialization</th>
            <th style={thStyle}>Institution</th>
            <th style={thStyle}>Board / University</th>
            <th style={thStyle}>Year | Score</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu, i) => (
            <tr key={i}>
              <td style={tdStyle}>{edu.level}</td>
              <td style={tdStyle}>{edu.specialization || "-"}</td>
              <td style={tdStyle}>{edu.institution}</td>
              <td style={tdStyle}>{edu.board}</td>
              <td style={tdStyle}>
                {edu.year}
                {edu.score && ` | ${edu.score}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* Strengths */}
      <h3>Strengths</h3>
      <ul>
        {strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* Certificates */}
      <h3>Certificates</h3>
      <ul>
        {certificates.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <hr />

      {/* Personal Details */}
      <h3>Personal Details</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px auto",
          rowGap: "6px",
          maxWidth: "400px",
        }}
      >
        <strong>Father’s Name</strong><span>: {guardian}</span>
        <strong>Mother’s Name</strong><span>: {mother}</span>
        <strong>Date of Birth</strong><span>: {dob}</span>
        <strong>Gender</strong><span>: {gender}</span>
        <strong>Languages Known</strong><span>: {languages}</span>
        <strong>Hobbies</strong>
        <span>: {hobbies.length ? hobbies.join(", ") : "N/A"}</span>
      </div>

      <hr />

      {/* Declaration */}
      <h3>Declaration</h3>
      <p style={{ textAlign: "justify" }}>
        I hereby declare that all the information furnished above is true to the
        best of my knowledge and belief.
      </p>

      <p style={{ marginTop: "40px", textAlign: "right" }}>
        <strong>{name}</strong>
      </p>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default TemplateThree;
