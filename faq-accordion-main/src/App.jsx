import React, { useState, useRef } from "react";

function App() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const accordionRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const targetIndex = e.key === "ArrowDown" ? index + 1 : index - 1;
      const targetElement = accordionRefs.current[targetIndex];
      if (targetElement) {
        targetElement.focus();
      }
    }
  };

  const accordionData = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
    {
      title: "Is Frontend Mentor free?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      title: "How can I get help if I'm stuck on a challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq__container">
        <h1>FAQs</h1>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div className="accordion__item" key={index}>
              <h3>
                <button
                  className="accordion__trigger"
                  aria-expanded={openAccordionIndex === index}
                  aria-controls={`accordion-content-${index}`}
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (accordionRefs.current[index] = el)}>
                  {item.title}
                </button>
              </h3>
              <div
                className="accordion__text"
                aria-hidden={openAccordionIndex !== index}
                id={`accordion-content-${index}`}>
                <div>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
