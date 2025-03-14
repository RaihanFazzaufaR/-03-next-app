export default async function handler(req, res) {
    const apiKey = "12021eb83b894a0f60fc08afeff88a1f";
    const city = req.query.city || 'Jakarta';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}