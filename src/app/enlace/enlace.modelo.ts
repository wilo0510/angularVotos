export class Enlace{
    titulo:string;
    enlace:string;
    votos:number;
    constructor(titulo:string,enlace:string,votos?:number){
        this.titulo=titulo;
        this.enlace=enlace;
        this.votos=votos||0;
    }
    incrementarVotos(){
        this.votos++;
    }
    disminuirVotos(){
        this.votos--;
    }

}
