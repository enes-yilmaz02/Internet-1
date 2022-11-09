import { Kisi } from './../../models/Kisi';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.scss']
})
export class DetayComponent implements OnInit {
  kisiId!: number;
  secKisi!: Kisi;
  constructor(
    public dataServis: DataService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.kisiId = p.Id;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.secKisi = this.dataServis.KayitById(this.kisiId);
  }
  KayitSil() {
    this.dataServis.KayitSil(this.secKisi);
    this.router.navigate(['/']);
  }
}
