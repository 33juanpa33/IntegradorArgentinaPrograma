export class Skills {
    idSkill?: number;
    nombreSkill: string;
    porcentaje: number;

    constructor(nombreSkill: string, porcentaje: number) {
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje;
    }
}