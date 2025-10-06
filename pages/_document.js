import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://misslimsharing.com/" />
        <meta property="og:title" content="Miss Lim Sharing: Find Your Lovely Airbnb" />
        <meta property="og:description" content="Comfortable, convenient, and thoughtfully designed stays for every traveler in Malaysia." />
        <meta property="og:image" content="https://misslimsharing.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://misslimsharing.com/" />
        <meta property="twitter:title" content="Miss Lim Sharing: Find Your Lovely Airbnb" />
        <meta property="twitter:description" content="Comfortable, convenient, and thoughtfully designed stays for every traveler in Malaysia." />
        <meta property="twitter:image" content="https://misslimsharing.com/og-image.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Miss Lim Sharing",
              "description": "Premium homestay services across Malaysia offering comfortable, convenient, and thoughtfully designed stays for every traveler.",
              "image": "https://misslimsharing.com/og-image.jpg",
              "url": "https://misslimsharing.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Malaysia"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Self Check-in"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Modern Amenities"
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
