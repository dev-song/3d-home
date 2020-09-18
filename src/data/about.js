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

export default ABOUT_INFO;