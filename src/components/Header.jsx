import { Search, Bell } from "lucide-react";

function Header({ city, setCity, onSearch, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <header className="header">
      <div className="greeting">
        <p>Hi, Weather Explorer</p>
        <h2>Good Morning</h2>
      </div>

      <div className="header-actions">
        <form className="search-box" onSubmit={handleSubmit}>
          <Search size={17} />

          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            Search
          </button>
        </form>

        <button className="header-icon">
          <Bell size={19} />
        </button>

        <div className="profile">W</div>
      </div>
    </header>
  );
}

export default Header;