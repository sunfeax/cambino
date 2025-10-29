import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { interval, merge, Observable, of, take } from 'rxjs';

class Persona {
  nombre: string = '';
  edad: number = 0;
}

@Component({
  selector: 'app-rxjs',
  imports: [RouterModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
  standalone: true
})

export class RxJS {
  
  listadoPersonas: Persona[] = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Vlad', edad: 26 },
    { nombre: 'Daniel', edad: 22 },
    { nombre: 'Aboba', edad: 39 },
    { nombre: 'Maria', edad: 48 },
  ];

  nombres$: Observable<Persona[]> = of(this.listadoPersonas);
  private numero$: Observable<number> = of(777);

  ejemplo01() {
    console.log('Ejecutando ejemplo 01 de RxJS');

    this.nombres$.subscribe({
      next: (personas: Persona[]) => {
        console.log('Lista de personas recibidas:');
        personas.forEach(persona => {
          console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });
      },
      error: (err) =>
        console.error('Error al recibir la lista de personas:', err),
      complete: () => console.log('Flujo de datos completado.'),
    });
  }

  ejemplo02() {
    const randomNum = Math.random();
    
    console.log('Ejecutando ejemplo 02 de RxJS');

    this.nombres$.subscribe({
      next: (personas: Persona[]) => {
        console.log('La persona recibida:');
        console.log(`Nombre: ${personas[Math.floor(randomNum * personas.length)].nombre}, Edad: ${personas[Math.floor(randomNum * personas.length)].edad}`);
      },
      error: (err) =>
        console.error('Error al recibir la lista de personas:', err),
      complete: () => console.log('Flujo de datos completado.'),
    });
  }

  ejemplo03() {
    console.log('Ejecutando ejemplo 03 de RxJS');

    this.numero$.subscribe({
      next: (numero: number) => {
        console.log('Número recibido: ' + numero);
      },
      error: (err) => {
        console.error('Error al recibir el número:', err);
      },
      complete: () => {
        console.log('Flujo de datos completado.');
      }
    });
  }


  ejemplo04() {
    console.log('Ejecutando ejemplo 04 de RxJS: emisión por orden');

    const numeros$: Observable<number> = of(1, 2, 3, 4, 5);

    numeros$.subscribe({
      next: (numero: number) => {
        console.log('Número recibido: ' + numero);
      },
      error: (err) => {
        console.error('Error al recibir el número:', err);
      },
      complete: () => {
        console.log('Flujo de datos completado.');
      }
    });
  }

  ejemplo05() {
    const contador$: Observable<number> = new Observable<number>((observer) => {
      console.log('Ejecutando ejemplo 05 de RxJS: emisión de strings');

      let count = 1;

      const interval = setInterval(() => {
        observer.next(count);
        count++;

        if (count > 5) {
          clearInterval(interval);
          observer.complete();
        }
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    });

    contador$.subscribe({
      next: (numero: number) => {
        console.log('Número recibido: ' + numero);
      },
      error: (err) => {
        console.error('Error al recibir el número:', err,);
      },
      complete: () => {
        console.log('Flujo de datos completado.');
      }
    });
  }

  ejemplo06() {
    console.log();

    const interval1$ = interval(1000);
    const interval2$ = interval(1500);

    const combinado1$ = merge(interval1$, interval2$);
    const combinado2$ = combinado1$.pipe(take(10))

    combinado2$.subscribe({
      next: numero => console.log(`Numero recibido: ${numero}`),
      error: (err) => {
        console.error('Error al recibir el número:', err,)},
      complete: () => {
        console.log('Flujo de datos completado.');
      }
    })
  }
}
