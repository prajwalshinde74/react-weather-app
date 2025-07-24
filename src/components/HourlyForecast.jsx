import React from "react";
import cloudIcon from "../assets/images/ic_cloudy.svg";
import sunnyIcon from "../assets/images/ic_sunny.svg";
import windyIcon from "../assets/images/ic_windy.svg";

const HourlyForecast = ({ hourlyData }) => {
  const cardData = [
    { time: "Now", icon: cloudIcon, tempValue: "23" },
    { time: "1 PM", icon: sunnyIcon, tempValue: "24" },
    { time: "2 PM", icon: windyIcon, tempValue: "25" },
    { time: "3 PM", icon: sunnyIcon, tempValue: "26" },
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "1rem",
      }}
    >
      <h2 style={{ color: "black", textAlign: "center", marginBottom: "1rem" }}>
        Hourly Forecast
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {cardData.map((item) => (
          <div
            key={item.time}
            style={{
              background: "lightGrey",
              color: "black",
              borderRadius: "12px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "5rem",
              gap: "0.5rem",
            }}
          >
            <span>{item.time}</span>
            <img
              src={item.icon}
              alt="weather icon"
              style={{ width: "40px", height: "40px" }}
            />
            <span>{item.tempValue}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
