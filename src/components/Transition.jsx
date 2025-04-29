import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => setIsTransitioning(false), 1500);
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="relative overflow-hidden min-h-screen">
        {/* Page content */}
        <div className={`${isTransitioning ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
          {children}
        </div>
  
        {/* Rectangle overlays */}
        {isTransitioning && (
          <div className="absolute inset-0 z-50 flex flex-col">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 bg-black transform translate-x-full animate-slideIn`}
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
};

export default PageTransition;