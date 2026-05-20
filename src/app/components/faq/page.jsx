"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is IdeaVault?",
    answer:
      "IdeaVault is a dedicated platform for capturing, organizing, and developing ideas. Whether you're an entrepreneur, writer, artist, or innovator, IdeaVault provides the tools you need to turn your thoughts into actionable projects.",
  },
  {
    question: "Is IdeaVault free to use?",
    answer:
      "Yes! IdeaVault offers a generous free tier that lets you capture and organize unlimited ideas. We also offer premium plans with advanced features like collaboration tools, analytics, and priority support for power users.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply create a free account, and you can start adding ideas right away. Use tags and categories to organize your thoughts, share them with the community, and get feedback from like-minded thinkers.",
  },
  {
    question: "Can I collaborate with others on ideas?",
    answer:
      "Absolutely! Collaboration is at the heart of IdeaVault. You can share your ideas with specific people or the broader community, receive feedback, and work together to refine and develop concepts into reality.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a top priority. Your ideas are private by default, and you control who can see them. We use industry-standard encryption to protect your data, and we never share your personal information with third parties.",
  },
  {
    question: "Can I export my ideas?",
    answer:
      "Yes, you can export your ideas at any time. We support multiple formats including Markdown, JSON, and PDF, making it easy to back up your work or migrate to other platforms whenever you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="faq-accent-line" />
            <h2 className="faq-heading">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="faq-subtitle">
              Got questions? We&rsquo;ve got answers. If you don&rsquo;t see
              what you&rsquo;re looking for, feel free to reach out to our
              support team.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item${openIndex === index ? " is-open" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-icon-box">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                  <span>{faq.question}</span>
                  <svg
                    className="faq-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer-wrap">
                  <div className="faq-answer-inner">
                    <div className="faq-divider" />
                    <div
                      className="faq-answer"
                      id={`faq-answer-${index}`}
                      role="region"
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
