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
    '현재의 웹페이지입니다. 배경으로 입체적인 우주 공간을 묘사하고자 했습니다. Three.js 라이브러리를 활용하여 3D 공간을 구성하는 핵심 요소들(화면, 시점, 빛, 객체 등)을 구현했습니다. 또한, React를 사용해 홈페이지의 뼈대를 작성했습니다. 다중 언어 지원을 위해 언어 버튼을 추가했으며, 클릭 시 글꼴 및 크기가 변경되도록 UI를 최적화했습니다. 방문자들이 방명록을 남기고 볼 수 있도록, Firebase의 Realtime Database와 연계해 게시/조회 기능을 구축했습니다.'
  ),
  new PortfolioItem(
    'Uprise',
    'To-do List',
    'The web to-do list app using localStorage supporting a clock, multi-language (EN/KO), current weather at the user location with a random background image',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/uprise/',
    'https://github.com/dev-song/uprise',
    'Uprise',
    '웹 앱',
    '개인별로 할일 목록을 관리할 수 있는 웹 앱입니다. 온라인 프로그램 Nomad Coder의 강의를 참고하여 제작했습니다. localStorage API를 활용해 개인화를 구현했습니다. 현재 시각 및 사용자 위치에 해당하는 날씨를 표시합니다. 다중 언어(한/영)를 지원합니다. 배경화면은 Unsplash API를 활용해 여행과 관련된 무작위 이미지를 불러오도록 구현했습니다.'
  ),
  new PortfolioItem(
    'Daily Cat',
    'Random Cat Images Viewer',
    'The web app displaying images of a random cat breed',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/DailyCat/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/DailyCat',
    '오늘의 고양이',
    '웹 앱',
    '랜덤한 고양이 사진을 보여주는 웹 앱입니다. theCatAPI를 활용해, 접속 시 특정한 종의 고양이에 대한 사진을 모아서 보여줍니다. LazyLoad 기능을 활용해 사진이 많을 경우 순차적으로 로딩하는 기능을 구현했습니다.'
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
    'Webflow의 웹페이지 템플릿 Stone을 클론한 웹페이지 템플릿입니다. 이미지 및 문구 Carousel 기능을 JavaScript로 구현했습니다. 모바일 반응형 CSS 스타일링 또한 적용했습니다.'
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
    'Webflow의 웹페이지 템플릿 Biznus을 클론한 웹페이지 템플릿입니다.'
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