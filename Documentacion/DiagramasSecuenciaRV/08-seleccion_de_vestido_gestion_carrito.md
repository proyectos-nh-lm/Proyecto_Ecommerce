# **Selección de Vestido y Gestión del Carrito**

```mermaid
sequenceDiagram
    participant Usuario
    participant FlutterApp
    participant API
    participant BaseDatos

    %% Agregar al Carrito
    Usuario->>FlutterApp: Presiona "Agregar al carrito"
    FlutterApp->>API: (POST /cart) Asocia vestido al usuario
    API->>BaseDatos: (INSERT) Guarda vestido en el carrito del usuario
    alt Operación exitosa
        API-->>FlutterApp: Devuelve éxito (200) "Vestido agregado al carrito"
        FlutterApp-->>Usuario: Muestra mensaje de confirmación
    else Error en la operación
        API-->>FlutterApp: Devuelve error (500) "No se pudo agregar el vestido"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Visualización del Carrito
    Usuario->>FlutterApp: Presiona "Ver carrito"
    FlutterApp->>API: (GET /cart) Solicita vestidos en el carrito
    API->>BaseDatos: (SELECT) Obtiene los vestidos del carrito
    alt Hay vestidos en el carrito
        API-->>FlutterApp: Devuelve lista de vestidos (200)
        FlutterApp-->>Usuario: Muestra los vestidos en el carrito
    else Carrito vacío
        API-->>FlutterApp: Devuelve mensaje (200) "Tu carrito está vacío"
        FlutterApp-->>Usuario: Muestra mensaje de carrito vacío
    end

    %% Modificación del Carrito - Editar
    Usuario->>FlutterApp: Selecciona "Editar vestido en carrito"
    FlutterApp->>API: (PUT /cart/{id}) Envía nueva configuración del vestido
    API->>BaseDatos: (UPDATE) Actualiza información en el carrito
    alt Edición exitosa
        API-->>FlutterApp: Devuelve éxito (200) "Vestido actualizado correctamente"
        FlutterApp-->>Usuario: Muestra mensaje de confirmación
    else Error en la edición
        API-->>FlutterApp: Devuelve error (500) "No se pudo actualizar el vestido"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Modificación del Carrito - Eliminar
    Usuario->>FlutterApp: Presiona "Eliminar del carrito"
    FlutterApp->>API: (DELETE /cart/{id}) Elimina vestido del carrito
    API->>BaseDatos: (DELETE) Elimina relación del usuario con el vestido
    alt Eliminación exitosa
        API-->>FlutterApp: Devuelve éxito (200) "Vestido eliminado del carrito"
        FlutterApp-->>Usuario: Muestra mensaje de confirmación
    else Error en la eliminación
        API-->>FlutterApp: Devuelve error (500) "No se pudo eliminar el vestido"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Agregar a Favoritos
    Usuario->>FlutterApp: Presiona "Agregar a Favoritos"
    FlutterApp->>API: (POST /favorites) Asigna el vestido al usuario
    API->>BaseDatos: (INSERT) Guarda vestido en la lista de favoritos
    alt Operación exitosa
        API-->>FlutterApp: Devuelve éxito (200) "Vestido agregado a favoritos"
        FlutterApp-->>Usuario: Muestra mensaje de confirmación
    else Error en la operación
        API-->>FlutterApp: Devuelve error (500) "No se pudo agregar el vestido"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Visualización de Favoritos
    Usuario->>FlutterApp: Presiona "Ver favoritos"
    FlutterApp->>API: (GET /favorites) Solicita vestidos en favoritos
    API->>BaseDatos: (SELECT) Obtiene la lista de favoritos
    alt Hay vestidos en favoritos
        API-->>FlutterApp: Devuelve lista de vestidos (200)
        FlutterApp-->>Usuario: Muestra los vestidos en la lista de favoritos
    else Lista de favoritos vacía
        API-->>FlutterApp: Devuelve mensaje (200) "No tienes vestidos en favoritos"
        FlutterApp-->>Usuario: Muestra mensaje de favoritos vacíos
    end

    %% Modificación de Favoritos - Eliminar
    Usuario->>FlutterApp: Presiona "Eliminar de favoritos"
    FlutterApp->>API: (DELETE /favorites/{id}) Elimina vestido de favoritos
    API->>BaseDatos: (DELETE) Elimina relación del usuario con el vestido
    alt Eliminación exitosa
        API-->>FlutterApp: Devuelve éxito (200) "Vestido eliminado de favoritos"
        FlutterApp-->>Usuario: Muestra mensaje de confirmación
    else Error en la eliminación
        API-->>FlutterApp: Devuelve error (500) "No se pudo eliminar el vestido"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end
```

