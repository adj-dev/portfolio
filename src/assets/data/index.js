const projects = [
  {
    id: 1,
    title: 'Prota',
    brief: 'A project management tool for GitHub developers - invite collaborators, develop projects, view sprints, and take on tasks with this agile-inspired service.',
    image: require('../images/prota.png'),
    repoLink: 'https://github.com/adj-dev/prota',
    deployment: {
      link: 'https://majestic-mesa-verde-10359.herokuapp.com',
      type: 'heroku'
    }
  },
  {
    id: 2,
    title: 'Escribe',
    brief: 'Enscribe is a tool for tutors to share lesson notes with their students.',
    image: require('../images/escribe.png'),
    repoLink: 'https://github.com/adj-dev/escribe',
    deployment: {
      link: 'https://pure-wave-91989.herokuapp.com',
      type: 'heroku'
    }
  },
  {
    id: 3,
    title: 'GIFme',
    brief: 'Search through millions of GIFs',
    image: require('../images/gifme.png'),
    repoLink: 'https://github.com/adj-dev/GIFme',
    deployment: {
      link: 'https://adj-dev.github.io/GIFme/',
      type: 'github'
    }
  },
  {
    id: 4,
    title: 'LIRI',
    brief: 'Find songs from Spotify, shows from Bands In Town, and movies from OMDB',
    image: require('../images/liri.png'),
    repoLink: 'https://github.com/adj-dev/liri',
    deployment: null
  },
]

export default projects