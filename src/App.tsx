import { useState, useEffect, ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Products from "./pages/Products";


// ✅ Type for PageTransition props
interface PageTransitionProps {
  children: ReactNode;
}


// ✅ Page transition wrapper
const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};


// ✅ Scroll to top on route change
const ScrollToTop = (): null => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};


// ✅ App content
const AppContent = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const location = useLocation();

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <ScrollToTop />

          <ScrollProgress />

          <Navbar />

          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          <Footer />

          <WhatsAppButton />
        </>
      )}
    </>
  );
};


// ✅ Main App
function App(): JSX.Element {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;