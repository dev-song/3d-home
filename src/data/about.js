class Skill {
  constructor(name, score, grade) {
    this.name = name;
    this.score = score;
    this.grade = grade;
  }
}

const ABOUT_INFO = {
  username: 'dev-song',
  status: 'Web front-end developer',
  intro: "When working in HR department after graduating Economics major at the university, I was attracted by the vision of software development and started studying. I wish to be steady, improving little by little everyday.",
  skills: [
    new Skill('HTML', 70, 'Skilled'),
    new Skill('CSS', 70, 'Skilled'),
    new Skill('JavaScript', 40, 'Intermediate'),
    new Skill('React', 20, 'Novice'),
    new Skill('NodeJS', 5, 'Starter'),
    new Skill('ExpressJS', 5, 'Starter'),
    new Skill('MySQL', 5, 'Starter')
  ],

  statusKR: '웹 프론트엔드 개발자',
  introKR: "경제학과를 졸업하여 인사 관련 일을 하던 중, 개발자의 길에 매력을 느껴 전업을 위해 공부중입니다. 매일매일 배우며 한 걸음씩 꾸준히 나아가는 개발자가 되고자 합니다.",
}

export default ABOUT_INFO;