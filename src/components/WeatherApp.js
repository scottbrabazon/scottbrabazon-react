import React from 'react';

const WeatherApp = () => {

   return (

		<div className="blog-homepage">
			<div>
				<h2>Todays Weather</h2>
				<div id="weather-container">
		            <p>Loading...</p>
		        </div>
		    </div>
		    <div className="flourish-mobile">
				<img src="/images/flourish.svg" alt="Flourish" />
			</div>
		    <div className="flourish-tablet-a">
				<img src="/images/flourish.svg" alt="Flourish" />
			</div>
		</div>
   );
}

export default WeatherApp;