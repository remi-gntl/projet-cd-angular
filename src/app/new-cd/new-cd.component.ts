import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';


@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})

export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      price: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
    });
  }
}

