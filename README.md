# 🏥 Sistema de Gestión de Farmacia y Hospital

Este sistema está diseñado para la **gestión automatizada de inventarios, medicamentos, pacientes y citas médicas** en hospitales y farmacias.  

✅ **Backend:** Laravel + PostgreSQL  
✅ **Frontend:** React.js  

---

## 🚀 Características
- 📦 **Gestión de inventarios** de medicamentos.  
- 👩‍⚕️ **Registro de pacientes y médicos**.  
- 📅 **Agendamiento de citas médicas**.  
- 🏥 **Administración de hospital y farmacia**.  
- 📊 **Generación de reportes**.  
- 🔒 **Autenticación y roles de usuario**.  

---

## 🛠️ Tecnologías Utilizadas
- **Backend:** Laravel 10  
- **Base de Datos:** PostgreSQL  
- **Frontend:** React.js + Vite + Tailwind  
- **Servidor Web:** Apache / Nginx  
- **Autenticación:** Laravel Breeze / Sanctum  

---

## 📂 Estructura del Proyecto
HOSPITAL/ │── backend/ # Código Laravel │ │── app/ # Lógica del servidor │ │── database/ # Migraciones y seeds │ │── routes/ # Rutas de la API │ │── public/ # Archivos accesibles públicamente │ │── .env.example # Variables de entorno Laravel │ │── composer.json # Dependencias PHP │── frontend/ # Código React.js │ │── src/ # Componentes React │ │── public/ # Archivos estáticos │ │── package.json # Dependencias React │ │── vite.config.js # Configuración de Vite

## Informe


Materia: Sistemas de información 3

Docente: Ing. Jaime Zambrana Chacón

Integrantes: Eleazar Guitierrez

Jonathan Padilla León

Ricardo Sanchez

Fernando Montaño

Alvaro Bacarreza

**Santa Cruz – Bolivia**

**AGRADECIMIENTO**

Quiero expresar mi más sincero agradecimiento a todas aquellas personas que me han acompañado en este camino universitario. Su apoyo incondicional, especialmente en los momentos más desafiantes, ha sido fundamental para alcanzar esta meta. Gracias a ustedes, encontré la fuerza y la motivación necesarias para perseverar y no rendirme. No podría haber logrado esto sin su ayuda."

Contenido

