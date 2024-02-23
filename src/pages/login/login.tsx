import { Background } from "../../modules/login/background/background";
import { Form } from "../../modules/login/form/form";
import styles from "./login.module.scss";

export const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <div className={styles.form}>
          <Form />
        </div>
        <div className={styles.background}>
          <Background />
        </div>
      </div>
    </div>
  );
};
