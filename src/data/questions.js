export const questions = [
  // Preguntas de selección múltiple
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes opciones describe correctamente un proyecto?',
    options: [
      'Un conjunto de actividades repetitivas que se realizan sin un tiempo definido.',
      'Un proceso único con actividades planificadas, ejecutadas y evaluadas para alcanzar objetivos en un tiempo determinado.',
      'Un conjunto de tareas aisladas sin relación entre sí y ejecutadas sin necesidad de coordinación.',
      'Una serie de acciones sin límite de recursos que están enfocadas en objetivos indefinidos.'
    ],
    answer:
      'Un proceso único con actividades planificadas, ejecutadas y evaluadas para alcanzar objetivos en un tiempo determinado.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes NO es un elemento básico de todo proyecto?',
    options: [
      'Logro de objetivos',
      'Recursos financieros',
      'Implementación continua',
      'Plazo de ejecución'
    ],
    answer: 'Implementación continua'
  },
  {
    type: 'multiple',
    question:
      '¿Qué fase del ciclo de vida de un proyecto consiste en definir objetivos, especificaciones técnicas y alcance?',
    options: ['Planificación', 'Ejecución', 'Diseño', 'Seguimiento y control'],
    answer: 'Diseño'
  },
  {
    type: 'multiple',
    question: '¿Qué elemento NO es una característica de los proyectos?',
    options: [
      'Dinamismo y evolución',
      'Continuidad',
      'Riesgo',
      'Influencias externas'
    ],
    answer: 'Continuidad'
  },

  // Preguntas de completar
  {
    type: 'complete',
    question:
      'Un proyecto tiene un comienzo y un fin claramente identificables, lo que significa que su duración es __________.',
    answer: 'limitada'
  },
  {
    type: 'complete',
    question:
      'Una de las competencias clave del gestor del proyecto es la __________, ya que debe comunicarse tanto con su equipo como con clientes y proveedores.',
    answer: 'comunicación'
  },
  {
    type: 'complete',
    question:
      'Durante la fase de __________ se establecen los recursos necesarios y se determinan las actividades a realizar para alcanzar los objetivos del proyecto.',
    answer: 'planificación'
  },
  {
    type: 'complete',
    question:
      'La taxonomía de Bloom organiza los niveles de aprendizaje de forma creciente, iniciando con ______ y finalizando con ______.',
    answer: 'Conocimiento; Evaluación'
  },

  // Pregunta de ordenamiento
  {
    type: 'multiple',
    question: 'Ordena las fases del ciclo de vida de un proyecto:',
    options: [
      'Diseño, Planificación, Ejecución, Seguimiento y control, Evaluación y cierre.',
      'Planificación, Diseño, Ejecución, Seguimiento y control, Evaluación y cierre',
      'Diseño, Ejecución, Planificación, Evaluación y cierre, Seguimiento y control',
      'Ejecución, Seguimiento y control, Diseño, Evaluación y cierre, Planificación'
    ],
    answer:
      'Diseño, Planificación, Ejecución, Seguimiento y control, Evaluación y cierre.'
  },

  // Pregunta de relación de conceptos

  {
    type: 'multiple',
    question:
      'Si durante la ejecución de un proyecto surgen desviaciones respecto a la planificación inicial, ¿qué se debe hacer?',
    options: [
      'Seguir adelante sin cambios',
      'Realizar seguimiento y control, para ajustar la planificación',
      'Abandonar el proyecto',
      'Retrasar todas las actividades hasta solucionar el problema'
    ],
    answer: 'Realizar seguimiento y control, para ajustar la planificación'
  },

  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes NO es una competencia necesaria para el éxito en la gestión de proyectos?',
    options: [
      'Gestión organizativa y de planificación',
      'Comunicación',
      'Creatividad artística',
      'Resolución de problemas'
    ],
    answer: 'Creatividad artística'
  },

  {
    type: 'multiple',
    question:
      '¿Qué tipo de necesidad se refiere a aquellas establecidas por técnicos o expertos?',
    options: [
      'Necesidades normativas',
      'Necesidades sentidas',
      'Necesidades expresadas',
      'Necesidades comparativas'
    ],
    answer: 'Necesidades normativas'
  },

  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes técnicas se utiliza para identificar problemas y detectar necesidades?',
    options: [
      'Indicadores sociodemográficos',
      'Análisis de sueños',
      'Observación de comportamiento animal',
      'Estudio de fenómenos paranormales'
    ],
    answer: 'Indicadores sociodemográficos'
  },
  {
    type: 'multiple',
    question:
      '¿Los problemas siempre surgen de situaciones nuevas y nunca de situaciones ya existentes que generan conflictos o malestar?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question: 'Un proyecto se caracteriza por ser repetitivo y continuo.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'La fase de evaluación y cierre de un proyecto implica valorar si se cumplieron los objetivos.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'El gestor de proyectos no debe involucrarse en la planificación porque esa tarea corresponde solo al equipo técnico.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'La planificación del proyecto es una de las fases más importantes porque permite prever riesgos y definir actividades.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'Los objetivos generales de un proyecto deben estar centrados en las actividades que se realizan durante su ejecución.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'El análisis de riesgos en un proyecto debe realizarse únicamente al inicio del mismo.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'Un mapa conceptual, también conocido como mapa mental, recoge de manera interrelacionada todos los conceptos asociados a un concepto principal.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'Un hito es un punto en la planificación que indica cuándo un grupo de tareas relacionadas han empezado.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿El tiempo estimado de una actividad en un proyecto siempre es exacto y certero?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'La definición de perfiles en un proyecto incluye únicamente los conocimientos técnicos especializados, sin considerar habilidades de comunicación o actitudes.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿La estimación del tiempo de las actividades en un proyecto siempre se basa exclusivamente en la experiencia previa de proyectos similares?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿El proceso de evaluación no se limita al momento de finalización del proyecto, sino que se entiende como un proceso continuo que empieza con el seguimiento y control?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Los cuestionarios pueden contener preguntas abiertas o cerradas y se utilizan principalmente para la valoración de la satisfacción de los clientes o usuarios relacionados con el proyecto?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'La pirámide de Maslow jerarquiza las necesidades humanas, de manera que las necesidades de niveles inferiores deben satisfacerse antes de pasar a las necesidades superiores.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'Un problema es una situación inesperada que produce cambios en los objetivos previstos.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'La lista de control en un proyecto es una herramienta rígida que debe seguirse al pie de la letra en todos los casos.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'El indicador es la variable de referencia que utilizará quien evalúe para determinar si se han logrado los resultados y _____',
    options: [
      'cuantificar las desviaciones.',
      'calcular el tiempo.',
      'medir costos del proyecto.'
    ],
    answer: 'cuantificar las desviaciones.'
  },
  {
    type: 'multiple',
    question:
      'Para definir un problema o necesidad en un proyecto, es necesario explicar en qué consiste, justificar por qué es necesaria la puesta en marcha del proyecto, y _________ el objetivo general que se persigue con el proyecto.',
    options: ['definir', 'precisar', 'explica', 'define'],
    answer: 'precisar'
  },
  {
    type: 'multiple',
    question:
      'Los indicadores de mercado proporcionan información sobre _____ en los requerimientos del mercado, migración de mercados y cambios en las preferencias de los clientes.',
    options: ['fuentes', 'rastros', 'cambios'],
    answer: 'cambios'
  },
  {
    type: 'multiple',
    question:
      'El tiempo esperado (Te) en un proyecto se calcula como la media ponderada de los tres tiempos: tiempo optimista, tiempo moderado y tiempo pesimista, siendo la fórmula: Te = _____',
    options: ['To + 2Tm + Tp', 'To + 4Tm + Tp', 'To + 4Tm - Tp'],
    answer: 'To + 4Tm + Tp'
  },
  {
    type: 'multiple',
    question:
      'Para la resolución de conflictos en un proyecto, es recomendable escuchar todas las opiniones y buscar una solución en común. Esto se conoce como __________.',
    options: ['Confrontación.', 'Compromiso.', 'Imposición.', 'Retirada.'],
    answer: 'Compromiso.'
  },
  {
    type: 'multiple',
    question:
      'Al convocar una reunión, se debe evitar fijar reuniones frecuentes sin causa ni necesidad real. En su lugar, es recomendable __________.',
    options: ['Planificar.', 'Organizar.', 'Justificar.', 'Programar.'],
    answer: 'Justificar.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes NO es una fuente de detección de necesidades?',
    options: [
      'Identificar la ausencia de algo necesario',
      'Realizar un análisis crítico de la realidad',
      'Consultar horóscopos, predicciones astrológicas',
      'Establecer previsiones sobre situaciones futuras'
    ],
    answer: 'Consultar horóscopos, predicciones astrológicas'
  },
  {
    type: 'multiple',
    question:
      "¿Qué se entiende por 'visión sistémica' en la gestión de proyectos?",
    options: [
      'La capacidad de ver lo general, y pasar a lo específico',
      'La habilidad de resolver problemas técnicos complejos',
      'La capacidad de delegar responsabilidades efectivamente',
      'La habilidad de comunicarse con clientes y proveedores'
    ],
    answer: 'La capacidad de ver lo general, y pasar a lo específico'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes técnicas cualitativas se caracteriza por la generación de ideas sin juzgarlas ni valorarlas inicialmente, buscando la cantidad y originalidad de las mismas?',
    options: [
      'Técnica Newton',
      'Grupo Normal',
      'Tormenta de Ideas (Brainstorming)',
      'Fórum Comunitario'
    ],
    answer: 'Tormenta de Ideas (Brainstorming)'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes opciones describe mejor el concepto de innovación?',
    options: [
      'La innovación es simplemente la creación de algo nuevo sin considerar su aplicación en el mercado.',
      'La innovación es poner ideas en valor, desarrollando y aplicando nuevas ideas para satisfacer necesidades y deseos en contextos cambiantes.',
      'La innovación se limita a mejorar productos existentes sin generar nuevas ideas.',
      'La innovación es un proceso que solo depende de la investigación científica y tecnológica.'
    ],
    answer:
      'La innovación es poner ideas en valor, desarrollando y aplicando nuevas ideas para satisfacer necesidades y deseos en contextos cambiantes.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes es un tipo de indicador utilizado para la detección de necesidades en proyectos?',
    options: [
      'Indicadores de tendencias climáticas',
      'Indicadores de mercado',
      'Indicadores de consumo energético',
      'Indicadores de redes sociales'
    ],
    answer: 'Indicadores de mercado'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica cualitativa se basa en la recopilación de información a partir de entrevistas a personas con un alto grado de conocimiento sobre un tema?',
    options: [
      'Técnica Delphi',
      'Tormenta de ideas',
      'Informadores clave',
      'Fórum comunitario'
    ],
    answer: 'Informadores clave'
  },
  {
    type: 'multiple',
    question:
      'Según la guía, ¿qué elemento es clave para lograr la innovación en proyectos?',
    options: [
      'La planificación estratégica',
      'El reconocimiento de necesidades',
      'La gestión de recursos financieros',
      'El análisis de la competencia'
    ],
    answer: 'El reconocimiento de necesidades'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es uno de los criterios utilizados para establecer prioridades en un proyecto?',
    options: [
      'La importancia del problema o necesidad disponibles',
      'La cantidad de recursos naturales',
      'El impacto en redes sociales',
      'La facilidad de ejecución'
    ],
    answer: 'La importancia del problema o necesidad disponibles'
  },
  {
    type: 'multiple',
    question:
      '¿Qué factor debe considerarse para determinar la viabilidad de un proyecto?',
    options: [
      'La cantidad de empleados disponibles',
      'La duración del proceso de planificación',
      'La cantidad de clientes potenciales',
      'La viabilidad técnica, económica'
    ],
    answer: 'La viabilidad técnica, económica'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes es un ejemplo correcto de objetivo general en un proyecto orientado a la prevención del desempleo?',
    options: [
      'Realizar la compra de productos frescos para la elaboración de platos.',
      'Disminuir en un 50% el número de vecinos del municipio que no poseen el Graduado Escolar en un periodo de un año.',
      'Aumentar la producción de bienes en la empresa.',
      'Incrementar el número de visitas a centros de empleo.'
    ],
    answer:
      'Disminuir en un 50% el número de vecinos del municipio que no poseen el Graduado Escolar en un periodo de un año.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el primer paso recomendado en el proceso de gestión de riesgos?',
    options: [
      'Establecer la probabilidad de ocurrencia.',
      'Identificar los riesgos.',
      'Definir las actividades preventivas.',
      'Realizar reuniones de control.'
    ],
    answer: 'Identificar los riesgos.'
  },
  {
    type: 'multiple',
    question: 'Seleccione cuál es una ventaja de los mapas mentales:',
    options: [
      'Ayudan a memorizar palabras sin necesidad de comprenderlas.',
      'Al estar el mapa categorizado se ahorra tiempo en la búsqueda de conceptos y en la revisión de las notas realizadas.',
      'Ayuda a la creatividad personal al seguir un formato rígido.',
      'Dificultan la organización de ideas debido a su estructura no lineal.'
    ],
    answer:
      'Al estar el mapa categorizado se ahorra tiempo en la búsqueda de conceptos y en la revisión de las notas realizadas.'
  },
  {
    type: 'multiple',
    question:
      'Seleccione cuál es otra herramienta fácil de aplicar y muy útil en la estructura de un proyecto:',
    options: [
      'WBS (Work Breakdown Structure)',
      'Diagrama de Ishikawa (Causa-Efecto)',
      'Histograma de frecuencias',
      'Matriz DOFA (FODA)'
    ],
    answer: 'WBS (Work Breakdown Structure)'
  },
  {
    type: 'multiple',
    question: 'Seleccione la respuesta correcta acerca del diagrama de Gantt:',
    options: [
      'Solo se utiliza en proyectos pequeños debido a sus limitaciones.',
      'Permite identificar las dependencias entre funciones.',
      'Es el tipo de gráfico más utilizado en la gestión y planificación de los proyectos, es conocido también por el nombre de cronograma.',
      'Se enfoca únicamente en el control de costos, sin considerar tiempos.'
    ],
    answer:
      'Es el tipo de gráfico más utilizado en la gestión y planificación de los proyectos, es conocido también por el nombre de cronograma.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué factor no es parte de los tres tiempos a considerar para estimar la duración de una actividad en un proyecto?',
    options: [
      'Tiempo optimista (To)',
      'Tiempo moderado (Tm)',
      'Tiempo pesimista (Tp)',
      'Tiempo actual (Tc)'
    ],
    answer: 'Tiempo actual (Tc)'
  },
  {
    type: 'multiple',
    question:
      '¿Qué herramienta informática permite crear, compartir y editar documentos online, realizar seguimiento de modificaciones y restaurar versiones anteriores?',
    options: [
      'Google Docs',
      'Microsoft Word',
      'GanttProject',
      'Google Bookmarks'
    ],
    answer: 'Google Docs'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una de las acciones clave en la fase de cierre de un proyecto?',
    options: [
      'Identificar nuevas actividades a realizar.',
      'Redefinir los objetivos del proyecto.',
      'Escribir el informe final con toda la información del proyecto.',
      'Iniciar nuevamente la planificación del proyecto.'
    ],
    answer: 'Escribir el informe final con toda la información del proyecto.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes elementos NO forma parte de la nivelación de recursos en un proyecto?',
    options: [
      'Asignar recursos de acuerdo con las necesidades reales.',
      'Minimizar los costos asociados a los recursos.',
      'Garantizar la disponibilidad ilimitada de recursos.',
      'Ajustar la planificación en función de la disponibilidad de recursos.'
    ],
    answer: 'Garantizar la disponibilidad ilimitada de recursos.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué debe definir un procedimiento de control en el seguimiento de un proyecto?',
    options: [
      'Quién debe controlar, qué aspectos de la actividad debe controlar y cómo lo debe hacer.',
      'Quién debe ejecutar el proyecto y cuáles son los entregables finales.',
      'Qué recursos financieros se deben asignar al inicio del proyecto.',
      'A quién NO debe comunicar en caso de desviaciones.'
    ],
    answer:
      'Quién debe controlar, qué aspectos de la actividad debe controlar y cómo lo debe hacer.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de evaluación permite medir el grado de eficacia y eficiencia de un proyecto?',
    options: [
      'Evaluación cuantitativa.',
      'Evaluación final.',
      'Evaluación cualitativa.',
      'Evaluación de procesos.'
    ],
    answer: 'Evaluación final.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una característica fundamental de la toma de decisiones en un proyecto?',
    options: [
      'Ser lenta y analizada a detalle.',
      'Basarse únicamente en experiencias previas.',
      'Realizarse con rapidez para evitar retrasos y costos adicionales.',
      'Consultar siempre a todos los miembros del equipo antes de decidir.'
    ],
    answer: 'Realizarse con rapidez para evitar retrasos y costos adicionales.'
  },
  {
    type: 'multiple',
    question:
      '¿La velocidad en la ejecución de los modelos de operación tradicional refleja ciclos de vida prolongados en modelos flexibles de productos y clientes?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿El mayor reto para las organizaciones en el año 2022 seguirá siendo la automatización de procesos?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Los modelos operativos tradicionales suelen tener ciclos de vida prolongados, mientras que los modelos centrados en productos y clientes son más rápidos y flexibles?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿La IA y la analítica de datos han revolucionado las formas tradicionales de hacer negocios, mejorando la eficiencia y la calidad?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Las empresas con modelos operativos centrados en el cliente están mejor posicionadas para competir en el mercado?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿El mayor reto en 2022 fue la automatización de procesos con el 67.2%, más no la experiencia del cliente?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿En 2022, las principales prioridades fueron la automatización de procesos con el 67.2% y la mejor experiencia del cliente fue del 61.5%?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Una solución automatizada funciona las 24 horas del día los 7 días de la semana?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Los robots de software requieren una nueva arquitectura de TI para funcionar?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Se han observado retornos de inversión ROI en más de 2 años desde la adopción de automatización?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿La capacidad de procesamiento de información de un robot es menor que la de un usuario humano?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿El 24% de los encuestados manifestó que posiblemente implementarían soluciones de ML o machine learning en sus proyectos de innovación?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿El 16% de las organizaciones encuestadas consideran implementar un blockchain y tokenización de activos?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿En los últimos tres años, el nivel de digitalización de operaciones ha disminuido?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿La automatización robótica es una de las principales soluciones tecnológicas mencionadas?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿La computación cuántica es mencionada como una tecnología que tendrá poco impacto en la informática?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Edge computing es identificado como un nuevo actor en el mercado tecnológico?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'complete',
    question:
      'Los nuevos modelos de negocio están evolucionando para _____ en un mundo digital a medida que se adoptan diferenciados e innovadores modelos de negocio.',
    answer: 'competir'
  },
  {
    type: 'complete',
    question:
      'Los modelos operativos más flexibles, basados en productos y clientes, ayudan a administrar el volumen y la _____',
    answer: 'velocidad'
  },
  {
    type: 'complete',
    question:
      'La tecnología avanzada, como la IA y la analítica de datos, permite mejorar la eficiencia, la precisión y el control de _____',
    answer: 'costos'
  },
  {
    type: 'complete',
    question:
      'El cambio de una estructura jerárquica hacia una cultura ______ impulsa a la empresa dinámica del futuro.',
    answer: 'colaborativa'
  },
  {
    type: 'complete',
    question:
      'En 2022, el mayor reto para las organizaciones fue la ________ de procesos, seguido por la mejora de la experiencia del cliente.',
    answer: 'automatización'
  },
  {
    type: 'multiple',
    question:
      'Con la evolución de las expectativas de los clientes, se espera una experiencia _____ y personalizada.',
    options: ['Desconectada', 'Estática', 'Conectada', 'Limitada'],
    answer: 'Conectada'
  },
  {
    type: 'multiple',
    question:
      'El modelo delivery ______ se enfocará en la prestación de servicios en modalidad home office.',
    options: ['Centralizado', 'Hub Spoke Edge', 'Tradicional', 'Exclusivo'],
    answer: 'Hub Spoke Edge'
  },
  {
    type: 'multiple',
    question:
      'La siguiente iteración de la Gestión de Procesos de Negocio BPM 4.0 combinará mano de obra ______ y no permanente.',
    options: ['Temporal', 'Externa', 'Permanente', 'Freelance'],
    answer: 'Permanente'
  },
  {
    type: 'multiple',
    question:
      'Las herramientas de colaboración, como los foros virtuales y los _____ en línea, han cobrado relevancia para generar conocimientos.',
    options: ['Focus Group', 'Chatbots', 'Blogs', 'Encuentros Físicos'],
    answer: 'Focus Group'
  },
  {
    type: 'multiple',
    question:
      'Las organizaciones están colaborando con cursos online masivos y abiertos, conocidos como _____, para la recapacitación digital.',
    options: ['LMS', 'MOOC', 'E-Learning', 'Certificaciones Privadas'],
    answer: 'MOOC'
  },
  {
    type: 'multiple',
    question:
      'Más de la mitad de los participantes correspondientes al 54% consideran que los esquemas de trabajo _______ continuarán durante el año 2022.',
    options: ['Presencial', 'Híbrido', 'Freelance', 'Rotativo'],
    answer: 'Híbrido'
  },
  {
    type: 'multiple',
    question:
      'Los tres principales retos de negocio en una organización o emprendimiento son:',
    options: [
      'Agilidad comercial, Cultura organizacional, Incertidumbres regulatorias',
      'Automatización comercial, Cultura regulatoria, Acceso tecnológico avanzado',
      'Agilidad comercial, Expectativa de los clientes, Macro-Desarrollo'
    ],
    answer:
      'Agilidad comercial, Cultura organizacional, Incertidumbres regulatorias'
  },
  {
    type: 'multiple',
    question:
      'Los dos principales retos para una transformación digital exitosa son:',
    options: [
      'Brecha de visiones escalables y Complejos sistemas legados a la IA',
      'Bajo retorno de inversiones y Alto acoplamiento de tecnologías',
      'Arquitectura de datos y Resistencia organizacional al cambio'
    ],
    answer: 'Arquitectura de datos y Resistencia organizacional al cambio'
  },
  {
    type: 'multiple',
    question:
      '¿Qué modelo de distribución evolucionará hacia el modelo hub spoke edge?',
    options: [
      'Modelo de distribución lineal',
      'Modelo de distribución circular',
      'Modelo de distribución hub and spoke'
    ],
    answer: 'Modelo de distribución hub and spoke'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de trabajadores serán clave para la Gestión de Procesos de Negocio BPM 4.0?',
    options: [
      'Solo trabajadores permanentes',
      'Trabajadores temporales para casos repetitivos y especializados',
      'Solo directivos de alto nivel'
    ],
    answer: 'Trabajadores temporales para casos repetitivos y especializados'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tecnología ha impulsado la colaboración en el trabajo remoto?',
    options: [
      'Videoconferencias y plataformas en línea',
      'Sistemas de almacenamiento físico',
      'Equipos de oficina tradicionales'
    ],
    answer: 'Videoconferencias y plataformas en línea'
  },
  {
    type: 'multiple',
    question:
      '¿Qué porcentaje de participantes cree que los esquemas de trabajo híbrido continuarán en 2022?',
    options: ['37.4%', '54%', '4.6%'],
    answer: '54%'
  },
  {
    type: 'multiple',
    question:
      '¿Con quiénes colaboran las organizaciones para la recapacitación digital?',
    options: [
      'Solo con empresas privadas',
      'Con agencias de viajes',
      'Con proveedores de capacitación, academia y el gobierno'
    ],
    answer: 'Con proveedores de capacitación, academia y el gobierno'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes tecnologías es clave en la hiper-automatización?',
    options: [
      'Inteligencia Artificial',
      'Internet de las Cosas',
      'Computación en la nube',
      'Realidad Virtual'
    ],
    answer: 'Inteligencia Artificial'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes áreas de una empresa suele estar más automatizada?',
    options: [
      'Contabilidad',
      'Producción',
      'Abastecimiento y logística',
      'Estrategia y planeación'
    ],
    answer: 'Contabilidad'
  },
  {
    type: 'multiple',
    question:
      '¿Qué iniciativa tecnológica ha sido implementada con mayor frecuencia en las empresas según el documento Tendencias Tecnológicas?',
    options: [
      'Migración a la nube',
      'Teletrabajo',
      'Soluciones de gestión de procesos BPM',
      'Automatización robótica de procesos'
    ],
    answer: 'Teletrabajo'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes opciones es un ejemplo de automatización cognitiva?',
    options: [
      'Generación de reportes en Excel',
      'Chatbots de autoaprendizaje',
      'Procesamiento manual de facturas',
      'Envío de correos electrónicos automatizados'
    ],
    answer: 'Chatbots de autoaprendizaje'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes sectores suele implementar primero tecnologías de automatización?',
    options: [
      'Recursos Humanos',
      'Contabilidad y Finanzas',
      'Mercadeo y Ventas',
      'Producción y Manufactura'
    ],
    answer: 'Contabilidad y Finanzas'
  },
  {
    type: 'multiple',
    question:
      '¿Un proyecto es aquel conjunto de actividades planificadas, ejecutadas y supervisadas con recursos finitos?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el grupo que interviene en la etapa de formulación de un proyecto de estudio de factibilidad?',
    options: [
      'Consultores, Proveedores de tecnología y Entidades financieras',
      'Profesionales, Técnicos y Tecnólogos',
      'Personal directivo, Estado, Entidades de control'
    ],
    answer: 'Consultores, Proveedores de tecnología y Entidades financieras'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es aquel tipo de proyecto que está ampliamente dirigido en la identificación de necesidades u oportunidades en la sociedad para lograr un rendimiento sobre la inversión requerida de un proyecto?',
    options: [
      'Iniciativa Social',
      'Intervención Social',
      'Iniciativa Privada',
      'Intervención Privada'
    ],
    answer: 'Iniciativa Privada'
  },
  {
    type: 'complete',
    question:
      'El estudio de _____ constituye el eje de un proyecto, ya que es importante tener información confiable y actualizada para la toma de decisiones estratégicas.',
    answer: 'mercado'
  },
  {
    type: 'complete',
    question:
      'Un estudio ______ suele cubrir un análisis de las variables que explican las tendencias pasadas y datos de crecimiento demográfico.',
    answer: 'econométrico'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes elementos se encarga de establecer las metas y fines que se desean alcanzar en la formulación de un proyecto?',
    options: [
      'Justificación',
      'Antecedentes',
      'Objetivos (general y específicos)',
      'Análisis del entorno'
    ],
    answer: 'Objetivos (general y específicos)'
  },
  {
    type: 'multiple',
    question:
      'Para orientar integralmente un proyecto, es esencial realizar un diagnóstico general. ¿Cuál de los siguientes diagnósticos NO se incluye dentro de los planteados?',
    options: [
      'Diagnóstico Organizacional',
      'Diagnóstico Financiero',
      'Diagnóstico de Comunicación',
      'Diagnóstico Ambiental'
    ],
    answer: 'Diagnóstico de Comunicación'
  },
  {
    type: 'multiple',
    question:
      'El estudio de mercados es el eje para la toma de decisiones estratégicas en un proyecto. ¿Qué aspectos se deben considerar como fundamentales en este estudio?',
    options: [
      'Identificar la demanda actual y potencial',
      'Caracterizar a los consumidores y la competencia',
      'Establecer canales de comercialización, programa de ventas, precios y mecanismos de publicidad',
      'Todas las anteriores'
    ],
    answer: 'Todas las anteriores'
  },
  {
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes elementos se consideran fundamentales dentro de los aspectos técnicos de un proyecto?',
    options: [
      'Mercado, tecnología, localización y financiamiento',
      'Objetivos, justificación y antecedentes',
      'Diagnóstico organizacional y análisis del entorno',
      'Inversiones fijas y diferidas'
    ],
    answer: 'Mercado, tecnología, localización y financiamiento'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es la relación entre el diagnóstico general y la definición de los componentes de un proyecto?',
    options: [
      'El diagnóstico general orienta el proyecto al recopilar información pertinente que permite definir objetivos, antecedentes, normatividad y la descripción del área.',
      'El diagnóstico general se limita a analizar la competencia sin influir en otros componentes.',
      'No existe relación directa entre el diagnóstico general y los componentes del proyecto.',
      'El diagnóstico general solo se aplica en la etapa de evaluación y no influye en la formulación.'
    ],
    answer:
      'El diagnóstico general orienta el proyecto al recopilar información pertinente que permite definir objetivos, antecedentes, normatividad y la descripción del área.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el propósito principal del estudio de mercado en la formulación y evaluación de proyectos?',
    options: [
      'Determinar la estructura organizativa del proyecto.',
      'Establecer el flujo de efectivo y la rentabilidad.',
      'Evaluar la viabilidad del proyecto en función de la oferta y demanda.',
      'Definir las políticas fiscales y financieras.'
    ],
    answer:
      'Evaluar la viabilidad del proyecto en función de la oferta y demanda.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué elementos se deben considerar al realizar un análisis de oferta y demanda en un estudio de mercado?',
    options: [
      'Ingresos y costos operativos.',
      'Análisis de la competencia y disponibilidad de materia prima.',
      'Evaluación de impacto social y económico.',
      'Estratégias de financiamiento y inversión.'
    ],
    answer: 'Análisis de la competencia y disponibilidad de materia prima.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué se debe tener en cuenta al aplicar un muestreo en un estudio de mercado?',
    options: [
      'El tamaño y tipo de la muestra basados en las características de la población.',
      'La estructura legal y administrativa del mercado.',
      'Las fases operativas y preoperativas del proyecto.',
      'Los tipos de evaluación del proyecto.'
    ],
    answer:
      'El tamaño y tipo de la muestra basados en las características de la población.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué estrategias se mencionan para la penetración de mercados en el estudio de mercado y comercialización?',
    options: [
      'Control de gestión y evaluación ex-post.',
      'Definición de precios y canales de comercialización.',
      'Selección y descripción de la maquinaria y equipo.',
      'Determinación del programa de producción o prestación de servicios.'
    ],
    answer: 'Definición de precios y canales de comercialización.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuáles son los principales canales de distribución considerados en la comercialización de un bien o servicio según el documento?',
    options: [
      'Sistema tradicional de mercadeo con y sin intermediación.',
      'Evaluación económica y social del proyecto.',
      'Políticas de control ambiental y cultural regional.',
      'Tipos de evaluación del proyecto: social y económica.'
    ],
    answer: 'Sistema tradicional de mercadeo con y sin intermediación.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el nivel de localización que determina la región o zona donde se ubicará un proyecto?',
    options: [
      'Micro localización',
      'Macro localización',
      'Localización geográfica'
    ],
    answer: 'Macro localización'
  },
  {
    type: 'multiple',
    question:
      '¿El método de análisis dimensional compara las alternativas de localización de manera individual, sin eliminarlas progresivamente?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Qué método fundamenta el factor transporte como clave en la economía espacial y es denominado método Simplex?',
    options: [
      'Método del transporte',
      'Método de calificación por puntos',
      'Método de la grilla'
    ],
    answer: 'Método del transporte'
  },
  {
    type: 'multiple',
    question:
      '¿La disponibilidad de servicios básicos es un factor clave en la localización de un proyecto?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Qué factores se deben analizar para determinar el tamaño de un proyecto?',
    options: [
      'Solo la tecnología utilizada en el proyecto',
      'Solo el mercado y la demanda',
      'La interrelación entre la tecnología del proyecto, el estudio de mercado y los costos operativos'
    ],
    answer:
      'La interrelación entre la tecnología del proyecto, el estudio de mercado y los costos operativos'
  },
  {
    type: 'multiple',
    question: "¿Cuál es el objetivo del 'tamaño óptimo' de un proyecto?",
    options: [
      'Maximizar la cantidad de empleados generados',
      'Minimizar la inversión sin importar el costo unitario',
      'Alcanzar la capacidad de producción de servicios con el menor costo unitario posible'
    ],
    answer:
      'Alcanzar la capacidad de producción de servicios con el menor costo unitario posible'
  },
  {
    type: 'multiple',
    question:
      '¿Qué aspectos se deben considerar al definir el tamaño de un proyecto?',
    options: [
      'Solo la magnitud de la inversión y el número de empleados generados',
      'La cobertura de población, los equipos disponibles, la inversión y el análisis del mercado según su situación actual y tendencias',
      'Solo el número de equipos disponibles'
    ],
    answer:
      'La cobertura de población, los equipos disponibles, la inversión y el análisis del mercado según su situación actual y tendencias'
  },
  {
    type: 'multiple',
    question:
      'La capacidad nominal, la capacidad de diseño de planta y el factor de servicio de planta son conceptos clave del tamaño del proyecto.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'Para definir el tamaño de un proyecto es suficiente con analizar el mercado.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'La ingeniería de un proyecto, forma parte del análisis técnico y requiere el conocimiento de expertos en la tecnología necesaria.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'El análisis de prefactibilidad o factibilidad no considera la selección y descripción de la maquinaria y equipos.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'El modelo de especificaciones de un producto o servicio, se basa en la descripción del proceso productivo.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'La determinación del personal necesario para la operación de la planta no es un elemento clave en el análisis técnico del proyecto.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'El desarrollo de especificaciones del producto o servicio, incluye la definición de materias primas e insumos.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'La estructura organizativa debe definirse solo para la fase de implementación de un proyecto.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'Con cada cambio en un proyecto, la estructura organizativa debe ajustarse según las necesidades del momento.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de organización legal debe definirse en un proyecto?',
    options: [
      'La organización debe ser de tipo cooperativa',
      'Depende de las necesidades y características del proyecto',
      'La organización debe ser siempre una sociedad anónima',
      'No es necesario definir el tipo de organización legal'
    ],
    answer: 'Depende de las necesidades y características del proyecto'
  },
  {
    type: 'multiple',
    question:
      '¿Qué caracteriza a una estructura organizativa tradicional en un proyecto?',
    options: [
      'Tiene una jerarquía definida y una clara cadena de mando',
      'Es flexible y colaborativa',
      'Se basa en equipos autónomos y multidisciplinarios',
      'Se enfoca en la mejora continua y en la calidad de los procesos'
    ],
    answer: 'Tiene una jerarquía definida y una clara cadena de mando'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de estructura organizativa se aplica al enfoque ISO 9000?',
    options: [
      'Una estructura basada en procesos',
      'Una estructura jerárquica rígida',
      'Una estructura organizativa moderna',
      'Una estructura de equipos autónomos sin procesos definidos'
    ],
    answer: 'Una estructura basada en procesos'
  },
  {
    type: 'multiple',
    question:
      '¿El terreno se considera un activo depreciable en los proyectos de inversión?',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Los estudios previos, gastos de constitución y montaje se consideran inversiones diferidas en la formulación de proyectos?',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      'En un proyecto, las alternativas de financiación se utilizan para suplir el ______ cuando los recursos internos no alcanzan para cubrir la totalidad de la inversión.',
    options: ['déficit', 'excedente', 'total'],
    answer: 'déficit'
  },
  {
    type: 'multiple',
    question: 'El Capital Riesgo se caracteriza por:',
    options: [
      'Financiar startups con alto potencial de crecimiento.',
      'Financiar únicamente a empresas estatales.',
      'Ofrecer un servicio de pago anticipado de facturas.'
    ],
    answer: 'Financiar startups con alto potencial de crecimiento.'
  },
  {
    type: 'multiple',
    question:
      'El Factoring Inverso tiene como principal objetivo cubrir el pago de ______ para una empresa.',
    options: ['nóminas', 'compras', 'deudas fiscales'],
    answer: 'compras'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes es un indicador financiero que se puede determinar con base en los ingresos, gastos y costos proyectados?',
    options: ['TIR', 'VPN', 'RBC', 'Todas las anteriores'],
    answer: 'Todas las anteriores'
  },
  {
    type: 'multiple',
    question:
      'La depreciación de activos fijos no debe ser considerada en los gastos y costos proyectados de un proyecto.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes elementos NO forma parte del estado de resultados de operación?',
    options: [
      'Ingresos por ventas proyectadas',
      'Depreciación de activos fijos',
      'Inversiones a corto y largo plazo.',
      'Intereses por financiación externa'
    ],
    answer: 'Inversiones a corto y largo plazo.'
  },
  {
    type: 'multiple',
    question:
      'La evaluación de un proyecto permite conocer su viabilidad económica y social antes de su implementación.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes NO es un tipo de evaluación de un proyecto?',
    options: [
      'Evaluación económica',
      'Evaluación social',
      'Evaluación deportiva'
    ],
    answer: 'Evaluación deportiva'
  },
  {
    type: 'complete',
    question:
      'La evaluación de un proyecto puede realizarse antes de su implementación, a esto se le llama evaluación _____.',
    answer: 'ex-ante'
  },
  {
    type: 'multiple',
    question:
      'La evaluación ex-post se realiza antes de que el proyecto comience.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      'Un estudio econométrico analiza variables como precios, ingresos y crecimiento demográfico para identificar tendencias.',
    options: ['Verdadero', 'Falso'],
    answer: 'Verdadero'
  },
  {
    type: 'complete',
    question:
      'El análisis de _____ permite conocer las oportunidades y amenazas del entorno en el que se desarrollará el proyecto.',
    answer: 'mercado'
  },
  {
    type: 'multiple',
    question:
      '¿Qué aspecto NO se considera dentro de los aspectos técnicos de un proyecto?',
    options: [
      'Localización',
      'Ingeniería del proyecto',
      'Publicidad y marketing'
    ],
    answer: 'Publicidad y marketing'
  },
  {
    type: 'multiple',
    question:
      'El tamaño de un proyecto se determina considerando solo la inversión financiera.',
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es la premisa básica detrás de la administración formada en casa?',
    options: [
      'La alta administración no tiene importancia en el progreso empresarial.',
      'La alta administración tiene un impacto significativo, que debe preservarse.',
      'Cualquier individuo puede ser un líder sin influir en la organización.',
      'La continuidad del liderazgo no es relevante para el éxito.'
    ],
    answer:
      'La alta administración tiene un impacto significativo, que debe preservarse.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es la pregunta fundamental que se hacen las compañías visionarias?',
    options: [
      '¿Cómo podemos hacer frente a la competencia?',
      '¿Lo estamos haciendo bien?',
      '¿Cómo podemos, hacerlo mañana mejor que hoy?',
      '¿Qué rendimiento tenemos que alcanzar?'
    ],
    answer: '¿Cómo podemos, hacerlo mañana mejor que hoy?'
  },
  {
    type: 'multiple',
    question:
      'Complete la siguiente frase: La disciplina es crucial en las compañías visionarias ya que sin disciplina no hay ______, y sin carácter no hay ______.',
    options: [
      'éxito; progreso',
      'acción; efectividad',
      'carácter, progreso',
      'calidad; crecimiento'
    ],
    answer: 'carácter, progreso'
  },
  {
    type: 'multiple',
    question:
      'Complete la siguiente frase: Las compañías visionarias no dependen de un programa o discurso, lo que realmente importa es ______.',
    options: [
      'la estrategia a largo plazo',
      'la cultura organizacional',
      'el conjunto total',
      'el liderazgo externo'
    ],
    answer: 'el conjunto total'
  },
  {
    type: 'multiple',
    question:
      "Es verdadero o falso: 'Las compañías visionarias se conforman con un rendimiento que consideran 'suficientemente bueno' para permanecer competitivas.'",
    options: ['Verdadero', 'Falso'],
    answer: 'Falso'
  }
]
