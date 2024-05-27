import { ImageList } from "./components/ImageList";
import styles from './index.module.css';

export default function App(props) {
  return (
    <div className={styles.appContainer}>
      <ImageList />
    </div>
  )
}
