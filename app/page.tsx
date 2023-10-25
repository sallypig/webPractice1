import styles from './page.module.css'
import MyButton from './mybutton';
import ProductList from './product/productList'
import Click from './click'
export default function Home() {
  return (
  <div className={styles.main}>
    <h1>Hello</h1>
    <h2>我是吳濟聰</h2>
    <MyButton/>
    <Click /> 
    <ProductList />
  </div>
  )
}