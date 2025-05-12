const vendors = [
  // Hyderabad Vendors
  {
    id: 1,
    name: 'Cafe Aroma',
    address: '12 Park Street, Hyderabad',
    phone: '040-1234567',
    category: 'Cafe',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1523905330026-b9bcce6b9e96?auto=format&fit=crop&w=800&q=80',
    reviews: [
      { id: 1, user: 'Alice', rating: 5, comment: 'Great ambiance and coffee!', created_at: '2023-06-01' },
      { id: 2, user: 'Bob', rating: 4, comment: 'Lovely pastries.', created_at: '2023-06-05' }
    ]
  },
  {
    id: 2,
    name: 'Spice Villa',
    address: '45 Food Street, Hyderabad',
    phone: '040-2345678',
    category: 'Restaurant',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1600891963658-50b8836eee68?auto=format&fit=crop&w=800&q=80',
    reviews: [
      { id: 1, user: 'Charlie', rating: 4, comment: 'Delicious spicy dishes.', created_at: '2023-06-10' }
    ]
  },
  {
    id: 3,
    name: 'Green Leaf Cafe',
    address: '22 Garden Ave, Hyderabad',
    phone: '040-3456789',
    category: 'Cafe',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 4,
    name: 'The Big Bite',
    address: '78 Market Road, Hyderabad',
    phone: '040-4567890',
    category: 'Restaurant',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1555992336-03a23b6357b9?auto=format&fit=crop&w=800&q=80',
    reviews: [
      { id: 1, user: 'Dana', rating: 3, comment: 'Good food but service was slow.', created_at: '2023-06-12' }
    ]
  },
  {
    id: 5,
    name: 'Cafe Wave',
    address: '31 Riverside, Hyderabad',
    phone: '040-5678901',
    category: 'Cafe',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1528372444004-17a44b4c0502?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 6,
    name: 'Tandoori Nights',
    address: '56 Spice Lane, Hyderabad',
    phone: '040-6789012',
    category: 'Restaurant',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1543352634-3e49a23f097d?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 7,
    name: 'Brew Brothers',
    address: '11 Coffee Rd, Hyderabad',
    phone: '040-7890123',
    category: 'Cafe',
    location: 'Hyderabad',
    photo:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  // Bangalore Vendors
  {
    id: 8,
    name: 'Green Garden Cafe',
    address: '25 Park Street, Bangalore',
    phone: '080-1234567',
    category: 'Cafe',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    reviews: [
      { id: 1, user: 'Eli', rating: 5, comment: 'Peaceful spot and awesome smoothies.', created_at: '2023-06-01' }
    ]
  },
  {
    id: 9,
    name: 'Spicy Delight',
    address: '88 Food Avenue, Bangalore',
    phone: '080-2345678',
    category: 'Restaurant',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 10,
    name: 'Java Lounge',
    address: '15 Coffee Blvd, Bangalore',
    phone: '080-3456789',
    category: 'Cafe',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 11,
    name: 'Northern Tadka',
    address: '20 Spice Street, Bangalore',
    phone: '080-4567890',
    category: 'Restaurant',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1555992336-03a23b6357b9?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 12,
    name: 'The Coffee Spot',
    address: '40 Brew Street, Bangalore',
    phone: '080-5678901',
    category: 'Cafe',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 13,
    name: 'Royal Dine',
    address: '50 King Road, Bangalore',
    phone: '080-6789012',
    category: 'Restaurant',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1541544184114-70e22b6cda8e?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
  {
    id: 14,
    name: 'Cafe Express',
    address: '77 Fast Ln, Bangalore',
    phone: '080-7890123',
    category: 'Cafe',
    location: 'Bangalore',
    photo:
      'https://images.unsplash.com/photo-1465195472573-d8bd6985e02e?auto=format&fit=crop&w=800&q=80',
    reviews: []
  },
];

export default vendors;
