import { useState } from 'react';

export default function Weather() {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/weather?city=${city}`);
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setWeather(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Weather Check</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city name'
            />
            <button onClick={fetchWeather} disabled={loading}>{loading? 'Loading...' : 'Check'}</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.main.humidity}%</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}