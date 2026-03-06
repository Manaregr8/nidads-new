import styles from "./PostGraduationProgram.module.css";

export default function PostGraduationProgram() {
  const benefits = [
    "3-Year Comprehensive Program",
    "Industry-Mentored Project Work",
    "Professional Certification",
    "Career Advancement Guidance",
    "Real-World Experience",
    "Global Networking",
    "Job Ready Skills",
    "Placement Assistance"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – HIGHLIGHT CARD */}
        <div className={styles.highlightBlock}>
          <div className={styles.badge}>NEW PROGRAM</div>
          <div className={styles.mainCard}>
            <h3 className={styles.programTitle}>
              3-Year Post Graduation Program
            </h3>
            <p className={styles.subtitle}>
              Transform Your Career with Industry-Leading Training
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Duration</span>
                <span className={styles.value}>36 Months</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Level</span>
                <span className={styles.value}>Professional</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Placement Rate</span>
                <span className={styles.value}>95%+</span>
              </div>
            </div>

            <a
              href="tel:+919205436796"
              className={styles.ctaButton}
              aria-label="Call admissions"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT – BENEFITS */}
        <div className={styles.benefitsBlock}>
          <h3 className={styles.sectionTitle}>Program Highlights</h3>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>

          <div className={styles.descriptionBox}>
            <p>
              Our flagship 3-year post-graduation program is designed for professionals 
              looking to advance their careers with cutting-edge skills and industry expertise. 
              Combining rigorous coursework, hands-on projects, and mentorship from industry leaders, 
              this program prepares you for leadership roles in the data and technology sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
