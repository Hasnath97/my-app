import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons:any=[];

  constructor(private _pokemonservice:PokemonService){
    _pokemonservice.getPokeman().subscribe(
      (data:any)=>{
        this.pokemons[0]=data;
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }

}
