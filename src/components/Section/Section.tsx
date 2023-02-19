import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={styles.section}>{children}</section>;
};

interface SectionHeaderProps {
  children: ReactNode;
}

const Header = ({ children }: SectionHeaderProps) => {
  return <h3 className={styles.section__header}>{children}</h3>;
};

interface ContentProps {
  title?: string;
  children: ReactNode;
}

const Content = ({ title, children }: ContentProps) => {
  return (
    <div className={styles.section__content}>
      {title ? (
        <h3 className={styles.section__content__title}>{title}</h3>
      ) : null}
      {children}
    </div>
  );
};

interface FooterProps {
  title?: string;
  children: ReactNode;
}

const Footer = ({ title, children }: FooterProps) => {
  return <div className={styles.section__footer}>{children}</div>;
};

Section.Header = Header;
Section.Content = Content;
Section.Footer = Footer;

export { Section };
