import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.svg"
              alt="threejs logo"
              className="w-12 h-12 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-darkGreen">
                LET'S <br className="xl:block:hidden" />
                <p>Customize</p>
              </h1>
            </motion.div>
            <motion.div {...headContainerAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Step into the Future of Fashion: Design Your Distinctive Look with Our Cutting-edge 3D Customization Tool. Your Style, Your Rules – Unleash Imagination, Define Individuality!
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
