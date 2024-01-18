import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-full flex justify-between py-4">
      <h1 className="text-2xl font-bold text-white items-center">NextWeb</h1>
      <p className="text-white">RSaroha.dev &#169; All rights reserved.</p>
    </div>
  );
};

export default Footer;
