
# **Diagrama de Base de Datos (ERD)**
```mermaid
erDiagram
    USUARIOS {
        INT id PRIMARY KEY
        STRING nombre
        STRING email UNIQUE
        STRING password
        STRING telefono
        STRING direccion
        STRING rol
        DATE fecha_registro
        BOOL activo
    }

    BOUTIQUES {
        INT id PRIMARY KEY
        STRING nombre
        STRING direccion
        STRING telefono
        STRING imagen_url
        BOOL activo
    }

    VESTIDOS {
        INT id PRIMARY KEY
        STRING nombre
        STRING marca
        DECIMAL precio
        STRING color
        STRING talla
        INT cantidad
        STRING imagen_url
        STRING estado
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
    }

    VARIACIONES_VESTIDOS {
        INT id PRIMARY KEY
        INT vestido_id FOREIGN KEY REFERENCES VESTIDOS(id)
        STRING color
        STRING talla
        INT stock
    }

    CATEGORIAS {
        INT id PRIMARY KEY
        STRING nombre
    }

    VESTIDO_CATEGORIA {
        INT vestido_id FOREIGN KEY REFERENCES VESTIDOS(id)
        INT categoria_id FOREIGN KEY REFERENCES CATEGORIAS(id)
    }

    CARRITO_COMPRAS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        INT vestido_id FOREIGN KEY REFERENCES VESTIDOS(id)
        STRING talla
        STRING color
        INT cantidad
        DATE fecha_agregado
    }

    RESERVAS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
        INT vestido_id FOREIGN KEY REFERENCES VESTIDOS(id)
        DATE fecha_reserva
        TIME hora_reserva
        STRING estado
    }

    PAGOS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        DECIMAL monto
        STRING metodo_pago
        STRING estado
        STRING tipo_transaccion
        DATE fecha_pago
        STRING transaction_id UNIQUE
    }

    GARANTIAS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        INT reserva_id FOREIGN KEY REFERENCES RESERVAS(id)
        DECIMAL monto
        DATE fecha_retenida
        BOOL reembolsada
    }

    DEVOLUCIONES {
        INT id PRIMARY KEY
        INT reserva_id FOREIGN KEY REFERENCES RESERVAS(id)
        DATE fecha_devolucion
        STRING estado_vestido
        STRING observaciones
        BOOL garantia_devuelta
    }

    PENALIZACIONES {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        INT reserva_id FOREIGN KEY REFERENCES RESERVAS(id)
        DECIMAL monto
        STRING motivo
        DATE fecha_cobro
    }

    NOTIFICACIONES {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        STRING mensaje
        STRING tipo
        DATE fecha_envio
        BOOL leida
    }

    RESEÑAS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
        INT vestido_id FOREIGN KEY REFERENCES VESTIDOS(id)
        INT calificacion
        STRING comentario
        DATE fecha
    }

    FACTURAS {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        DECIMAL total
        STRING metodo_pago
        DATE fecha_factura
        STRING estado
    }

    TRANSACCIONES {
        INT id PRIMARY KEY
        INT usuario_id FOREIGN KEY REFERENCES USUARIOS(id)
        STRING tipo_transaccion
        DECIMAL monto
        STRING estado
        DATE fecha
    }

    USUARIOS ||--o{ CARRITO_COMPRAS : tiene
    USUARIOS ||--o{ RESERVAS : hace
    USUARIOS ||--o{ PAGOS : realiza
    USUARIOS ||--o{ GARANTIAS : paga
    USUARIOS ||--o{ DEVOLUCIONES : devuelve
    USUARIOS ||--o{ PENALIZACIONES : recibe
    USUARIOS ||--o{ NOTIFICACIONES : recibe
    USUARIOS ||--o{ RESEÑAS : deja
    USUARIOS ||--o{ FACTURAS : genera
    USUARIOS ||--o{ TRANSACCIONES : realiza

    BOUTIQUES ||--o{ RESERVAS : recibe
    BOUTIQUES ||--o{ RESEÑAS : recibe
    BOUTIQUES ||--o{ VESTIDOS : ofrece

    VESTIDOS ||--o{ VARIACIONES_VESTIDOS : tiene
    VESTIDOS ||--o{ CARRITO_COMPRAS : puede estar en
    VESTIDOS ||--o{ RESERVAS : puede ser rentado
    VESTIDOS ||--o{ RESEÑAS : tiene
    VESTIDOS ||--o{ VESTIDO_CATEGORIA : pertenece a

    CATEGORIAS ||--o{ VESTIDO_CATEGORIA : agrupa

    RESERVAS ||--o{ PAGOS : requiere
    RESERVAS ||--o{ GARANTIAS : tiene
    RESERVAS ||--o{ DEVOLUCIONES : puede generar
    RESERVAS ||--o{ PENALIZACIONES : puede tener

    PAGOS ||--o{ FACTURAS : genera
    FACTURAS ||--o{ TRANSACCIONES : registra

```

