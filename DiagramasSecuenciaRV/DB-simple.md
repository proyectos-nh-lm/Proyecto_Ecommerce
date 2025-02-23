
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
