# GoBarber Server
 This is the back-end of the MindCast App.

It's a RESTful API built with NodeJS + Express + MongoDB that receive all the data related with authors and podcats and record/provide to the client all this data through a REST API.

The main purpose of this API is stream audio files, podcasts were selected by me just to give some context to the app. So, you can reuse all this code to upload/stream a audio (just tested with .mp3) file and use inside your own context (music app, your own podcasts or whatever!).

# Iniciando

## Pré requisitos

## Instalando

### Clonando o repositório

`git clone`
`cd gobarber`

### Instalando repositórios

`yarn`



# Rotas

BaseURL : http://localhost:3334

## User

- Criar um usuário

| ENDPOINT | METHOD   | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                | ERROR RESPONSE                                                                                                                                                                                |
|--------------|----------|--------|------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /users       | ``POST`` | -      | -          | __Code__: 200 <br/> __Content__:` { id: User, name: User, email: User, provider: User }` | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 400 <br/> __Content__: ` {  error:  ' User already exists ' }`  |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |
|              |          |        |            |                                                                                                 |                                                                                                                                                                                               |

- Atualizar usuário

| ENDPOINT | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                         | ERROR RESPONSE                                                                                                                                                                                                                                                                                                        |
|--------------|---------|--------|------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /users/:id   | ``PUT`` | id     | -          | __Code__: 200 <br/> __Content__:` { id: User, name: User, email: User, avatar: File, }`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 400 <br/> __Content__: ` {  error:  ' User already exists ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Old password doesnt match ' }`  |
|              |         |        |            |                                                                                          |                                                                                                                                                                                                                                                                                                                       |
|              |         |        |            |                                                                                          |                                                                                                                                                                                                                                                                                                                       |

## Session

- Logar na aplicação

