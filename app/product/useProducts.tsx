import { addDoc, collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import app from "@/app/_firebase/Config"
import { useEffect, useState } from "react";

export default function useProducts() {
  const db = getFirestore(app);
  const [products, setProducts] = useState<{ desc: string, price: number }[]>([
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 }
  ])

  // let data = [
  //   { desc: "iPad", price: 20000 },
  //   { desc: "iPhone 8", price: 20000 },
  //   { desc: "iPhone X", price: 30000 }
  // ];

  const [updated, setUpdated] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let data: { desc: string, price: number }[] = [];
      const productRef = collection(db, "product")
      const productQuery = query(productRef, orderBy("price"));
      const querySnapshot = await getDocs(productQuery);
      querySnapshot.forEach((doc) => {
        data.push({ desc: doc.data().desc, price: doc.data().price })
        console.log(`${doc.id} => ${doc.data()}`);
      });
      setProducts(() => [...data]);
      setIsLoading(false);
    }
    fetchData();
  }, [db, updated]);

  async function addProduct(product: { desc: string, price: number }) {
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "product"),
      { desc: product.desc, price: product.price });
    console.log("Document written with ID: ", docRef.id);
    setUpdated((currentValue) => currentValue + 1)
  }

  return [products, setProducts, addProduct, isLoading] as const;

}