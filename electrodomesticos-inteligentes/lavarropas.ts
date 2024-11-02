import { Electrodomestico } from './electrodomestico';  

export class Lavarropas extends Electrodomestico {  
    private tieneConexionInternet: boolean; // Propiedad para verificar conexión a Internet  

    constructor(marca: string, modelo: string, tieneConexionInternet: boolean) {  
        super(marca, modelo);  
        this.tieneConexionInternet = tieneConexionInternet; // Asigna si tiene o no conexión  
    }  

    iniciarCicloLavado(): void {  
        if (this.encendido) {  
            console.log(`Iniciando ciclo de lavado en el ${this.marca} ${this.modelo}.`);  
        } else {  
            console.log(`No se puede iniciar el ciclo de lavado. ${this.marca} ${this.modelo} está APAGADO.`);  
        }  
    }  

    funcionalidad(): void {  
        console.log(`Funcionalidad específica de ${this.marca} ${this.modelo}: Lavado de ropa.`);  
    }  
}