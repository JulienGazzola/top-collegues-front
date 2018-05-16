export enum Avis {AIMER, DETESTER};

export class Collegue {
    matricule:string;
    pseudo:string;
    score:number;
    nom:string;
    prenom:string;
    adresse:string;
    imageUrl:string;
    constructor() {
    }
}

export class Vote {
    constructor(public avis:Avis, public collegue:Collegue) {
    }
}


