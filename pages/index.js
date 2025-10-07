import Head from 'next/head';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <>
      <Head>
        {/* This is what Google uses */}
        <title>Miss Lim Sharing: Find Your Lovely Airbnb</title>
        <meta
          name="description"
          content="Comfortable, convenient, and thoughtfully designed stays for every traveler in Malaysia. Homestay with modern amenities and great locations."
        />
        {/*Add the icon later*/}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",  // Fixed type from "WenSite" to "WebSite"
            "name": "Miss Lim Sharing",
            "url": "https://misslimsharing.com",
            "description": "Comfortable, convenient, and thoughtfully designed stays for every traveler in Malaysia.",
            "image": "https://misslimsharing.com/og-image.jpg"
          })}
        </script>

        {/* Optional: Add a title for brand + region */}
        <meta property="og:site_name" content="MissLimSharing Malaysia" />
        <meta property="og:title" content="Miss Lim Sharing: Find Your Lovely Airbnb" />
        <meta property="og:description" content="Comfortable, convenient, and thoughtfully designed stays for every traveler in Malaysia. Experience the best homestay with modern amenities and great locations." />
        <meta property="og:url" content="https://misslimsharing.com" />
        <meta property="og:image" content="https://misslimsharing.com/og-image.jpg" />
      </Head>
      <div>
      <section className="hero">
        <Slideshow intervalMs={3000}/>
      </section>
      <section className="section">
        <div className="container">
          <h1>Welcome to Our Homestay</h1>
          <p>Comfortable, convenient, and thoughtfully designed stays for every traveler.</p>
        </div>
      </section>
      <section className="section features">
        <div className="container">
          <h2>Why Stay With Us</h2>
          <div className="cards">
            <div className="card">
              <h3>Great Locations</h3>
              <p>Minutes from transport, business hubs, and attractions.</p>
            </div>
            <div className="card">
              <h3>Modern Comfort</h3>
              <p>Bright interiors, fast Wi‑Fi, and self check‑in for a seamless stay.</p>
            </div>
            <div className="card">
              <h3>Best Value</h3>
              <p>Competitive rates, seasonal deals, and discounts for long stays.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
