import { Sonuc } from './../models/Sonuc';
import { Kategoriler, Urunler } from './data';
import { Injectable } from '@angular/core';
import { Kategori } from '../models/Kategori';
import { Urun } from '../models/Urun';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* kategori servis başla*/

  KategoriListele() {
    return Kategoriler;
  }

  KategoriById(id: number) {
    var filtre = Kategoriler.filter(s => s.katId == id);
    return filtre[0];
  }

  KategoriEkle(kat: Kategori) {
    var sonuc: Sonuc = new Sonuc();
    var filtre = Kategoriler.filter(s => s.katAdi == kat.katAdi);
    if (filtre.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Girilen Kategori Kayıtlıdır!";
    }
    else {
      Kategoriler.push(kat);
      sonuc.islem = true;
      sonuc.mesaj = "Kategori Eklendi...."
    }
    return sonuc;
  }

  KategoriDuzenle(kat: Kategori) {
    var index = Kategoriler.indexOf(kat);
    Kategoriler[index].katAdi = kat.katAdi;
    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Kategori Güncellendi....";
    return sonuc;
  }

  KategoriSil(kat: Kategori) {
    var sonuc: Sonuc = new Sonuc();
    var urunler = Urunler.filter(s => s.urunKatId == kat.katId);
    if (urunler.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Üzerinde Ürün Kayıtlı Olan Kategori Silinmez!";
    } else {
      var index = Kategoriler.indexOf(kat);
      Kategoriler.splice(index, 1);
      sonuc.islem = true;
      sonuc.mesaj = "Kategori Silindi....";
    }
    return sonuc;
  }
  /* kategori servis bitiş*/
  /* Ürün Servis Başla */
  UrunListele() {
    return Urunler;
  }

  UrunById(id: number) {
    var filtre = Urunler.filter(s => s.urunId == id);
    return filtre[0];
  }

  UrunListeByKatId(katId: number) {
    var filtre = Urunler.filter(s => s.urunKatId == katId);
    return filtre;
  }

  UrunEkle(urun: Urun) {
    var sonuc: Sonuc = new Sonuc();
    var filtre = Urunler.filter(s => s.urunAdi == urun.urunAdi);
    if (filtre.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Girilen Ürün Kayıtlıdır!";
    } else {
      Urunler.push(urun);
      sonuc.islem = true;
      sonuc.mesaj = "Ürün Eklendi...."
    }
    return sonuc;
  }

  UrunDuzenle(urun: Urun) {
    var index = Urunler.indexOf(urun);
    Urunler[index].urunAdi = urun.urunAdi;
    Urunler[index].urunFiyat = urun.urunFiyat;
    Urunler[index].urunKatId = urun.urunKatId;
    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Ürün Güncellendi...."
    return sonuc;
  }

  UrunSil(urun: Urun) {
    var index = Urunler.indexOf(urun);
    Urunler.splice(index, 1);
    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Ürün Silindi...."
    return sonuc;
  }



  /* Ürün Servis Bitiş */

  constructor() { }

}
