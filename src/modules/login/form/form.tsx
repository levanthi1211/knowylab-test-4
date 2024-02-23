import styles from "./form.module.scss";
import React from "react";
import GoogleIcon from "/images/google.jpg";

export const Form = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.form}>
      <div className={styles.top}>
        <h1 className={styles.header}>Login to My Apollo 2.0 </h1>
        <form className={styles.login_form} onSubmit={handleLogin}>
          <div className={styles.title}>
            <h3 className={styles.left}>Hello!</h3>
            <p className={styles.right}>Good to see you today!</p>
          </div>
          <input className={styles.input} placeholder="Your username" />
          <input className={styles.input} placeholder="Your password" />
          <button className={styles.submit}>LOGIN</button>
          <p className={styles.forgot_password}>
            Forgot your password? <span>Click here</span>
          </p>
          <div className={styles.divider}>
            <span>or login with</span>
          </div>
          <button className={styles.google}>
            <img src={GoogleIcon} />
            <span>Google</span>
          </button>
        </form>
      </div>
      <div className={styles.bottom}>Made by Apollo English with ❤️</div>
    </div>
  );
};