[Capítulo 1: Introducción 4](#_Toc180391179)

[Contexto 4](#_Toc180391180)

[Motivaciones 4](#_Toc180391181)

[Objetivo 4](#_Toc180391182)

[Estructura 5](#_Toc180391183)

[Capítulo 2: Estado del arte 5](#_Toc180391184)

[Implementación Ágil 5](#_Toc180391185)

[Ciclo de vida de la implementación ágil 6](#_Toc180391186)

[Realización del Sprint 6](#_Toc180391187)

[Productos existentes 7](#_Toc180391188)

[Herramientas de desarrollo 7](#_Toc180391189)

[Metodología de desarrollo 8](#_Toc180391190)

[Scrum 8](#_Toc180391191)

[Capítulo 3: Análisis del sistema 9](#_Toc180391192)

[Definición del Sistema 9](#_Toc180391193)

[Historias de Usuario 9](#_Toc180391194)

[Requerimientos Funcionales y no funcionales 11](#_Toc180391195)

[Product Backlog 11](#_Toc180391196)

[Estimación 13](#_Toc180391197)

[Planning Poker 14](#_Toc180391198)

[Capítulo 4: Desarrollo del sistema 14](#_Toc180391199)

[Visión General 14](#_Toc180391200)

[Arquitectura 15](#_Toc180391201)

[Proceso de Desarrollo 16](#_Toc180391202)

[Sprint Backlog 16](#_Toc180391203)

[Capítulo 5: Planificación y Presupuesto 38](#_Toc180391204)

[Planificación 38](#_Toc180391205)

[Presupuesto 38](#_Toc180391206)

[Capítulo 6: Conclusiones 41](#_Toc180391207)

[Resultados Obtenidos 41](#_Toc180391208)

[Desarrollos Futuros 42](#_Toc180391210)

[Conclusiones Personales 42](#_Toc180391211)

**CAPÍTULO 1: INTRODUCCIÓN**

En la actualidad, la digitalización de los servicios hospitalarios se ha convertido en una necesidad fundamental para mejorar la gestión de la atención médica y optimizar los procesos administrativos. La automatización de estos sistemas permite una mejor organización de la información, reduciendo errores y tiempos de espera, lo que se traduce en una atención más eficiente para los pacientes.

Este proyecto presenta el desarrollo de un sistema de gestión hospitalaria basado en tecnologías modernas, utilizando **React** para la interfaz de usuario, **Laravel** como framework backend y **PostgreSQL** como gestor de base de datos. Este sistema está diseñado para facilitar la administración de citas médicas, el control de pacientes, la gestión de expedientes clínicos y la asignación de personal médico, garantizando seguridad y escalabilidad en su implementación.

El desarrollo de este sistema busca mejorar la eficiencia y efectividad en los procesos hospitalarios, proporcionando herramientas que permitan a los profesionales de la salud enfocarse en la atención del paciente, reduciendo la carga administrativa y facilitando el acceso a la información en tiempo real. A través de esta solución tecnológica, se pretende contribuir a la modernización del sector salud y mejorar la calidad de los servicios médicos en los hospitales.

**CONTEXTO**

El sistema de gestión hospitalaria se desarrolla en respuesta a la creciente demanda de soluciones tecnológicas que optimicen la administración de los recursos en hospitales y centros de salud. Actualmente, muchas instituciones médicas enfrentan problemas como la duplicidad de información, errores en la asignación de citas, dificultad en la recuperación de expedientes y demoras en la atención al paciente.

Con la integración de **React, Laravel y PostgreSQL**, este sistema ofrece una plataforma eficiente y accesible que permite gestionar de manera centralizada las operaciones hospitalarias. React se encarga de proporcionar una interfaz moderna e intuitiva para los usuarios, mientras que Laravel permite una arquitectura robusta y escalable en el backend, asegurando un rendimiento óptimo y una gestión segura de los datos. PostgreSQL, por su parte, garantiza la integridad y eficiencia en el almacenamiento de la información.

Este proyecto está dirigido a hospitales, clínicas y centros de salud que buscan digitalizar sus procesos internos, mejorando la calidad del servicio y la experiencia del paciente. Además, permite a los profesionales médicos acceder a la información de manera rápida y precisa, facilitando la toma de decisiones y optimizando la coordinación entre diferentes áreas del hospital.

**OBJETIVOS**

**Objetivo General**

Desarrollar un sistema de gestión hospitalaria que optimice la administración de citas médicas, el control de pacientes y la gestión de expedientes clínicos, utilizando tecnologías modernas como **React**, **Laravel** y **PostgreSQL**, con el fin de mejorar la eficiencia en la prestación de servicios de salud.

**Objetivos Específicos**

- **Diseñar e implementar** una interfaz intuitiva y amigable con **React**, que facilite la interacción de los usuarios con el sistema.
- **Desarrollar un backend robusto** con **Laravel**, que garantice una gestión eficiente de los datos hospitalarios y permita la integración de diferentes módulos.
- **Implementar una base de datos en PostgreSQL**, asegurando la integridad y seguridad de la información médica almacenada.
- **Optimizar el proceso de gestión de citas médicas**, permitiendo la programación, modificación y cancelación de citas en tiempo real.
- **Facilitar la administración de expedientes clínicos**, asegurando que los médicos y personal autorizado puedan acceder a la información de los pacientes de manera segura y rápida.

**Motivación**

En la actualidad, la gestión eficiente de los hospitales y centros de salud es un factor clave para mejorar la calidad del servicio médico. Muchos hospitales aún utilizan sistemas manuales o software obsoleto para manejar citas, expedientes clínicos y la administración del personal, lo que genera retrasos, pérdida de información y dificultades en la atención a los pacientes.

El desarrollo de este **sistema de gestión hospitalaria** surge como una solución innovadora para digitalizar y optimizar estos procesos. Al utilizar **React** para la interfaz, **Laravel** para el backend y **PostgreSQL** como base de datos, se busca ofrecer una plataforma moderna, segura y escalable, capaz de integrarse con las necesidades reales de los hospitales.

Además, este proyecto no solo contribuirá a la **mejora en la organización interna de los hospitales**, sino que también **facilitará la experiencia de los pacientes y el personal médico**, reduciendo tiempos de espera y asegurando un acceso rápido a la información médica.

**ESTRUCTURA DEL DOCUMENTO**

El documento está organizado en los siguientes capítulos:

1. **Introducción**: Proporciona una visión general del proyecto, exponiendo los objetivos, las razones para llevarlo a cabo y el contexto en el que se enmarca.
2. **Estado del arte**: Describe el panorama tecnológico y herramientas relacionadas con el desarrollo de la app móvil, destacando opciones existentes en el mercado.
3. **Análisis del sistema**: Examina los requisitos y especificaciones necesarios para desarrollar la aplicación, definiendo las funcionalidades clave.
4. **Desarrollo del sistema**: Detalla las etapas de implementación, incluyendo la estructura técnica y las funcionalidades desarrolladas.
5. **Planificación y presupuesto**: Presenta una planificación del proyecto con estimaciones de tiempo y análisis económico.
6. **Conclusiones**: Resume los logros alcanzados, lecciones aprendidas y posibles mejoras futuras para enriquecer el sistema.

**CAPÍTULO 2: ESTADO DEL ARTE**

En este capítulo se abordarán las tecnologías y metodologías relacionadas con el desarrollo del sistema de hospital y farmacia utilizando una metodología ágil. El objetivo es proporcionar al lector una comprensión clara de los conceptos que respaldan este desarrollo, lo que facilitará la comprensión de los capítulos posteriores.

**2.1 Sistemas de gestión de hospital**

El sistema de gestión de tareas tiene como objetivo automatizar y organizar las tareas de grupos pequeños, facilitando la colaboración y la administración del tiempo. La automatización reduce el esfuerzo manual, mejora la coordinación entre los miembros del grupo y optimiza la comunicación.

Entre las aplicaciones más relevantes del mercado que cumplen funciones similares, se destacan:

- **Todoist:** Una aplicación sencilla y flexible para organizar tareas individuales y grupales. Aunque útil, su personalización es limitada para proyectos colaborativos más específicos.
- **Microsoft To Do:** Ideal para tareas individuales, pero menos robusta en cuanto a la gestión colaborativa en tiempo real.
- **Trello:** Excelente para tareas visuales y proyectos grupales, pero puede ser complejo para usuarios que buscan simplicidad.

Estas aplicaciones son útiles en diversos contextos, pero presentan limitaciones en cuanto a personalización, visualización de estadísticas y gestión intuitiva de grupos pequeños. Por ello, este proyecto busca cubrir esas brechas con funcionalidades personalizadas y accesibles.

**2.2 Implementación Ágil**

La implementación ágil es la estrategia clave utilizada en este proyecto. A diferencia de los enfoques tradicionales, que realizan el desarrollo en fases únicas, la metodología ágil adopta un enfoque iterativo e incremental, con entregas frecuentes y retroalimentación continua.

**Ciclo de vida de la implementación ágil**

El ciclo de vida del desarrollo ágil en este proyecto se divide en dos grandes fases: **Análisis** y **Realización del Sprint**. Este enfoque asegura que el sistema sea adaptable y flexible, permitiendo ajustar el desarrollo según las necesidades emergentes de los usuarios.

**Análisis**

El análisis en la implementación ágil sigue un enfoque estructurado que consta de los siguientes pasos:

1. **Preparación del proyecto:** Se definen las responsabilidades del equipo, los estándares de documentación y los requisitos de hardware y software.
2. **Proceso de visualización:** Se identifican los procesos clave, como la creación de tareas, la asignación de responsables y la notificación de vencimientos. También se incluyen funcionalidades como autenticación de usuarios y niveles de acceso.
3. **Funcionamiento de referencia del sistema:** Se establece un sistema base que permita realizar las operaciones esenciales, como añadir tareas, editarlas y asignarlas. El sistema base utiliza una arquitectura modular que asegura la escalabilidad del proyecto.
4. **Fase de evaluación:** Se priorizan las funcionalidades adicionales, como las estadísticas de cumplimiento de tareas o notificaciones personalizadas, ajustando los tiempos de entrega según su valor en el sistema.

**Realización del Sprint**

La realización del Sprint es la etapa en la que se desarrollan las funcionalidades definidas en la fase de análisis, siguiendo un proceso iterativo y de mejora continua. Los pasos clave en esta fase son:

1. **Reuniones de planificación del Sprint:** Al inicio de cada sprint, se definen objetivos específicos, como la integración con PostgreSQL para la sincronización de datos en tiempo real.
2. **Desarrollo, pruebas y documentación:** Durante cada sprint, se desarrollan las funcionalidades planificadas, se realizan pruebas unitarias e integradas, y se documenta el proceso.
3. **Reuniones diarias de seguimiento:** Se realizan reuniones breves para revisar avances, obstáculos y soluciones, asegurando que el proyecto avance de manera fluida.
4. **Prueba de Sprint:** Al finalizar cada sprint, se realizan pruebas funcionales con usuarios clave para validar que las funcionalidades cumplen con las expectativas.
5. **Revisión del Sprint:** Se evalúa el sprint, identificando áreas de mejora para las siguientes iteraciones, optimizando continuamente el sistema.

**2.4 Herramientas de desarrollo**

**React**  
React es una biblioteca de JavaScript para la construcción de interfaces de usuario dinámicas y eficientes. Su modelo basado en **componentes reutilizables** permite desarrollar una interfaz moderna y de fácil interacción para pacientes, médicos y administradores.

**Laravel**  
Laravel es un framework de PHP que facilita el desarrollo de aplicaciones web robustas y seguras. Proporciona herramientas para la autenticación de usuarios, el manejo de bases de datos y la implementación de APIs, garantizando **seguridad y escalabilidad** en el backend del sistema hospitalario.

**PostgreSQL**  
PostgreSQL es un sistema de gestión de bases de datos relacional **de código abierto**, reconocido por su estabilidad, rendimiento y alto nivel de seguridad. Su uso en este sistema garantiza **integridad y eficiencia en el almacenamiento de datos hospitalarios**.

**Metodología de desarrollo**

**Scrum**

**Scrum: Un marco de trabajo ágil**

Scrum es una metodología ágil que se utiliza para gestionar proyectos de manera iterativa e incremental. Se enfoca en la colaboración, la adaptación y la entrega de valor al cliente de forma rápida y eficiente. En lugar de planificar todo el proyecto al inicio, Scrum divide el trabajo en ciclos cortos llamados "sprints", que suelen durar entre dos y cuatro semanas.

**Los roles principales en Scrum**

En Scrum, existen tres roles clave:

- **Product Owner:** Es la voz del cliente. Define el producto, prioriza las funcionalidades y maximiza el valor que se entrega. Es responsable del Product Backlog, que es una lista ordenada de todas las características, funciones y mejoras que se desean en el producto.
- **Scrum Master:** Es el facilitador del equipo. Elimina obstáculos, asegura que el equipo siga las prácticas de Scrum y protege al equipo de las interrupciones externas. Su objetivo es maximizar la productividad del equipo.
- **Equipo de Desarrollo:** Es un equipo autoorganizado y multifuncional que se encarga de crear el producto. Los miembros del equipo tienen las habilidades necesarias para completar el trabajo y se comprometen a alcanzar la meta del Sprint.

**Conceptos clave en Scrum**

Además de los roles, hay otros conceptos fundamentales en Scrum:

- **Sprint:** Es un período de tiempo fijo durante el cual el equipo se compromete a completar un conjunto de trabajo.
- **Sprint Planning:** Es una reunión al inicio del Sprint donde el equipo planea el trabajo que se realizará.
- **Daily Scrum:** Es una reunión diaria de 15 minutos donde el equipo revisa el progreso, identifica los obstáculos y coordina el trabajo.
- **Sprint Review:** Es una reunión al final del Sprint donde el equipo demuestra el trabajo completado y obtiene feedback del Product Owner y otros stakeholders.
- **Sprint Retrospective:** Es una reunión al final del Sprint donde el equipo reflexiona sobre lo que fue bien, lo que no fue bien y cómo mejorar en el próximo Sprint.
- **Product Backlog:** Es una lista ordenada de todas las características, funciones y mejoras que se desean en el producto.
- **Sprint Backlog:** Es un subconjunto del Product Backlog que representa el trabajo que el equipo se compromete a completar durante un Sprint.

**Beneficios de utilizar Scrum**

- **Mayor flexibilidad:** Scrum permite adaptarse a los cambios de forma rápida y eficientePrincipio del formulario.
- Final del formulario
- **Mayor satisfacción del cliente:** Al involucrar al cliente en el proceso de desarrollo, se asegura que el producto cumpla con sus necesidades.
- **Mayor productividad del equipo:** Scrum fomenta la colaboración y la autoorganización del equipo.

**Capítulo 3: Análisis del sistema**

En esta parte el objetivo es identificar los objetivos que deben alcanzarse para el desarrollo del sistema. Para ello, usando la metodología SCRUM usemos las historias de usuarios, las cuales representaran las necesidades que las funcionalidades de la aplicación deben satisfacer, garantizando así el cumplimiento de las expectativos y objetivos del cliente.

El proceso de recopilación de información sobre las necesidades se llevar a cabo por el el cliente, product owner y el scrum master junto al equipo de desarrollo. Con la metodología SCRUM el proceso se enfocara en que sea iterativo y en constante evolución, permitiendo una adaptación continua de los requisitos del cliente de la manera mas eficiente posible.

**Definición**

Para poder definir un sistema y extraer la información necesaria que usaremos para guiarnos en el desarrollo de la aplicación, se hará una reunión entre todos los interesados en el proyecto donde elcliente compartira su visión de la aplicación móvil, incluyendo las necesidades que debe satisfacer y las funcionalidades que desea que tenga esta app.

Los miembros del equipo técnico también contribuyen con sus ideas para enriquecer la definición final del sistema. Con toda la información recopilada, el Product Owner —la persona que representa la voz del cliente— redacta las historias de usuario, que son descripciones formales de las funcionalidades requeridas. A partir de estas historias, se generan las tareas necesarias para implementarlas, se estima el esfuerzo requerido y se asignan prioridades. Esto resulta en la creación del Product Backlog, que servirá como base para el desarrollo del proyecto.

Es importante destacar que, dado el enfoque ágil del proyecto, la definición inicial del sistema puede cambiar a lo largo del desarrollo.

Entre cada Sprint, se realizarán reuniones para revisar y ajustar las historias de usuario y las tareas, lo que permite incluir, modificar o eliminar elementos según sea necesario. Por lo tanto, el análisis presentado en este capítulo es solo la base inicial, y en los próximos capítulos se abordarán los análisis realizados en las reuniones de cada Sprint.

**Historias de Usuario**

| **ID** | **Nombre** | **Prioridad** | **Riesgo** | **Descripción** | **Validación** |
| --- | --- | --- | --- | --- | --- |
| **HU-01** | Implementar buscador en el sistema | Alta | Medio | Como usuario del sistema, quiero un buscador funcional para poder encontrar rápidamente medicamentos y personas registradas. | El buscador debe permitir filtrar correctamente los registros y mostrar los resultados relevantes. |
| **HU-02** | Registrar personas en el sistema | Alta | Bajo | Como administrador, quiero poder registrar nuevas personas en el sistema para gestionar adecuadamente su información. | Debe ser posible registrar personas sin errores, y sus datos deben almacenarse correctamente en la base de datos. |
| **HU-03** | Mejorar el dashboard y usar hooks | Media | Medio | Como desarrollador, quiero mejorar la estructura del dashboard y usar hooks para optimizar el rendimiento y la reutilización de código. | El dashboard debe mostrar datos dinámicos y mejorar la experiencia del usuario mediante componentes reutilizables. |
| **HU-04** | Implementar login y logout funcional | Alta | Medio | Como usuario, quiero poder iniciar y cerrar sesión correctamente para acceder y salir del sistema de manera segura. | El login y logout deben funcionar sin errores, permitiendo el acceso solo a usuarios autenticados. |
| **HU-05** | Crear y mejorar componentes del menú y login | Media | Bajo | Como desarrollador, quiero tener componentes de menú y login funcionales para estructurar mejor la aplicación. | Los componentes deben integrarse correctamente y permitir la navegación fluida en la aplicación. |
| **HU-06** | Crear y mejorar controladores de usuario | Alta | Medio | Como administrador del sistema, necesito controladores eficientes para gestionar usuarios, personas y empleados correctamente. | Los controladores deben manejar correctamente las solicitudes, validaciones y respuestas esperadas. |

**Tareas Técnicas**

**HU-01: Implementar buscador en el sistema**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-01-T01** | Crear formulario de búsqueda en UI | Diseñar e implementar la interfaz del buscador en el frontend. | Desarrollador React |
| **HU-01-T02** | Implementar lógica en backend | Modificar los controladores para permitir búsquedas en la base de datos. | Desarrollador Laravel |
| **HU-01-T03** | Pruebas de funcionalidad | Validar que el buscador muestra los resultados correctamente. | Tester |

**HU-02: Registrar personas en el sistema**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-02-T01** | Crear formulario de registro | Diseñar y desarrollar el formulario para agregar nuevas personas. | Desarrollador React |
| **HU-02-T02** | Implementar API para el registro | Crear endpoints en Laravel para almacenar y validar datos de personas. | Desarrollador Laravel |
| **HU-02-T03** | Validar datos ingresados | Implementar validaciones en el frontend y backend para evitar datos incorrectos. | QA  |

**HU-03: Mejorar el dashboard y usar hooks**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-03-T01** | Refactorizar dashboard | Optimizar código y mejorar estructura del dashboard. | Desarrollador React |
| **HU-03-T02** | Implementar hook usePetitionGet | Crear y usar el hook para mejorar las peticiones GET en React. | Desarrollador React |
| **HU-03-T03** | Pruebas de rendimiento | Evaluar y optimizar el rendimiento del dashboard. | QA  |

**HU-04: Implementar login y logout funcional**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-04-T01** | Crear formulario de login | Implementar el formulario y validaciones en React. | Desarrollador React |
| **HU-04-T02** | Implementar autenticación | Configurar Laravel Sanctum o JWT para la autenticación. | Desarrollador Laravel |
| **HU-04-T03** | Implementar función logout | Permitir cerrar sesión correctamente limpiando tokens y sesiones. | Desarrollador React/Laravel |

**HU-05: Crear y mejorar componentes del menú y login**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-05-T01** | Crear componente de menú | Implementar un menú reutilizable con rutas dinámicas. | Desarrollador React |
| **HU-05-T02** | Mejorar estilos del login | Aplicar mejores prácticas de diseño en el formulario de inicio de sesión. | Desarrollador React |
| **HU-05-T03** | Integrar menú con autenticación | Hacer que el menú cambie dinámicamente según el estado de autenticación. | Desarrollador React |

**HU-06: Crear y mejorar controladores de usuario**

| **ID** | **Tarea Técnica** | **Descripción** | **Responsable** |
| --- | --- | --- | --- |
| **HU-06-T01** | Crear controlador de usuario | Desarrollar un controlador en Laravel para manejar usuarios. | Desarrollador Laravel |
| **HU-06-T02** | Crear controlador de persona | Implementar lógica para gestionar datos de personas. | Desarrollador Laravel |
| **HU-06-T03** | Crear controlador de empleado | Agregar funcionalidad para administrar empleados en el sistema. | Desarrollador Laravel |

**Capítulo 4: Desarrollo del sistema**

En este capítulo se documentará el desarrollo del sistema de gestión de tareas, desde la finalización del análisis hasta la implementación de las funcionalidades principales. El proceso de desarrollo se ha dividido en secciones que detallan la selección de tecnologías, el diseño del sistema y la implementación de sus componentes.

**4.1. Visión General**

Para el desarrollo del sistema de gestión de tareas se seleccionaron las siguientes herramientas y tecnologías:

- **Android Studio**: IDE utilizado para el desarrollo de la aplicación móvil.
- **Java**: Lenguaje de programación principal para el desarrollo de la lógica de la aplicación.
- **SQLite**: Sistema de gestión de bases de datos utilizado para almacenar las tareas y sus estados.
- **XML**: Lenguaje utilizado para diseñar la interfaz de usuario.

La elección de estas tecnologías está basada en su compatibilidad, accesibilidad y adecuación para el desarrollo de aplicaciones nativas para Android. Esto garantiza un rendimiento óptimo, una fácil integración y una experiencia de usuario fluida.

**4.2. Estructura del Sistema**

El sistema de gestión de tareas no sigue una arquitectura por capas. En su lugar, se optó por un diseño más directo, integrando lógica de negocio, interfaz de usuario y operaciones de base de datos en una estructura sencilla que facilita el desarrollo rápido y la iteración.

- **Módulo de Base de Datos**: Gestiona la conexión con SQLite para realizar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de las tareas.
- **Módulo de Interfaz de Usuario**: Contiene las vistas de la aplicación, como la pantalla principal, la pantalla de creación de tareas y la de configuración.
- **Módulo de Lógica de Negocio**: Contiene la implementación de las funcionalidades, como la validación de datos y la gestión de estados de las tareas.

**4.3. Proceso de Desarrollo**

El desarrollo del sistema se realizará en Sprints, siguiendo la metodología Scrum. Cada Sprint tendrá una duración de dos semanas y se centrará en el desarrollo de características específicas definidas en las historias de usuario. Al final de cada Sprint, se realizará una revisión para evaluar el progreso y ajustar el enfoque según sea necesario Android.

**Sprint Backlog**

**Sprint 0: Planificación y Preparación del Proyecto**

Este Sprint 0 asegura que el proyecto comience con una base sólida y organizada, minimizando futuros retrasos debido a problemas técnicos o malentendidos del alcance.

| **ID** | **Tarea** | **Descripción** | **Esfuerzo Estimado (puntos)** |
| --- | --- | --- | --- |
| **T1** | Definir el alcance y objetivos del proyecto | Reunión inicial para establecer el alcance del sistema de gestión de inventarios y sus objetivos. | 5   |
| **T2** | Configuración del entorno de desarrollo | Instalar y configurar las herramientas necesarias (Visual Studio, SQL Server, Git). | 5   |
| **T3** | Definir arquitectura del sistema | Diseñar la arquitectura siguiendo la estructura en capas y definir las tecnologías a utilizar (.NET 8, ADO.NET, SQL Server). | 8   |
| **T4** | Crear repositorio y pipeline CI/CD | Configurar repositorio en GitHub y pipeline para pruebas y despliegues automáticos. | 8   |
| **T5** | Establecer la base de datos inicial | Crear y configurar la base de datos en SQL Server con las tablas principales. | 8   |
| **T6** | Planificación del Product Backlog | Revisar y priorizar las historias de usuario para los primeros sprints. | 5   |
| **T7** | Definir el equipo de trabajo y roles | Asignar roles dentro del equipo (Scrum Master, Product Owner, desarrolladores, testers). | 3   |
| **T8** | Planificar el Sprint 1 | Descomponer tareas para el Sprint 1 y estimar esfuerzos. | 5   |
| **T9** | Definir métricas y herramientas de seguimiento | Seleccionar herramientas para gestionar tareas (Jira, Trello). | 3   |
| **T10** | Preparar el entorno de pruebas | Configurar un entorno de pruebas para validar funcionalidades antes de producción. | 5   |

**Sprint 1: Configuración Básica y Gestión de Usuarios**

| **ID** | **Historia de Usuario / Requerimiento** | **Prioridad** | **Esfuerzo Estimado (puntos)** |
| --- | --- | --- | --- |
| **HU01** | Crear la base de datos | Alta | 8   |
| **HU02** | Implementar sistema de autenticación (login y logout) | Alta | 13  |
| **HU03** | Crear un módulo de gestión de usuarios | Alta | 8   |
| **HU04** | Definir permisos y roles de usuario | Alta | 13  |
| **HU09** | Permitir a los usuarios visualizar productos en stock | Alta | 8   |

**Sprint 2: Gestión de Inventarios y Notificaciones**

| **ID** | **Historia de Usuario / Requerimiento** | **Prioridad** | **Esfuerzo Estimado (puntos)** |
| --- | --- | --- | --- |
| **HU05** | Registrar entrada y salida de productos | Alta | 13  |
| **HU10** | Permitir a los usuarios actualizar información de productos | Alta | 8   |
| **HU06** | Visualizar estadísticas de stock en tiempo real | Alta | 8   |
| **HU13** | Implementar notificaciones para inventarios bajos | Alta | 8   |
| **HU14** | Permitir eliminar o editar productos | Alta | 8   |

**Sprint 3: Reportes y Gestión Avanzada**

| **ID** | **Historia de Usuario / Requerimiento** | **Prioridad** | **Esfuerzo Estimado (puntos)** |
| --- | --- | --- | --- |
| **HU07** | Listar y visualizar diferentes almacenes de stock | Media | 5   |
| **HU08** | Permitir a los usuarios acceder a su perfil | Media | 8   |
| **HU11** | Generar reportes de productos vendidos y disponibles | Media | 8   |
| **HU12** | Configurar ajustes del perfil y preferencias | Media | 8   |