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
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 11.5c0 4.142-3.582 7.5-8 7.5-1.184 0-2.308-.242-3.316-.677L4 20l1.28-4.082A7.189 7.189 0 0 1 4 11.5C4 7.358 7.582 4 12 4s8 3.358 8 7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.6 10.2c.2-.5.4-.6.7-.6h.6c.2 0 .4 0 .5.3l.8 1.9c.1.3.1.5-.1.7l-.4.4c-.2.2-.2.4 0 .7.4.7 1.1 1.4 1.9 1.9.3.2.5.2.7 0l.5-.4c.2-.2.4-.2.7-.1l1.9.8c.3.1.3.3.3.5v.6c0 .3-.1.5-.6.7-.6.2-2 0-3.6-.9-1.6-.9-2.9-2.2-3.8-3.8-.9-1.6-1.1-3-.9-3.6Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <a
        className={styles.button}
        href={phoneHref}
        aria-label="Call"
        title="Call"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8.6 3.8 6.9 5.4c-.6.6-.8 1.4-.5 2.2a18.6 18.6 0 0 0 10 10c.8.3 1.6.1 2.2-.5l1.6-1.7c.5-.5.5-1.3 0-1.8l-2-2c-.5-.5-1.2-.5-1.7 0l-.8.8c-1.5-.8-2.9-2.2-3.7-3.7l.8-.8c.5-.5.5-1.2 0-1.7l-2-2c-.5-.5-1.3-.5-1.8 0Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
