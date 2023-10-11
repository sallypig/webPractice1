import styles from '../page.module.css'
import ProductList from './productList'

export default function Home() {
  return (<div className={styles.main}>
    <ProductList />
  </div>)
}