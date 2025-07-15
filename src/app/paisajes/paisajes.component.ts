import { Component } from '@angular/core';

@Component({
  selector: 'app-paisajes',
  imports: [],
  templateUrl: './paisajes.component.html',
  styleUrl: './paisajes.component.css'
})
export class PaisajesComponent {

  imagen:string="/atardecer.jpg";

  colocarImagen(num:number):void{


/* Primer metodo
    if (num==1){
      this.imagen="/atardecer.jpg";
    }

    if (num==2){
      this.imagen="/arbolnoc.jpg";
    }

    if (num==3){
      this.imagen="/lago.jpg";
    }
  */

    /* Segundo metodo*/
    switch(num){
      case 1: this.imagen="/atardecer.jpg"; break;
      case 2: this.imagen="/arbolnoc.jpg"; break;
      case 3: this.imagen="/lago.jpg"; break;
    }
    

      /*tercer metodo
    if (num==1){
      this.imagen="/atardecer.jpg";
    }
    else if (num==2) {
      this.imagen="/arbolnoc.jpg";
    } 
    else {
      this.imagen="/lago.jpg";
    }

    */


  }

}
