import { Divider } from "@/components/Divider";
import { InputSearch } from "@/components/InputSearch";
import { Section } from "@/components/Section";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <InputSearch />
      <section>
        <div>
          <h1>keyboard</h1>
          <h2>/ˈkiːbɔːd/</h2>
        </div>
      </section>
      <Section>
        <Section.Header>noun</Section.Header>
        <Section.Content title="Meaning">
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
          </ul>
        </Section.Content>
        <Section.Footer>
          <h3>Synonyms</h3>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
        </Section.Footer>
      </Section>
      <Section>
        <Section.Header>verb</Section.Header>
        <Section.Content title="Meaning">
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
          </ul>
        </Section.Content>
        <Section.Footer>
          <h3>Synonyms</h3>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
        </Section.Footer>
      </Section>
    </main>
  );
}
