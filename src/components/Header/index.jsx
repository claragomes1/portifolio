import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header} r>
      <Image src="/logo_branca.png" width={140} height={140} />
      <nav>
        <ul className={styles.header__navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>
            <Link href="/contact">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
