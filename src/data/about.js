class Skill {
  constructor(name, score, grade) {
    this.name = name;
    this.score = score;
    this.grade = grade;
  }
}

const ABOUT_INFO = {
  username: 'dev-song',
  status: 'A web developer wannabe',
  intro: "I'm seeking for a better future.",
  skills: [
    new Skill('HTML', 70, 'Skilled'),
    new Skill('CSS', 70, 'Skilled'),
    new Skill('JavaScript', 40, 'Intermediate'),
    new Skill('React', 20, 'Novice'),
    new Skill('NodeJS', 5, 'Starter'),
    new Skill('ExpressJS', 5, 'Starter'),
    new Skill('MySQL', 5, 'Starter')
  ]
}

const ABOUT_INFO_KR = {
  username: 'dev-song',
  status: '웹 개발자 꿈나무',
  intro: "매일매일 한 걸음씩 나아가는 중",
  skills: [
    new Skill('HTML', 70, '중급'),
    new Skill('CSS', 70, '중급'),
    new Skill('JavaScript', 40, '중급'),
    new Skill('React', 20, '초급'),
    new Skill('NodeJS', 5, '입문'),
    new Skill('ExpressJS', 5, '입문'),
    new Skill('MySQL', 5, '입문')
  ]
}

export default ABOUT_INFO;