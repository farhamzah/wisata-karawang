const categories = [
  {
    id: 'curug',
    name: 'Curug',
    tags: ['all', 'outdoors'],
    count: 4,
    image: require('../assets/icons/curugicon.png')
  },

  {
    id: 'pantai',
    name: 'Pantai',
    tags: ['all', 'outdoors'],
    count: 4,
    image: require('../assets/icons/pantaiicon.png')
  },
  
  {
    id: 'waterpark',
    name: 'WaterPark',
    tags: ['all', 'outdoors'],
    count: 4,
    image: require('../assets/icons/waterparkicon.png')
  },
  {
    id: 'mall',
    name: 'Mall',
    tags: ['all', 'indoors'],
    count: 4,
    image: require('../assets/icons/mallicon.png')
  },
  {
    id: 'sungai',
    name: 'Sungai',
    tags: ['all', 'outdoors'],
    count: 1,
    image: require('../assets/icons/sungaiicon.png')
  },
  {
    id: 'kuliner',
    name: 'Kuliner',
    tags: ['all', 'kuliner'],
    count: 4,
    image: require('../assets/icons/kulinericon.png')
  },
];

const outdoors = [
  {
    id: 1, 
    name: 'Curug Cigentis Karawang',
    description: 'Kabupaten Karawang menawarkan banyak tempat wisata menakjubkan dengan pemandangan indah serta panorama menakjubkan dikawasan hutan. Salah satunya Curug Cigentis dengan menghadirkan air terjun dengan tinggi dari 25 meter digunung loji dan sangga buana karawang .',
    tags: ['Back', 'wisata', 'karawang'],
    images: [
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
    ]
  },
  {
    id: 2, 
    name: 'Curug Bandung Karawang',
    description: 'Kabupaten Karawang menawarkan banyak tempat wisata menakjubkan dengan pemandangan indah serta panorama menakjubkan dikawasan hutan. Salah satunya Curug Cigentis dengan menghadirkan air terjun dengan tinggi dari 25 meter digunung loji dan sangga buana karawang .',
    tags: ['Karawang', 'Wisata', 'Curug'],
    images: [
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
      require('../assets/images/cigentis_1.png'),
      require('../assets/images/cigentis_2.png'),
      require('../assets/images/cigentis_3.png'),
    ]
  }
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'farhamzah',
  location: 'Indonesia',
  email: 'farhamzah@ubpkarawang.ac.id',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {
  categories,
  explore,
  outdoors,
  profile,
}