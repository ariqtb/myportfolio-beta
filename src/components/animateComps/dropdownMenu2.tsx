import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20, transition: { duration: 1.2 } }
  };
  
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y:0,
      transition: {
        type:"easeIn",
        duration: 0.2,
        delayChildren: 0,
        staggerDirection: -1
      }
    },
  }

export const AnimatedMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="w-full"
      >
        <motion.button
        className="flex w-fit py-2 mb-2.5 rounded-lg justify-between bg-transparent text-gray-100"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
          className="self-center fill-gray-100"
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            {isOpen ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
          </motion.div>
        </motion.button>
        {/* <motion.ul
        className="absolute w-full py-2 px-4 gap-y-4 shadow-xl bg-gray-900 backdrop-blur-md"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Item 1 </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
          <motion.li variants={itemVariants}>Item 4 </motion.li>
          <motion.li variants={itemVariants}>Item 5 </motion.li>
        </motion.ul> */}
        {isOpen && (
        <motion.div
          initial={{ opacity:0.5, }}
          animate={{ opacity:1,}}
          transition={{ease: "easeInOut", duration: 0.4 }}
          className={` md:hidden`}
        >
          <motion.ul 
           variants={container}
           initial="hidden"
           animate="show"
          className="flex flex-col space-y-4 mt-2">
            <Link href="#top" passHref>
              <motion.li  variants={itemVariants} className="text-gray-100 hover:text-gray-400">Home</motion.li>
            </Link>
            <Link href="#about" passHref>
              <motion.li variants={itemVariants} className="text-gray-100 hover:text-gray-400">About</motion.li>
            </Link>
            <Link href="#project" passHref>
              <motion.li variants={itemVariants} className="text-gray-100 hover:text-gray-400">Project</motion.li>
            </Link>
            <Link href="#contact" passHref>
              <motion.li variants={itemVariants} className="text-gray-100 hover:text-gray-400">Contact</motion.li>
            </Link>
          </motion.ul>
        </motion.div>
      )}
      </motion.nav>
      );
}