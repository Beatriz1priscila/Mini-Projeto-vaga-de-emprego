// PASTA ONDE FICARÁ TODA A LÓGICA E CÁLCULOS DO SKILLMATCH.
console.log("Motor do SkillMatch carregado com sucesso!")

export class Vagas {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        this.id = id
        this.empresa = empresa
        this.cargo = cargo
        this.requisitos = requisitos
        this.salario = salario
        this.modalidade = modalidade
    }

    calculoCompatibilidade(habilidadesCandidato) {
        if (this.requisitos.length === 0) {
            return 0
        }

        const encontradas = this.requisitos.filter((req) =>
            habilidadesCandidato.some((hab) => hab.toLowerCase() === req.toLowerCase())
        )

        const percentual = Math.round((encontradas.length / this.requisitos.length) * 100)
        return percentual
    }

    classificandoCompatibilidade(percentual) {
        if (percentual >= 80 && percentual <= 100) {
            return "Alta Compatibilidade"
        }

        if (percentual >= 50 && percentual <= 79) {
            return "Média Compatibilidade"
        }

        if (percentual >= 0 && percentual <= 49) {
            return "Baixa Compatibilidade"
        }

        return "Compatibilidade indisponível"
    }
}

export class VagasTi extends Vagas {
    constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
        super(id, empresa, cargo, requisitos, salario, modalidade)
        this.nivel = nivel
    }

    resumo() {
        return `${this.cargo} na ${this.empresa} (${this.nivel} - R$ ${this.salario})`
    }
}
