import styles from "./App.module.scss";
import { Content } from "./modules/content/content";
import { Header } from "./modules/header/header";
import { Sidebar } from "./modules/sidebar/sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
