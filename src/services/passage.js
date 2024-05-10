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
  const TIME_RANGE = 60 * 60 * 1000; // 60 minutes
  const minRangeTime = new Date(currentTime.getTime() - TIME_RANGE);
  const q = query(
    passageRef,
    where("time", ">=", minRangeTime),
    orderBy("time", "desc"),
    limit(60)
  );
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("Passage Data: ", data);

  return data;
};
