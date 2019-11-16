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

  aySelection: string = "Kasım";
  aylar: string[] = [	"Haziran",	"Temmuz",	"Ağustos", "Eylül", "Ekim", "Kasım"];
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

    pieChart: any;
    colorList = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#e6e864", "#4a34ba", "#ff9305"];

    secilenAy = 5;

    zara = [120,	110,	140,	60,	120,	120];
    mudo = [80,	65,	95,	55,	80,	80,];
    adidas = [70,	80,	65,	150,	70,	70];
    mavi = [30,	45,	0,	35,	30,	30];

    sephora = [175,	175,	175,	175,	175,	175];
    gratis = [125,	125,	125,	125,	125,	125];

    cinemaximum = [75,	75,	75,	75,	75,	75];
    jolly = [75,	75,	75,	75,	75,	75];
    netflix = [25,	25,	25,	25,	25,	25];
    spotify = [25,	25,	25,	25,	25,	25];

    hepsiburada = [278,	278,	278,	278,	278,	278];
    n11 = [122,	122,	122,	122,	122,	122];

    migros = [550,	550,	550,	550,	550,	550];
    carrefour = [170,	170,	170,	170,	170,	170];
    a101 = [200,	200,	200,	200,	200,	200];
    cagri = [80,	80,	80,	80,	80,	80];

    opet = [400,	400,	400,	400,	400,	400];

    medicalPark = [176,	176,	176,	176,	176,	176];
    eczane = [24,	24,	24,	24,	24,	24];

    butik = [150,	150,	150,	150,	150,	150];
    danismanlik = [150,	150,	150,	150,	150,	150];

    veriler = [];

    slides = [
      {
        title: "Welcome to the Docs!",
        description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/ica-slidebox-img-1.png",
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "assets/img/ica-slidebox-img-2.png",
      },
      {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/img/ica-slidebox-img-3.png",
      }
    ];

    images = ["migros", "hepsi", "network"];

  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject(DOCUMENT) document) {
    
  }

  ionViewDidLoad() {
    this.chart()
  }

  change() {

    this.secilenAy =  this.aylar.findIndex(res => {
      return res === this.aySelection;
    });
    this.chart();
  }

  chart() {
    if(this.pieChart != null){
      this.pieChart.destroy();
    }       
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
          item[0]['_model'].label
          switch(item[0]['_model'].label) { 
            case "Giyim / Aksesuar": { 
              document.getElementsByName("giyim")[0].click();
               break; 
            } 
            case "Kişisel Bakım": { 
              document.getElementsByName("kisisel")[0].click();
               break; 
            } 
            case "Kültür / Eğlence": {
              document.getElementsByName("kultur")[0].click();
               break;    
            } 
            case "İnternet": { 
              document.getElementsByName("internet")[0].click();
               break; 
            }   
            case "Gıda": { 
              document.getElementsByName("gida")[0].click();
              break; 
           } 
           case "Akaryakıt": { 
            document.getElementsByName("akaryakit")[0].click();
            break; 
         } 
         case "Sağlık": { 
          document.getElementsByName("saglik")[0].click(); 
          break; 
       } 
       case "Diğer": { 
        document.getElementsByName("diger")[0].click(); 
        break; 
     } 
         }
          
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

  gi(){
    this.veriler = [
      {name: "Zara",
      value: this.zara[this.secilenAy]},
      {name: "Mudo",
      value: this.mudo[this.secilenAy]},
      {name: "Adidas",
      value: this.adidas[this.secilenAy]},
      {name: "Mavi",
      value: this.mavi[this.secilenAy]}
     ]; 
  }
  
  k(){
    this.veriler = [
      {name: "Sephora",
      value: this.sephora[this.secilenAy]},
      {name: "Gratis",
      value: this.gratis[this.secilenAy]}
     ]; 
  }

  ku(){
    this.veriler = [
      {name: "Cinemaximum",
      value: this.cinemaximum[this.secilenAy]},
      {name: "Jolly Joker",
      value: this.jolly[this.secilenAy]},
      {name: "Netflix",
      value: this.netflix[this.secilenAy]},
      {name: "Spotify",
      value: this.spotify[this.secilenAy]}
     ]; 
  }

  i(){
    this.veriler = [
      {name: "Hepsiburada",
      value: this.hepsiburada[this.secilenAy]},
      {name: "N11",
      value: this.n11[this.secilenAy]}
     ]; 
  }

  g() {
    this.veriler = [
      {name: "Migros",
      value: this.migros[this.secilenAy]},
      {name: "Carrefour",
      value: this.carrefour[this.secilenAy]},
      {name: "A101",
      value: this.a101[this.secilenAy]},
      {name: "Çağrı",
      value: this.cagri[this.secilenAy]}
     ]; 
  }

  a() {
    this.veriler = [
      {name: "Opet",
      value: this.opet[this.secilenAy]} ]
  }

  s() {
    this.veriler = [
      {name: "Medikalpark",
      value: this.medicalPark[this.secilenAy]},
      {name: "Eczane",
      value: this.eczane[this.secilenAy]}
     ];  
  }

  d() {
    this.veriler = [
      {name: "Butik",
      value: this.butik[this.secilenAy]},
      {name: "Danışmanlık",
      value: this.danismanlik[this.secilenAy]}
     ];  
  }
 
}
