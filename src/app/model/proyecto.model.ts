export class Proyecto {
    idProy?: number;
    tituloProy: string;
    descripcionProy: string;
    fotoProy: string;

    constructor(tituloProy: string, descripcionProy: string, fotoProy: string, descripcionExp: string) {
        this.tituloProy = tituloProy;
        this.descripcionProy = descripcionProy;
        this.fotoProy = fotoProy;
    }
}