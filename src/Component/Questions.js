import React, { useState } from "react";
import "./Questions.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question accordion" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq = ({ faqs }) => {
  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const Questions = () => {
  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently asked question...</h1>
      <div className="faq-section">
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default Questions;