---

## **📌 Explicación del Modelo de Datos**
### ✅ **Gestión de Vestidos**
- **VESTIDOS**: Contiene la información básica de cada vestido.
- **VARIACIONES_VESTIDOS**: Maneja variaciones de color y talla por vestido.
- **CATEGORIAS** y **VESTIDO_CATEGORIA**: Asigna vestidos a múltiples categorías.

### ✅ **Gestión de Carrito y Reservas**
- **CARRITO_COMPRAS**: Permite agregar vestidos al carrito.
- **RESERVAS**: Maneja la reserva del vestido en una boutique.

### ✅ **Gestión de Pagos y Garantías**
- **PAGOS**: Registra los pagos por renta.
- **GARANTIAS**: Maneja la garantía retenida y reembolsada.
- **PENALIZACIONES**: Cobra penalizaciones si el vestido es devuelto en mal estado.

### ✅ **Gestión de Devoluciones y Facturación**
- **DEVOLUCIONES**: Controla el estado del vestido al ser regresado.
- **FACTURAS**: Maneja la facturación de pagos.

### ✅ **Notificaciones y Reseñas**
- **NOTIFICACIONES**: Almacena mensajes enviados a los usuarios.
- **RESEÑAS**: Registra las calificaciones de vestidos y boutiques.

---

## **📌 Optimizaciones y Mejoras**
### ✅ **Integridad y Consistencia**
- **Llaves foráneas** aseguran que los registros sean válidos.
- **Estado del vestido** se actualiza automáticamente tras una reserva.

### ✅ **Historial de Transacciones**
- Se guarda un **historial de pagos y penalizaciones** por usuario.

### ✅ **Escalabilidad**
- Se pueden agregar nuevas categorías y boutiques sin afectar la base.

---



Para garantizar **consistencia** entre la base de datos y los **JSON API responses**, se deben seguir las siguientes **mejoras en la nomenclatura**:

- **Convención:** Se usará **snake_case** para los nombres de las tablas y columnas.
- **Idiomas:** Todos los nombres de las tablas y atributos estarán en **inglés**.
- **Consistencia:** Se mantienen los mismos nombres que en los **JSON API responses**.

---

## **📌 Nombres de Tablas y Campos Corregidos**
Aquí tienes el **diagrama entidad-relación (ERD) en formato Mermaid**, ahora con nombres en inglés para que sea totalmente compatible con los JSON:

---

