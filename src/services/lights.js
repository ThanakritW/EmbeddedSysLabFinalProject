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
  const dustRef = collection(db, "lights");

  const currentTime = new Date();
  const TIME_RANGE = 60 * 60 * 1000; // 5 minutes
  const minRangeTime = new Date(currentTime.getTime() - TIME_RANGE);
  const q = query(
    dustRef,
    where("time", ">=", minRangeTime),
    orderBy("time", "desc"),
    limit(5)
  );
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    data.push(doc.data());
  });

  console.log(data);

  return data;
};
