import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebase";

export const getPassage = async () => {
  const passageRef = collection(db, "passage");

  const currentTime = new Date();
  const TIME_RANGE = 61 * 60 * 1000; // 61 minutes (1 minutes for delay)
  const minRangeTime = new Date(currentTime.getTime() - TIME_RANGE);
  const q = query(
    passageRef,
    where("time", ">=", minRangeTime),
    orderBy("time", "desc"),
    limit(61) // so that it span all 0-60 min with 1 min interval (61 data point)
  );
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("Passage Data: ", data);

  return data;
};
