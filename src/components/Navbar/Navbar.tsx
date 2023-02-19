import { Switch } from "../Switch";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Brand</div>
      <ul>
        <li>
          <Switch />
        </li>
      </ul>
    </header>
  );
}
