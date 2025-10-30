import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, filter, interval, map, merge, Observable, of, Subject, take } from 'rxjs';

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
        console.log(`Número recibido: ${numero}`);
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
    console.log('Ejecutando ejemplo 06 de RxJS: merge/pipe/take');

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

  ejemplo07() {
    console.log('Ejecutando ejemplo 06 de RxJS: filter');

    const interval1$ = interval(810);
    const interval2$ = interval(340);

    const combinado1$ = merge(interval1$, interval2$);
    const combinado2$ = combinado1$.pipe(
      take(20),
      filter(num => num % 2 == 0)
    )

    combinado2$.subscribe({
      next: numero => console.log(`Numero recibido: ${numero}`),
      error: (err) => {console.error('Error al recibir el número:', err,)},
      complete: () => {console.log('Flujo de datos completado.')}
    })
  }

  ejemplo08() {
    console.log('Ejecutando ejemplo 06 de RxJS: map');

    const interval1$ = interval(810);
    const interval2$ = interval(340);

    const combinado1$ = merge(interval1$, interval2$);
    const combinado2$ = combinado1$.pipe(
      take(20),
      filter(num => num % 2 == 0),
      map(num => num * 10)
    )

    combinado2$.subscribe({
      next: numero => console.log(`Numero recibido: ${numero}`),
      error: (err) => {console.error('Error al recibir el número:', err,)},
      complete: () => {console.log('Flujo de datos completado.')}
    })
  }

  ejemplo09() {
    console.log('Ejecutando ejemplo 10 de RxJS: subscription con 2 observables y unsubscribe');

    // Crea un Observable que emite un valor cada 500 ms
    const intervalo$ = interval(500);

    // Suscriptor 1
    const subscription1 = intervalo$.subscribe({
      next: numero => console.log('Suscriptor 1 - Número recibido: ' + numero),
      error: err => console.error('Suscriptor 1 - Error al recibir el número:', err),
      complete: () => console.log('Suscriptor 1 - Flujo de datos completado.')
    });

    // Suscriptor 2
    const subscription2 = intervalo$.subscribe({
      next: numero => console.log('Suscriptor 2 - Número recibido: ' + numero),
      error: err => console.error('Suscriptor 2 - Error al recibir el número:', err),
      complete: () => console.log('Suscriptor 2 - Flujo de datos completado.')
    });

    // Desuscribirse de sub1 después de 5000 ms para detener la emisión
    setTimeout(() => {
      subscription1.unsubscribe();
      console.log('Desuscrito del observable de intervalo el suscriptor 1.');
    }, 5000);

    // Desuscribirse de sub2 después de 10000 ms para detener la emisión
    setTimeout(() => {
      subscription2.unsubscribe();
      console.log('Desuscrito del observable de intervalo el suscriptor 1.');
    }, 10000);
  }

  ejemplo10() {
    console.log('Ejecutando ejemplo 10 de RxJS: Subject');

    // Crea un nuevo Subject que emitirá strings
    const subject = new Subject<string>();

    // Suscriptor 1 (s1): Se suscribe y recibirá todos los valores futuros
    subject.subscribe({
        next: (value) => console.log('s1: Valor recibido en el subject: ' + value),
        complete: () => console.log('s1: Flujo de datos completado en el subject.')
    });

    // Emite dos valores. s1 los recibe.
    subject.next('Hola');
    subject.next('Mundo');

    // Suscriptor 2 (s2): Se suscribe *después* de que 'Hola' y 'Mundo' fueron emitidos.
    // Un Subject normal NO reemite valores anteriores, por lo que s2 solo recibirá
    // los valores que se emitan a partir de este punto.
    subject.subscribe({
        next: (value) => console.log('s2: Valor recibido en el subject: ' + value),
        complete: () => console.log('s2: Flujo de datos completado en el subject.')
    });

    // Emite un valor. s1 y s2 lo reciben.
    subject.next('Saludos desde el Subject!');

    // Completa el flujo de datos. s1 y s2 reciben la notificación 'complete'.
    subject.complete();
  }

  ejemplo11() {
    console.log('Ejecutando ejemplo 11 de RxJS: BehaviorSubject');

    // Crea un nuevo BehaviorSubject que emitirá strings
    const subject = new BehaviorSubject<string>('Valor inicial');

    subject.subscribe({
        next: (value) => console.log('s1: Valor recibido en el subject: ' + value),
        complete: () => console.log('s1: Flujo de datos completado en el subject.')
    });

    subject.next('Hola');
    subject.next('Mundo');

    subject.subscribe({
        next: (value) => console.log('s2: Valor recibido en el subject: ' + value),
        complete: () => console.log('s2: Flujo de datos completado en el subject.')
    });

    subject.next('Saludos desde el Subject!');

    subject.complete();
  }
}
