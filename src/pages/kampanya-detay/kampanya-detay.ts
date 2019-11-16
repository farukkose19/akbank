import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KampanyaDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kampanya-detay',
  templateUrl: 'kampanya-detay.html',
})
export class KampanyaDetayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  migros = ["migros","Bazı sepet indirimleri ikinci üründe yüzde elli indirim, üçüncü üründe yüzde yirmi beş indirim tarzındaki kampanyalar "+
  "ile yalnızca çoklu alımlarda kullanılabilecek şekilde sepetteki ikinci veya üçüncü ürünlerde uygulanıyor. Bu indirim kampanyalarında da "+
  "indirim oranı sepetteki en düşük fiyatlı olan ürüne uygulanıyor. Bu tarzdaki indirimler sayesinde de tek ürün alımına göre büyük oranda avantaj"+
  " elde edilebiliyor. İndirim oranları satın alınan ürün sayısı ve kampanyanın niteliğine göre değişkenlik arz ediyor. "+
  "Sepette indirim kampanyaları bölümü sürekli takip edilerek güncel sepeti indirimleri öğrenilerek alışverişleri çok daha ekonomik hale getirmek mümkün oluyor."];
  hepsiburada = ["hepsi","İnternet üzerinden alışveriş yaparken belirli kampanyalardan faydalanarak alışverişi "+
  "normalden çok daha uyguna getirme imkanı doğuyor. Çeşitli kampanyalarla avantaj elde etmenin yollarından bir"+
   "tanesi de sepette indirim kampanyalarından yararlanmak oluyor. Bazı ürün ve ürün gruplarında zaman zaman yapılan "+
   "kampanyalar sayesinde ürünler sepete eklendikten sonra ödeme aşamasında yapılan indirimler sayesinde ürünler normalden "+
   "çok daha uygun fiyatlarla satın alınabiliyor. Bu tarz sepette indirim kampanyaları, kampanyalar bölümünden kontrol edilerek "+
  " kampanyada belirtilen şartların sağlanması halinde indirimli fiyatlardan yararlanılarak alışveriş işlemi gerçekleştirilebiliyor."];
  network = ["network","Sepette indirim kampanyalarının bazı türlerinde, belirli bir markaya ait bazı ürünler veya markanın tüm ürünlerinde "+
  "satın alma aşamasında belirli bir oranda indirim gerçekleştiriliyor. Bu sayede belirtilen ürün satın alındığında ürün kataloğunda belirtilen"+
  " fiyat üzerinden kampanya oranı kadar indirim miktarı düşürülerek ürün daha uygun fiyatlarla satın alınabiliyor. İndirim oranı kampanyanın "+
  "tutarına göre değişmekle birlikte bazen flaş kampanyalar düzenlenerek oldukça yüksek oranlarda indirim yapılıyor. Bu tarz indirimler genel "+
  "olarak kısa bir süre gerçekleştirildiği için düzenli olarak sepette indirim kampanyaları bölümünün kontrol edilmesini gerektiriyor. "+
  "Üyelere e-posta yolu ile de bildirilen bu tarz kampanyalar alışverişlerin çok daha ekonomik hale getirilmesini sağlıyor."
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad KampanyaDetayPage');
  }

}
