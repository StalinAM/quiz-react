export const questions = {
  Unidad_1: [
    {
      type: 'true-false',
      question:
        'Las tecnologías emergentes están caracterizadas por estar en una fase temprana de desarrollo y por tener el potencial de transformar sectores como la salud, la educación, la industria y la comunicación.',
      answer: 'Verdadero'
    },
    {
      type: 'matching',
      question:
        'Relaciona cada generación de telefonía móvil con su característica principal:',
      pairs: [
        { left: '1G', answer: 'Telefonía analógica y roaming' },
        { left: '0G', answer: 'Handie Talkie (50 kg)' },
        { left: '3G', answer: 'Videollamadas y tiendas de apps' },
        { left: '2G', answer: 'SMS y WAP' }
      ]
    },
    {
      type: 'matching',
      question: 'Empareja cada término con su definición correspondiente:',
      pairs: [
        {
          left: 'Permitió navegar en internet y el uso de correos electrónicos.',
          answer: 'Tercera generación (3G)'
        },
        {
          left: 'Redes que mejoran la interconectividad para IA y realidad aumentada.',
          answer: 'Quinta generación (5G)'
        },
        {
          left: 'Lanzamiento del Motorola DynaTAC y enfoque en la comunicación de voz.',
          answer: 'Primera generación (1G)'
        },
        {
          left: 'Mejor calidad de llamada y envíos de SMS mediante tecnología GSM.',
          answer: 'Segunda generación (2G)'
        },
        {
          left: 'Dominio de iOS y Android con conexión a internet de alta velocidad.',
          answer: 'Cuarta generación (4G)'
        }
      ]
    },
    {
      type: 'matching',
      question:
        'Relacione cada tecnología emergente con su aplicación, desafío o principio fundamental:',
      pairs: [
        {
          left: 'Memristores y Computación Neuromórfica',
          answer:
            'Sistemas electrónicos que emulan la plasticidad sináptica del cerebro humano, permitiendo hardware capaz de aprender y adaptarse en tiempo real.'
        },
        {
          left: 'Computación Cuántica',
          answer:
            'Tecnología que explota la superposición y el entrelazamiento cuántico para resolver problemas intratables en sistemas clásicos.'
        },
        {
          left: 'Bioinformática Avanzada',
          answer:
            'Integración de machine learning con datos genómicos a gran escala para diseñar terapias personalizadas contra el cáncer.'
        },
        {
          left: 'Redes 6G y THz',
          answer:
            'Comunicación inalámbrica con latencia menor a 1 ms y uso de bandas de terahercios (THz), habilitando hologramas táctiles.'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Qué características definen a los dispositivos móviles modernos (4G/5G)?',
      options: [
        'Uso exclusivo de tarjetas SIM físicas',
        'Pantallas táctiles',
        'Sensores como GPS y huella dactilar',
        'Carga rápida e inalámbrica'
      ],
      answers: [
        'Pantallas táctiles',
        'Sensores como GPS y huella dactilar',
        'Carga rápida e inalámbrica'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿En qué generación de telefonía móvil aparecieron los primeros sistemas operativos móviles implementados en dispositivos comerciales?',
      options: ['3G', '2G', '1G', '4G', '0G'],
      answer: '2G'
    },
    {
      type: 'matching',
      question:
        'Empareja cada framework de desarrollo móvil con el lenguaje de programación principal que utiliza:',
      pairs: [
        { left: 'Android Studio', answer: 'Kotlin' },
        { left: 'Xamarin', answer: 'C#' },
        { left: 'React Native', answer: 'JavaScript' },
        { left: 'SwiftUI', answer: 'Swift' },
        { left: 'Flutter', answer: 'Dart' }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes eventos fueron hitos importantes en la historia de los dispositivos móviles?',
      options: [
        'Samsung lanza su primer smartphone con tecnología 4G en 2008.',
        'Nokia presenta el modelo 3310 en 1985, popular por su resistencia.',
        'Apple lanza el primer iPhone en 2007, cambiando el mercado de teléfonos inteligentes.',
        'Motorola lanza el primer teléfono móvil portátil, el DynaTAC 8000X, en 1983.',
        'IBM presenta el primer dispositivo con pantalla táctil, el Simon, en 1992.'
      ],
      answers: [
        'Motorola lanza el primer teléfono móvil portátil, el DynaTAC 8000X, en 1983.',
        'Apple lanza el primer iPhone en 2007, cambiando el mercado de teléfonos inteligentes.',
        'IBM presenta el primer dispositivo con pantalla táctil, el Simon, en 1992.'
      ]
    },
    {
      type: 'complete',
      question:
        '______ es uno de los primeros sistemas operativos para dispositivos móviles.',
      answer: 'Symbian'
    },
    {
      type: 'true-false',
      question:
        'La generación 2G utilizó tecnologías de transmisión basadas en telefonía digital.',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes frameworks utiliza el lenguaje Dart para el desarrollo de aplicaciones?',
      options: ['Ionic', 'Android SDK', 'React Native', 'Flutter'],
      answer: 'Flutter'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál es el sistema operativo más popular en el mercado actual?',
      options: ['BlackBerryOS', 'HarmonyOS', 'Android', 'iOS', 'Xiaomi MIUI'],
      answer: 'Android'
    },
    {
      type: 'true-false',
      question:
        'Las aplicaciones híbridas combinan tecnologías web como HTML y CSS.',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes elementos pertenecen a las tecnologías emergentes?',
      options: [
        'Telemedicina',
        'Drone Delivery',
        'Computación en la Nube',
        'Blockchain',
        'Smart Cities',
        'Realidad Aumentada'
      ],
      answers: ['Telemedicina', 'Blockchain', 'Drone Delivery', 'Smart Cities']
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tipo de pantalla se usa comúnmente en los dispositivos móviles?',
      options: ['Pantalla táctil', 'OLED', 'LCD', 'AMOLED'],
      answer: 'LCD'
    },
    {
      type: 'complete',
      question:
        'La ______ es el elemento de hardware permite la comunicación inalámbrica en redes móviles y Wi-Fi.',
      answer: 'antena'
    },
    {
      type: 'multiple-select',
      question:
        'Selecciona las tecnologías que facilitan la creación de aplicaciones o soluciones sin necesidad de conocimientos de programación avanzados.',
      options: [
        'No Code',
        'Trabajo híbrido',
        'Plataformas cloud de la industria',
        'IA Generativa',
        'Control unificado',
        'Aplicaciones inteligentes'
      ],
      answers: ['IA Generativa', 'No Code', 'Aplicaciones inteligentes']
    },
    {
      type: 'complete',
      question:
        'Flutter utiliza su propio motor gráfico llamado ______ para renderizar la interfaz.',
      answer: 'skia'
    },
    {
      type: 'matching',
      question:
        'Relaciona cada framework con una de sus características principales:',
      pairs: [
        { left: 'Flutter', answer: 'Usa Dart y todo es un widget.' },
        {
          left: 'Ionic',
          answer: 'Usa tecnologías Web como HTML, CSS, JS y WebView.'
        },
        {
          left: 'Android SDK',
          answer: 'Usa Kotlin o Java con acceso total a las APIs de Android.'
        },
        {
          left: 'React Native',
          answer: 'Usa JavaScript con JSX y componentes nativos del sistema.'
        }
      ]
    },
    {
      type: 'complete',
      question:
        'El sistema operativo es un software fundamental. Actúa como un intermediario entre el hardware y el ______.',
      answer: 'usuario'
    },
    {
      type: 'true-false',
      question:
        '¿Ionic usa componentes nativos del sistema operativo para lograr mejor rendimiento?',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'Android tiene una cuota de mercado mayor al 80% en dispositivos móviles a nivel global.',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question: '¿Cuál fue el primer dispositivo móvil?',
      options: [
        'Samsung SCH-100',
        'Nokia 1011',
        'Motorola DynaTAC 8000X',
        'Apple iPhone',
        'IBM Simon'
      ],
      answer: 'Motorola DynaTAC 8000X'
    },
    {
      type: 'open-text',
      question:
        '¿Qué tipo de procesador es comúnmente utilizado en dispositivos móviles debido a su eficiencia energética?',
      answer: 'ARM'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes tecnologías emergentes se centra en mejorar la interacción del cliente con las marcas?',
      options: [
        'Nuevo horizonte en la experiencia del cliente',
        'Trabajo híbrido',
        'Control unificado',
        'Conectividad a Internet basada en satélites'
      ],
      answer: 'Nuevo horizonte en la experiencia del cliente'
    },
    {
      type: 'open-text',
      question:
        '¿Qué característica hace que una laptop no sea un dispositivo móvil pero un teléfono inteligente sí?',
      answer: 'Portabilidad'
    },
    {
      type: 'open-text',
      question:
        '¿Qué tipo de pantalla ofrece mejores contrastes y negros puros?',
      answer: 'OLED'
    },
    {
      type: 'multiple-select',
      question:
        'Marque cuáles de las siguientes opciones son tendencias tecnológicas:',
      options: [
        'Inteligencia Artificial',
        'Computación Cuántica',
        'Redes 6G',
        'Realidad Extendida',
        'Trabajo Remoto',
        'Internet de las Cosas'
      ],
      answers: [
        'Inteligencia Artificial',
        'Internet de las Cosas',
        'Trabajo Remoto'
      ]
    },
    {
      type: 'open-text',
      question: '¿Qué significan las siglas CSS?',
      answer: 'Cascading Style Sheets'
    },
    {
      type: 'matching',
      question: 'Empareja cada tecnología emergente con su aplicación:',
      pairs: [
        {
          left: 'Gestiona riesgos y confianza en aplicaciones de inteligencia artificial',
          answer: 'AI TRISM'
        },
        {
          left: 'Crea contenido nuevo basado en patrones',
          answer: 'IA Generativa'
        },
        {
          left: 'Reduce el impacto ambiental en la tecnología',
          answer: 'Tecnología Sostenible'
        },
        {
          left: 'Promueve el desarrollo de aplicaciones sin programación',
          answer: 'No Code'
        }
      ]
    },
    {
      type: 'true-false',
      question: '¿La tecnología LTE pertenece a la Generación 2G?',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes opciones corresponde a una tecnología emergente que permite la interconexión de dispositivos a través de internet sin intervención humana directa?',
      options: [
        'Internet de las Cosas (IoT)',
        'Impresión 3D',
        'Realidad Aumentada',
        'Inteligencia Artificial'
      ],
      answer: 'Internet de las Cosas (IoT)'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes frameworks permiten ver cambios en tiempo real sin reiniciar la app? (Selecciona todas las que correspondan)',
      options: ['React Native', 'Android SDK', 'Ionic', 'Flutter'],
      answers: ['Flutter', 'React Native']
    },
    // true-false
    {
      type: 'true-false',
      question:
        '¿Flutter utiliza el lenguaje Kotlin para crear aplicaciones móviles nativas?',
      answer: 'Falso'
    },
    // complete
    {
      type: 'complete',
      question:
        'Android Studio es un ....................... de código abierto muy utilizado para el desarrollo de aplicaciones móviles',
      answer: 'IDE'
    },
    // open-text
    {
      type: 'open-text',
      question:
        '¿Cuál fue el estándar de tecnología que permitió enviar mensajes SMS en los teléfonos móviles?',
      answer: 'GSM'
    },
    // multiple-select
    {
      type: 'multiple-select',
      question:
        'Seleccione los sistemas operativos descontinuados para dispositivos móviles:',
      options: [
        'Firefox OS',
        'Android',
        'Symbian OS',
        'iOS',
        'Windows 10 Mobile'
      ],
      answers: ['Windows 10 Mobile', 'Symbian OS', 'Firefox OS']
    },

    // true-false
    {
      type: 'true-false',
      question:
        'La conectividad a internet basada en satélites es una tendencia que busca mejorar la cobertura en áreas remotas y desatendidas.',
      answer: 'Verdadero'
    },

    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes empresas fue una de las pioneras en la comunicación móvil?',
      options: ['Nokia', 'Motorola', 'Sony', 'Samsung', 'Apple'],
      answer: 'Motorola'
    },
    // matching
    {
      type: 'matching',
      question: 'Empareja los siguientes términos con la definición correcta:',
      pairs: [
        {
          left: 'Sistema operativo móvil',
          answer:
            'Plataforma esencial que asegura el funcionamiento del dispositivo y sus programas.'
        },
        {
          left: 'Batería',
          answer:
            'Componente que almacena energía y permite que el dispositivo funcione sin cables.'
        },
        {
          left: 'Dispositivo móvil',
          answer:
            'Herramienta portátil que combina características tecnológicas avanzadas.'
        },
        {
          left: 'Hardware',
          answer:
            'Elementos físicos y tangibles que soportan las funciones del sistema.'
        },
        {
          left: 'Software',
          answer:
            'Conjunto de instrucciones y datos que interactúan con el equipo físico.'
        }
      ]
    },
    // multiple-select
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes frameworks permiten ver cambios en tiempo real sin reiniciar la app?',
      options: ['React Native', 'Android SDK', 'Ionic', 'Flutter'],
      answers: ['Flutter', 'React Native']
    },

    // multiple-select
    {
      type: 'multiple-select',
      question: 'Seleccione componentes del hardware de un dispositivo móvil:',
      options: [
        'Pantalla',
        'Interfaz de usuario (UI)',
        'Memoria',
        'Sensores',
        'Sistema Operativo'
      ],
      answers: ['Pantalla', 'Sensores', 'Memoria']
    },
    // true-false
    {
      type: 'true-false',
      question:
        '¿Es cierto que al desarrollar una aplicación en un IDE, ya sea para Android o iOS, se puede desplegar sin problemas en ambos sistemas operativos sin necesidad de realizar modificaciones adicionales?',
      answer: 'Falso'
    },

    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes frameworks utiliza el lenguaje Dart para el desarrollo de aplicaciones?',
      options: ['React Native', 'Flutter', 'Ionic', 'Android SDK'],
      answer: 'Flutter'
    },
    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Qué tipo de pantalla ofrece mejores contrastes y negros puros?',
      options: ['OLED', 'LCD', 'IPS', 'TFT'],
      answer: 'OLED'
    }
  ],

  Unidad_2: [
    {
      type: 'true-false',
      question:
        '¿El uso de patrones de diseño consistentes mejora la usabilidad de una aplicación móvil?',
      answer: 'Verdadero'
    },
    {
      type: 'open-text',
      question:
        'Término que describe el diseño de interfaces enfocadas en la experiencia del usuario:',
      answer: 'UX'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes componentes pertenecen a la categoría de componentes avanzados interactivos? (Elija 2)',
      options: [
        'A. Breadcrumbs',
        'B. Drag & Drop',
        'C. Toasts',
        'D. Tabla',
        'E. Button'
      ],
      answers: ['Drag & Drop', 'Tabla']
    },
    {
      type: 'matching',
      question:
        'Empareja cada componente de navegación con su descripción o función:',
      pairs: [
        {
          left: 'Muestra un menú lateral para navegar entre secciones.',
          answer: 'Drawer Navigation'
        },
        {
          left: 'Organiza las vistas en una pila en SwiftUI.',
          answer: 'NavigationLink'
        },
        {
          left: 'Define destinos y conexiones en apps Android.',
          answer: 'NavGraph'
        },
        {
          left: 'Presenta opciones en la parte inferior de la pantalla.',
          answer: 'Bottom Navigation'
        },
        {
          left: 'Gestiona transiciones entre vistas en Android.',
          answer: 'NavController'
        }
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Qué clase de Android se utiliza para representar una unidad de interacción de usuario?',
      options: [
        'a. BroadcastReceiver',
        'b. ContentProvider',
        'c. Fragment',
        'd. Service',
        'e. Activity'
      ],
      answer: 'Activity'
    },
    {
      type: 'matching',
      question: 'Relaciona cada principio de diseño con su descripción:',
      pairs: [
        {
          left: 'Consistencia',
          answer: 'Evitar distracciones innecesarias en la interfaz'
        },
        {
          left: 'Jerarquía visual',
          answer: 'Destacar elementos importantes para dirigir la atención'
        },
        {
          left: 'Simplicidad',
          answer: 'Mantener elementos y comportamientos uniformes'
        },
        {
          left: 'Accesibilidad',
          answer:
            'Garantizar que la aplicación funcione para todos los usuarios'
        },
        {
          left: 'Retroalimentación',
          answer: 'Informar al usuario sobre los resultados de sus acciones'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles son ejemplos de componentes básicos en el desarrollo de Apps? (Elija 3)',
      options: [
        'A. Button',
        'B. TextField',
        'C. AlertDialog',
        'D. Menu',
        'E. RecyclerView',
        'F. CheckBox',
        'G. Snackbar'
      ],
      answers: ['Button', 'TextField', 'CheckBox']
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes principios de diseño asegura que una aplicación sea susceptible de mejora contínua?',
      options: [
        'a. Consistencia',
        'b. Usabilidad heurística',
        'c. Diseño responsivo',
        'd. Facilidad de uso',
        'e. Atractivo visual',
        'f. Retroalimentación'
      ],
      answer: 'Retroalimentación'
    },
    {
      type: 'true-false',
      question:
        '¿El componente Navigator permite manejar rutas y pantallas en Flutter?',
      answer: 'Verdadero'
    },
    {
      type: 'true-false',
      question:
        '¿Un diseño minimalista siempre es más accesible para los usuarios que otros estilos de diseño?',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        '¿El Breadcrumb es un componente de entrada utilizado para escribir texto?',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál es el propósito del componente WorkManager en una App Android?',
      options: [
        'a. Controlar la navegación entre pantallas.',
        'b. Administrar eventos del ciclo de vida de la aplicación.',
        'c. Coordinar tareas recurrentes y en segundo plano.',
        'd. Gestionar gráficos complejos.',
        'e. Manejar las tareas en primer plano.',
        'f. Proporcionar almacenamiento en caché.'
      ],
      answer: 'Coordinar tareas recurrentes y en segundo plano.'
    },
    {
      type: 'open-text',
      question:
        '¿Cómo se llama el controlador que gestiona las transiciones en Android Jetpack Navigation?',
      answer: 'NavController'
    },
    {
      type: 'matching',
      question: 'Relaciona los componentes con su categoría correspondiente:',
      pairs: [
        { left: 'Progress Bar', answer: 'Componentes de retroalimentación' },
        { left: 'Tabs', answer: 'Componentes de navegación' },
        { left: 'Label', answer: 'Componentes de visualización' },
        { left: 'Dropdown', answer: 'Componentes de entrada' },
        { left: 'Canvas', answer: 'Componente para medios' }
      ]
    },
    {
      type: 'open-text',
      question:
        '¿Cuál es el nombre del método que se llama inmediatamente después de onPause() si la actividad deja de ser visible?',
      answer: 'onStop'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes características de las metodologías de desarrollo de aplicaciones móviles son las más importantes? (Elija 3)',
      options: [
        'A. Uso de fases secuenciales y estructuradas',
        'B. Documentación del proceso',
        'C. Flexibilidad para adaptarse a cambios',
        'D. Enfoque en objetivos informales',
        'E. Rechazo a la retroalimentación de los clientes'
      ],
      answers: [
        'Uso de fases secuenciales y estructuradas',
        'Flexibilidad para adaptarse a cambios',
        'Documentación del proceso'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes componentes se utiliza para capturar texto ingresado por el usuario en una aplicación móvil?',
      options: [
        'a. Button',
        'b. Spinner',
        'c. ListView',
        'd. ImageView',
        'e. ProgressBar',
        'f. TextField'
      ],
      answer: 'TextField'
    },
    {
      type: 'true-false',
      question:
        'Un TextView le permite al usuario modificar directamente el texto que se muestra en la pantalla?',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál es el principal objetivo del diseño responsivo en una aplicación móvil?',
      options: [
        'a. Crear experiencias personalizadas para cada usuario.',
        'b. Aumentar la accesibilidad para usuarios con discapacidades.',
        'c. Optimizar animaciones.',
        'd. Garantizar que la interfaz se adapte a diferentes tamaños de pantalla',
        'e. Simplificar el código del backend.',
        'f. Mejorar la velocidad de carga de la aplicación.'
      ],
      answer:
        'Garantizar que la interfaz se adapte a diferentes tamaños de pantalla'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes componentes permite integrar flujos de datos reactivos en aplicaciones móviles utilizando Kotlin?',
      options: [
        'a. RecyclerView',
        'b. LiveData',
        'c. ConstraintLayout',
        'd. Room Database',
        'e. Navigation Component',
        'f. ViewPager'
      ],
      answer: 'LiveData'
    },
    {
      type: 'multiple-select',
      question:
        '¿Qué características son típicas de un componente de navegación? (Elija 3)',
      options: [
        'Facilidad de manejo',
        'Gestión de destinos',
        'Compatibilidad con paso de datos',
        'Manejo de la pila de navegación',
        'Implementación de modelos relacionales',
        'Integración con la interfaz'
      ],
      answers: [
        'Gestión de destinos',
        'Compatibilidad con paso de datos',
        'Manejo de la pila de navegación'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál es el propósito principal del componente RecyclerView en Android?',
      options: [
        'Gestionar la navegación',
        'Mostrar imágenes estáticas',
        'Proporcionar una vista en formato de lista con mejor rendimiento',
        'Manejar formularios'
      ],
      answer:
        'Proporcionar una vista en formato de lista con mejor rendimiento.'
    },
    {
      type: 'open-text',
      question: 'El componente ______ sirve para mostrar imágenes en Android.',
      answer: 'ImageView'
    },
    {
      type: 'true-false',
      question:
        'El método onCreate() se utiliza para inicializar componentes esenciales al crear una actividad?',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        '¿Seleccione 3 elementos clave para un diseño de interfaz de usuario accesible?',
      options: [
        'Evitar texto en imágenes',
        'Contraste de colores adecuado',
        'Elementos táctiles grandes',
        'Animaciones complejas',
        'Etiquetas semánticas claras',
        'Diseño minimalista'
      ],
      answers: [
        'Contraste de colores adecuado',
        'Etiquetas semánticas claras',
        'Elementos táctiles grandes'
      ]
    },
    {
      type: 'open-text',
      question:
        'El componente utilizado para crear listas dinámicas con scroll optimizado en Android es:',
      answer: 'RecyclerView'
    },
    {
      type: 'open-text',
      question:
        '¿Cómo se llama el componente que permite seleccionar un valor dentro de un rango?',
      answer: 'Slider'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes características es clave en un componente de navegación?',
      options: [
        'Gestión de memoria',
        'Definición de rutas',
        'Personalización de colores',
        'Manejo de eventos táctiles',
        'Control de rendimiento gráfico'
      ],
      answer: 'Definición de rutas'
    },
    // multiple-select
    {
      type: 'multiple-select',
      question:
        'Elija 3 características clave del Navigation Component en Android:',
      options: [
        'Mejora el rendimiento gráfico de la aplicación',
        'Soporta navegaciones declarativas usando un archivo XML',
        'Proporciona un controlador para el botón de retroceso',
        'Simplifica la navegación en la app',
        'Especifica permisos dinámicos en la aplicación'
      ],
      answers: [
        'Soporta navegaciones declarativas usando un archivo XML',
        'Proporciona un controlador para el botón de retroceso',
        'Simplifica la navegación en la app'
      ]
    },

    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes características es clave en un componente de navegación?',
      options: [
        'Definición de rutas',
        'Personalización de colores',
        'Manejo de eventos táctiles',
        'Gestión de memoria'
      ],
      answer: 'Definición de rutas'
    },

    // matching
    {
      type: 'matching',
      question: 'Empareja cada término de diseño con su definición:',
      pairs: [
        {
          left: 'Experiencia general del usuario con el sistema',
          answer: 'UI'
        },
        {
          left: 'Boceto inicial de la estructura de la aplicación',
          answer: 'Prototipo'
        },
        {
          left: 'Conjunto de elementos gráficos que conforman la interfaz',
          answer: 'UX'
        },
        {
          left: 'Modelo funcional de una aplicación para probar la UX',
          answer: 'Prototipo interactivo'
        },
        {
          left: 'Ajuste automático de la interfaz a distintos dispositivos',
          answer: 'Diseño responsivo'
        }
      ]
    },
    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes componentes se utiliza para activar o desactivar una opción?',
      options: [
        'Switch/Toggle',
        'Radio Button',
        'Checkbox',
        'Progress Bar',
        'Dropdown'
      ],
      answer: 'Switch/Toggle'
    },
    // true-false
    {
      type: 'true-false',
      question:
        '¿El componente Data Binding permite vincular directamente datos a vistas sin necesidad de interactuar con el controlador?',
      answer: 'Verdadero'
    },
    // matching
    {
      type: 'matching',
      question: 'Empareja cada componente de Android con su función principal:',
      pairs: [
        {
          left: 'Activity',
          answer: 'Proveer datos entre diferentes aplicaciones.'
        },
        {
          left: 'Broadcast Receiver',
          answer: 'Responder a mensajes globales del sistema o de aplicaciones.'
        },
        {
          left: 'Content Provider',
          answer: 'Manejar la interfaz del usuario.'
        },
        {
          left: 'Intent',
          answer: 'Facilitar la comunicación entre componentes.'
        },
        { left: 'Service', answer: 'Ejecutar tareas en segundo plano.' }
      ]
    }
  ],
  Unidad_3: [
    {
      type: 'true-false',
      question:
        'El manejo de archivos permite a las aplicaciones interactuar con el sistema operativo del dispositivo.',
      answer: 'Falso'
    },
    {
      type: 'complete',
      question:
        'El almacenamiento ______ está dentro de la partición privada de la aplicación en el dispositivo.',
      answer: 'interno'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes características son aplicables a los servicios SOAP? (Marca todas las correctas)',
      options: [
        'a. Es más adecuado para sistemas con restricciones de recursos',
        'b. Es independiente del protocolo subyacente (puede usar HTTP, SMTP, etc.)',
        'c. Utiliza XML para la comunicación',
        'd. Es compatible con los estándares WS-* (como WS-Security)',
        'e. Tiene una estructura más ligera y flexible'
      ],
      answers: [
        'Utiliza XML para la comunicación',
        'Es compatible con los estándares WS- (como WS-Security)',
        'Es independiente del protocolo subyacente (puede usar HTTP, SMTP, etc.)'
      ]
    },
    {
      type: 'open-text',
      question:
        '¿Cuál es el protocolo más comúnmente utilizado por los servicios REST?',
      answer: 'HTTP'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes tipos de archivo almacenan datos de forma estructurada?',
      options: ['1. HTML', '2. XML', '3. PNG', '4. CSV', '5. JSON'],
      answers: ['JSON', 'CSV', 'XML']
    },
    {
      type: 'true-false',
      question:
        'REST es más adecuado que SOAP para sistemas con restricciones de recursos debido a su menor sobrecarga.',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál es la categoria más alta de tipo de persistencia en dispositivos móviles?',
      options: [
        '1. Persistencia en caché',
        '2. Persistencia en almacenamiento externo',
        '3. Persistencia en preferencias compartidas',
        '4. Persistencia en base de datos',
        '5. Persistencia en almacenamiento interno'
      ],
      answer: 'Persistencia en base de datos'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes formatos de datos es más comúnmente utilizado por los servicios REST para intercambiar información?',
      options: ['a. SOAP', 'b. JSON', 'c. CSV', 'd. XML', 'e. HTML'],
      answer: 'JSON'
    },
    {
      type: 'matching',
      question:
        'Relaciona el tipo de persistencia con su descripción correspondiente:',
      pairs: [
        {
          left: 'Bases de Datos',
          answer:
            'Permite gestionar información estructurada y realizar consultas complejas de manera eficiente.'
        },
        {
          left: 'Caché',
          answer:
            'Almacenamiento temporal de datos en una ubicación accesible para mejorar el rendimiento de una aplicación.'
        },
        {
          left: 'Almacenamiento interno',
          answer:
            'Guarda datos en un espacio seguro y accesible solo para la aplicación que lo creó.'
        },
        {
          left: 'Preferencias compartidas',
          answer:
            'Almacenar datos clave-valor pequeños, como configuraciones de usuario o estados simples.'
        },
        {
          left: 'Almacenamiento externo',
          answer:
            'Guarda datos en un espacio accesible fuera de la partición privada de la aplicación.'
        }
      ]
    },
    {
      type: 'true-false',
      question:
        '¿El formato JSON es más adecuado para almacenar grandes cantidades de datos complejos y jerárquicos que XML?',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'Las bases de datos móviles requieren siempre una conexión constante a Internet para funcionar correctamente.',
      answer: 'Falso'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes son ventajas del formato JSON frente al formato XML?',
      options: [
        'a. Utiliza etiquetas para estructurar los datos',
        'b. Es más fácil de leer y escribir para los humanos',
        'c. Requiere menos espacio al serializar datos',
        'd. Es compatible con la mayoría de los lenguajes de programación modernos',
        'e. Soporta datos jerárquicos y estructuras complejas'
      ],
      answers: [
        'Es más fácil de leer y escribir para los humanos',
        'Requiere menos espacio al serializar datos',
        'Es compatible con la mayoría de los lenguajes de programación modernos'
      ]
    },
    {
      type: 'complete',
      question:
        'Las bases de datos móviles son más ______ comparadas con las tradicionales.',
      answer: 'ligeras'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes opciones describe mejor una característica clave de las bases de datos móviles?',
      options: [
        'a. Están diseñadas para manejar grandes cantidades de datos transaccionales, sin necesidad de conectividad a Internet.',
        'b. Utilizan servidores dedicados exclusivamente para la sincronización de datos en tiempo real.',
        'c. Están optimizadas para almacenar datos en la nube y requieren una conexión constante a Internet.',
        'd. Son bases de datos de solo lectura que no permiten actualizaciones de datos por parte del usuario.',
        'e. Permiten almacenar y acceder a datos localmente en dispositivos móviles, a menudo con capacidades de sincronización cuando hay conexión.'
      ],
      answer:
        'Permiten almacenar y acceder a datos localmente en dispositivos móviles, a menudo con capacidades de sincronización cuando hay conexión.'
    },
    {
      type: 'complete',
      question:
        '¿Qué formato tiene un estándar robusto y bien definido, ideal para datos jerárquicos o que requieren etiquetas descriptivas?',
      answer: 'XML'
    },
    {
      type: 'matching',
      question: 'Relaciona cada base de datos con su característica principal:',
      pairs: [
        {
          left: 'Realm',
          answer:
            'Base de datos no relacional optimizada para grandes volúmenes de datos.'
        },
        {
          left: 'Couchbase Lite',
          answer:
            'Base de datos no relacional para sincronización en tiempo real entre dispositivos y servidores.'
        },
        {
          left: 'Firebase',
          answer:
            'Plataforma en la nube con sincronización automática en tiempo real.'
        },
        {
          left: 'SQLite',
          answer:
            'Base de datos relacional ligera para almacenamiento local en móviles.'
        },
        {
          left: 'Core Data',
          answer: 'Framework de Apple para persistencia de datos en iOS.'
        }
      ]
    },
    {
      type: 'matching',
      question:
        'Empareja cada característica con el formato al que pertenece (JSON o XML):',
      pairs: [
        {
          left: 'Puede incluir comentarios en los datos',
          answer: 'XML'
        },
        {
          left: 'Utiliza etiquetas para estructurar los datos',
          answer: 'XML'
        },
        {
          left: 'Generalmente ocupa menos espacio al serializar',
          answer: 'JSON'
        },
        {
          left: 'Está basado en una estructura de clave-valor',
          answer: 'JSON'
        },
        {
          left: 'Es más fácil de leer para los humanos',
          answer: 'JSON'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes características son comunes en las bases de datos móviles? (Selecciona 3 respuestas)',
      options: [
        'a. Están diseñadas principalmente para manejar grandes volúmenes de datos transaccionales en tiempo real.',
        'b. Requieren una conexión constante a Internet para funcionar correctamente.',
        'c. Pueden sincronizar datos entre el dispositivo móvil y un servidor remoto cuando hay conexión.',
        'd. Permiten almacenamiento local de datos en el dispositivo móvil.',
        'e. Son ligeras y están optimizadas para el rendimiento en dispositivos con recursos limitados.'
      ],
      answers: [
        'Permiten almacenamiento local de datos en el dispositivo móvil.',
        'Pueden sincronizar datos entre el dispositivo móvil y un servidor remoto cuando hay conexión.',
        'Son ligeras y están optimizadas para el rendimiento en dispositivos con recursos limitados.'
      ]
    },
    {
      type: 'matching',
      question:
        'Empareja los siguientes conceptos con el tipo de servicio al que pertenecen (REST o SOAP):',
      pairs: [
        {
          left: 'Compatible con WS-Security',
          answer: 'SOAP'
        },
        {
          left: 'Usa verbos HTTP como GET/POST',
          answer: 'REST'
        },
        {
          left: 'Basado en mensajes XML',
          answer: 'SOAP'
        },
        {
          left: 'Más ligero y rápido',
          answer: 'REST'
        },
        {
          left: 'Tiene mayor interoperabilidad',
          answer: 'SOAP'
        }
      ]
    },
    {
      type: 'single-choice',
      question: '¿Cuál es una característica principal del formato JSON?',
      options: [
        'a. Requiere un esquema para funcionar',
        'b. Está basado en una estructura de clave-valor',
        'c. Es más difícil de leer para los humanos que XML',
        'd. Utiliza etiquetas para definir los datos',
        'e. No puede representar datos jerárquicos'
      ],
      answer: 'Está basado en una estructura de clave-valor'
    },
    // true-false
    {
      type: 'true-false',
      question:
        'REST es más adecuado que SOAP para sistemas con restricciones de recursos debido a su menor sobrecarga.',
      answer: 'Verdadero'
    }
  ],

  Unidad_4: [
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes sensores permite detectar la orientación del dispositivo?',
      options: ['Sensor de proximidad', 'Acelerometro', 'Sensor de luz'],
      answer: 'Acelerómetro'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tipo de notificaciones permiten que el usuario interactúe directamente desde la barra de notificaciones sin abrir la aplicación?',
      options: [
        'Notificaciones push básicas',
        'Notificaciones locales',
        'Notificaciones interactivas',
        'Notificaciones silenciosas'
      ],
      answer: 'Notificaciones interactivas'
    },
    {
      type: 'matching',
      question:
        'Empareja cada tipo de notificación con su característica principal:',
      pairs: [
        {
          left: 'No muestra alertas visibles, pero realiza actualizaciones en segundo plano',
          answer: 'Notificación silenciosa'
        },
        {
          left: 'Generada dentro del dispositivo sin depender de servidores externos',
          answer: 'Notificación local'
        },
        {
          left: 'Permite realizar acciones rápidas directamente desde la notificación',
          answer: 'Notificación interactiva'
        },
        {
          left: 'Se entrega inmediatamente para informar de eventos urgentes',
          answer: 'Notificación en tiempo real'
        },
        {
          left: 'Requiere conexión a internet y permite enviar mensajes desde un servidor',
          answer: 'Notificación push'
        }
      ]
    },
    {
      type: 'complete',
      question:
        'El ______ mide la humedad del aire y se utiliza en aplicaciones meteorológicas y científicas.',
      answer: 'Higrómetro'
    },
    {
      type: 'true-false',
      question:
        '¿Un Fragment puede añadirse a una Activity tanto de forma estática en el XML, como de forma dinámica en tiempo de ejecución usando FragmentTransaction?',
      answer: 'Verdadero'
    },
    {
      type: 'matching',
      question: 'Une cada concepto con su definición:',
      pairs: [
        {
          left: 'Elemento componible que mantiene y gestiona su propio estado internamente.',
          answer: 'Compose con estado interno'
        },
        {
          left: 'Transfiere el estado a un componente externo que lo controla.',
          answer: 'Elevación de estado'
        },
        {
          left: 'Guarda el estado en un Bundle para restaurarlo en cambios de configuración.',
          answer: 'rememberSaveable'
        },
        {
          left: 'Elemento que no almacena estado, recibe valores y callbacks por parámetros.',
          answer: 'Compose sin estado (stateless)'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes afirmaciones sobre el estado en Jetpack Compose son correctas?',
      options: [
        'Compose recompone automáticamente cuando un State<T> cambia.',
        'Nunca puede sobrevivir a la recreación de una actividad.',
        'Se puede elevar para que el llamador controle el estado.',
        'Se utiliza solo dentro de una Activity.'
      ],
      answers: [
        'Se puede elevar para que el llamador controle el estado.',
        'Compose recompone automáticamente cuando un State<T> cambia.'
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes elementos se pueden personalizar en una notificación en Android?',
      options: [
        'Sonido',
        'Icono',
        'Fuente del sistema operativo',
        'Acción al hacer clic',
        'Título'
      ],
      answers: ['Título', 'Sonido', 'Icono', 'Acción al hacer clic']
    },
    {
      type: 'complete',
      question:
        'Para que Compose vuelva a dibujar la UI al cambiar el estado, se debe usar un tipo de dato llamado ______.',
      answer: 'State'
    },
    {
      type: 'complete',
      question:
        'Para mostrar una notificación, se utiliza el método notify() de la clase ______.',
      answer: 'NotificationManager'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes son responsabilidades o características de un Fragment en Android?',
      options: [
        'Gestionar parte de la interfaz',
        'Iniciarse mediante Intent explícito',
        'Añadirse dinámicamente usando transacciones',
        'Ciclo de vida vinculado a la Activity'
      ],
      answers: [
        'Puede gestionar parte de la interfaz de usuario dentro de una Activity.',
        'Tiene su propio ciclo de vida que está vinculado al de la Activity.',
        'Puede añadirse o reemplazarse dinámicamente usando transacciones.'
      ]
    },
    {
      type: 'true-false',
      question:
        'Las notificaciones push no requieren permiso del usuario para mostrarse en el dispositivo móvil.',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'mutableStateOf por sí solo evita la pérdida de estado cuando se gira el dispositivo.',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'El sensor de proximidad apaga la pantalla del móvil cuando lo acercamos al oído durante una llamada.',
      answer: 'Verdadero'
    },
    {
      type: 'open-text',
      question:
        'El sensor de ______ mide el nivel de iluminación en el ambiente para ajustar el brillo de la pantalla.',
      answer: 'luz'
    },
    {
      type: 'matching',
      question: 'Relaciona cada sensor con su descripción correcta:',
      pairs: [
        {
          left: 'Magnetómetro',
          answer:
            'Detecta campos magnéticos para funcionar como una brújula digital.'
        },
        {
          left: 'Sensor de luz ambiental',
          answer:
            'Ajusta el brillo de la pantalla según las condiciones de luz.'
        },
        {
          left: 'GPS',
          answer:
            'Determina la ubicación geográfica precisa mediante satélites.'
        },
        {
          left: 'Sensor de proximidad',
          answer: 'Detecta la proximidad de un objeto cercano al dispositivo.'
        },
        {
          left: 'Barómetro',
          answer: 'Mide la presión atmosférica para calcular la altitud.'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes son características comunes de las notificaciones push?',
      options: [
        'Pueden enviarse aunque la App no esté abierta',
        'Requieren conexión a internet',
        'No necesitan permiso del usuario',
        'Alertas personalizadas'
      ],
      answers: [
        'Pueden enviarse aunque la aplicación no esté abierta',
        'Requieren conexión a internet para ser entregadas',
        'Permiten mostrar alertas personalizadas'
      ]
    },
    {
      type: 'true-false',
      question:
        'El acelerómetro mide la velocidad de rotación angular en los tres ejes.',
      answer: 'Falso'
    },
    {
      type: 'matching',
      question: 'Empareja cada concepto con su descripción:',
      pairs: [
        {
          left: 'Intent explícito',
          answer: 'Llama directamente a un componente específico'
        },
        { left: 'Intent', answer: 'Permite iniciar componentes con datos' },
        {
          left: 'Fragment',
          answer: 'Parte modular de una interfaz de usuario'
        },
        {
          left: 'Intent implícito',
          answer: 'Permite al sistema elegir el componente adecuado'
        }
      ]
    },
    {
      type: 'true-false',
      question:
        'Las notificaciones en Android se pueden actualizar una vez mostradas.',
      answer: 'Verdadero'
    },
    {
      type: 'matching',
      question:
        'Relaciona cada componente de notificación con su método o clase correspondiente:',
      pairs: [
        { left: 'Agrega botones o acciones', answer: 'addAction()' },
        {
          left: 'Define el icono de la notificación',
          answer: 'setSmallicon()'
        },
        {
          left: 'Muestra la notificación en pantalla',
          answer: 'NotificationManager'
        },
        {
          left: 'Asigna el título de la notificación',
          answer: 'setContentTitle()'
        },
        {
          left: 'Crea y configura la notificación',
          answer: 'NotificationCompat.Builder'
        }
      ]
    },
    {
      type: 'multiple-select',
      question:
        '¿Qué sensores están relacionados con la medición de movimiento en dispositivos móviles?',
      options: [
        'Acelerómetro',
        'Higrómetro',
        'Sensor de gravedad',
        'Giroscopio',
        'Barómetro'
      ],
      answers: ['Giroscopio', 'Acelerómetro', 'Sensor de gravedad']
    },
    {
      unit: 4,
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes sensores están comúnmente presentes en un smartphone moderno?',
      options: [
        'Sensor de movimiento ocular',
        'Sensor de temperatura corporal',
        'Acelerómetro',
        'Sensor de presión atmosférica',
        'Sensor de huella dactilar'
      ],
      answers: [
        'Sensor de huella dactilar',
        'Sensor de presión atmosférica',
        'Acelerómetro'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Qué protocolo se utiliza comúnmente para enviar notificaciones push a dispositivos móviles?',
      options: ['HTTP/2', 'FTP', 'SMTP', 'POP3'],
      answer: 'SMTP'
    },
    // multiple-select
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes sensores están comúnmente presentes en un smartphone moderno?',
      options: [
        'Sensor de huella dactilar',
        'Sensor de movimiento ocular',
        'Sensor de temperatura corporal',
        'Acelerómetro',
        'Sensor de presión atmosférica'
      ],
      answers: [
        'Sensor de huella dactilar',
        'Acelerómetro',
        'Sensor de presión atmosférica'
      ]
    },

    // complete
    {
      type: 'complete',
      question:
        '¿Con qué clase de Android se pueden enviar datos y solicitudes entre Activities o a otros componentes como Services o BroadcastReceivers?',
      answer: 'Intent'
    },

    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes sensores permite medir la presión atmosférica?',
      options: [
        'Sensor de proximidad',
        'Giroscopio',
        'Barómetro',
        'Magnetómetro',
        'Acelerómetro'
      ],
      answer: 'Barómetro'
    },

    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Qué función permite conservar el estado de variables en Compose a través de rotaciones y cambios de configuración?',
      options: [
        'produceState',
        'remember',
        'rememberSaveable',
        'mutableStateOf'
      ],
      answer: 'rememberSaveable'
    },
    // single-choice
    {
      type: 'single-choice',
      question:
        '¿Cuál es la clase principal utilizada para construir una notificación en Android?',
      options: [
        'AlertDialog',
        'NotificationBuilder',
        'NotificationView',
        'NotificationCompat.Builder',
        'NotificationManagerCompat'
      ],
      answer: 'NotificationCompat.Builder'
    },
    // complete
    {
      type: 'complete',
      question:
        'El ........................... mide la humedad del aire y se utiliza en aplicaciones meteorológicas y científicas.',
      answer: 'higrómetro'
    },
    // multiple-select
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes afirmaciones sobre el estado en Jetpack Compose son correctas?',
      options: [
        'Nunca puede sobrevivir a la recreación de una actividad',
        'Se utiliza solo dentro de una Activity',
        'Se puede elevar para que el llamador controle el estado',
        'Compose recompone automáticamente cuando un State<T> cambia'
      ],
      answers: [
        'Se puede elevar para que el llamador controle el estado',
        'Compose recompone automáticamente cuando un State<T> cambia'
      ]
    }, // complete
    {
      type: 'complete',
      question:
        '¿Qué protocolo se utiliza comúnmente para enviar notificaciones push a dispositivos móviles?',
      answer: 'SMTP'
    }
  ]
}
