## Criar novo usuário

    POST http://localhost:5000/user/
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
    {
	    "name":"Maria da Silva",
	    "email": "maria.silva@gmail.com", 
	    "password": "123456"
    }
Response code: 200 (OK);

## Autenticar

    POST http://localhost:5000/user/authenticate
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
    {
	    "email": "maria.silva@gmail.com", 
	    "password": "123456"
    }
Resposta:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1yM"
    }
Response code: 200 (OK);

## Listar Usuários

#### observações:
É necessário estar autenticado e passar o token no campo `x-auth-token`
Número da página: `/page/0`
Quantidade de itens por página: `/quantityPerPage/10`

    GET http://localhost:5000/user/page/0/quantityPerPage/10  
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1yM

Resposta:

    [
       {
        "_id": "5db8ea3e83748f07dc63b484",
        "name": "Maria da Silva",
        "email": "maria.silva@gmail.com",
        "date": "2019-10-30T01:41:19.005Z",
        "__v": 0
      },
      {
        "_id": "5db8ed8283748f07dc63b485",
        "name": "Joao da Silva",
        "email": "joao.silva@gmail.com",
        "date": "2019-10-30T01:55:14.472Z",
        "__v": 0
      }
    ]
Response code: 200 (OK);

## Buscar usuário por ID
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`
ID do usuário: `id/5db8ea3e83748f07dc63b484`

    GET http://localhost:5000/user/id/5db8ea3e83748f07dc63b484  
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1y
