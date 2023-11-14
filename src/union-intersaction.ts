type NoobDev = {
name: string;
}

type JuniorDev = NoobDev & {
    expertise:string;
    experience:number;
}

type NextLevelDev = JuniorDev & {
    leadershipExperience:number;
    level: 'junior' | 'mid' | 'senior'
}
const newDeveloper: NoobDev | JuniorDev = {
    name: 'Abu',
    expertise: "Angular",
    experience: 1,
    // level: 2
}

const expDev: NextLevelDev = {
    name: 'Ahmed',
    experience: 2,
    expertise: 'ts',
    leadershipExperience:1,
    level: 'junior'
}

console.log(expDev);
