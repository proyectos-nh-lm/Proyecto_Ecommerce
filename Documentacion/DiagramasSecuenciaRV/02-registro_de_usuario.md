# Registro de usuario y validación de campos

```mermaid
sequenceDiagram
    participant Usuario
    participant FlutterApp
    participant API
    participant BaseDatos
    participant CorreoService
    participant JWT
    participant Firewall

    %% Usuario ingresa datos en la app
    Usuario->>FlutterApp: Ingresa nombre, correo, contraseña y nombre completo
    FlutterApp->>FlutterApp: Valida en tiempo real (regex, formato, seguridad)
    FlutterApp-->>Usuario: Muestra errores si la validación falla

    %% Envío de datos al backend con token CSRF
    FlutterApp->>API: (POST /register) Envía datos con token CSRF
    API->>Firewall: Revisa intentos de registro desde la IP

    %% Bloqueo por múltiples intentos fallidos
    alt Intentos superan el límite permitido
        Firewall-->>API: Bloquea solicitud (429)
        API-->>FlutterApp: Devuelve error (429) "Demasiados intentos, espera X minutos"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Verificación en la base de datos
    API->>BaseDatos: (SELECT) Verifica si el correo ya está registrado
    alt Correo ya registrado
        API-->>FlutterApp: Devuelve error (409) "Correo en uso, intenta con otro"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    %% Creación del usuario en estado "pendiente"
    API->>BaseDatos: (INSERT) Guarda usuario en estado "pendiente"
    API->>CorreoService: (POST) Envía código de verificación al correo del usuario
    CorreoService-->>Usuario: Recibe correo con código de verificación

    %% Usuario ingresa el código de verificación
    Usuario->>FlutterApp: Introduce código de verificación recibido
    FlutterApp->>API: (POST /verify-code) Envía código para validación
    API->>BaseDatos: (SELECT) Verifica código de verificación

    alt Código incorrecto
        API->>BaseDatos: (UPDATE) Incrementa contador de intentos fallidos
        API-->>FlutterApp: Devuelve error (401) "Código incorrecto, intenta de nuevo"
        FlutterApp-->>Usuario: Muestra mensaje de error
    end

    alt Código correcto
        API->>BaseDatos: (UPDATE) Marca usuario como "activo"
        API-->>FlutterApp: Devuelve éxito (200)
        FlutterApp-->>Usuario: Muestra mensaje "Registro exitoso" y redirige a inicio de sesión
    end
```

## **Diagrama de Secuencia: Registro de Usuario (Flutter + API en Python + AWS)**

El **registro de usuario** sigue un flujo seguro donde:
- Se validan los campos en el frontend antes de enviarlos a la API.
- La API valida la existencia del correo y evita duplicados.
- Se envía un código de verificación al correo del usuario.
- El usuario confirma su correo antes de activar la cuenta.
- Se protege contra ataques de fuerza bruta y múltiples intentos fallidos.

---

## **✅ Seguridad en API y Backend**
1. **Protección contra registros masivos (Spam)**
   - Se impone un **límite de intentos** por dirección IP.
   - Se bloquea la IP temporalmente tras **X intentos fallidos** (429 Too Many Requests).
   - Se implementa **CAPTCHA** si se detectan intentos repetidos.

2. **Protección CSRF y HTTPS**
   - Se usa un **token CSRF** en cada solicitud de registro.
   - Toda la comunicación se realiza bajo **HTTPS**.

3. **Almacenamiento seguro de contraseñas**
   - Se utiliza **bcrypt** para **cifrar las contraseñas** antes de almacenarlas.
   - No se almacena la contraseña en texto plano.

4. **Verificación del correo electrónico**
   - Se genera un **código de verificación único**.
   - El código **expira en 10 minutos** por seguridad.
   - Se bloquea la cuenta tras **X intentos fallidos de verificación**.

