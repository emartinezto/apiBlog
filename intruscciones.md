#  Rutas API en Express (/api/...)

📁 Autores (/api/autores)
    - GET > /api/autores → Listar todos los autores
        > metodo: GET
        > URL:  /api/autores
        > Headers: XXXX
        > body: XXXX
        > Response: Un array con todos los restaurantes

    - GET > /api/autores/:id → Obtener un autor por ID
        > metodo: GET
        > URL:  /api/autores/<id>
            * Hay que validar que el id sea un numero - midelware
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

📁 Posts (/api/post)
    - GET > /api/post → Listar todos los posts con los datos del autor incluidos (JOIN)
    - GET > /api/post/:id → Obtener un post por ID (también con los datos del autor)
    - POST > /api/post → Crear un nuevo post
    - GET > /api/post/category/:category → (opcional) Listar posts por categoría


    *** Documentar las funciones
