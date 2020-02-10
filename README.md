# Rotas

BaseURL : http://localhost:3334

## Users

- Criar usuário

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

## Sessions

- Logar na aplicação

| __ENDPOINT__ | MÉTHOD  | PARAMS | URL PARAMS | SUCCESS RESPONSE                                                                                                         | ERROR RESPONSE                                                                                                                                                                                                                                                                                              |
|--------------|---------|--------|------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /users/:id   | ``PUT`` | id     | -          | **Code**: 200 <br/> __Content__:` { `<br/> `user: {`<br/>` id: User, name: User, email: User, provider: User, avatar: File`<br/> `}`<br/>`token: JWT`  }`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' User not found ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Password doesnt match ' }`  |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |
