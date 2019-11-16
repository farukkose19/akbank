import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

/**
 * Generated class for the HarcamaDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-harcama-detay',
  templateUrl: 'harcama-detay.html',
})
export class HarcamaDetayPage {

  aylar: string[] = ["Ocak",	"Şubat",	"Mart",	"Nisan",	"Mayıs",	"Haziran"];
  kategoriler: string[] = ["Giyim / Aksesuar",
    "Kişisel Bakım",
    "Kültür / Eğlence",
    "İnternet",
    "Gıda",
    "Akaryakıt",
    "Sağlık",
    "Diğer"];

    giyim: number[] = [300,	200,	300,	100,	400,	350];
    kisisel: number[] = [300,	100,	250,	300,	100,	90];
    kultur: number[] = [200	,	200	,	100	,	50	,	200	,	300];
    internet: number[] = [400	,	300	,	150	,	290	,	300	,	100];
    supermarket: number[] = [1000	,	1200	,	1100	,	1100	,	900	,	1300]; 
    akaryakit: number[] = [400	,	450	,	350	,	350	,	460	,	380];
    saglik: number[] = [200	,	0	,	150	,	0	,	100	,	0];
    diger: number[] = [300	,	100	,	200	,	200	,	100	,	100];

    pieChart: any = [];
    colorList = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#e6e864", "#4a34ba", "#ff9305"];

    secilenAy = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject(DOCUMENT) document) {
    
  }

  ionViewDidLoad() {
    this.pieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: this.kategoriler,
        datasets: [{
          backgroundColor: this.colorList,
          data: [this.giyim[this.secilenAy],
          this.kisisel[this.secilenAy],this.kultur[this.secilenAy],
          this.internet[this.secilenAy],this.supermarket[this.secilenAy],this.akaryakit[this.secilenAy],
          this.saglik[this.secilenAy], this.diger[this.secilenAy]]
        }]
      },
      options: {
        'onClick' : function (evt, item) {
         console.log( item[0]['_model'].label)
        },
        title: {
          display: false
        },
        legend: {
          display: false
     }
      }
  });
  }

}
