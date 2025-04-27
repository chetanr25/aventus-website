import React, { useState } from "react";
import "./css/faqs.css";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    {
      question: "What is Aventus 3.0?",
      answer:
        "Aventus 3.0 is a hackathon event organized by our institution to bring together innovative minds to solve real-world problems.",
    },
    {
      question: "When is the event?",
      answer: "The event will be held on May 17-18, 2025.",
    },
    {
      question: "Who can participate?",
      answer:
        "Any student currently enrolled in a college or university can participate in teams of 2-4 members.",
    },
    {
      question: "What is the prize pool?",
      answer: "The total prize pool for Aventus 3.0 is ₹3.0 Lakhs.",
    },
    {
      question: "Is individual participation allowed?",
      answer:
        "No, individual participation is not allowed. You must be part of a team of 2-4 members.",
    },
  ];

  const hiddenFaqs = [
    {
      question: "What is the registration fee?",
      answer: "Participation in the hackathon is completelyfree of cost.",
    },
    {
      question: "What is the venue?",
      answer:
        "The hackathon will be held at Dayananda Sagar College of Engineering, Bangalore.",
    },
    {
      question: "What is the team size?",
      answer: "The team size is 2-4 members.",
    },
    {
      question: "What is the submission deadline?",
      answer: "The submission deadline is April 30, 2025.",
    },

    {
      question: "Is it a remote or an on-site Hackathon?",
      answer:
        " The Aventus 3.0 Hackathon is an in-person event hosted at Dayananda Sagar College of Engineering. ",
    },
    {
      question: "Will meals be provided during the event?",
      answer:
        "Yes, participants will be provided with free meals and refreshments throughout the hackathon.",
    },
    {
      question: "Can we form teams with members from different colleges?",
      answer: "Yes, teams can include members from different colleges.",
    },
    {
      question: "What should we bring to the hackathon?",
      answer:
        "Make sure to bring your college ID, laptop, charger, medications (if any), any hardware or devices essential for your project, and personal items you might need during the 24-hour hackathon.",
    },
    {
      question: "I'm from a different city. Do you provide accommodation?",
      answer:
        "No, we do not offer accommodation for participants. You will need to manage your own travel and stay near the venue. However, during the 24-hour hackathon, we will ensure that all necessary facilities are provided to make the event as comfortable as possible.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-section">
      <div className="faqs-content" style={{ textAlign: "left" }}>
        <h2 style={{ textAlign: "left" }}>Frequently Asked Questions</h2>
        <div className="faqs-list" style={{ textAlign: "left" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              style={{ textAlign: "left" }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
                style={{ textAlign: "left" }}
              >
                <h3 style={{ textAlign: "left" }}>{faq.question}</h3>
                <span
                  className={`arrow ${openIndex === index ? "up" : "down"}`}
                >
                  ▼
                </span>
              </div>
              <div className="faq-answer" style={{ textAlign: "left" }}>
                <p style={{ textAlign: "left" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {!showMore ? (
          <button
            className="more-btn"
            onClick={() => setShowMore(true)}
            style={{
              textAlign: "center",
              marginTop: "20px",
              borderRadius: "5px",
              display: "block",
              margin: "0 auto",
            }}
          >
            More ▼
          </button>
        ) : (
          <>
            <div className="faqs-list" style={{ textAlign: "left" }}>
              {hiddenFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    openIndex === index + faqs.length ? "open" : ""
                  }`}
                  style={{ textAlign: "left" }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(index + faqs.length)}
                    style={{ textAlign: "left" }}
                  >
                    <h3 style={{ textAlign: "left" }}>{faq.question}</h3>
                    <span
                      className={`arrow ${
                        openIndex === index + faqs.length ? "up" : "down"
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  <div className="faq-answer" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="less-btn"
              onClick={() => setShowMore(false)}
              style={{ textAlign: "left" }}
            >
              Show Less ▲
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Faqs;
