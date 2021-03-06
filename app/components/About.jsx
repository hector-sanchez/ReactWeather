var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li><a href="https://facebook.github.io/react" target="-blank">React</a> - This is the Javascript framework I used.</li>
          <li><a href="http://openweathermap.org" target="-blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city.</li>
        </ul>
      </div>
    );
  };

module.exports = About;
