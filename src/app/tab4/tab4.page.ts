import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numAdivinar : number=-1;
  numEscrito : number=0;
  mensaje : string="Todavía no has introducido ningún numero";

  constructor(private alertController: AlertController) { }

  ngOnInit() { 
    this.numAdivinar=Math.floor(Math.random()*100);
  }

  comprobarNumero (){
    if (this.numAdivinar == this.numEscrito)
      this.mensaje="Has acertado";
    else if (this.numAdivinar > this.numEscrito)
      this.mensaje ="El número es mayor";
    else if (this.numAdivinar < this.numEscrito)
      this.mensaje = "El numero es más pequeño";
  }

  resetearJuego (){
    this.mensaje="";
    this.numEscrito=0;
    this.numAdivinar=Math.floor(Math.random()*100);
  }

    async confirmarReinicio() {
      const alert = await this.alertController.create({
        header: '¿Nuevo Juego?',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.resetearJuego(); 
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {

            },
          },
        ],
      });
  
      await alert.present();
    }

}
