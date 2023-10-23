Este documento tiene como objetivo definir las buenas prácticas a la hora de contribuir literales de la aplicación en Sanity. En dicha contribución se ha de tener en cuentas las siguientes consideraciones:

- Claridad, coherencia y precisión: Deben ser claros y precisos.
- Contexto: Comprende el contexto en el que se utilizarán los literales.
- Evitar vocabulario técnico: Evitar el uso de términos demasiado especializados que puedan ser confusos para los usuarios no técnicos.
- Errores Gramaticales y Ortográficos: Revisar y corregir los errores gramaticales y ortográficos en los literales.

### Pages

En el prefijo "page" constara de los literales especificos de una página.

Ejemplo:

```
page_home_general_title: "CHAZZ"
page_home_front-page_title: "AI Chatbot"
page_home_front-page_subtitle: "Collective Intelligence campaign"

page_home_we-are-chazz_title: "We are CHAZZ, the creative technology ecosystem of"
```

### Error

En el prefijo "error" se agruparan los errores generales de la aplicación (form, http, etc.).

```
error_form_validation_required: "Este campo es obligatorio."
error_form_invalid_email: "Por favor, introduce una dirección de correo electrónico válida."
error_http_401_title: "Página no encontrada"
```

### Component

En el prefijo "component" se agruparan los literales especificos de un componente que a su vez pudiesen tener un uso global en la aplicación.

```
button_submit: "Enviar"
button_save_changes: "Guardar cambios"
button_next: "Siguiente"
button_back: "Atrás"
```
