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
  const TIME_RANGE = 5 * 60 * 1000; // 5 minutes
  const minRangeTime = new Date(currentTime.getTime() - TIME_RANGE);
  const q = query(
    lightRef,
    where("time", ">=", minRangeTime),
    orderBy("time", "desc"),
    limit(12)
  );
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("Lights Data: ", data);

  return data;
};
