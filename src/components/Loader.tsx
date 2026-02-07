import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-800 z-50">
      <div className="text-center">
      <div
          className="inline-block w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl font-medium text-primary-600 dark:text-primary-400"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;