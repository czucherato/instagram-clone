import { Autenticacao } from 'src/app/autenticacao.service';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class AutenticacaoGuard implements CanActivate {
    
    constructor(private autenticacao: Autenticacao) {}

    canActivate(): boolean {
        return this.autenticacao.autenticado()
    }
}