import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }

    this.imc = this.weight / (this.height * this.height)
    this.showIMC()
  }

  async showIMC() {
    if(this.imc <= 18.5){
      const msg = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(2)} MAGREZA`,
        duration: 3000,
        color: 'secondary'
      })
      msg.present()
    }else if(this.imc > 18.5 && this.imc <= 24.9){
      const msg = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(2)} NORMAL`,
        duration: 3000,
        color: 'secondary'
      })
      msg.present()
    }else if(this.imc >= 25 && this.imc <= 29.9){
      const msg = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(2)} SOBREPESO`,
        duration: 3000,
        color: 'secondary'
      })
      msg.present()
    }else if(this.imc >= 30.0 && this.imc <= 39.9){
      const msg = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(2)} OBESIDADE`,
        duration: 3000,
        color: 'secondary'
      })
      msg.present()
    }else{
      const msg = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(2)} OBESIDADE GRAVE`,
        duration: 3000,
        color: 'secondary'
      })
      msg.present()
    }

  }



}
