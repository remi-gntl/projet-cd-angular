import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit{

  @Input() cd!: CD;
  theCd!: CD;
  idCd! : string;

  constructor(private CdService: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCd = this.route.snapshot.params['id'];
    if (this.idCd !== undefined) {
      this.theCd = this.CdService.getCdById(+this.idCd);
    }
    else {
      this.theCd = this.cd;
    }
  }
    
  onAddCD() : void {
    this.theCd.quantite++;
  }
}

