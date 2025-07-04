import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sobre-mi',
  imports: [MatCardModule,MatIconModule, MatDivider],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss'
})
export class SobreMi {
  nombre = signal('Cristopher Saraos');
  profesion = signal('Desarrollador fullstack');
  descripcion = signal(`
    Soy un desarrollador fullstack con enfoque en soluciones escalables y modernas. 
    Me especializo en Angular (con Signals y Standalone Components) y NestJS, aplicando buenas prácticas 
    como tipado estricto, arquitectura limpia y principios SOLID. 
    Me apasiona crear interfaces limpias, accesibles y altamente funcionales, siempre priorizando 
    la experiencia del usuario y el rendimiento de la aplicación. 
    Disfruto colaborar en equipos multidisciplinarios y aportar con soluciones eficientes, 
    bien documentadas y sostenibles a largo plazo.
  `);
}
