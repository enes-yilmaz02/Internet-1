import { Kisi } from './../models/Kisi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public siteAdi = "Teknik Bilimler";
  public kisiler: Kisi[] = [
    {
      "Id": 1,
      "Adsoyad": "Alaner İmert",
      "Mail": "Integer@non.ws",
      "Yas": 30
    },
    {
      "Id": 2,
      "Adsoyad": "Hamid Kaçin",
      "Mail": "sem@Aenean.cg",
      "Yas": 26
    },
    {
      "Id": 3,
      "Adsoyad": "Yümin Aytin",
      "Mail": "nulla@pharetra.bd",
      "Yas": 29
    },
    {
      "Id": 4,
      "Adsoyad": "Salat Buran",
      "Mail": "dui@mauris.lv",
      "Yas": 22
    },
    {
      "Id": 5,
      "Adsoyad": "Kayraalp Berber",
      "Mail": "ipsum@vestibulum.cg",
      "Yas": 18
    },
    {
      "Id": 6,
      "Adsoyad": "Tekay Demir ağan",
      "Mail": "scelerisque@at.dz",
      "Yas": 25
    },
    {
      "Id": 7,
      "Adsoyad": "Samira Diyarbakırlı",
      "Mail": "quis@placerat.kg",
      "Yas": 20
    },
    {
      "Id": 8,
      "Adsoyad": "Karhan Öznur çat",
      "Mail": "scelerisque@turpis.hu",
      "Yas": 26
    }
  ];
  constructor() { }
  KayitListele() {
    return this.kisiler;
  }
  KayitById(Id: number) {
    var filtre = this.kisiler.filter(s => s.Id == Id);
    return filtre[0];
  }
  KayitSil(k: Kisi) {
    var index = this.kisiler.indexOf(k);
    this.kisiler.splice(index, 1);
    return true;
  }

}
