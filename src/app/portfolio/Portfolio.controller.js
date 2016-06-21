function PortfolioController($sce, $scope){
	var ctrl = this;
  
  $scope.tabs = {
    tabs: [
      'Code',
      'Projects & Experience',
      'Contact'
    ],
    currentIndex: 1,
    set: function(index) {
      this.currentIndex = index;
    },
    currentTitle: function() {
      return this.tabs[this.currentIndex];  
    },
    selected: function(index) {
      return (this.currentIndex === index);
    },
    on: function(title){
      return (title === this.currentTitle());
    }
  }
  
  ctrl.gists = [
    {
      title: 'HackerRank: Largest Rectangle', 
      link: '',
      problem: 'There are N buildings in a certain two-dimensional landscape. Each building has a height given by H. If you join N adjacent buildings, they will form a solid rectangle of area A. Given N buildings, find the greatest such solid area formed by any number of consecutive buildings.',
      solution: 'Although the solution I ended up with was fairly simple, it took quite a few attempts to get it right.',
      id:'f34dc102b8e2dfdc9e39a0726fe9fe28'
    } 
  ];
  
  ctrl.gists = ctrl.gists.map(function(gist){
    gist.url = $sce.trustAsResourceUrl(gist.url);
    return gist;
  });

  ctrl.skills = [
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
            {title: '$scope'},
						{title: 'Angular Material'}
          ]
        },
        {title: 'Closures'},
        {title: 'Callbacks'},
        {title: 'Factories'},
				{title: 'JSON'},
        {title: 'jQuery'},
				{title: 'Bower'},
				{title: 'Grunt'}
      ]
    },
    {
      title: 'Ruby',
      subSkills: [
        {title: 'Test Driven Development'},
        {title: 'Refactoring'},
        {title: 'Object Orientation'},
        {
          title: 'Rails Framework',
          subSkills: [
            {title: 'ActiveRecord'},
            {title: 'ActiveView'},
            {title: 'Deployment'}
          ]
        }
      ]
    },
    
    {
      title: 'HTML & CSS',
      subSkills: [
				{title: 'Responsiveness'},
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
        {title: 'Scripting/Automation'},
      ]
    }


  ];


  ctrl.technicalExperience = [
    {
      name: 'ng-resource-manager',
      description: 'Module which reduces requests, loading-time, and backend overhead.',
      points: [
				"Caches requested resources for future use.",
				"Aggregates requests made within a certain timeframe into one large batch request.",
				"Utilizing ResourceManager in MixCritic for user:show reduced requests on front page from 23 to 1, and reduced load times on live production server by a noticeable margin.",
        "ResourceManger.create(resourceName, httpBatchRequest) factory returns a manager object specifically for the requested resource",
        "Currently available through Bower"
      ],
      links: [
				{title: 'GitHub', url: 'https://github.com/coffeeexistence/ng-resource-manager'},
      ],
			icon: 'img/ng-icon.png'
    },
		{
      name: 'Surak',
      description: 'RubyGem for creating, serving, and compiling production-ready angular apps with Bower and Grunt.',
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
	.controller('PortfolioController', ['$sce', '$scope', PortfolioController]);
