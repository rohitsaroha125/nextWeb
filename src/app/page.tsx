import Image from "next/image";
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen gap-10">
      <div className="flex gap-10 flex-col justify-center">
        <h1 className="text-white text-6xl font-bold">
          Creative Thought Agency
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex gap-6">
          <button className="primaryBtn">Learn More</button>
          <button className="secondaryBtn">Contact</button>
        </div>
        <div className={styles.brandImg}>
          <Image src={'/brands.png'} alt="" fill />
        </div>
      </div>
      <div className={styles.heroImg}><Image src={"/hero.gif"} alt="" fill /></div>
    </div>
  );
}
