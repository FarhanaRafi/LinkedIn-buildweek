import { useSelector } from "react-redux";
import { getMyProfileAsync } from "../Redux/Actions";

const Main = () => {
  const myData = useSelector((state) => state.profile.data);
  console.log(myData);
  return <p>Main</p>;
};

export default Main;
