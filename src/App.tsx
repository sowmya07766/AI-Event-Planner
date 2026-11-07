
import { useState } from "react";
import "./App.css";

function App() {
  const [eventType, setEventType] = useState("Wedding");
  const [location, setLocation] = useState("North Goa");
  const [guests, setGuests] = useState("100");
  const [budget, setBudget] = useState("₹2,00,000");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(
      `Your ${eventType.toLowerCase()} plan is ready to begin! Our AI planner will use your event details to help create a plan.`
    );
  };

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">E.</span>
          <span>EVENTEASE</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>

        <a href="#planner" className="nav-button">
          Plan Your Event <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/30562607/pexels-photo-30562607.jpeg"
              alt="Elegant outdoor wedding celebration"
            />
            <div className="hero-image-shade"></div>
            <div className="hero-image-caption">
              <span className="caption-line"></span>
              <span>CELEBRATE BEAUTIFULLY</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              THE FUTURE OF EVENT PLANNING
            </div>

            <h1>
              Every moment
              <br />
              deserves to be
              <br />
              <em>extraordinary.</em>
            </h1>

            <p className="hero-description">
              Discover exceptional venues, trusted vendors and thoughtful
              ideas. Let intelligent planning bring your perfect event to life.
            </p>

            <div className="hero-actions">
              <a href="#planner" className="button-dark">
                Begin Your Journey <span>↗</span>
              </a>
              <a href="#services" className="text-link">
                Explore Services <span>→</span>
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-star">✦</span>
              <span>Thoughtfully planned. Beautifully celebrated.</span>
            </div>
          </div>

          <div className="hero-side-note">EVENTS, REIMAGINED · GOA, INDIA</div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip" id="about">
          <div className="intro-label">A NEW WAY TO CELEBRATE</div>
          <p>
            The art of celebration meets the intelligence of
            <span> technology.</span>
          </p>
          <div className="intro-symbol">✳</div>
        </section>

        {/* SERVICES */}
        <section className="services section-pad" id="services">
          <div className="section-top">
            <div>
              <div className="eyebrow dark-eyebrow">CURATED FOR YOU</div>
              <h2>
                Everything you need.
                <br />
                <em>One beautiful plan.</em>
              </h2>
            </div>
            <p className="section-description">
              From the first idea to the final celebration, discover all the
              elements that make an event truly unforgettable.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85"
                  alt="Elegant event venue"
                />
                <span className="service-number">01</span>
              </div>
              <div className="service-info">
                <div>
                  <h3>Venues</h3>
                  <p>Find the perfect setting.</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>

            <article className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85"
                  alt="Beautifully arranged catering"
                />
                <span className="service-number">02</span>
              </div>
              <div className="service-info">
                <div>
                  <h3>Catering</h3>
                  <p>Memorable dining experiences.</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>

            <article className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85"
                  alt="Elegant event decorations"
                />
                <span className="service-number">03</span>
              </div>
              <div className="service-info">
                <div>
                  <h3>Decor & Design</h3>
                  <p>Spaces with a personal touch.</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>

            <article className="service-card">
              <div className="service-image">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85"
                  alt="Live event celebration"
                />
                <span className="service-number">04</span>
              </div>
              <div className="service-info">
                <div>
                  <h3>Entertainment</h3>
                  <p>Make every moment come alive.</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </article>
          </div>
        </section>

        {/* AI FEATURE */}
        <section className="ai-section">
          <div className="ai-visual">
            <div className="ai-orbit orbit-one"></div>
            <div className="ai-orbit orbit-two"></div>
            <div className="ai-core">
              <span className="ai-star">✳</span>
              <span>AI</span>
            </div>
            <div className="ai-floating ai-float-one">
              <span className="mini-dot"></span>
              Smart recommendations
            </div>
            <div className="ai-floating ai-float-two">
              <span className="mini-spark">✦</span>
              Budget insights
            </div>
          </div>

          <div className="ai-content">
            <div className="eyebrow light-eyebrow">INTELLIGENCE MEETS IMAGINATION</div>
            <h2>
              A little help from
              <br />
              <em>a smarter mind.</em>
            </h2>
            <p>
              Planning an event involves countless decisions. Our AI-powered
              approach is designed to help you explore vendors, organize
              budgets and bring your ideas together with greater ease.
            </p>

            <div className="ai-points">
              <div><span>✦</span> Personalized vendor suggestions</div>
              <div><span>✦</span> Smarter budget planning</div>
              <div><span>✦</span> Simplified event coordination</div>
            </div>

            <a href="#planner" className="button-light">
              Experience Smart Planning <span>↗</span>
            </a>
          </div>
        </section>

        {/* PLANNER FORM */}
        <section className="planner-section section-pad" id="planner">
          <div className="planner-heading">
            <div className="eyebrow dark-eyebrow">YOUR CELEBRATION STARTS HERE</div>
            <h2>
              Tell us what you
              <br />
              <em>have in mind.</em>
            </h2>
            <p>
              Share a few details and begin shaping an event that feels
              uniquely yours.
            </p>
          </div>

          <form className="planner-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <div>
                <span className="form-step">01 / EVENT DETAILS</span>
                <h3>Let's create something memorable.</h3>
              </div>
              <span className="form-decoration">✳</span>
            </div>

            <div className="form-grid">
              <label className="form-field">
                <span>Type of event</span>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Engagement</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="form-field">
                <span>Preferred location</span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>North Goa</option>
                  <option>South Goa</option>
                  <option>Central Goa</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="form-field">
                <span>Event date</span>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Number of guests</span>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 150"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </label>

              <label className="form-field full-field">
                <span>Estimated budget</span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option>₹50,000</option>
                  <option>₹1,00,000</option>
                  <option>₹2,00,000</option>
                  <option>₹5,00,000</option>
                  <option>₹10,00,000+</option>
                  <option>Not decided yet</option>
                </select>
              </label>
            </div>

            <button type="submit" className="form-submit">
              Create My Event Plan <span>↗</span>
            </button>

            {message && (
              <div className="form-success" role="status">
                <span>✦</span> {message}
              </div>
            )}

            <p className="form-disclaimer">
              Your details will help shape your event recommendations.
            </p>
          </form>
        </section>

        {/* HOW IT WORKS */}
        <section className="process-section section-pad" id="how-it-works">
          <div className="process-heading">
            <div className="eyebrow dark-eyebrow">SIMPLE BY DESIGN</div>
            <h2>
              From idea to
              <br />
              <em>unforgettable.</em>
            </h2>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span className="process-number">01</span>
              <div className="process-icon">✧</div>
              <h3>Share your vision</h3>
              <p>Tell us about your event, preferences, location and budget.</p>
            </article>

            <article className="process-card">
              <span className="process-number">02</span>
              <div className="process-icon">⌘</div>
              <h3>Discover possibilities</h3>
              <p>Explore suitable vendors and recommendations for your event.</p>
            </article>

            <article className="process-card">
              <span className="process-number">03</span>
              <div className="process-icon">◈</div>
              <h3>Compare & coordinate</h3>
              <p>Review options, quotations and your event budget in one place.</p>
            </article>

            <article className="process-card">
              <span className="process-number">04</span>
              <div className="process-icon">✦</div>
              <h3>Celebrate beautifully</h3>
              <p>Bring your event plan together and get ready for the big day.</p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="cta-decoration">✳</div>
          <div className="eyebrow light-eyebrow">MAKE IT A MOMENT TO REMEMBER</div>
          <h2>
            Your story.
            <br />
            Your celebration.
            <br />
            <em>Perfectly planned.</em>
          </h2>
          <a href="#planner" className="button-light">
            Start Planning <span>↗</span>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">E.</span>
              <span>EVENTEASE</span>
            </a>
            <p>
              Thoughtful planning.
              <br />
              Extraordinary celebrations.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          <div className="footer-column">
            <h4>GET STARTED</h4>
            <a href="#planner">Plan an Event</a>
            <a href="#services">Discover Vendors</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-note">
            <span>MADE FOR MEANINGFUL MOMENTS</span>
            <strong>Goa, India</strong>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EventEase. All rights reserved.</span>
          <span>Designed for celebrations that matter.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
