#  Rutas API en Express (/api/...)

📁 Autores (/api/autores)
    - GET > /api/autores → Listar todos los autores
    - GET > /api/autores/:id → Obtener un autor por ID
    - POST > /api/autores → Crear un autor nuevo
    - GET > /api/autores/:id/posts → Obtener todos los posts escritos por ese autor

📁 Posts (/api/post)
    - GET > /api/post → Listar todos los posts con los datos del autor incluidos (JOIN)
    - GET > /api/post/:id → Obtener un post por ID (también con los datos del autor)
    - POST > /api/post → Crear un nuevo post
    - GET > /api/post/category/:category → (opcional) Listar posts por categoría
