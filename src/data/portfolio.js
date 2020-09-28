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
    'The webpage for displaying my introduction and portfolio. This webpage you are watching now is the result of the project. The webpage portrays a 3D space background, and main parts of the 3D space - scene, camera, light, objects, etc - are made with Three.js. A language button is added for multi-language feature of the page, and UI optimization is executed on button clicks, by adjusting font-family and font-size. For visitors who want to leave a message, reading/writing Guestbook is also supported through Firebase Realtime Database.',
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
    'The web app for managing personal to-do list. Referred online courses provided by Nomad Coder. The app is personalized using localStorage API, and it shows a clock and the weather of user location. It also supports multi-language(English / Korean), and random backgrounds related with travelling using Unsplash API.',
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
    'The web app displaying images of a random cat breed. With theCatAPI, the app shows images of a certain cat breed. For the case when there are too many images, LazyLoad is supported to load the image consecutively.',
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
    'The webpage template cloning Stone from Webflow. Image and quote carousel features are supported through JavaScript. The page is also optimized to mobile devices with responsive web design.',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/cloneWebTemplate/04_Stone/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/cloneWebTemplate/04_Stone',
    'Stone',
    '웹페이지 템플릿',
    'Webflow의 웹페이지 템플릿 Stone을 클론한 웹페이지 템플릿입니다. 이미지 및 문구 Carousel 기능을 JavaScript로 구현했습니다. 반응형 디자인을 통해 모바일 화면에 최적화시켰습니다.'
  ),
  new PortfolioItem(
    'Brav',
    'Webpage Template',
    'The webpage template cloning Biznus from Webflow. A cart pop-up window is supported through JavaScript. The page is also optimized to mobile devices with responsive web design. CSS pseudo classes like :root, :hover are actively used for visual representation of the page.',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/cloneWebTemplate/03_Biznus/',
    'https://github.com/dev-song/mini-projects/tree/master/projects/cloneWebTemplate/03_Biznus',
    'Biznus',
    '웹페이지 템플릿',
    'Webflow의 웹페이지 템플릿 Biznus을 클론한 웹페이지 템플릿입니다. 카트 팝업 기능을 JavaScript로 구현했습니다. 반응형 디자인을 통해 모바일 화면에 최적화시켰습니다. :root, :hover 등의 CSS 의사 클래스를 활용해 스타일시트를 작성했습니다.'
  ),
  new PortfolioItem(
    'Digital Rain',
    'Web Screensaver App',
    'The web screensaver inspired by a famous sequence from the movie Matrix. The app is constructed through MVC pattern, and its random letter displaying is made with Math functions and setTimeout/setInterval methods from JavaScript.',
    ['HTML', 'CSS', 'JavaScript'],
    'https://dev-song.github.io/mini-projects/projects/digitalRain/digital_rain.html',
    'https://github.com/dev-song/mini-projects/tree/master/projects/digitalRain',
    'Digital Rain',
    '웹 화면보호기 앱',
    '영화 매트릭스의 유명한 시퀀스에서 영감을 받아 만든 웹 기반 화면보호기입니다. MVC 패턴을 적용했으며, JavaScript의 Math 함수와 setTimeout/setInterval 메서드를 활용하여 무작위 글자 표시 기능을 구현했습니다.'
  )
]

export default PORTFOLIO_ITEMS;