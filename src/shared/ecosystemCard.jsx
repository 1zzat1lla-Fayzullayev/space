/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

function EcosystemCard() {
  const ecosystemData = [
    { ecosystemName: "Transactions per second", ecossystemNumMax: 5425 },
    { ecosystemName: "Total Transactions", ecossystemNumMax: 60000000 },
    { ecosystemName: "Cost per Transactions", ecossystemNumMax: 0.002 },
    { ecosystemName: "Validator nodes", ecossystemNumMax: 1500 },
  ];

  const [currentValues, setCurrentValues] = useState(
    ecosystemData.map(() => 0)
  );
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = ecosystemData.map((item, index) => {
      const step =
        item.ecossystemNumMax > 1
          ? Math.ceil(item.ecossystemNumMax / 100)
          : item.ecossystemNumMax / 100;

      return setInterval(() => {
        setCurrentValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.min(
            newValues[index] + step,
            item.ecossystemNumMax
          );
          return newValues;
        });
      }, 30); 
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-center items-center md:mt-[80px] w-full relative z-[90]"
    >
      {ecosystemData.map((item, index) => (
        <div
          key={item.ecosystemName}
          className="bg-[#232325CC] max-w-full w-full rounded-[10px] flex items-center justify-between px-[20px] min-h-[130px] gap-[50px]"
        >
          <h3 className="font-Apfel text-white md:max-w-[120px]">
            {item.ecosystemName}
          </h3>
          <p className="font-Neue text-white text-[27px] font-[600]">
            {item.ecossystemNumMax === 0.002
              ? `$${currentValues[index].toFixed(3)}`
              : item.ecossystemNumMax >= 1000000
              ? `${Math.floor(currentValues[index] / 1000000)}M+`
              : currentValues[index]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EcosystemCard;
