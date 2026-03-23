import styles from "../legal/legal.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NIDADS website, enquiries, and course-related services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <article className={styles.card}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: March 3, 2026</p>

          <p className={styles.lead}>
            National Institute of Data Analytics & Data Science (NIDADS) respects your privacy.
            This Privacy Policy explains what information we collect, how we use it,
            and the choices you have when using our website, enquiry forms, and course services.
          </p>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <ul>
              <li>Personal details you provide, such as name, email, phone number, and course interest.</li>
              <li>Communication records when you contact us for counseling, support, or admissions.</li>
              <li>Technical data such as browser type, device information, IP address, and page usage analytics.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Information</h2>
            <ul>
              <li>To respond to enquiries and provide course counseling or enrollment assistance.</li>
              <li>To improve website performance, course information, and user experience.</li>
              <li>To send important updates related to admissions, classes, or support.</li>
              <li>To protect our services against misuse, fraud, and unauthorized access.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data only with trusted service
              providers (such as hosting, analytics, or communication tools) who process data on our
              behalf under appropriate confidentiality and security obligations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cookies and Analytics</h2>
            <p>
              We may use cookies and similar technologies to understand traffic and improve site features.
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Data Retention</h2>
            <p>
              We retain information only as long as necessary for admissions, support, legal compliance,
              and operational requirements.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>
              Subject to applicable law, you may request access, correction, or deletion of your personal
              information by contacting us through the Contact page.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Security</h2>
            <p>
              We use reasonable technical and organizational safeguards to protect your information.
              No method of transmission or storage is completely secure, so absolute security cannot be guaranteed.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Policy Updates</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected on this page
              with an updated effective date.
            </p>
          </section>

          <p className={styles.note}>
            For privacy-related questions, please reach out via the contact form on the website.
          </p>
        </article>
      </div>
    </main>
  );
}