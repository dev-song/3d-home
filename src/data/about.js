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
  intro: "A new-born web front-end developer, majored in Economics and had worked as a HR assistant. I try to be steady, growing little by little everyday.",
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
  introKR: "경제학을 전공하고 인사담당자 일을 하다가, 개발의 세계를 접하고 웹 프론트엔드로 새로운 발걸음을 내딛고 있는 주니어 개발자입니다. 매일매일 배우며 한 걸음씩 꾸준히 성장해나가고자 합니다.",
}

export default ABOUT_INFO;