#  Rutas API en Express (/api/...)

📁 Autores (/api/autores)
    - GET > /api/autores → Listar todos los autores
        > metodo: GET
        > URL:  /api/autores
        > Headers: XXXX
        > body: XXXX
        > Response: Un array con todos los autores

    - GET > /api/autores/:id → Obtener un autor por ID
        > metodo: GET
        > URL:  /api/autores/<id>
            * Hay que validar que el id sea un numero - middelware
        > Headers: XXXX
        > body: nombre, email, img
        > Response: El objeto del nuevo autor creado.
        > Error Response: 404 + Mensaje

    - POST > /api/autores → Crear un autor nuevo
        > metodo: POST
        > URL:  /api/autores
            * Hay que validar que los campos que vengan en el body esten todos y sean correctos
        > Headers: XXXX
        > body: XXXX
        > Response: Un objeto con la informacion del autor

    - GET > /api/autores/:id/posts → Obtener todos los posts escritos por ese autor
        > metodo: GET
        > URL:  /api/autores/<id>/posts
            * Hay que validar que el id sea un numero - middelware
            * Hay que validar si el autor tienes post escritos - middelware
        > Headers: XXXX
        > body: XXXX
        > Response: Un objeto con todos los post del autor
        > Error Response: 404 + Mensaje

📁 Posts (/api/post)
    - GET > /api/post → Listar todos los posts con los datos del autor incluidos (JOIN)
        > metodo: GET
        > URL:  /api/post
        > Headers: XXXX
        > body: XXXX
        > Response: Un objeto con todos los post y datos del autor
        
    - GET > /api/post/:id → Obtener un post por ID (también con los datos del autor)
    - POST > /api/post → Crear un nuevo post


    *** Documentar las funciones