```mermaid

erDiagram
    USERS {
        INT id PRIMARY KEY
        STRING name
        STRING email UNIQUE
        STRING password
        STRING phone
        STRING address
        STRING role
        DATE registered_at
        BOOL is_active
    }

    BOUTIQUES {
        INT id PRIMARY KEY
        STRING name
        STRING address
        STRING phone
        STRING image_url
        BOOL is_active
    }

    DRESSES {
        INT id PRIMARY KEY
        STRING name
        STRING brand
        DECIMAL price
        STRING color
        STRING size
        INT quantity
        STRING image_url
        STRING status
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
    }

    DRESS_VARIANTS {
        INT id PRIMARY KEY
        INT dress_id FOREIGN KEY REFERENCES DRESSES(id)
        STRING color
        STRING size
        INT stock
    }

    CATEGORIES {
        INT id PRIMARY KEY
        STRING name
    }

    DRESS_CATEGORIES {
        INT dress_id FOREIGN KEY REFERENCES DRESSES(id)
        INT category_id FOREIGN KEY REFERENCES CATEGORIES(id)
    }

    CART_ITEMS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        INT dress_id FOREIGN KEY REFERENCES DRESSES(id)
        STRING size
        STRING color
        INT quantity
        DATE added_at
    }

    BOOKINGS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
        INT dress_id FOREIGN KEY REFERENCES DRESSES(id)
        DATE booking_date
        TIME booking_time
        STRING status
    }

    PAYMENTS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        DECIMAL amount
        STRING payment_method
        STRING status
        STRING transaction_type
        DATE payment_date
        STRING transaction_id UNIQUE
    }

    DEPOSITS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        INT booking_id FOREIGN KEY REFERENCES BOOKINGS(id)
        DECIMAL amount
        DATE held_at
        BOOL refunded
    }

    RETURNS {
        INT id PRIMARY KEY
        INT booking_id FOREIGN KEY REFERENCES BOOKINGS(id)
        DATE return_date
        STRING dress_condition
        STRING notes
        BOOL deposit_returned
    }

    PENALTIES {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        INT booking_id FOREIGN KEY REFERENCES BOOKINGS(id)
        DECIMAL amount
        STRING reason
        DATE charged_at
    }

    NOTIFICATIONS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        STRING message
        STRING type
        DATE sent_at
        BOOL is_read
    }

    REVIEWS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        INT boutique_id FOREIGN KEY REFERENCES BOUTIQUES(id)
        INT dress_id FOREIGN KEY REFERENCES DRESSES(id)
        INT rating
        STRING comment
        DATE review_date
    }

    INVOICES {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        DECIMAL total_amount
        STRING payment_method
        DATE invoice_date
        STRING status
    }

    TRANSACTIONS {
        INT id PRIMARY KEY
        INT user_id FOREIGN KEY REFERENCES USERS(id)
        STRING transaction_type
        DECIMAL amount
        STRING status
        DATE transaction_date
    }

    USERS ||--o{ CART_ITEMS : has
    USERS ||--o{ BOOKINGS : makes
    USERS ||--o{ PAYMENTS : completes
    USERS ||--o{ DEPOSITS : secures
    USERS ||--o{ RETURNS : initiates
    USERS ||--o{ PENALTIES : receives
    USERS ||--o{ NOTIFICATIONS : gets
    USERS ||--o{ REVIEWS : submits
    USERS ||--o{ INVOICES : generates
    USERS ||--o{ TRANSACTIONS : processes

    BOUTIQUES ||--o{ BOOKINGS : hosts
    BOUTIQUES ||--o{ REVIEWS : receives
    BOUTIQUES ||--o{ DRESSES : offers

    DRESSES ||--o{ DRESS_VARIANTS : has
    DRESSES ||--o{ CART_ITEMS : can_be_in
    DRESSES ||--o{ BOOKINGS : can_be_rented
    DRESSES ||--o{ REVIEWS : has
    DRESSES ||--o{ DRESS_CATEGORIES : belongs_to

    CATEGORIES ||--o{ DRESS_CATEGORIES : groups

    BOOKINGS ||--o{ PAYMENTS : requires
    BOOKINGS ||--o{ DEPOSITS : has
    BOOKINGS ||--o{ RETURNS : can_generate
    BOOKINGS ||--o{ PENALTIES : can_have

    PAYMENTS ||--o{ INVOICES : generates
    INVOICES ||--o{ TRANSACTIONS : records


```

---

## **📌 Cambios Realizados**
- **Nombres de tablas y columnas** en **inglés** y en **snake_case**.
- **Consistencia** con los **JSON API responses** previos.
- **Relaciones normalizadas** para **manejabilidad y eficiencia**.

---

## **📌 Ejemplo de JSON Actualizados**
### 📥 **Solicitud para obtener citas a notificar (GET /notifications/appointments)**
```json
{
  "date": "2024-03-15"
}
```
### 📤 **Respuesta Exitosa (200 OK)**
```json
{
  "status": 200,
  "appointments": [
    {
      "user_id": 12345,
      "boutique": "Boutique Elegance",
      "date": "2024-03-16",
      "time": "14:00"
    }
  ]
}
```

---

## **📌 2. Solicitud para procesar pago de renta (POST /process-payment)**
### 📥 **Solicitud**
```json
{
  "user_id": 12345,
  "boutique_id": 10,
  "amount": 150.00,
  "payment_method": "credit_card",
  "transaction_type": "rental"
}
```
### 📤 **Respuesta Exitosa (200 OK)**
```json
{
  "status": 200,
  "message": "Payment confirmed",
  "transaction_id": "TXN303030"
}
```

---

## **📌 Beneficios de los Cambios**
### ✅ **Consistencia Total**
- Los nombres de las tablas coinciden **exactamente** con las API responses JSON.

### ✅ **Estandarización**
- Se sigue un formato claro de **snake_case** en la base de datos.
- Uso de **camelCase** en los JSON responses, como es **mejor práctica** en APIs.

### ✅ **Escalabilidad**
- Se pueden **agregar nuevas funciones** sin cambiar la estructura de la base.

### ✅ **Integridad Referencial**
- Las llaves foráneas aseguran la **integridad de datos** en las relaciones.


