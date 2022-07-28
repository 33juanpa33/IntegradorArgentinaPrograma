export class Experiencia {
    idEdu?: number;
    tituloExp: string;
    fechaInicioExp: string;
    fechaFinExp: string;
    descripcionExp: string;

    constructor(tituloExp: string, fechaInicioExp: string, fechaFinExp: string, descripcionExp: string) {
        this.tituloExp = tituloExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.descripcionExp = descripcionExp;
    }
}