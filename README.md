# GoBarber Server
 Este é o back-end do GoBarber ReactJS.

É uma REST Api construída em NodeJS + Express + MongoDB + PostegreSQL + Redis que recebe dados de agendamentos em barbearias e disponibiliza aos clientes e prestadores de serviço via REST Api

A idéia princinpal desta API é permitir com que clientes possam agendar e desmarcar horários com os prestadores de serviço e estes possam tem acesso a sua agenda de compromissos (horários vagos e ocupados) de acordo com a data selecionada.

# Sobre o projeto

Este projeto faz parte do meu potifólio pessoal. Criei ele no curso GoStack da rocketseat.
Como forma de me desafiar e aplicar o conteúdo que aprendi no curso desenvolvi por conta própria a funcionalidade de 
recuperação de senha através do envio de um email de recuperação. O envio deste email é feita em segundo plano (Background Jobs) através de uma fila.Também escrevi toda esta a documentação.

# Iniciando

## Pré requisitos
Para rodar este projeto você irá precisar NodeJS 10+ instalado. Para ter acesso aos bancos de dados você terá que ter o docker instalado e ter os seguintes containers inicializados:

### PostgreSQL 11
Inicializando container <br/><br/>
`$ docker run --name database -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres:11`<br/><br/>
Para verificar se o container está rodando execute,este comando lista todos containers em execução <br/><br/>
`$ docker ps`
### MongoDB 
Inicializando container <br/><br/>
`$ docker run --name mongobarber -p 27017:27017 -d -t mongo`<br/><br/>
Para verificar se o container está rodando execute,este comando lista todos containers em execução<br/><br/>
`$ docker ps`
### Redis Alpine
Inicializando container <br/><br/>
`$ docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`<br/><br/>
Para verificar se o container está rodando execute,este comando lista todos containers em execução<br/><br/>
`$ docker ps` <br/><br/>
Agora preencha as variavéis ambiente do arquivo **.env**
## Instalando

### Clonando o repositório

`$ git clone git@github.com:lucasluz99/gobarber.git` <br/>
`$ cd gobarber`

### Instalando repositórios

`$ yarn`

### Rodando a aplicação em modo de desenvolvimento

`$ yarn dev`

### Rodando a Fila para envio de emails em segundo plano (Background Jobs)

`$ yarn queue`

# Rotas

> *URL Base*: http://localhost:3334

## User

> http://localhost:3334/users

- Criar um usuário

| ENDPOINT | METHOD   | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                | ERROR RESPONSE                                                                                                                                                                                |
|--------------|----------|--------|------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /users       | ``POST`` | -      | -          | __Code__: 200 <br/> __Content__:` { id: User, name: User, email: User, provider: User }` | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 400 <br/> __Content__: ` {  error:  ' User already exists ' }`  |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |

- Atualizar usuário

> http://localhost:3334/users/:id

| ENDPOINT | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                         | ERROR RESPONSE                                                                                                                                                                                                                                                                                                        |
|--------------|---------|--------|------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /users/:id   | ``PUT`` | id     | -          | __Code__: 200 <br/> __Content__:` { id: User, name: User, email: User, avatar: File, }`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 400 <br/> __Content__: ` {  error:  ' User already exists ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Old password doesnt match ' }`  |
|              |         |        |            |                                                                                          |                                                                                                                                                                                                                                                                                                                       |
|              |         |        |            |                                                                                          |                                                                                                                                                                                                                                                                                                                       |

## Session

> http://localhost:3334/sessions

- Logar na aplicação

