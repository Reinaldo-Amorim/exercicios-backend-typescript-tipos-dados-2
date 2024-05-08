const fs = require('fs')

type Endereços = {
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
    profissao?: string,
    endereço: Endereços | null
}

const leituraArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const listarUsuarios = (filtro?:string): Usuario[] =>{
    const bd = leituraArquivo() as Usuario[]

    const usuarios = bd.filter(usuario =>{
        if (filtro) {
            return usuario.profissao === filtro
        }
        return usuario
    })
    return usuarios
}


const bd = listarUsuarios('Eletricista')
console.log(bd);


