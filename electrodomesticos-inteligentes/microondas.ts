import { Electrodomestico } from './electrodomestico';  

export class Microondas extends Electrodomestico {  
    private tieneConexionInternet: boolean; // Propiedad para verificar conexión a Internet  

    constructor(marca: string, modelo: string, tieneConexionInternet: boolean) {  
        super(marca, modelo);  
        this.tieneConexionInternet = tieneConexionInternet; // Asigna si tiene o no conexión  
    }  

    iniciarCoccion(minutos: number): void {  
        if (this.encendido) {  
            console.log(`Cocinando durante ${minutos} minutos en el ${this.marca} ${this.modelo}.`);  
        } else {  
            console.log(`No se puede iniciar la cocción. ${this.marca} ${this.modelo} está APAGADO.`);  
        }  
    }  

    funcionalidad(): void {  
        console.log(`Funcionalidad específica de ${this.marca} ${this.modelo}: Calentamiento de alimentos.`);  
    }  
}