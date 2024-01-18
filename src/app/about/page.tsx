import Image from "next/image";
import styles from './About.module.css'

export default function About() {
  return (
    <div className="grid grid-cols-2">
      <div></div>
      <div className={styles.aboutImg}>
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
}
