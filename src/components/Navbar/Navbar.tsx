import styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Brand</div>
      <ul>
        <li>menu 1</li>
      </ul>
    </header>
  );
}
