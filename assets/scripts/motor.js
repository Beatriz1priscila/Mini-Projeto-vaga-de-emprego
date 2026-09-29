// PASTA ONDE FICARÁ TODA A LÓGICA E CÁLCULOS DO SKILLMATCH.

//Exportando as vagas
export class Vagas {
    constructor(id, empresa, cargo, requisitos, salario, modalidade){
        this.id = id
        this.empresa = empresa
        this.cargo = cargo
        this.requisitos = requisitos
        this.salario = salario
        this.modalidade = modalidade
    }
    
    // FR03 CÁLCULO DE COMPATIBILIDADE.
    calculoCompatibilidade(habilidadesCandidato){
        if(this.requisitos.length === 0)
            return 0
        
        const encontradas = this.requisitos.filter(req => 
            habilidadesCandidato.some(hab => hab.toLowerCase() === req.toLowerCase)
        )

    const percentual = Math.round((encontradas.length / this.requisitos.length) * 100)
    return percentual
}

// RF04 CLASSIFICAÇÃO: ALTA 80-100%, MÉDIA 50-79% E BAIXA 0-49%. 
classificandoCompatibilidade(percentual){
    if (percentual >= 80 && percentual <= 100) {
        return "Alta Compatibilidade"
    } else if (percentual >= 50 && percentual <= 79){
        return "Média Compatibilidade"
    }else if (percentual >= 0 && percentual <= 49){
        return "Baixa Compatibilidade"
    }
}
}


//RF07 HERANÇA
export class VagasTi extends Vagas {
    constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel){

        super(id, empresa, cargo, requisitos, salario, modalidade)
        this.nivel = nivel
    }

    resumo(){
        return `${this.cargo} na ${this.empresa} (${this.nivel} - R$ ${this.salario})`
    }
}