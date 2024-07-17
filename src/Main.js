import React from "react";
import { motion } from "framer-motion";

function Main() {
    return (
        <div className="desc">
            <motion.h2
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
            >
                Yeswanth sai Vuddula
            </motion.h2>
            <motion.h5
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                Software Engineer . Data Analyst . Data Engineer . Data Scientist
            </motion.h5>
            <h5></h5>
        </div>
    );
}

export default Main;
