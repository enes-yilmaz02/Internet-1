import { Kisi } from './../../models/Kisi';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kayitlar!: Kisi[];
  filtreliKayitlar!: Kisi[];
  constructor(
    public dataServis: DataService
  ) { }

  ngOnInit() {
    this.KayitListele();
  }
  KayitListele() {
    this.kayitlar = this.dataServis.KayitListele();
    this.filtreliKayitlar = this.dataServis.KayitListele();
  }

  KayitAra(d: string) {
    this.filtreliKayitlar = this.kayitlar.filter(s => s.Adsoyad.includes(d) || s.Mail.includes(d));
  }

  KayitSil(k: Kisi) {
    this.dataServis.KayitSil(k);
  }
}
