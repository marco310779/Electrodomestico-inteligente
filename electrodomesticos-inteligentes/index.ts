import { Lavarropas } from './lavarropas';  
import { Refrigerador } from './refrigerador';  
import { Microondas } from './microondas';  

// Creación de instancias de electrodomésticos  
const miLavarropas = new Lavarropas('LG', 'TurboWash', true);  
const miRefrigerador = new Refrigerador('Samsung', 'Family Hub', false);  
const miMicroondas = new Microondas('Panasonic', 'Countertop', true);  

// Pruebas de funcionalidad  
miLavarropas.encender();  
miLavarropas.iniciarCicloLavado();  

miRefrigerador.encender();  
miRefrigerador.verificarTemperatura();  

miMicroondas.encender();  
miMicroondas.iniciarCoccion(5);