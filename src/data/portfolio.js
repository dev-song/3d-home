class PortfolioItem {
  constructor(title, subtitle, description, skills, url, github, titleKR, subtitleKR, descriptionKR) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.skills = skills;
    this.url = url;
    this.github = github;

    this.titleKR = titleKR;
    this.subtitleKR = subtitleKR;
    this.descriptionKR = descriptionKR;
  }
}

const PORTFOLIO_ITEMS = [
  new PortfolioItem(
    'Revolving Objects',
    'Webpage',
    'The web-app displaying revolving objects using React, Three.js combined with floating description boxes',
    ['CSS', 'JavaScript', 'React', 'ThreeJS'],
    'https://dev-song.github.io/3d-home/',
    'https://github.com/dev-song/3d-home',
    '공전체',
    '웹페이지',
    'Three.js를 활용해 우주를 배경으로 공전하는 입체 도형을 구현했습니다. 이를 배경으로 React를 사용한 홈페이지를 구성했습니다. 방명록 게시/조회 기능은 Firebase가 제공하는 데이터베이스와 연계해 구축했습니다.'
  ),
  new PortfolioItem(
    'Uprise',
    'To-do List',
    'The web to-do list app using localStorage supporting a clock, multi-language (EN/KO), current weather at the user location with a random background image',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/uprise/',
    'https://github.com/dev-song/uprise',
    'Uprise',
    '할일 목록',
    '웹 기반 할일 목록 앱입니다. localStorage를 활용해 구현했고, 시계 기능과 다중 언어(한/영)를 지원하며, 사용자의 위치를 파악해 해당 장소의 날씨를 보여줍니다. 배경화면은 Unsplash API를 활용해 여행과 관련된 무작위 이미지를 불러옵니다.'
  ),
  new PortfolioItem(
    'Daily Cat',
    'Random Cat Images Viewer',
    'The web app displaying images of a random cat breed',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/DailyCat/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/DailyCat',
    '오늘의 고양이',
    '랜덤 고양이 이미지 조회',
    '무작위로 고양이 종을 선정하고 그 고양이 종의 이미지를 모아서 보여주는 웹 앱입니다. theCatAPI를 활용했습니다.'
  ),
  new PortfolioItem(
    'Stone',
    'Webpage Template',
    'The clone of a webpage template from Webflow, Stone',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/cloneWebTemplate/04_Stone/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/cloneWebTemplate/04_Stone',
    'Stone',
    '웹페이지 템플릿',
    'Webflow의 Stone이란 웹페이지 템플릿을 클론해서 만들었습니다.'
  ),
  new PortfolioItem(
    'Brav',
    'Webpage Template',
    'The clone of a webpage template from Webflow, Biznus',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/cloneWebTemplate/03_Biznus/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/cloneWebTemplate/03_Biznus',
    'Biznus',
    '웹페이지 템플릿',
    'Webflow의 Stone이란 웹페이지 템플릿을 클론해서 만들었습니다.'
  ),
  new PortfolioItem(
    'Digital Rain',
    'Web Screensaver App',
    'The web screensaver inspired by a movie, Matrix',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/digitalRain/digital_rain.html',
    'https://github.com/dev-song/mini-projects/tree/master/projects/digitalRain',
    'Digital Rain',
    '웹 화면보호기 앱',
    '영화 매트릭스의 유명한 시퀀스를 따라한 웹 기반 화면보호기입니다.'
  )
]

export default PORTFOLIO_ITEMS;