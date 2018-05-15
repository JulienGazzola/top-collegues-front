export enum Avis {AIMER, DETESTER};

export class Collegue {
    constructor(public pseudo:string, public score:number, public imageUrl:string) {
    }
}

export class Vote {
    constructor(public avis:Avis, public collegue:Collegue) {
    }
}


