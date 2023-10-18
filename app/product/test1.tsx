import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@/app/_firebase/Config"
import { useEffect, useState } from "react";

function English() {
  const db = getFirestore(app);
  const [english, setEnglish] = useState<{ a: string, b: string }[]>([
    { a: "apple", b: "bat" },
  ])

//   async function fetchData() {
//     let data: { desc: string, price: number }[] = [];
//     const querySnapshot = await getDocs(collection(db, "product"));
//     querySnapshot.forEach((doc) => {
//       data.push({ desc: doc.data().desc, price: doc.data().price })
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//     setProducts(() => [...data]);
//   }
  // fecthData();
  useEffect(() => {
    async function fetchData() {
      let data: { a: string, b: string }[] = [];
      const querySnapshot = await getDocs(collection(db, "English"));
      querySnapshot.forEach((doc) => {
        data.push({ a: doc.data().a, b: doc.data().b })
        console.log(`${doc.id} => ${doc.data()}`);
      });
      setEnglish(() => [...data]);
    }
    fetchData();
  }, [db]);

  return [english, setEnglish] as const;

}
export default English;