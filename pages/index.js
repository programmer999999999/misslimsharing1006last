import Head from 'next/head';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="./downloads/profile/xiaohu.jpeg" type="image/jpeg"/>

        {/* Page-specific SEO */}
        <title>Miss Lim Sharing | Lovely Airbnb Stays in Malaysia</title>
        <meta
          name="description"
          content="Comfortable, modern, and thoughtfully designed Airbnb stays across Malaysia. Enjoy bright interiors for a seamless experience."
        />

        {/* Open Graph – homepage */}
        {/* <meta property="og:title" content="Miss Lim Sharing | Lovely Airbnb Stays in Malaysia" />
        <meta property="og:description" content="Comfortable, modern, and thoughtfully designed Airbnb stays across Malaysia. Enjoy bright interiors, fast Wi-Fi, and self check-in for a seamless experience." />
        <meta property="og:url" content="https://www.misslimsharing.com" />
        <meta property="og:image" content="https://misslimsharing.com/og-image.png" /> */}

        {/* Twitter card – homepage */}
        {/* <meta name="twitter:title" content="Miss Lim Sharing | Lovely Airbnb Stays in Malaysia" />
        <meta name="twitter:description" content="Comfortable, modern, and thoughtfully designed Airbnb stays across Malaysia. Enjoy bright interiors, fast Wi-Fi, and self check-in for a seamless experience." />
        <meta name="twitter:image" content="https://misslimsharing.com/og-image.png" /> */}

        {/* Homepage JSON-LD (WebSite schema) */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Miss Lim Sharing",
              "url": "https://www.misslimsharing.com",
              "description": "Comfortable, modern, and thoughtfully designed Airbnb stays across Malaysia. Enjoy bright interiors, fast Wi-Fi, and self check-in for a seamless experience.",
              "image": "https://misslimsharing.com/og-image.png",
              "sameAs": [
                "https://www.facebook.com/misslimsharing",
                "https://www.instagram.com/misslimsharing"
              ]
            })
          }}
        /> */}
      </Head>

      {/* Page Content */}
      <div>
        <section className="hero">
          <Slideshow intervalMs={3000} />
        </section>

        <section className="section">
          <div className="container">
            <h1>Welcome to Miss Lim Sharing</h1>
            <p>Comfortable, modern, and thoughtfully designed stays for every traveler.</p>
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
                <p>Bright interiors, fast Wi-Fi, and self check-in for a seamless stay.</p>
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

