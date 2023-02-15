import styles from "./Divider.module.css";

export const Divider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.divider} role="separator">
      <div>{children}</div>
    </div>
  );
};
