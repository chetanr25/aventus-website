import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProblemStatements = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const problemStatements = {
    "AI in Healthcare": [
      {
        title: "Smart Triage Assistant with Multimodal Input",
        description:
          "Create an assistant that combines text input (symptoms described by the patient) and images (e.g., rash or wound photos) to provide triage recommendations.",
        feasibility: "Use public datasets such as DermNet",
      },
      {
        title: "Personalized Mental Health Check-In Bot with Mood Analysis",
        description:
          "Build an AI chatbot that interacts with users, analyzes tone and sentiment (text and voice), and offers personalized coping strategies or resources for mental health support.",
        feasibility: "Use datasets like GoEmotions",
      },
      {
        title: "AI-Assisted Medication Adherence Monitor",
        description:
          "Develop a system that uses smartphone camera data (e.g., pill images, face recognition) to verify medication intake and send timely reminders or alerts for missed doses.",
        feasibility: "Use open pill image datasets",
      },
      {
        title: "Early Detection of Skin Anomalies Using Multi-Spectral Imaging",
        description:
          "Create an AI tool that leverages multi-spectral images (e.g., visible + infrared) of skin lesions to differentiate between benign and potentially malignant anomalies.",
        feasibility: "Use open-source datasets like HAM10000",
      },
      {
        title: "AI-Powered Nutrition Advisor for Chronic Disease Management",
        description:
          "Design a system that analyzes a patient's dietary logs (textual or image-based) and health records to provide personalized nutrition advice for chronic conditions (e.g., diabetes, hypertension).",
        feasibility: "Use open nutrition databases (USDA, FoodData Central)",
      },
    ],
    "AI in Cyber Security": [
      {
        title: "AI-Based Steganography & Hidden Malware Detector",
        description:
          "Develop an AI system that detects hidden messages in images, videos, or audio files used for covert communication in cyberattacks.",
        feasibility: "Use StegExpose dataset",
      },
      {
        title: "AI-Powered Automated Penetration Testing Assistant",
        description:
          "Create an AI system that simulates penetration testing by analyzing network and application logs to automatically identify and report exploitable weaknesses.",
        feasibility: "Use DARPA's IDS datasets",
      },
      {
        title: "AI-Based Privacy Leak Detector in Mobile Apps",
        description:
          "Develop a model to scan mobile application permissions and behavior to flag potential privacy leaks and insecure data practices.",
        feasibility: "Use available app metadata, permission datasets",
      },
      {
        title:
          "AI-Powered Secure Data Access Monitor for Multi-Factor Authentication (MFA) Systems",
        description:
          "Create a model that analyzes user authentication patterns (time, location, behavior) to detect and alert on suspicious MFA usage or potential bypass attempts.",
        feasibility: "Simulate authentication logs or use open datasets",
      },
      {
        title: "AI-Enhanced Threat Hunting in Cloud Environments",
        description:
          "Build an AI tool to monitor and analyze cloud access logs and configurations, detecting anomalous behaviors indicative of compromise or misconfiguration.",
        feasibility:
          "Use publicly available cloud security logs (or simulated datasets)",
      },
    ],
    "AI in Edge Computing": [],
    "AI in Defense and Disaster Response": [],
  };

  const copyToClipboard = (track, ps = null) => {
    const template = ps
      ? `### 1. Track(s) Chosen:
${track}

### 2. Problem Statement:
${
  ps
    ? `**${ps.title}**
${ps.description}
Feasibility: ${ps.feasibility}`
    : "<!-- Describe your problem statement here -->"
}

### 3. Introduction:
<!-- Briefly introduce your team and your project idea -->

### 4. Proposed Solution:
<!-- Overview of your approach and what makes it unique -->

### 5. Solution Description:
<!-- Detailed explanation with features, functionalities, and how it addresses the problem -->

### 6. Tech Stack:
<!-- Technologies, tools, frameworks used and reasons for choosing them -->`
      : `### 1. Track(s) Chosen:
${track}

### 2. Problem Statement:
<!-- Describe the problem you aim to solve -->

### 3. Introduction:
<!-- Briefly introduce your team and your project idea -->

### 4. Proposed Solution:
<!-- Overview of your approach and what makes it unique -->

### 5. Solution Description:
<!-- Detailed explanation with features, functionalities, and how it addresses the problem -->

### 6. Tech Stack:
<!-- Technologies, tools, frameworks used and reasons for choosing them -->`;

    navigator.clipboard.writeText(template);
    toast.success("Submission template copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const trackColors = {
    "AI in Healthcare": "#06b81b",
    "AI in Cyber Security": "#06b81b",
    "AI in Edge Computing": "#06b81b",
    "AI in Defense and Disaster Response": "#06b81b",
  };

  const renderTrackButton = (track) => {
    const hasPredefinedPS = problemStatements[track].length > 0;

    return (
      <div
        className="track-button-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "10px",
        }}
      >
        <button
          key={track}
          className={`btn ${
            activeTrack === track ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => {
            if (!hasPredefinedPS) {
              copyToClipboard(track);
            } else {
              setActiveTrack(activeTrack === track ? null : track);
            }
          }}
          style={{
            backgroundColor:
              activeTrack === track ? trackColors[track] : "transparent",
            borderColor: trackColors[track],
            color: activeTrack === track ? "white" : trackColors[track],
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "all 0.3s ease",
            border: `2px solid ${trackColors[track]}`,
            boxShadow:
              activeTrack === track
                ? `0 0 15px ${trackColors[track]}40`
                : "none",
            position: "relative",
          }}
        >
          {track}
        </button>
      </div>
    );
  };

  const trackSections = {
    position: "relative",
    border: "1px solid rgba(8, 218, 34, 0.2)",
    borderRadius: "15px",
    padding: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(8, 218, 34, 0.1)",
    marginBottom: "30px",
    transition: "all 0.3s ease",
  };

  return (
    <section id="ProblemStatements" style={{ padding: "60px 0" }}>
      <div className="container text-center mb-5">
        <h2 className="section-title">
          <span className="">Problem Statements</span>
        </h2>
        <div className="section-underline"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12" style={trackSections}>
            <h3 style={{ color: "#06b81b", marginBottom: "20px" }}>
              Open Innovation Tracks
            </h3>
            <p style={{ color: "#bbbdc0", marginBottom: "20px" }}>
              Click on a track to copy the submission template
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(problemStatements)
                .filter((track) => !problemStatements[track].length)
                .map((track) => renderTrackButton(track))}
            </div>
          </div>

          <div className="col-12" style={trackSections}>
            <h3
              style={{
                color: "#06b81b",
                marginBottom: "20px",
                // textAlign: "center",
              }}
            >
              Predefined Problem Statement Tracks
            </h3>
            <div
              style={{
                backgroundColor: "rgba(6, 184, 27, 0.1)",
                border: "1px solid rgba(6, 184, 27, 0.2)",
                borderRadius: "8px",
                padding: "20px",
                margin: "20px auto",
                maxWidth: "800px",
              }}
            >
              <p
                style={{
                  color: "#e0e0e0",
                  fontSize: "1.1rem",
                  marginBottom: "12px",
                }}
              >
                <i
                  className="fas fa-info-circle"
                  style={{ color: "#06b81b", marginRight: "8px" }}
                ></i>
                <strong>Track Selection & Submission Guidelines</strong>
              </p>
              <p
                style={{
                  color: "#bbbdc0",
                  fontSize: "0.95rem",
                  marginBottom: "15px",
                  textAlign: "left",
                }}
              >
                <strong style={{ color: "#06b81b" }}>
                  Selection Criteria:
                </strong>{" "}
                75% of selected teams will be from predefined problem
                statements, while 25% will be from open innovation tracks.
              </p>
            </div>
            <p
              style={{
                color: "#bbbdc0",
                marginBottom: "20px",
                // textAlign: "center",
              }}
            >
              Click on a track to view problem statements
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(problemStatements)
                .filter((track) => problemStatements[track].length > 0)
                .map((track) => renderTrackButton(track))}
            </div>
          </div>
        </div>

        {activeTrack && problemStatements[activeTrack].length > 0 && (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="problem-statements-container"
                style={{
                  backgroundColor: "#000000",
                  padding: "30px",
                  borderRadius: "10px",
                  color: "#ffffff",
                  maxWidth: "800px",
                  margin: "0 auto",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    color: trackColors[activeTrack],
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  {activeTrack} Problem Statements
                </h3>
                {problemStatements[activeTrack].map((ps, idx) => (
                  <div
                    key={idx}
                    className="problem-statement-item"
                    style={{
                      marginBottom: "20px",
                      padding: "20px",
                      border: `1px solid ${trackColors[activeTrack]}40`,
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundColor: "#1a1a1a",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      position: "relative",
                    }}
                    onClick={() => copyToClipboard(activeTrack, ps)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = `0 6px 12px rgba(0, 0, 0, 0.3), 0 0 15px ${trackColors[activeTrack]}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow =
                        "0 2px 4px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <h4
                      style={{
                        color: trackColors[activeTrack],
                        marginBottom: "15px",
                      }}
                    >
                      {ps.title}
                    </h4>
                    <p
                      style={{
                        marginBottom: "10px",
                        fontFamily: "consolas",
                        fontSize: "1rem",
                        color: "#ffffff",
                      }}
                    >
                      {ps.description}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "consolas",
                        color: "#cccccc",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Feasibility:</strong>{" "}
                      {ps.feasibility}
                    </p>
                  </div>
                ))}

                {/* Add your own problem statement section */}
                <div
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    border: `1px solid ${trackColors[activeTrack]}40`,
                    borderRadius: "8px",
                    backgroundColor: "#1a1a1a",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h4
                    style={{
                      color: trackColors[activeTrack],
                      marginBottom: "15px",
                      textAlign: "center",
                    }}
                  >
                    Bring Your Own Problem Statement
                  </h4>
                  <p
                    style={{
                      color: "#ffffff",
                      marginBottom: "20px",
                      textAlign: "center",
                    }}
                  >
                    Have a unique problem statement in mind? Use our template to
                    submit your own idea!
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => copyToClipboard(activeTrack)}
                      style={{
                        backgroundColor: "transparent",
                        border: `1px solid ${trackColors[activeTrack]}`,
                        color: trackColors[activeTrack],
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${trackColors[activeTrack]}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      Copy Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemStatements;
