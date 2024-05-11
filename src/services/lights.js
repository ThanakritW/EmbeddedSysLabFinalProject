import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebase";

export const getLight = async () => {
  const lightRef = collection(db, "lights");

  const currentTime = new Date();
  const TIME_RANGE = ((5 * 60) + 10) * 1000; // 5 minutes + 10 sec for delay 
  const minRangeTime = new Date(currentTime.getTime() - TIME_RANGE);
  const q = query(
    lightRef,
    where("time", ">=", minRangeTime),
    orderBy("time", "desc"),
    limit(13) //so that data point cover all 0-60 in 5 sec interval
  );
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("Lights Data: ", data);

  return data;
};
