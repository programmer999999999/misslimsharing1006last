import UnitTemplate from '../../components/UnitTemplate';

const unitData = {
  id: '1',
  title: 'Cozy Studio',
  description: 'A compact yet comfortable stay ideal for solo travelers or short getaways. This studio features a queen-sized bed, a small kitchenette, and a private bathroom. Perfect for those looking for a simple and affordable place to stay.',
  location: 'KL Bird Park (testing only)',
  //lat: 3.143333823271243,   // if some area do not have address, use lat, lng
  //lng: 101.688498486742936, // if some area do not have address, use lat, lng
  mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1162.0334474537542!2d101.68758407545671!3d3.1430375788358704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c8c1d6ccbb%3A0x8ad65008e031cb85!2sKL%20Bird%20Park!5e0!3m2!1sen!2sus!4v1759738209150!5m2!1sen!2sus',
  price: 120,
  rating: 4.8,
  reviews: 124,
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  amenities: ['wifi', 'kitchen', 'tv', 'ac', 'parking'],
  images: [
    // Main room views
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Main room
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Bed area
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',  // Living area
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Room with natural light
    'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1200&auto=format&fit=crop',  // Cozy corner
    
    // Kitchen and dining
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Kitchenette
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',  // Dining area
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Kitchen closeup
    
    // Bed and sleeping area
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',  // Bed
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Bedside
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Bed with nightstand
    
    // Bathroom
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',  // Bathroom
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',  // Shower
    
    // Workspace and amenities
    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop',  // Workspace
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',  // Seating area
    
    // Exterior and surroundings
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',  // Building exterior
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',  // Balcony/Patio
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',  // Nearby beach
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',  // Local area
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop'   // Sunset view
  ]
};

const Unit1 = () => {
  return <UnitTemplate unit={unitData} />;
};

export default Unit1;
