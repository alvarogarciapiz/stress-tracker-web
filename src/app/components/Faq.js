"use client"
import { useState } from "react";
import styles from "../css/Faq.module.css";

const faqs = [
  {
    question: "How does the app measure stress?",
    answer: "The app uses heart rate variability (HRV) data collected from your Apple Watch to measure stress levels. HRV is the variation in time between heartbeats and is a key indicator of autonomic nervous system activity. Low HRV typically indicates higher stress levels, as your body is in a “fight or flight” state, while higher HRV suggests a state of relaxation and recovery. By analyzing these fluctuations, the app provides accurate insights into your stress patterns throughout the day and night.",
  },
  {
    question: "What data does the app collect, and where is it stored?",
    answer: "The app does not collect or store any personal data. All readings are directly accessed from your Apple Watch through HealthKit and are stored locally on your device. None of your data is uploaded to servers or shared externally, ensuring your privacy is always protected.",
  },
  {
    question: "Is the app compatible with all Apple Watch models?",
    answer: "The app is compatible with Apple Watch models running the latest version of watchOS. To enjoy the full functionality of the app, please ensure your Apple Watch is updated to the most recent software version.",
  },
  {
    question: "What is the Recovery Index, and how is it calculated?",
    answer: "The Recovery Index measures the balance between daily stress and nightly recovery using HRV data and other key metrics. It analyzes how well your body recovers overnight by comparing periods of high stress during the day with restful recovery phases at night. A strong Recovery Index means your body effectively restores itself, while a lower index may suggest the need for better rest or stress management strategies.",
  },
  {
    question: "Can I use the app without an Apple Watch?",
    answer: "No, the app requires an Apple Watch to function as it relies on HRV data and other health metrics that are captured exclusively by the Apple Watch through HealthKit.",
  },
  {
    question: "How do I interpret the daily and weekly evolution graphs?",
    answer: "The daily evolution graph shows your stress fluctuations throughout the day, helping you identify high-stress periods and moments of calm. The weekly evolution graph provides a broader perspective, showing trends and averages across the week. This helps you pinpoint patterns, such as recurring stress triggers, and track how well your stress levels are improving over time.",
  },
  {
    question: "Are there any additional costs after purchasing the app?",
    answer: "No, the app is a one-time payment of $2.99 with no hidden fees or subscription costs. Once purchased, you’ll have lifetime access to all features and updates.",
  },
  {
    question: "How does the app protect my privacy?",
    answer: "Your privacy is our priority. The app keeps all your data on your device and does not send any information to external servers. By ensuring your stress data stays local, we maintain the highest level of privacy for your information.",
  },
  {
    question: "What should I do if the app doesn’t sync or update correctly?",
    answer: "If the app isn’t working as expected, try closing it completely and reopening it. This simple step resolves most synchronization or display issues. If problems persist, ensure your Apple Watch and phone are updated to the latest software versions.",
  },
  {
    question: "Can I share my data with a doctor or health professional?",
    answer: "Yes, you can share your data with a doctor or health professional. While the app itself doesn’t export data directly, you can provide screenshots of your daily or weekly stress insights to help them understand your stress and recovery patterns.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h1 className={styles.title}>Have Questions? We’ve Got Answers</h1>
      <p className={styles.description}>
        Got questions about how Stress Tracker works? Explore our detailed FAQ or get in touch with our team for personalized support.
      </p>
      <div id="faq" className={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={styles.icon}>{activeIndex === index ? "–" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="contact" className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Still Have Questions?</h2>
        <p className={styles.contactDescription}>
        If you have any questions or suggestions, feel free to email us at {" "} 
          <a href="mailto:stressapp@lvrpiz.com">stressapp@lvrpiz.com</a>.
          We’d love to hear from you!
        </p>
      </div>
    </section>
  );
}