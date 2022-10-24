import { useContext } from "react";
// import { motion } from "framer-motion";

import AppContext from "./appContext";

const Carousel = () => {
  const { carousel } = useContext(AppContext);

  return (
    <div style={{ width: 50, height: 50, backgroundColor: "red" }}>
      {carousel}
    </div>
  );
};

export default Carousel;
