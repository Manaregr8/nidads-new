import React from "react";
import styles from "./CourseComparison.module.css";

const LEVELS = [
  {
    title: "Expert Level",
    course: "Expert in Data Analytics",
    duration: "12 Months",
    features: [
      "70 Comprehensive Modules",
      "60+ AI Tools Integration",
      "Advanced Statistical Methods",
      "Data Strategy Development",
      "Leadership Training",
      "1-on-1 Mentorship",
      "Real Project Portfolio",
      "Industry Certification",
    ],
    perfectFor: "Future Data Analytics Leaders & Entrepreneurs",
  },
  {
    title: "Advanced Level",
    course: "Advanced Data Analytics",
    duration: "6 Months",
    features: [
      "60 Detailed Modules",
      "54+ AI Tools Coverage",
      "Comprehensive Data Visualization",
      "Predictive Modeling",
      "Campaign & Dashboard Management",
      "Group Mentorship",
      "Practice Projects",
      "Course Certification",
    ],
    perfectFor: "Analytics Professionals & Career Switchers",
  },
  {
    title: "Professional Level",
    course: "Data Analytics For Professionals",
    duration: "4 Months",
    features: [
      "40 Focused Modules",
      "50+ AI Tools Overview",
      "Essential SQL & Python Skills",
      "Basic Predictive Analytics",
      "Social Media & Web Analytics",
      "Weekly Mentorship",
      "Mini Projects",
      "Digital Certificate",
    ],
    perfectFor: "Working Professionals & Quick Learners",
  },
  {
    title: "Beginner Level",
    course: "Data Analytics For Beginners",
    duration: "3 Months",
    features: [
      "30 Basic Modules",
      "40+ AI Tools Introduction",
      "Basic Excel & SQL Concepts",
      "Data Analytics Fundamentals",
      "Marketing & Business Basics",
      "Group Learning",
      "Guided Projects",
      "Completion Certificate",
    ],
    perfectFor: "Students & Career Starters",
  },
];

export default function CourseComparison() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Choose Your Perfect Learning Path</h2>
        <p>
          Compare our courses and find the right fit for your data analytics
          journey
        </p>
      </div>

      <div className={styles.grid}>
        {LEVELS.map((lvl) => (
          <div key={lvl.title} className={styles.card}>
            <h3 className={styles.level}>{lvl.title}</h3>
            <p className={styles.course}>{lvl.course}</p>
            <p className={styles.duration}>{lvl.duration}</p>
            <ul className={styles.features}>
              {lvl.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className={styles.perfectFor}>Perfect For: {lvl.perfectFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
