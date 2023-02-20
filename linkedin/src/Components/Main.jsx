import { useSelector } from "react-redux";

const Main = () => {
  const myData = useSelector((state) => state.profile.data);
  console.log(myData);
  return <p>Main</p>;
};

export default Main;
