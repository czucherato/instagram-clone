import { Progresso } from './progresso.service';
import * as firebase from "firebase";
import { GUID } from "./guid.service";
import { Injectable } from "@angular/core";

@Injectable()
export class Bd {

    constructor(private progresso: Progresso) {}

    public publicar(publicacao: any): void {
        let imagem = GUID.generate()
        firebase.storage().ref()
            .child(`imagens/${imagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                //acompanhando o progresso do upload
                (snapshot: any) => {
                    this.progresso.status = 'andamento'
                    this.progresso.estado = snapshot
                },
                (error) => {
                    this.progresso.status = 'erro'
                },
                () => {
                    //finalização do processo
                    this.progresso.status = 'concluido'

                    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
                    .push({
                        titulo: publicacao.titulo,
                        imagem: imagem
                    })
                    .then((resposta) => {
                        // let nomeImagem = resposta.key
                    })
                })
    }
}