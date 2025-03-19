import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDs(): CD[] {
    return [
      {
        id: 1,
        title: 'P1',
        author: 'Implike140',
        price: 12,
        thumbnail:  'https://upload.wikimedia.org/wikipedia/commons/5/55/1PLIK%C3%89140_en_concert.jpg',
        dateDeSortie: new Date(2025,2,14),
        quantite: 5
      },
      {
        id: 2,
        title: 'Zéro Bluff',
        author: 'JRK 19',
        price: 10,
        thumbnail:  'https://m.media-amazon.com/images/I/51I2CZf30NL._UX250_FMwebp_QL85_.jpg',
        dateDeSortie: new Date(2025,2,13),
        quantite: 15,
        onsale: true
      },
      {
        id:3,
        title: 'Essonne History X',
        author: 'Ziak',
        price: 13,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b2736f10c5aec033ac2adc5cebbf', 
        dateDeSortie: new Date(2025,1,24),
        quantite: 2
      }
    ];
  }

  getCdById(id: number) : CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd)
    {
      return cd;
    }
    else 
    {
      throw new Error('CD non trouvé');
    }

  }
}
