import { ThreeCircles } from "react-loader-spinner";

export const ThreeCirclesComp = () => {
  return (
    <ThreeCircles
      visible={true}
      height={16}
      width={70}
      color="#4fa94d"
      ariaLabel="three-circles-loading"
    />
  );
};
