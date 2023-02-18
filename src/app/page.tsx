import { Divider } from "@/components/Divider";
import { InputSearch } from "@/components/InputSearch";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Divider>noun</Divider>
      <InputSearch />
    </main>
  );
}
