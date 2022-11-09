import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sonuc } from 'src/app/models/Sonuc';
import { Urun } from 'src/app/models/Urun';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-urunduzenlesil',
  templateUrl: './urunduzenlesil.component.html',
  styleUrls: ['./urunduzenlesil.component.scss']
})
export class UrunduzenlesilComponent implements OnInit {

  urunId!: number;
  islem!: number;
  secUrun!: Urun;
  urunSonuc: Sonuc = new Sonuc();

  constructor(
    public servis: DataService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.urunId = p.urunId;
      this.islem = p.islem;
      this.secUrun = this.servis.UrunById(this.urunId);
    });
  }
  Kaydet() {
    this.urunSonuc = this.servis.UrunDuzenle(this.secUrun);
  }

  Sil() {
    this.urunSonuc = this.servis.UrunSil(this.secUrun);
  }
}
