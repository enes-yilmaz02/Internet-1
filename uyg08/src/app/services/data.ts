import { Kategori } from "../models/Kategori"
import { Urun } from "../models/Urun";

export const Kategoriler: Kategori[] = [
  { katId: 1, katAdi: "Kırtasiye" },
  { katId: 2, katAdi: "Gıda" },
  { katId: 3, katAdi: "Manav" }
];

export const Urunler: Urun[] = [

  { urunId: 1, urunAdi: "Kalem", urunFiyat: 1, urunKatId: 1, urunKatAdi: "Kırtasiye" },
  { urunId: 2, urunAdi: "Defter", urunFiyat: 3, urunKatId: 1, urunKatAdi: "Kırtasiye" },
  { urunId: 3, urunAdi: "Silgi", urunFiyat: 7, urunKatId: 1, urunKatAdi: "Kırtasiye" },
  { urunId: 4, urunAdi: "Çay", urunFiyat: 9, urunKatId: 2, urunKatAdi: "Gıda" },
  { urunId: 5, urunAdi: "Şeker", urunFiyat: 2, urunKatId: 2, urunKatAdi: "Gıda" },
  { urunId: 6, urunAdi: "Elma", urunFiyat: 23, urunKatId: 3, urunKatAdi: "Manav" },
  { urunId: 7, urunAdi: "Armut", urunFiyat: 2, urunKatId: 3, urunKatAdi: "Manav" },
  { urunId: 8, urunAdi: "Erik", urunFiyat: 2, urunKatId: 3, urunKatAdi: "Manav" },
];
