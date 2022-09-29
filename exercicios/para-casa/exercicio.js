/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email for vazio a retornar um erro*/

/*2. [ ] Consumir a promise  de envio de email com sucesso.

Regras de negocio:

1. Antes de enviar o email precisa imprimir no terminal uma mensagem que o email está sendo enviado

2. Ao consumir a promise é necessário imprimir o seu resultado no terminal, seguindo o exemplo abaixo( Não precisa conter a mesma formatação ex: tracos, indentação, quebra de linhas etc...)

console:
```bash
  tentando enviar email...
  Para: beatriz@email.com
  ---------------------------------------
  Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... 
  email enviado com sucesso.
```

---*/
/*3. [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.
```*/
console.clear()


const envieEmail = (email) => { //criar constante onde estão os dados
  return new Promise((resolve, reject) => {//criar um retorno de uma promessa onde pode ser resolvido ou rejeitado
  setTimeout (() => { //definir a assincronisidade da promise... fora do escopo definir tempo
    if (!email){ // se o email for invalido ou diferente do determinado...
      return reject ("O email não pode ser vazio", "falha ao enviar o e-mail") // mensagem se o email for vazio
    }
      return resolve({ //retorno quando o email for valido
        email, //dados
        mensagem: "Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula..."
      })
  },3000) //quantidade de tempo de processamento
})
}
 console.log ("Tentando enviar email...")// mensagem a ser impressa primeiro

//consumir
envieEmail ("elvirabrunoleme@gmail.com").then ((user) => {// passando os dados
  console.log(`
  email: ${user.email}
  ---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
  mensagem: ${user.mensagem}
  `)
}).catch((err) => {
  console.error(err)
})

