import styles from "./FloatingContactButtons.module.css";

const DEFAULT_PHONE_E164 = "+919205436796";

export default function FloatingContactButtons({ phoneE164 = DEFAULT_PHONE_E164 }) {
  const digits = String(phoneE164).replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${digits}`;
  const phoneHref = `tel:${phoneE164}`;

  return (
    <div className={styles.wrap} aria-label="Contact options">
      <a
        className={styles.button}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <img
          className={styles.iconImg}
          src="/whatsapp-svgrepo-com.svg"
          alt=""
          aria-hidden="true"
        />
      </a>

      <a
        className={styles.button}
        href={phoneHref}
        aria-label="Call"
        title="Call"
      >
        <img
          className={styles.iconImg}
          src="/phone-svgrepo-com.svg"
          alt=""
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
