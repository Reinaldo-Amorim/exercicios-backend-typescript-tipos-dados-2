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
        profissão?: string,
        endereço: Endereços | null
    }

    const leituraArquivo = (): unknown => {
            return JSON.parse(fs.readFileSync('./bd.json'))
        }
        const escritaArquivo =(dados: any): void => {
                fs.writeFileSync('./bd.json', JSON.stringify(dados))
            }

const excluirUsuario = (cpf: string): Usuario =>{

    const bd = leituraArquivo() as Usuario[]
        const usuario = bd.find(usuario => {
            return usuario.cpf === cpf
        })

            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            const exclusao = bd.filter(usuario =>{
                return usuario.cpf !== cpf
            })

            escritaArquivo(exclusao);

            return usuario
        }

        console.log(excluirUsuario('00321654989'));

        const bd = leituraArquivo()
        console.log(bd);
        
        
