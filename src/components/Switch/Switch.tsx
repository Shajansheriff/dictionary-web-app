import styles from "./Switch.module.css";

interface SwitchProps {
  name?: string;
}

export function Switch({ name }: SwitchProps) {
  return (
    <label className={styles.switch} htmlFor={name}>
      <input
        aria-hidden
        tabIndex={-1}
        className={styles.switch__input}
        type="checkbox"
        name={name}
      />
      <div className={styles.switch__slider}>
        <div className={styles.switch__slider__thumb}></div>
      </div>
    </label>
  );
}
