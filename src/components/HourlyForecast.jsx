const HourlyForecast = ({ hourlyData }) => {
  const cardData = [{ time: "Now", icon: "", tempValue: "23" }];

  return (
    <div style={{ background: "red", borderRadius: "16px", padding: "1rem" }}>
      <h2>Hourly Forecast</h2>
      {cardData?.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              columnGap: "1rem",
            }}
            key={item?.time}
          >
            <span>{item?.title}</span>
            {/* <img src={}/> */}
            <span>{item?.tempValue}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
