import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <h1 className="logo">Know Your Destiny</h1>
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/results">Destinations</a>
        <a href="/about">About</a>
        <a href="/reviews">Reviews</a>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}