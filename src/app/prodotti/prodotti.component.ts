import { Component } from '@angular/core';
import {prodotto} from '../models/prodotto'; /* interface*/
import {PRODOTTI} from '../data/prodotti'; /*oggetto json con i prodotti */

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})

export class ProdottiComponent {
 
  prodotti: prodotto[] = PRODOTTI;

}