| ENDPOINT| MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                         | ERROR RESPONSE                                                                                                                                                                                                                                                                                              |
|--------------|---------|--------|------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /sessions  | ``POST`` | -     | -          | **Code**: 200 <br/> __Content__:` { `<br/> `user: {`<br/>` id: User, name: User, email: User, provider: User, avatar: File`<br/> `}`<br/>`token: JWT`  `}`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' User not found ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Password doesnt match ' }`  |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |

## File

- Salvar avatar

Para esta requisição você terá que enviar uma imagem,se você não sabe como enviar imagens usando um Http client tool aqui vai um exemplo utilizando o Insomnia. A key deve se chamar "file"

![untitled (1)](https://user-images.githubusercontent.com/53489804/74176232-0845b900-4c16-11ea-9f54-36c428a67b55.png)

|ENDPOINT| MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                              | ERROR RESPONSE |
|--------------|---------|--------|------------|-----------------------------------------------|----------------|
| /files | ``POST`` | -   | -          | **Code**: 200 <br/> __Content__:` {  File }`  | -              |
|              |         |        |            |                                               |                |
|              |         |        |            |                                               |                |

## Provider

- Listar todos os Users que são providers

| __ENDPOINT__ | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                   | ERROR RESPONSE |
|--------------|---------|--------|------------|--------------------------------------------------------------------|----------------|
| /providers   | ``GET`` | -      | -          | **Code**: 200 <br/> __Content__:  Array de Users que são providers | -              |
|              |         |        |            |                                                                    |                |
|              |         |        |            |                                                                    |                |

## Appointment

- Listar todos os agendamentos do usuário logado

| ENDPOINT      | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                                                                                                                                                      | ERROR RESPONSE |
|---------------|---------|--------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| /appointments | ``GET`` | -      | -      | **Code**: 200 <br/> __Content__:   `[ { past: Appointment (True se o agendamento já tiver passado) cancelable: Appointment, id: Appointment (Id do appointment) provider: { id: User, name: User, avatar: { url: File, id: File, path: File } } } ] ` | -              |
|               |         |        |            |                                                                                                                                                                                                                                                       |                |
|               |         |        |            |                                                                                                                                                                                                                                                       |                |


- Deletar um agendamento

| ENDPOINT      | MÉTHOD     | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                    | ERROR RESPONSE                                                                                                                                                                                                                                                     |
|---------------|------------|--------|------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /appointments/:id | ``DELETE`` | id     | -          | **Code**: 200 <br/> __Content__:   ` { Appointment, provider: { name: User, email: User }, user: { name: User } } ` | __Code__: 401 <br/>   __Content__: ` { error:  ' You don't have permission to cancel this appointment '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' You can only cancel appointments 2 hours in advance ' }`   |
|               |            |        |            |                                                                                                                     |                                                                                                                                                                                                                                                                    |
|               |            |        |            |                                                                                                                     |                                                                                                                                                                                                                                                                    |

- Criar um agendamento

| ENDPOINT      | MÉTHOD   | PARAMS | URL PARAMS | SUCCESS RESPONSE                                       | ERROR RESPONSE                                                                                                                                                                                                                                                                                                                                        |
|---------------|----------|--------|------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /appointments | ``POST`` | -      | -          | **Code**: 200 <br/> __Content__:   ` { Appointment } ` | __Code__: 400 <br/>   __Content__: ` { error: ' Validation Fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' You can only create appointments with providers ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `  {  error: ' Past dates are not permitted ' }`   |
|               |          |        |            |                                                        |                                                                                                                                                                                                                                                                                                                                                       |
|               |          |        |            |                                                        |                                                                                                                                                                                                                                                                                                                                                       |

## Schedule

- Listar todos agendamentos do prestador de serviços logado,da data passada por query params

http://localhost:3334/schedule?date=2020-01-31T00%3A00%3A00-03%3A00

| ENDPOINT  | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                             | ERROR RESPONSE                                                                 |
|-----------|---------|--------|------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| /schedule | ``GET`` |  -   | date  | **Code**: 200 <br/> __Content__:   ` { Appointment, user: { name: User } } ` | __Code__: 401 <br/>   __Content__: ` { error: ' User is not a provider ' }`    |
|           |         |        |            |                                                                              |                                                                                |
|           |         |        |            |                                                                              |                                                                                |

## Notification

- Listar todas as notificações do prestador de serviços logado

| ENDPOINT       | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                               | ERROR RESPONSE                                                                              |
|----------------|---------|--------|------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| /notifications | ``GET`` | -      | -          | **Code**: 200 <br/> __Content__:   ` [Array de Notification] ` | __Code__: 401 <br/>   __Content__: ` { error: ' Only provider can load notifications ' }`   |
|                |         |        |            |                                                                |                                                                                             |
|                |         |        |            |                                                                |                                                                                             |

- Marcar uma notificação como lida

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

- Gerar token de recuperação de senha

| ENDPOINT         | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                    | ERROR RESPONSE                                                                                                                                                         |
|------------------|---------|--------|------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /forgot_password | `POST` | -      | -          | **Code**: 200 <br/> __Content__:   ` { password_reset_token: User, password_reset_expires: User } ` | __Code__: 400<br/>   __Content__: ` { error: ' Validation fails ' }` <br/><br/> or <br/><br/>  __Code__: 400<br/>   __Content__: ` { error: ' Email doesnt exists ' }` |
|                  |         |        |            |                                                                                                     |                                                                                                                                                                        |
|                  |         |        |            |                                                                                                     |                                                                                                                                                                        |

## Reset Password

- Gerar nova senha

| ENDPOINT        | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                     | ERROR RESPONSE                                                                                                                                                                                                                                                                   |
|-----------------|---------|--------|------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /reset_password | `POST` | -      | -   | **Code**: 200 <br/> __Content__:   ` { message: 'Password changed successfully ' } ` | __Code__: 400<br/>   __Content__: ` { error: ' Validation fails ' }` <br/><br/> or <br/><br/> __Code__: 400<br/>   __Content__: ` { error: ' Invalid Token ' }`  <br/><br/> or <br/><br/> __Code__: 400<br/>   __Content__: ` { error: ' Token expired,generate another one ' }` |
|                 |         |        |            |                                                                                      |                                                                                                                                                                                                                                                                                  |
|                 |         |        |            |                                                                                      |                                                                                                                                                                                                                                                                                  |

# Models

# Construído com