| ENDPOINT| MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                         | ERROR RESPONSE                                                                                                                                                                                                                                                                                              |
|--------------|---------|--------|------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /sessions  | ``POST`` | -     | -          | **Code**: 200 <br/> __Content__:` { `<br/> `user: {`<br/>` id: User, name: User, email: User, provider: User, avatar: File`<br/> `}`<br/>`token: JWT`  `}`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' User not found ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Password doesnt match ' }`  |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |

## File

> http://localhost:3334/files

- Salvar avatar

Para esta requisição você terá que enviar uma imagem,se você não sabe como enviar imagens usando um Http client tool aqui vai um exemplo utilizando o Insomnia. A key deve se chamar "file"

![untitled (1)](https://user-images.githubusercontent.com/53489804/74176232-0845b900-4c16-11ea-9f54-36c428a67b55.png)

|ENDPOINT| MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                              | ERROR RESPONSE |
|--------------|---------|--------|------------|-----------------------------------------------|----------------|
| /files | ``POST`` | -   | -          | **Code**: 200 <br/> __Content__:` {  File }`  | -              |
|              |         |        |            |                                               |                |
|              |         |        |            |                                               |                |

## Provider

> http://localhost:3334/providers

- Listar todos os Users que são providers

| __ENDPOINT__ | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                   | ERROR RESPONSE |
|--------------|---------|--------|------------|--------------------------------------------------------------------|----------------|
| /providers   | ``GET`` | -      | -          | **Code**: 200 <br/> __Content__:  Array de Users que são providers | -              |
|              |         |        |            |                                                                    |                |
|              |         |        |            |                                                                    |                |

## Appointment

> http://localhost:3334/appointments

- Listar todos os agendamentos do usuário logado

| ENDPOINT      | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                                                                                                                                                      | ERROR RESPONSE |
|---------------|---------|--------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| /appointments | ``GET`` | -      | -      | **Code**: 200 <br/> __Content__:   `[ { past: Appointment (True se o agendamento já tiver passado) cancelable: Appointment, id: Appointment (Id do appointment) provider: { id: User, name: User, avatar: { url: File, id: File, path: File } } } ] ` | -              |
|               |         |        |            |                                                                                                                                                                                                                                                       |                |
|               |         |        |            |                                                                                                                                                                                                                                                       |                |


- Deletar um agendamento

> http://localhost:3334/appointments/:id

| ENDPOINT      | MÉTHOD     | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                    | ERROR RESPONSE                                                                                                                                                                                                                                                     |
|---------------|------------|--------|------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /appointments/:id | ``DELETE`` | id     | -          | **Code**: 200 <br/> __Content__:   ` { Appointment, provider: { name: User, email: User }, user: { name: User } } ` | __Code__: 401 <br/>   __Content__: ` { error:  ' You don't have permission to cancel this appointment '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' You can only cancel appointments 2 hours in advance ' }`   |
|               |            |        |            |                                                                                                                     |                                                                                                                                                                                                                                                                    |
|               |            |        |            |                                                                                                                     |                                                                                                                                                                                                                                                                    |

- Criar um agendamento

> http://localhost:3334/appointments

| ENDPOINT      | MÉTHOD   | PARAMS | URL PARAMS | SUCCESS RESPONSE                                       | ERROR RESPONSE                                                                                                                                                                                                                                                                                                                                        |
|---------------|----------|--------|------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /appointments | ``POST`` | -      | -          | **Code**: 200 <br/> __Content__:   ` { Appointment } ` | __Code__: 400 <br/>   __Content__: ` { error: ' Validation Fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' You can only create appointments with providers ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `  {  error: ' Past dates are not permitted ' }`   |
|               |          |        |            |                                                        |                                                                                                                                                                                                                                                                                                                                                       |
|               |          |        |            |                                                        |                                                                                                                                                                                                                                                                                                                                                       |

## Schedule

> http://localhost:3334/schedule

- Listar todos agendamentos do prestador de serviços logado,da data passada por query params

http://localhost:3334/schedule?date=2020-01-31T00%3A00%3A00-03%3A00

| ENDPOINT  | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                             | ERROR RESPONSE                                                                 |
|-----------|---------|--------|------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| /schedule | ``GET`` |  -   | date  | **Code**: 200 <br/> __Content__:   ` { Appointment, user: { name: User } } ` | __Code__: 401 <br/>   __Content__: ` { error: ' User is not a provider ' }`    |
|           |         |        |            |                                                                              |                                                                                |
|           |         |        |            |                                                                              |                                                                                |

## Notification

> http://localhost:3334/notifications

- Listar todas as notificações do prestador de serviços logado

| ENDPOINT       | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                               | ERROR RESPONSE                                                                              |
|----------------|---------|--------|------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| /notifications | ``GET`` | -      | -          | **Code**: 200 <br/> __Content__:   ` [Array de Notification] ` | __Code__: 401 <br/>   __Content__: ` { error: ' Only provider can load notifications ' }`   |
|                |         |        |            |                                                                |                                                                                             |
|                |         |        |            |                                                                |                                                                                             |

- Marcar uma notificação como lida

> http://localhost:3334/notifications/:id

| ENDPOINT           | MÉTHOD | PARAMS | URL PARAMS | SUCCESS RESPONSE                                        | ERROR RESPONSE |
|--------------------|--------|--------|------------|---------------------------------------------------------|----------------|
| /notifications/:id | `PUT`  | id     | -          | **Code**: 200 <br/> __Content__:   ` { Notification } ` | -              |
|                    |        |        |            |                                                         |                |
|                    |        |        |            |                                                         |                |

## Available

http://localhost:3334/providers/4/available?date=1580152344759

- Listar todos os horários disponíveis de um determinado prestador de servido em determinda data

| ENDPOINT                         | MÉTHOD | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                                                                              | ERROR RESPONSE                                                      |
|----------------------------------|--------|--------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| /providers/:providerId/available | `GET`  | id     | date       | **Code**: 200 <br/> __Content__:   ` { [ { time: Data formatada para usuário, value: Data com fuso horário, available: Se o horário estiver disponível retornará true } ] } ` | __Code__: 401 <br/>   __Content__: ` { error: ' Invalid date ' }`   |
|                                  |        |        |            |                                                                                                                                                                               |                                                                     |
|                                  |        |        |            |                                                                                                                                                                               |                                                                     |

## Forgot Password

> http://localhost:3334/forgot_password

- Gerar token de recuperação de senha

| ENDPOINT         | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                    | ERROR RESPONSE                                                                                                                                                         |
|------------------|---------|--------|------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /forgot_password | `POST` | -      | -          | **Code**: 200 <br/> __Content__:   ` { password_reset_token: User, password_reset_expires: User } ` | __Code__: 400<br/>   __Content__: ` { error: ' Validation fails ' }` <br/><br/> or <br/><br/>  __Code__: 400<br/>   __Content__: ` { error: ' Email doesnt exists ' }` |
|                  |         |        |            |                                                                                                     |                                                                                                                                                                        |
|                  |         |        |            |                                                                                                     |                                                                                                                                                                        |

## Reset Password

> http://localhost:3334/reset_password

- Gerar nova senha

| ENDPOINT        | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                     | ERROR RESPONSE                                                                                                                                                                                                                                                                   |
|-----------------|---------|--------|------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /reset_password | `POST` | -      | -   | **Code**: 200 <br/> __Content__:   ` { message: 'Password changed successfully ' } ` | __Code__: 400<br/>   __Content__: ` { error: ' Validation fails ' }` <br/><br/> or <br/><br/> __Code__: 400<br/>   __Content__: ` { error: ' Invalid Token ' }`  <br/><br/> or <br/><br/> __Code__: 400<br/>   __Content__: ` { error: ' Token expired,generate another one ' }` |
|                 |         |        |            |                                                                                      |                                                                                                                                                                                                                                                                                  |
|                 |         |        |            |                                                                                      |                                                                                                                                                                                                                                                                                  |

# Models

## Users

> *name*: dome do usuário

> *email*: dmail do usuário

> password: senha do usuário

> password_hash: senha do usuário criptografada

> provider: `true` se o usuário for um prestador de serviço e `false` se for um cliente

> password_reset_token: token gerado para recuperação de senha

> password_reset_expires: data de expiração do token de recuperação de senha

```
{
name: Sequelize.STRING,
email: Sequelize.STRING,
password: Sequelize.VIRTUAL,
password_hash: Sequelize.STRING,
provider: Sequelize.BOOLEAN,
password_reset_token: Sequelize.STRING,
password_reset_expires: Sequelize.DATE,
}
```

## Files

> *name*: nome real da imagem

> *path*: nome de como a imagem foi salva

> *url*: url da imagem

```
name: Sequelize.STRING,
path: Sequelize.STRING,
url: {
type: Sequelize.VIRTUAL,
get() {
  return `${process.env.APP_URL}/files/${this.path}`;
}
```

## Appointments

> *date*: data do agendamento

> *canceled_at*: data de cancelamento do agendamento

> *past*: guarda se o agendamento já ocorreu (data passada)

> *cancelable*: guarda se o agendamento pode ser cancelado

```
date: Sequelize.DATE,
canceled_at: Sequelize.DATE,
past: {
  type: Sequelize.VIRTUAL,
  get() {
    return isBefore(this.date, new Date());
  },
},
cancelable: {
  type: Sequelize.VIRTUAL,
  get() {
    return isBefore(new Date(), subHours(this.date, 2));
  }
```
# Construído com
