import { Divider } from "@/components/Divider";
import { InputSearch } from "@/components/InputSearch";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <InputSearch />

      <header>
        <div>
          <h1>keyboard</h1>
          <h2>/ˈkiːbɔːd/</h2>
        </div>
      </header>
      <Divider>noun</Divider>
      <section>
        <h3>Meaning</h3>
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
        <div>
          <h3>Synonyms</h3>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
          <a href="#">electronic keyboard</a>
        </div>
      </section>
      <Divider>verb</Divider>
      <section>
        <h3>Meaning</h3>
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
        <div>
          <h3>Synonyms</h3>
          <a href="#">electronic keyboard</a>
        </div>
      </section>
    </main>
  );
}