---

## **Diagrama de Secuencia: Selección de Vestido y Gestión del Carrito (Flutter + API en Python + AWS)**

Este flujo permite a los usuarios agregar, visualizar, modificar y eliminar vestidos del carrito de compras o de la lista de favoritos.

---

### ✅ **Protecciones de Seguridad en API y Backend**
1. **Optimización de consultas**
   - Se usa **paginación** para la visualización del carrito y favoritos.
   - Se implementan **índices en las tablas** para mejorar la velocidad de búsqueda.

2. **Protección CSRF y HTTPS**
   - Todas las solicitudes deben realizarse con **HTTPS**.
   - Se incluyen **tokens CSRF** en solicitudes sensibles.

3. **Gestión de errores y disponibilidad**
   - Se verifica que los vestidos en el carrito aún estén disponibles antes de proceder al pago.
   - Se previene **inyección SQL** con consultas preparadas.

---

## **✅ Métodos HTTP y Respuestas de la API**
| Método     | Endpoint          | Descripción                                    | Código de respuesta             |
| ---------- | ----------------- | ---------------------------------------------- | ------------------------------- |
| **POST**   | `/cart`           | Agrega vestido al carrito                      | `200` (Success)                 |
| **GET**    | `/cart`           | Obtiene los vestidos en el carrito             | `200` (Success) / `404` (Empty) |
| **PUT**    | `/cart/{id}`      | Modifica atributos de un vestido en el carrito | `200` (Success)                 |
| **DELETE** | `/cart/{id}`      | Elimina vestido del carrito                    | `200` (Success)                 |
| **POST**   | `/favorites`      | Agrega vestido a la lista de favoritos         | `200` (Success)                 |
| **GET**    | `/favorites`      | Obtiene la lista de favoritos del usuario      | `200` (Success) / `404` (Empty) |
| **DELETE** | `/favorites/{id}` | Elimina vestido de favoritos                   | `200` (Success)                 |

---

## **📌 Estructuras JSON de Solicitudes y Respuestas**

### **📌 1. Solicitud para agregar al carrito (POST /cart)**
```json
{
  "user_id": 12345,
  "dress_id": 10,
  "size": "M",
  "color": "Rojo"
}
```

---

### **📌 2. Respuesta exitosa al agregar al carrito (200 OK)**
```json
{
  "status": 200,
  "message": "Vestido agregado al carrito."
}
```

---

### **📌 3. Solicitud para obtener el carrito (GET /cart)**
```json
{
  "status": 200,
  "cart_items": [
    {
      "id": 10,
      "name": "Vestido Rojo de Fiesta",
      "price": 420,
      "size": "M",
      "color": "Rojo",
      "availability": "Disponible",
      "image": "https://ejemplo.com/images/vestido1.jpg"
    }
  ]
}
```

---

### **📌 4. Respuesta si el carrito está vacío (200 OK)**
```json
{
  "status": 200,
  "message": "Tu carrito está vacío."
}
```

---

### **📌 5. Respuesta si ocurre un error en el carrito (500 Internal Server Error)**
```json
{
  "status": 500,
  "message": "No se pudo cargar el carrito. Por favor, inténtalo nuevamente."
}
```
