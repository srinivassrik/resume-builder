import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";
import TemplateFour from "./TemplateFour";
import TemplateFive from "./TemplateFive"; // ✅ NEW

function ResumePreview({
  template,
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
  const resumeRef = useRef(null);

  const [showLogin, setShowLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  /* 📄 PDF Download */
  const startDownload = () => {
    const input = resumeRef.current;
    if (!input) return;

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  /* 🔐 Login check */
  const handleLogin = () => {
    if (userId === "Sreee" && password === "M@@ny@sr1") {
      setShowLogin(false);
      setUserId("");
      setPassword("");
      startDownload();
    } else {
      alert("Invalid User ID or Password");
    }
  };

  /* 🧩 Common Props */
  const commonProps = {
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
    education,
    strengths,
    hobbies,
    certificates,
  };

  /* 🧩 Template Renderer (UPDATED) */
  const renderTemplate = () => {
    switch (template) {
      case "one":
        return <TemplateOne {...commonProps} />;
      case "two":
        return <TemplateTwo {...commonProps} />;
      case "three":
        return <TemplateThree {...commonProps} />;
      case "four":
        return <TemplateFour {...commonProps} />;
      case "five":
        return <TemplateFive {...commonProps} />; // ✅ NEW
      default:
        return <TemplateFive {...commonProps} />;
    }
  };

  return (
    <div>
      {/* Resume Preview */}
      <div ref={resumeRef}>{renderTemplate()}</div>

      {/* Download Button */}
      <button style={{ marginTop: "10px" }} onClick={() => setShowLogin(true)}>
        Download PDF
      </button>

      {/* 🔐 Login Modal */}
      {showLogin && (
        <div style={modalStyle}>
          <div style={modalBox}>
            <h3>Login Required</h3>

            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <div style={{ marginTop: "10px" }}>
              <button onClick={handleLogin}>Login & Download</button>
              <button
                onClick={() => setShowLogin(false)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🎨 Styles */
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "10px",
};

export default ResumePreview;
