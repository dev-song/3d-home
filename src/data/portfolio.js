class PortfolioItem {
  constructor(title, subtitle, description, skills, url, github) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.skills = skills;
    this.url = url;
    this.github = github;
  }
}

const PORTFOLIO_ITEMS = [
  new PortfolioItem(
    'Digital Rain',
    'Web Screensaver App',
    'The web screensaver inspired by a movie, Matrix',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/_home/projects/digitalRain/digital_rain.html',
    'https://github.com/dev-song/_home/tree/master/projects/digitalRain'
  ),
  new PortfolioItem(
    'Brav',
    'Webpage Template',
    'The clone of a webpage template from Webflow, Biznus',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/_home/projects/cloneWebTemplate/03_Biznus/',
    'https://github.com/dev-song/_home/tree/master/projects/cloneWebTemplate/03_Biznus'
  ),
  new PortfolioItem(
    'Stone',
    'Webpage Template',
    'The clone of a webpage template from Webflow, Stone',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/_home/projects/cloneWebTemplate/04_Stone/',
    'https://github.com/dev-song/_home/tree/master/projects/cloneWebTemplate/04_Stone'
  ),
  new PortfolioItem(
    'Daily Cat',
    'Random Cat Images Viewer',
    'The web app displaying images of a random cat breed',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/_home/projects/DailyCat/',
    'https://github.com/dev-song/_home/tree/master/projects/DailyCat'
  ),
  new PortfolioItem(
    'Uprise',
    'To-do List',
    'The web to-do list app using localStorage supporting a clock, multi-language (EN/KO), current weather at the user location with a random background image',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/uprise/',
    'https://github.com/dev-song/uprise'
  )
]

export default PORTFOLIO_ITEMS;