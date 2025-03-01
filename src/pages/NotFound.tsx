
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-pi-dark flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-10 max-w-md text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
          <span className="text-4xl">π</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-white/70 mb-6">The page you're looking for doesn't exist in the Pi ecosystem.</p>
        
        <Link to="/" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-pi-blue to-pi-purple text-white hover:shadow-lg hover:shadow-pi-blue/20 transition-all">
          Return to Dashboard
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
