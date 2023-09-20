import styles from './page.module.css'
import MyButton from './mybutton';
export default function Home() {
  return (
  <div className={styles.main}>
    <h1>Hello</h1>
    <h2>我是吳濟聰</h2>
    <MyButton/>
  </div>
  )
}