# SEGUNDA VERSION DATABASE 
erDiagram

    %% ================
    %%    ENTIDADES
    %% ================

    USERS {
        int       id PK
        string    name
        string    email
        string    password
        string    phone
        string    address
        string    role
        datetime  registered_at
        bool      is_active
    }

    BOUTIQUES {
        int       id PK
        string    name
        string    address
        string    phone
        string    image_url
        bool      is_active
    }

    DRESSES {
        int       id PK
        string    name
        string    brand
        decimal   base_price
        string    image_url
        string    status        "ej: ACTIVO, EN_REPARACION"
        bool      is_active
        datetime  created_at
        datetime  updated_at
    }

    DRESS_VARIANTS {
        int       id PK
        int       dress_id FK
        string    color
        string    size
        int       stock
        decimal   rental_price
        bool      is_active
        datetime  created_at
        datetime  updated_at
    }

    INVENTORY {
        int       id PK
        int       dress_variant_id FK
        int       boutique_id FK
        int       stock
        string    status           "ej: DISPONIBLE, DAÑADO"
        datetime  created_at
        datetime  updated_at
    }

    CATEGORIES {
        int       id PK
        string    name
    }

    DRESS_CATEGORIES {
        int       dress_id FK
        int       category_id FK
    }

    CART_ITEMS {
        int       id PK
        int       user_id FK
        int       dress_variant_id FK
        int       quantity
        datetime  added_at
    }

    BOOKINGS {
        int       id PK
        int       user_id FK
        int       boutique_id FK
        date      booking_date
        time      booking_time
        string    status       "PENDIENTE, CONFIRMADA, CANCELADA"
        decimal   total_amount
        datetime  created_at
        datetime  updated_at
    }

    BOOKING_ITEMS {
        int       id PK
        int       booking_id FK
        int       dress_variant_id FK
        int       quantity
        decimal   price_at_booking
        datetime  created_at
        datetime  updated_at
    }

    PAYMENTS {
        int       id PK
        int       user_id FK
        decimal   amount
        string    payment_method
        string    status         "ej: PAGADO, RECHAZADO"
        string    transaction_type
        date      payment_date
        string    transaction_id
    }

    DEPOSITS {
        int       id PK
        int       user_id FK
        int       booking_id FK
        decimal   amount
        date      held_at
        bool      refunded
    }

    RETURNS {
        int       id PK
        int       booking_id FK
        date      return_date
        string    dress_condition
        string    notes
        bool      deposit_returned
    }

    PENALTIES {
        int       id PK
        int       user_id FK
        int       booking_id FK
        decimal   amount
        string    reason
        date      charged_at
    }

    NOTIFICATIONS {
        int       id PK
        int       user_id FK
        string    message
        string    type
        date      sent_at
        bool      is_read
    }

    REVIEWS {
        int       id PK
        int       user_id FK
        int       boutique_id FK
        int       dress_id FK
        int       rating
        string    comment
        date      review_date
    }

    INVOICES {
        int       id PK
        int       user_id FK
        decimal   total_amount
        string    payment_method
        date      invoice_date
        string    status
    }

    INVOICE_ITEMS {
        int       id PK
        int       invoice_id FK
        int       dress_variant_id FK
        decimal   unit_price
        int       quantity
        decimal   subtotal
    }

    TRANSACTIONS {
        int       id PK
        int       user_id FK
        string    transaction_type
        decimal   amount
        string    status
        date      transaction_date
    }

    %% ================
    %%   RELACIONES
    %% ================

    USERS ||--o{ CART_ITEMS : "has"
    USERS ||--o{ BOOKINGS : "makes"
    USERS ||--o{ PAYMENTS : "completes"
    USERS ||--o{ DEPOSITS : "secures"
    USERS ||--o{ RETURNS : "initiates"
    USERS ||--o{ PENALTIES : "receives"
    USERS ||--o{ NOTIFICATIONS : "gets"
    USERS ||--o{ REVIEWS : "submits"
    USERS ||--o{ INVOICES : "generates"
    USERS ||--o{ TRANSACTIONS : "processes"

    BOUTIQUES ||--o{ BOOKINGS : "hosts"
    BOUTIQUES ||--o{ INVENTORY : "stores"
    BOUTIQUES ||--o{ REVIEWS : "receives"

    DRESSES ||--o{ DRESS_VARIANTS : "has"
    DRESSES ||--o{ DRESS_CATEGORIES : "belongs_to"
    DRESSES ||--o{ REVIEWS : "can_be_reviewed"

    DRESS_VARIANTS ||--o{ INVENTORY : "stocked_in"
    DRESS_VARIANTS ||--o{ CART_ITEMS : "in_cart"
    DRESS_VARIANTS ||--o{ BOOKING_ITEMS : "rented"
    DRESS_VARIANTS ||--o{ INVOICE_ITEMS : "charged_in"

    CATEGORIES ||--o{ DRESS_CATEGORIES : "groups"

    BOOKINGS ||--o{ BOOKING_ITEMS : "details"
    BOOKINGS ||--o{ PAYMENTS : "requires"
    BOOKINGS ||--o{ DEPOSITS : "has"
    BOOKINGS ||--o{ RETURNS : "generates"
    BOOKINGS ||--o{ PENALTIES : "can_have"

    PAYMENTS ||--o{ INVOICES : "generates"

    INVOICES ||--o{ INVOICE_ITEMS : "contains"

