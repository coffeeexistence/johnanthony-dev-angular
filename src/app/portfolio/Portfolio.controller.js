function PortfolioController($sce){
	var ctrl = this;

  ctrl.skills = [
    {
      title: 'Ruby',
      subSkills: [
        {title: 'Test Driven Development'},
        {title: 'Refactoring'},
        {title: 'Best Practices'},
        {
          title: 'Object Orientation',
          subSkills: [
            {title: 'Attribute Accessors'},
            {title: 'Instance & Class Methods'}
          ]
        },
        {
          title: 'Rails Framework',
          subSkills: [
            {title: 'ActiveRecord'},
            {title: 'ActiveView'},
            {title: 'Controllers'},
            {title: 'Devise'},
            {title: 'ERB'},
            {title: 'Deployment'}
          ]
        }
      ]
    },
    {
      title: 'JavaScript',
      subSkills: [
        {
          title: 'AngularJS',
          subSkills: [
            {title: 'Controllers'},
            {title: 'Directives'},
            {title: 'Services'},
            {title: 'Routing'},
            {title: 'Asynchronous callbacks'},
            {title: '$scope'},
            {title: '$http'}
          ]
        },
        {title: 'jQuery'}
      ]
    },
    {
      title: 'HTML & CSS',
      subSkills: [
        {title: 'Formatting'},
        {title: 'Positioning'},
        {title: 'Selectors'},
        {title: 'Media Queries'},
        {title: 'SASS'}
      ]
    },


  ];


  ctrl.technicalExperience = [
    {
      name: 'MixCritic',
      description: 'Website where artists and producers can post their mixes for constructive feedback.',
      points: [
        'Created RESTful Rails API for Angular Frontend',
        'Used ActiveRecord to store model data in postgres database',
        'Constructed versatile and reusable AngularJS directives & controllers',
        'Worked with asynchronous callbacks',
        'Integrated Material Design for user interface',
        'Connected to Amazon S3 for data storage'
      ],
      links: [
        {title: 'Video Walkthrough', url: 'https://www.youtube.com/watch?v=SlNoUv6_LnQ'},
        {title: 'Github', url: 'https://github.com/coffeeexistence/mixcritic-angular'},
        {title: 'Live Demo', url: 'http://mix-critic.herokuapp.com/'}
      ]
    },
    {
      name: 'Movie Scraper',
      description: 'Collects local movie theater showtimes and fetches ratings.',
      points: [
        'Scraped from Fandango and Rottentomatoes using Nokogiri ',
        'Accessed movie theater distance information via Google Maps API',
        'Collected and sorted movies by rating'
      ],
      links: [
        {title: 'Video Walkthrough', url: 'https://www.youtube.com/watch?v=U_UHuH6WQjM'},
        {title: 'Github', url: 'https://github.com/coffeeexistence/LocalMovies-project'}
      ]
    },
    {
      name: 'Tic Tac Toe AI',
      description: 'Will always end in a Win or “Cat’s Game”, if maximum difficulty is selected.',
      points: [
        'Recursively searches through each possible move and sub-moves, calculates wins, losses, or draws'
      ],
      links: [
        {title: 'Gist', url: 'https://gist.github.com/coffeeexistence/02130b87bfd085711cca9f124aba89e2'}
      ],
			element: $sce.trustAsHtml('<tic-tac></tic-tac>')
    }
  ];

  ctrl.history = [
    {
      name: 'Autocross Performance & Muffler',
      location: 'Lake Elsinore, CA',
      title: 'Tech Guy',
      dateString: 'March 2015 - April 2016 + Ongoing Remote Technical Assistance',
      points: [
        'Devised database schemas for storing customer, invoice, and product information',
        'Built invoice generator which has been used for over 500 transactions',
        'Calculated current and projected financial stats for budgeting and business planning',
        'Created advertising material, website, and social media presence',
        'Assisted customers purchasing products and services',
        'Filed 2015 Taxes (State & Federal) in early 2016'
      ]
    },
    {
      name: 'Uhaul Moving & Storage',
      location: 'Murrieta, CA',
      title: 'Customer Service Representative',
      dateString: 'October 2015 - Present',
      points: [
        'Installed hitches, vehicle wiring systems, and brake controllers',
        'Provided excellent & helpful customer service',
        'Sold sales items',
        'Received, inspected, and dispatched vehicles '
      ]
    },
    {
      name: "Albertson's",
      location: 'Murrieta, CA',
      title: 'Meat Department Clerk',
      dateString: 'June  2015 - December 2015',
      points: [
        'Handled, cut, and prepared meat and seafood',
        'Cleaned, maintained displays, and answered calls'
      ]
    }
  ];

  ctrl.education = [
    {
      name: 'Flatiron School',
      graduation: '2016',
      description: 'Full Stack Web Development, Ruby on Rails and JavaScript online program'
    },
    {
      name: 'High School',
      graduation: '2014',
      description: ''
    }
  ]
}

angular
	.module('app')
	.controller('PortfolioController', PortfolioController);
