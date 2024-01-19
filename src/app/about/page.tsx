import Image from "next/image";
import styles from "./About.module.css";

const aboutInfo = [
    {
        number:'10+',
        description:'Years of experience'
    },
    {
        number:'234K+',
        description:'People reached'
    },
    {
        number:'5K+',
        description:'Services and plugins'
    }
]

export default function About() {
  return (
    <div className="grid grid-cols-2 h-screen gap-10">
      <div className="flex justify-center flex-col gap-8">
        <h6 className={`${styles.aboutSubHeading} text-2xl font-bold`}>About Agency</h6>
        <h1 className="text-white font-bold text-6xl">
          We create digital ideas that are bigger, bolder, braver and better
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
        <div className="flex gap-10">
            {
                aboutInfo.map((card, i) => {
                    return <div>
                    <h4 className={`font-bold text-2xl ${styles.aboutCardHeading}`}>{card.number}</h4>
                    <p className="text-white text-sm">{card.description}</p>
                </div>
                })
            }
        </div>
      </div>
      <div className={styles.aboutImg}>
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
}
