import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-katduzenlesil',
  templateUrl: './katduzenlesil.component.html',
  styleUrls: ['./katduzenlesil.component.scss']
})
export class KatduzenlesilComponent implements OnInit {
  katId!: number;
  islem!: number;
  secKat: Kategori = new Kategori();
  katSonuc: Sonuc = new Sonuc();

  constructor(
    public servis: DataService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.katId = p.katId;
      this.islem = p.islem;
      this.secKat = this.servis.KategoriById(this.katId);
    });
  }

  Kaydet() {
    this.katSonuc = this.servis.KategoriDuzenle(this.secKat);
  }

  Sil() {
    this.katSonuc = this.servis.KategoriSil(this.secKat);
  }
}
