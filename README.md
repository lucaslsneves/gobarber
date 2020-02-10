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
| /users/:id   | ``PUT`` | id     | -          | **Code**: 200 <br/> __Content__:` { `<br/> `user: {`<br/>` id: User, name: User, email: User, provider: User, avatar: File`<br/> `}`<br/>`token: JWT`  `}`  | __Code__: 400 <br/>   __Content__: ` { error:  ' Validation fails '  }`  <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: ` {  error: ' User not found ' }` <br/><br/>                   or <br/><br/> __Code__: 401 <br/> __Content__: `{ error:  ' Password doesnt match ' }`  |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |
|              |         |        |            |                                                                                                                          |                                                                                                                                                                                                                                                                                                             |

## Files

- Salvar avatar

Para esta requisição você terá que enviar uma imagem,se você não sabe como enviar imagens usando um Http client tool aqui vai um exemplo utilizando o Insomnia. A key deve se chamar "file"

![untitled (1)](https://user-images.githubusercontent.com/53489804/74176232-0845b900-4c16-11ea-9f54-36c428a67b55.png)
