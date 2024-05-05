
export type RadarChartProps={
    labels: string[],
    data : number[]
}

export type SkillCreate = {
    name : string,
    years_experience: number,
    category : string
}

export type Skill = {
    id : number,
    name : string,
    years_experience: number,
    category : string
}