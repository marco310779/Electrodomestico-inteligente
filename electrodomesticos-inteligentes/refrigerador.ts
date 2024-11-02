import { Electrodomestico } from './electrodomestico';  

export class Refrigerador extends Electrodomestico {  
    private tieneConexionInternet: boolean; // Propiedad para verificar conexión a Internet  

    constructor(marca: string, modelo: string, tieneConexionInternet: boolean) {  
        super(marca, modelo);  
        this.tieneConexionInternet = tieneConexionInternet; // Asigna si tiene o no conexión  
    }  

    verificarTemperatura(): void {  
        if (this.encendido) {  
            console.log(`Verificando temperatura en el ${this.marca} ${this.modelo}.`);  
        } else {  
            console.log(`No se puede verificar la temperatura. ${this.marca} ${this.modelo} está APAGADO.`);  
        }  
    }  

    funcionalidad(): void {  
        console.log(`Funcionalidad específica de ${this.marca} ${this.modelo}: Refrigeración de alimentos.`);  
    }  
}