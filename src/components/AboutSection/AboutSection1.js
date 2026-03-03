import styles from "./aboutSection1.module.css";

// Add your actual image URLs here (paths point to /public/whyChooseUs files)
const philosophyImg = "/whyChooseUs/growth partners.webp";
const mainImg = "/studentImages/student1 (2).jpg";
// principal images not currently used; remove or replace if needed
// const principal1Img = "/center/IMG_4066.webp";
// const principal2Img = "/center/IMG_4067.webp";

export default function AboutSection1() {
  return (
    <section className={styles.wrapper}>
      {/* Top Section */}
      <div className={styles.topGrid}>
        <div className={styles.left}>
          <h2 className={styles.heading}>ABOUT<br />NIDAD</h2>
          <div className={styles.leftDesc}>
            <div className={styles.detail}>
              National Institute of Data Analytics and Data Science
            </div>
            <div className={styles.subdesc}>
              Industry-focused training in Data Analytics, Data Science,<br />
              and Machine Learning with real-world projects and mentorship.
            </div>
          </div>
        </div>
        <div className={styles.middle}>
        
        </div>
        <div className={styles.right}>
          <img src={philosophyImg} alt="Our Philosophy" className={styles.philosophyImg} width={420} height={288} />
          <div className={styles.philosophyTextBlock}>
            <div className={styles.philosophyTitle}>Our Mission</div>
            <div className={styles.philosophyText}>
              At NIDAD, we believe in practical, career-driven education.<br />
              Our goal is to transform learners into job-ready data professionals<br />
              through hands-on projects, industry tools, and expert guidance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
