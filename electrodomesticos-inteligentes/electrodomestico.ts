export abstract class Electrodomestico {  
    protected encendido: boolean;  // Estado del electrodoméstico (encendido/apagado)  
    protected marca: string;       // Marca del electrodoméstico  
    protected modelo: string;      // Modelo del electrodoméstico  
    
    constructor(marca: string, modelo: string) {  
        this.marca = marca;  
        this.modelo = modelo;  
        this.encendido = false; // Por defecto, el electrodoméstico está apagado  
    }  

    encender(): void {  
        this.encendido = true;  
        console.log(`${this.marca} ${this.modelo} está ahora ENCENDIDO.`);  
    }  

    apagar(): void {  
        this.encendido = false;  
        console.log(`${this.marca} ${this.modelo} está ahora APAGADO.`);  
    }  

    abstract funcionalidad(): void; // Método abstracto para funcionalidades específicas  
}