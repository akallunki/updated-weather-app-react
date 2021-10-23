export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <form>
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="row">
        <div className="col-6">
          <h3>City name</h3>
          <ul>
            <li>Temperature: 3°C</li>
            <li>Humidity: 5%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="weather"
          />
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
