import { Header } from '../../modules/header/header'
import { Home } from '../../modules/home/home'
import { Sidebar } from '../../modules/sidebar/sidebar'
import styles from './home.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Home />
      </div>
    </div>
  )
}
