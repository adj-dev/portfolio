const projects = [
  {
    id: 1,
    title: 'Prota',
    brief: 'A project management tool for GitHub developers - invite collaborators, develop projects, view sprints, and take on tasks with this agile-inspired service.',
    synopsis: 'A true MERN application that uses OAuth for authentication. My involvement with this ongoing project is as a lead React developer. In addition to writing many of the components I also manage and design the UI. I utilize Reacts hooks in many of my functional compenents, this improves performance while allowing for local state management.',
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
    synopsis: 'Built using Handlebars on the front-end and MySQL on the back-end. This was a fun project that allowed me to become familiar with using Sequelize to communicate with a MySQL database. My role in this project was in creating models for the database, writing API routes, and designing the UI.',
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
    synopsis: 'A simple project that I built using HTML, CSS, and JavaScript. It uses jQuery to dynamically change the DOM and Axios for making calls to the GIPHY API.',
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
    synopsis: 'A fun little project that runs entirely in the terminal. It is written exclusively in JavaScript and runs in a Node environment. Check out the repo for examples of how it works (I had a lot of fun with this one).',
    image: require('../images/liri.png'),
    repoLink: 'https://github.com/adj-dev/liri',
    deployment: null
  },
]

export default projects