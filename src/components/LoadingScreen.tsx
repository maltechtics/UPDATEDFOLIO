
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const name = "MALTECHTICS";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);
  
  return (
    <div className="loader">
      <div className="relative flex flex-col items-center gap-6">
        <Loader className="w-12 h-12 text-purple-light animate-spin" />
        <div className="loader-text">
          {name.split('').map((letter, index) => (
            <span 
              key={index} 
              style={{ 
                animationDelay: `${index * 0.05}s`,
                color: index < 5 ? '#9b87f5' : '#fff' 
              }}
              className={index % 2 === 0 ? "animate-glitch" : ""}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
