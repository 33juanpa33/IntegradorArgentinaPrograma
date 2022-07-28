export class Educacion {
    idEdu?: number;
    tituloEdu: string;
    fechaInicioEdu: string;
    fechaFinEdu: string;
    descripcionEdu: string;

    constructor(tituloEdu: string, fechaInicioEdu: string, fechaFinEdu: string, descripcionEdu: string) {
        this.tituloEdu = tituloEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.descripcionEdu = descripcionEdu;
    }
}