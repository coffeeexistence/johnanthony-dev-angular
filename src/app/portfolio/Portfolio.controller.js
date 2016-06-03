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
            {title: 'Asynchronous Callbacks'},
            {title: '$scope'},
            {title: '$http'},
						{title: 'Angular Material'}
          ]
        },
				{title: 'JSON'},
        {title: 'jQuery'},
				{title: 'Bower'},
				{title: 'Grunt'}
      ]
    },
    {
      title: 'HTML & CSS',
      subSkills: [
				{title: 'Mobile Design'},
				{title: 'Responsive Layouts'},
        {title: 'Formatting'},
        {title: 'Positioning'},
        {title: 'Selectors'},
        {title: 'Media Queries'},
        {title: 'SASS'},
				{
					title: 'Popular CSS Libraries',
					subSkills: [
						{title: 'Materialize'},
						{title: 'Bootstrap'}
					]
				}
      ]
    },
		{
      title: 'Unix/Linux',
      subSkills: [
        {title: 'Package Management'},
        {title: 'Bash'},
        {title: 'Filesystem Navigation'},
        {title: 'Scripting/Automation'},
        {title: 'File Privileges'}
      ]
    }


  ];


  ctrl.technicalExperience = [
		{
      name: 'Surak',
      description: 'Surak a quick and easy RubyGem for creating production-ready angular apps with Bower and Grunt.',
      points: [
				"Creates ready-to-go projects preloaded with angular and angular-material with 'surak new project-name'",
				"Makes working with Bower & Grunt easier",
				"Compiles assets upon file modification & runs HTTP server in parallel"
      ],
      links: [
				{title: 'Documentation', url: 'http://johnanthony-dev.com/surak/'},
				{title: 'Github', url: 'https://github.com/coffeeexistence/surak'},
        {title: 'RubyGem', url: 'https://rubygems.org/gems/surak'}
      ],
			icon: 'img/gem-icon.png'
    },

		{
      name: 'WhoIsHiring',
      description: "Pure AngularJS app for searching through whoishiring's monthly submissions on HackerNews.",
      points: [
				'Coming soon'
      ],
      links: [
				{title: 'Site', url: 'http://johnanthony-dev.com/job-search/'},
				{title: 'Github', url: 'https://github.com/coffeeexistence/who-is-hiring'}
      ],
			icon: 'img/jobsearch-icon.png'
    },

		{
      name: 'MixCritic',
      description: 'Website where artists and producers can post their mixes for constructive feedback.',
      points: [
				'Made with Ruby, Rails, and AngularJS',
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
        {title: 'Live Demo', url: 'http://mix-critic.com/'}
      ],
			icon: 'img/mixcritic-icon.png'
    },
		{
      name: 'Tic Tac Toe AI',
      description: 'Always ends in a Win or Draw, if maximum difficulty is selected.',
      points: [
				'Made with Ruby, Rails, and AngularJS',
        'AI recursively searches through each possible move and sub-moves, calculates wins, losses, or draws',
				'Interaction between server and user provided by AngularJS'
      ],
      links: [
        {title: 'AI Gist', url: 'https://gist.github.com/coffeeexistence/02130b87bfd085711cca9f124aba89e2'},
				{title: 'Front End', url: 'https://github.com/coffeeexistence/johnanthony-dev-angular/tree/master/src/app/tictac'},
				{title: 'Back End', url: 'https://github.com/coffeeexistence/ttt-backend'}
      ],
			element: $sce.trustAsHtml('<tic-tac></tic-tac>'),
			icon: 'img/tictac-icon.png'
    },

    {
      name: 'Movie Scraper',
      description: 'Collects local movie theater showtimes and fetches ratings.',
      points: [
				'Made with Ruby',
        'Scraped from Fandango and Rottentomatoes using Nokogiri ',
        'Accessed movie theater distance information via Google Maps API',
        'Collected and sorted movies by rating'
      ],
      links: [
        {title: 'Video Walkthrough', url: 'https://www.youtube.com/watch?v=U_UHuH6WQjM'},
        {title: 'Github', url: 'https://github.com/coffeeexistence/LocalMovies-project'}
      ],
			icon: 'img/ticket-icon.png'
    }

  ];

  ctrl.history = [
    {
      name: 'Autocross Performance & Muffler',
      location: 'Lake Elsinore, CA',
      title: 'Systems Developer',
      dateString: 'March 2015 - April 2016 + Ongoing Remote Technical Assistance',
      points: [
        'Built invoice generator which has been used for over 500 transactions',
        'Devised database schemas for storing customer, invoice, & product information',
        'Calculated current & projected financial stats for budgeting & business planning',
        'Created advertising material, website, & social media presence',
        'Filed 2015 Taxes (State & Federal) in early 2016'
      ]
    },
    {
      name: 'Uhaul Moving & Storage',
      location: 'Murrieta, CA',
      title: 'Customer Service Representative',
      dateString: 'October 2015 - Present',
      points: [
				'Received, inspected, & dispatched up to 20 rental vehicles per hour',
				'Provided helpful customer service & managed customer reservations',
				'Installed hitches, vehicle wiring systems, and brake controllers'
      ]
    },
    {
      name: "Albertson's",
      location: 'Murrieta, CA',
      title: 'Meat Department Clerk',
      dateString: 'June  2015 - December 2015',
      points: [
				'Served up to 350 customers per day',
        'Handled, cut, and prepared meat and seafood',
        'Maintained glass displays and scales',
				'Cleaned & sanitized heavy duty meat cutting/grinding equipment',
				'Designed creative and eye-grabbing appetizers.'
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
