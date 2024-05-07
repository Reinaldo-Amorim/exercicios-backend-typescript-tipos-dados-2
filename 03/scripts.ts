const fs = require('fs')
type Endereços = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuarios = {
    nome: string,
    email: string,
    cpf: string,
    profissão?: string,
    endereço: Endereços | null
}

const leituraArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}
const escritaArquivo =(dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

const atualizarUsuario = (cpf: string, dados: Usuarios) => {
    const bd = leituraArquivo() as Usuarios[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf

    })

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    Object.assign(usuario,dados)

    escritaArquivo(bd)

    return dados
}

const detalharUsuario = (cpf: string): Usuarios => {
    const bd = leituraArquivo() as Usuarios[];
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    })

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    return usuario

}

const neto = detalharUsuario('00321654987')

atualizarUsuario('00321654987',{
    nome: "marcos",
    email: "marcos@email.com",
    cpf: "00321654989",
    endereço: {
        cep: "78321654",
        rua: "Rua Z",
        complemento:'Casa 07',
        bairro: "Coco Ralado",
        cidade: "Florianopolis"
    }
})
const bancoDados = leituraArquivo()
console.log(bancoDados);