5. **Protección de Tokens JWT**
   - Se genera un token JWT seguro con:
     - `iat` (issued at) → Momento de creación del token.
     - `exp` (expiration) → Expira en 1 hora.
   - Se almacena en **Flutter Secure Storage** para evitar exposición en localStorage.

---

## **✅ Métodos HTTP y Respuestas de la API**
| Método   | Endpoint       | Descripción                            | Código de respuesta       |
| -------- | -------------- | -------------------------------------- | ------------------------- |
| **POST** | `/register`    | Registra un nuevo usuario              | `201` (Created)           |
| **POST** | `/register`    | Si el correo ya está en uso            | `409` (Conflict)          |
| **POST** | `/register`    | Si hay demasiados intentos de registro | `429` (Too Many Requests) |
| **POST** | `/verify-code` | Verifica el código de confirmación     | `200` (Success)           |
| **POST** | `/verify-code` | Si el código es incorrecto             | `401` (Unauthorized)      |
| **POST** | `/verify-code` | Si la cuenta ya está verificada        | `409` (Conflict)          |
| **POST** | `/verify-code` | Si el código ha expirado               | `410` (Gone)              |

---

## ** Estructuras JSON de Solicitudes y Respuestas**

### ** 1. Solicitud desde Flutter (POST /register)**
```json
{
  "username": "juanperez",
  "email": "usuario@ejemplo.com",
  "password": "P@ssword123!",
  "full_name": "Juan Pérez",
  "device_info": {
    "device_id": "abc123",
    "device_name": "iPhone 13",
    "os_version": "iOS 16",
    "app_version": "2.1.0"
  }
}
```
### ✅ **Explicación:**
- `"username"` → Nombre único del usuario.
- `"email"` → Correo electrónico válido.
- `"password"` → Contraseña segura.
- `"full_name"` → Nombre completo.
- `"device_info"` → Información del dispositivo para seguridad.

---

### ** 2. Respuesta exitosa al registrarse (201 Created)**
```json
{
  "status": 201,
  "message": "Registro exitoso. Verifica tu correo para continuar.",
  "user_id": 12345
}
```

---

### ** 3. Respuesta si el correo ya existe (409 Conflict)**
```json
{
  "status": 409,
  "message": "El correo electrónico ya está registrado. Intenta con otro."
}
```

---

### ** 4. Solicitud de verificación de código (POST /verify-code)**
```json
{
  "email": "usuario@ejemplo.com",
  "verification_code": "123456"
}
```
---

### ** 5. Respuesta si el código es válido (200 OK)**
```json
{
  "status": 200,
  "message": "Correo verificado con éxito. Ya puedes iniciar sesión."
}
```

---

### ** 6. Respuesta si el código es incorrecto (401 Unauthorized)**
```json
{
  "status": 401,
  "message": "Código incorrecto. Intenta nuevamente.",
  "attempts_remaining": 2
}
```

---

### ** 7. Respuesta si el código ha expirado (410 Gone)**
```json
{
  "status": 410,
  "message": "El código de verificación ha expirado. Solicita uno nuevo."
}
```

---

## ** Resumen de Códigos de Estado HTTP**
| Código | Descripción                                 |
| ------ | ------------------------------------------- |
| `200`  | Verificación de correo exitosa              |
| `201`  | Usuario registrado correctamente            |
| `400`  | Datos faltantes en la solicitud             |
| `401`  | Código de verificación incorrecto           |
| `409`  | Correo ya registrado o cuenta ya verificada |
| `410`  | Código de verificación expirado             |
| `429`  | Demasiados intentos, acceso bloqueado       |

---

## ** Conclusión**
✅ **Flujo seguro de registro de usuarios** con validaciones en Flutter y API en **Python + AWS**.  
✅ **Protección contra ataques** de fuerza bruta y spam.  
✅ **Verificación por correo antes de activar cuenta**.  
✅ **Uso de JWT seguro y almacenamiento cifrado de contraseñas**.  
