import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase | undefined

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor(){
    this.atualizaRodada();
  }

  public atualizaResposta(resp: Event): void {
    this.resposta = (<HTMLInputElement>resp.target).value;
  }

  public verificarResposta(): void {
    this.atualizaRodada
    if(this.rodadaFrase?.frasePtbr == this.resposta) {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)
      if(this.rodada === 4) {
        this.encerrarJogo.emit('Vitoria')
        alert('Conclído as traduções')
      }
    }
    else {
      this.tentativas--

      if(this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota')
        alert('Perdeu todas as tentativas')
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = ''
  }

  ngOnDestroy(): void {
      console.log('destruido');
  }
}
