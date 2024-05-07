// const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArquivo = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

type Endereço = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissão?: string,
    endereço: Endereço | null
}

const cadastroUsuario = (dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[]

    bd.push(dados)

    escreverArquivo(bd)

    return dados
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}

const marcos = cadastroUsuario({
    nome: "marcos",
    email: "marcos@email.com",
    cpf: "00321654987",
    endereço: {
        cep: "78321654",
        rua: "Rua Z",
        bairro: "Coco Ralado",
        cidade: "Florianopolis"
    }
})


const bd = lerArquivo()
console.log(marcos, bd);




