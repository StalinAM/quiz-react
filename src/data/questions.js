const quuestionsUnit1 = [
  // Prueba unidad 1
  {
    type: 'multiple',
    question: '¿Qué tipos de datos se almacenan en un Data Warehouse?',
    options: [
      'Estructurados',
      'Estructurados y Semi estructurados',
      'Semi estructurados',
      'Estructurados, Semi estructurados y no Estructurados'
    ],
    answer: 'Estructurados'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una característica clave de los datos no estructurados?',
    options: [
      'Están organizados en filas y columnas',
      'Están siempre almacenados en bases de datos',
      'ninguna de las anteriores',
      'No tienen una estructura predefinida'
    ],
    answer: 'No tienen una estructura predefinida'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una diferencia clave entre el aprendizaje supervisado y el no supervisado?',
    options: [
      'El aprendizaje supervisado no requiere datos etiquetados, mientras que el no supervisado sí.',
      'Ambos requieren datos etiquetados.',
      'Ambos puedes trabajar con datos no etiquetados.',
      'El aprendizaje supervisado requiere datos etiquetados, mientras que el no supervisado no.'
    ],
    answer:
      'El aprendizaje supervisado requiere datos etiquetados, mientras que el no supervisado no.'
  },
  {
    type: 'multiple',
    question: '¿Qué es el aprendizaje automático?',
    options: [
      'Una subdisciplina de la inteligencia artificial que se enfoca en desarrollar algoritmos que permiten a las máquinas o al software tener comportamietnos inteligentes.',
      'Un tipo de hardware especializado para procesamiento de datos.',
      'Es el estudio científico de algoritmos y modelos estadísticos para realizar una tarea utilizado algoritmos especializados.',
      'Es una rama de la Inteligencia Artificial que permite a los sistemas mejorar su rendimiento en tareas específicas a través de la experiencia y el análisis de datos, sin la necesidad de ser explícitamente programados para ello.'
    ],
    answer:
      'Es una rama de la Inteligencia Artificial que permite a los sistemas mejorar su rendimiento en tareas específicas a través de la experiencia y el análisis de datos, sin la necesidad de ser explícitamente programados para ello.'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de datos incluye archivos JSON y XML?',
    options: [
      'Datos estructurados',
      'Datos no estructurados',
      'todas las anteriores',
      'Datos semiestructurados'
    ],
    answer: 'Datos semiestructurados'
  },
  {
    type: 'multiple',
    question:
      "¿Cuál de las siguientes es una de las características de Big Data conocida como las 5V's?",
    options: ['Visibilidad', 'Vulnerabilidad', 'Virtualización', 'Volumen'],
    answer: 'Volumen'
  },
  {
    type: 'multiple',
    question: 'La Variedad en Big Data se refiere a:',
    options: [
      'La diferencia en la velocidad a la que se generan los datos.',
      'El gran tamaño de los archivos individuales.',
      'La cantidad de servidores necesarios para almacenar los datos.',
      'Los diversos formatos y fuentes de datos (estructurados, no estructurados y semiestructurados).'
    ],
    answer:
      'Los diversos formatos y fuentes de datos (estructurados, no estructurados y semiestructurados).'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tecnología es comúnmente usada para implementar un Data Lake?',
    options: [
      'Bases de datos relacionales como Oracle.',
      'Herramientas de streaming como Apache Kafka.',
      'Sistemas de memorización en caché como Redis.',
      'Apache Hadoop (HDFS) o soluciones en la nube como AWS S3.'
    ],
    answer: 'Apache Hadoop (HDFS) o soluciones en la nube como AWS S3.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tecnologías fueron desarrolladas específicamente para manejar almacenamiento y procesamiento escalable en Big Data?',
    options: [
      'MySQL y Oracle Database.',
      'Excel y Access.',
      'Blockchain y Redes Neuronales.',
      'HDFS (Hadoop Distributed File System) y bases de datos NoSQL.'
    ],
    answer: 'HDFS (Hadoop Distributed File System) y bases de datos NoSQL.'
  },
  {
    type: 'multiple',
    question:
      'Un hospital quiere identificar pacientes con alto riesgo de diabetes usando datos médicos. ¿Qué tipo de modelo aplicarías?',
    options: ['Regresión lineal', 'Clasificación multiclase', 'las dos'],
    answer: 'Clasificación multiclase'
  },
  {
    type: 'multiple',
    question: '¿Cuál de los siguientes es un ejemplo de dato estructurado?',
    options: [
      'Un video de YouTube',
      'Un correo electrónico en formato RAW',
      'Una publicación en redes sociales con imágenes',
      'Una tabla de MySQL con registros de ventas'
    ],
    answer: 'Una tabla de MySQL con registros de ventas'
  },
  {
    type: 'multiple',
    question:
      '¿Qué caracteriza al aprendizaje no supervisado en machine learning?',
    options: [
      'El modelo requiere datos etiquetados para entrenarse.',
      'Se usa exclusivamente para predecir valores numéricos continuos.',
      'Un humano supervisa cada paso del proceso de aprendizaje.',
      'El modelo identifica patrones o estructuras en datos sin etiquetas predefinidas.'
    ],
    answer:
      'El modelo identifica patrones o estructuras en datos sin etiquetas predefinidas.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes es un ejemplo de aplicación del aprendizaje automático en la vida cotidiana?',
    options: [
      'Creación de gráficos en 3D',
      'Diseño de chips de computadora',
      'Escritura de artículos científicos',
      'Sistemas de recomendación en plataformas de streaming'
    ],
    answer: 'Sistemas de recomendación en plataformas de streaming'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes opciones describe CORRECTAMENTE las "5 V\'s del Big Data" ?',
    options: [
      'Volumen, Velocidad, Variedad, Veracidad y Valor',
      'Volumen, Visibilidad, Variabilidad, Veracidad y Viralidad',
      'Volumen, Virtualización, Variedad, Veracidad y Vigencia',
      'Volumen, Velocidad, Validación, Variedad y Vulnerabilidad'
    ],
    answer: 'Volumen, Velocidad, Variedad, Veracidad y Valor'
  },
  {
    type: 'multiple',
    question: 'La "V" de Valor en Big Data se refiere principalmente a:',
    options: [
      'El costo monetario de almacenar grandes volúmenes de datos',
      'La cantidad de servidores necesarios para procesar datos',
      'La velocidad a la que los datos pierden relevancia',
      'La capacidad de extraer información útil y accionable para la toma de decisiones'
    ],
    answer:
      'La capacidad de extraer información útil y accionable para la toma de decisiones'
  },
  {
    type: 'multiple',
    question: '¿Cuál de los siguientes es un ejemplo de datos estructurados?',
    options: [
      'Texto de un libro',
      'Imagen',
      'Archivo de audio',
      'Base de datos SQL'
    ],
    answer: 'Base de datos SQL'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes opciones describe mejor el concepto de Big Data?',
    options: [
      'Datos pequeños y manejables que se pueden analizar con hojas de cálculo',
      'Grandes volúmenes de datos complejos que requieren tecnologías avanzadas para su procesamiento y análisis',
      'ADatos generados únicamente por dispositivos IoT (Internet de las Cosas)',
      'Información almacenada en bases de datos relacionales.'
    ],
    answer:
      'Grandes volúmenes de datos complejos que requieren tecnologías avanzadas para su procesamiento y análisis'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una ventaja clave de un Data Lake frente a un Data Warehouse tradicional?',
    options: [
      'Flexibilidad para almacenar datos sin necesidad de esquemas predefinidos.',
      'Mayor velocidad para procesar transacciones en tiempo real (OLTP).',
      'Elimina automáticamente los datos duplicados.',
      'Solo trabaja con herramientas de BI tradicionales (ej: Tableau).'
    ],
    answer:
      'Flexibilidad para almacenar datos sin necesidad de esquemas predefinidos.'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de datos puede almacenar un Data Lake?',
    options: [
      'Solo datos estructurados en tablas.',
      'Exclusivamente texto plano (como logs).',
      'Únicamente datos en tiempo real.',
      'Datos estructurados, semiestructurados y no estructurados (ej: CSV, JSON, imágenes, videos).'
    ],
    answer:
      'Datos estructurados, semiestructurados y no estructurados (ej: CSV, JSON, imágenes, videos).'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de estas fuentes genera principalmente datos no estructurados?',
    options: [
      'Un registro de transacciones bancarias',
      'Un stream de tweets con texto, emojis y multimedia',
      'Una base de datos de clientes en PostgreSQL',
      'Un archivo CSV con temperaturas históricas'
    ],
    answer: 'Un stream de tweets con texto, emojis y multimedia'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de estas tecnologías es comúnmente asociada a un Data Warehouse?',
    options: [
      'Apache Kafka (procesamiento de streams).',
      'MongoDB (base de datos NoSQL).',
      'ninguna',
      'ETL para cargar datos'
    ],
    answer: 'ETL para cargar datos'
  },
  {
    type: 'multiple',
    question:
      'Una empresa de retail desea predecir las ventas mensuales (en dólares) de un producto usando datos históricos. ¿Qué enfoque debe usarse?',
    options: ['Clasificación', 'Detección de anomalías.', 'todos', 'Regresión'],
    answer: 'Regresión'
  },
  {
    type: 'multiple',
    question:
      '¿Qué se necesita sí o sí para entrenar un modelo de aprendizaje supervisado?',
    options: [
      'Un conjunto grande de datos no estructurados (ej: videos).',
      'Eliminar todas las variables numéricas del dataset.',
      'todas las anteriores',
      'Un dataset con ejemplos de entrada y sus etiquetas correctas asociadas.'
    ],
    answer:
      'Un dataset con ejemplos de entrada y sus etiquetas correctas asociadas.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de dato predomina en fuentes como sensores IoT o imágenes médicas?',
    options: [
      'Solo datos estructurados',
      'Exclusivamente texto plano',
      'Datos en formato CSV',
      'Datos no estructurados'
    ],
    answer: 'Datos no estructurados'
  },
  {
    type: 'multiple',
    question:
      'Un banco quiere predecir si un cliente pagará o no un préstamo basándose en su historial crediticio. ¿Qué tipo de modelo de aprendizaje supervisado es más adecuado?',
    options: [
      'Clasificación (ej: modelo que devuelva "Sí" o "No").',
      'Regresión (ej: modelo que prediga el monto exacto del préstamo).',
      'Clustering (agrupamiento no supervisado).',
      'todos'
    ],
    answer: 'Clasificación (ej: modelo que devuelva "Sí" o "No").'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tecnologías y fuentes contribuyen a la generación de grandes volúmenes de datos (Big Data) ?',
    options: [
      'Redes sociales, sensores IoT y dispositivos móviles.',
      'Plataformas de comercio electrónico y sistemas de seguimiento.',
      'Streaming de datos y tecnologías de digitalización.',
      'Todas las anteriores.'
    ],
    answer: 'Todas las anteriores.'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de estos es un ejemplo típico de problema de aprendizaje supervisado?',
    options: [
      'Segmentar clientes en grupos basados en su comportamiento (sin etiquetas previas).',
      'Analizar textos para extraer temas principales no definidos.',
      'Generar imágenes nuevas con inteligencia artificial.',
      'Predecir el precio de una casa usando datos históricos de ventas (con precios conocidos).'
    ],
    answer:
      'Predecir el precio de una casa usando datos históricos de ventas (con precios conocidos).'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el objetivo principal de un Data Warehouse?',
    options: [
      'Procesar transacciones en tiempo real (ej: compras en línea).',
      'Reemplazar por completo las bases de datos operacionales.',
      'Eliminar datos no estructurados como imágenes o videos.',
      'Almacenar datos históricos integrados para análisis y reporting.'
    ],
    answer: 'Almacenar datos históricos integrados para análisis y reporting.'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de aprendizaje automático implica que el modelo aprende mediante recompensas y penalizaciones?',
    options: [
      'Aprendizaje Supervisado',
      'Aprendizaje No Supervisado',
      'Aprendizaje por Refuerzo',
      'Aprendizaje Semi-supervisado'
    ],
    answer: 'Aprendizaje por Refuerzo'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de datos incluye Big Data?',
    options: [
      'Solo datos estructurados',
      'Solo datos no estructurados',
      'Datos estructurados, no estructurados y semiestructurados',
      'Solo datos semiestructurados'
    ],
    answer: 'Datos estructurados, no estructurados y semiestructurados'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de estos es un ejemplo típico de aprendizaje no supervisado?',
    options: [
      'Predecir si un correo es spam usando ejemplos etiquetados.',
      'Agrupar noticias en temas similares sin categorías predefinidas',
      'Clasificar imágenes de perros y gatos con etiquetas.',
      'Calcular la probabilidad de que un paciente tenga diabetes usando datos históricos.'
    ],
    answer: 'Agrupar noticias en temas similares sin categorías predefinidas'
  },
  {
    type: 'multiple',
    question: '¿Qué es una instancia en un conjunto de datos estructurados?',
    options: [
      'Una columna en una tabla',
      'Una fila en una tabla',
      'Un archivo de texto',
      'todas las anteriores'
    ],
    answer: 'Una fila en una tabla'
  },
  {
    type: 'multiple-select',
    question:
      '¿Cuáles son algunas tecnologías clave para el almacenamiento y procesamiento de Big Data?',
    options: [
      'Sistemas distribuidos y cloud computing.',
      'Hadoop y Spark',
      'Bases de datos relacionales tradicionales',
      'archivos de texto y excel'
    ],
    answer: ['Sistemas distribuidos y cloud computing.', 'Hadoop y Spark']
  },
  {
    type: 'complete',
    question:
      '¿Qué concepto refleja la diferencia entre programar a una máquina para realizar un movimiento específico y programarla para que aprenda a moverse por sí misma?',
    answer: 'aprendizaje automático'
  },
  {
    type: 'complete',
    question:
      'Explique que es la vision artificial y porque es parte de la inteligencia artificial',
    answer:
      'La vision artificial es una parte de la inteligencia artificial porque imita un comportamiento "inteligente" como lo es identificar cosas en las imagenes.'
  },
  {
    type: 'complete',
    question:
      'Explique que es el procesamiento del lenguaje natural y porque es parte de la inteligencia artificial',
    answer:
      'El Procesamiento del Lenguaje Natural (PLN) es una rama de la inteligencia artificial que permite a las máquinas entender, interpretar y generar lenguaje humano, facilitando la comunicación entre personas y computadoras.'
  },
  {
    type: 'complete',
    question:
      'Mencione dos esquemas en los que los datos en un data warehouse están estructurados y organizados',
    answer: 'copo de nieve, estrella'
  },
  {
    type: 'complete',
    question: 'describa para que sirve Hadoop Distributed File System (HDFS)',
    answer:
      'Es un tipo de almacenamiento distribuido que permite el procesamiento y almacenamiento de grandes volúmenes de datos. Al ser distribuidos se alojan en clústeres, lo cual permite el escalamiento horizontal y la flexibilidad de los datos. '
  },
  {
    type: 'complete',
    question:
      'Describa tres de los eventos mas importantes de la historia de la IA durante su renacimiento moderno: años 2000- actualidad',
    answer:
      '2000 = Desarrollo del machine learning 2010 = Surgimiento del deep learning Actualidad = ChatGPT'
  },
  {
    type: 'complete',
    question:
      'Explique que es la robotica y porque es es parte de la inteligencia artificial',
    answer:
      'La robotica es una parte de la iteligencia artificial porque imita comportamientos "inteligentes" como lo son el reaccionar ante el entorno, hacer movimientos con sentido, etc.'
  },
  {
    type: 'complete',
    question:
      'Describa que es el almacenamiento en la nube en el contexto del Big Data',
    answer:
      'Es un tipo de almacenamiento que no requiere inversión en equipos físicos, ya que toda la información se guarda, se procesa se almacena , analiza en la nube y los servicios que estas empresas ofrecen por almacenar los datos en clústures distibuidos, un ejemplo de estas plataformas es Amazon S3, Google Cloud entre otras.'
  },
  {
    type: 'complete',
    question:
      'Describa tres de los eventos mas importantes de la historia de la IA durante sus primeros pasos: años 1956 - 1970',
    answer:
      '1956 = Se acuñó el término inteligencia artificial en una conferencia, y se tomó formalidad al estudio. 1950 - 1960 = Inician las investigaciones y profundización del aprendizaje autónomo. 1970 = Invierno de la inteligencia artificial por falta de interés y recursos para el procesamiento de los datos.'
  },
  {
    type: 'complete',
    question: 'Describa que son la redes neuronales profundas',
    answer:
      'Son modelos de aprendizaje basados en capas que simulan una neurona real del cerebro humano, pero no siguen la lógica de esta como tal, teóricamente se pueden agregar cuantas capas sean necesarios para el entrenamiento'
  },
  {
    type: 'complete',
    question:
      'Escriba dos caracteristica de un sistema de almacenamiento masivo como Data Lake (lago de datos)',
    answer: 'Flexibilidad, Escalabilidad'
  },
  {
    type: 'complete',
    question: 'Describa como se genera el BigData',
    answer:
      'El BigData se genera de la necesidad de recopilar, almacenar, gestionar y analizar grandes volumenes de datos que se generan a gran velocidad hoy en día con la digitalizacion. Para poder sacar informacion valiosa de los datos y poder tomar decisiones informadas.'
  },
  {
    type: 'complete',
    question:
      'Escriba dos tecnologías clave para manejar la Velocidad del Big Data',
    answer: 'Apache Kafka, Apache Flink'
  },
  {
    type: 'complete',
    question: 'Defina que es inteligencia artificial',
    answer:
      'La Inteligencia Artificial es el campo en el cual se investiga y desarrolla máquinas capaces de imitar el comportamiento humano sin necesidad de programarlas explicitamente.'
  }
]
const questionsUnit1y2 = [
  [
    {
      type: 'multiple',
      question: 'Los datos semiestructurados se caracterizan por:',
      options: [
        'No tener ningún formato predefinido',
        'Usar etiquetas o metadatos para organizar la información (ej: JSON, XML)',
        'Requerir siempre bases de datos relacionales',
        'Ser exclusivamente numéricos'
      ],
      answer:
        'Usar etiquetas o metadatos para organizar la información (ej: JSON, XML)'
    },
    {
      type: 'multiple',
      question:
        '¿Qué tipo de variable se obtiene al convertir datos categóricos mediante la codificación one-hot?',
      options: [
        'Variable continua',
        'Variable binaria',
        'Variable discreta',
        'Variable cuantitativa'
      ],
      answer: 'Variable binaria'
    },
    {
      type: 'multiple',
      question:
        '¿Qué sucede con los registros que contienen valores ausentes durante la eliminación de valores ausentes?',
      options: [
        'Se reemplazan por el valor medio de la variable.',
        'Se imputan utilizando algoritmos de aprendizaje automático.',
        'Se ponderan según el número de valores ausentes.',
        'Se eliminan por completo del conjunto de datos.'
      ],
      answer: 'Se eliminan por completo del conjunto de datos.'
    },
    {
      type: 'multiple',
      question:
        "Si los valores faltantes en 'horas de ejercicio semanal' no dependen de ninguna variable observable ni de sí mismos, ¿qué tipo de faltante es?",
      options: [
        'MAR (Missing at Random)',
        'NMAR (Missing Not at Random)',
        'MCAR (Missing Completely at Random)',
        'Ninguna de las anteriores'
      ],
      answer: 'MCAR (Missing Completely at Random)'
    },
    {
      type: 'multiple',
      question:
        'En un dataset de ventas, los clientes que no responden a una encuesta de satisfacción son mayormente los que recibieron productos defectuosos. ¿Qué tipo de faltante es?',
      options: [
        'MAR (Missing at Random)',
        'NMAR (Missing Not at Random)',
        'MCAR (Missing Completely at Random)',
        'Ninguna de las anteriores'
      ],
      answer: 'NMAR (Missing Not at Random)'
    },
    {
      type: 'multiple',
      question:
        'En una encuesta de ingresos, las personas con salarios altos tienden a no reportar su ingreso. ¿Qué tipo de valor faltante es?',
      options: [
        'MAR (Missing at Random)',
        'NMAR (Missing Not at Random)',
        'MCAR (Missing Completely at Random)',
        'Ninguna de las anteriores'
      ],
      answer: 'NMAR (Missing Not at Random)'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál es un ejemplo de un conjunto de datos que sigue un patrón MAR (Missing At Random)?',
      options: [
        'Un estudio de salud en el que los datos sobre la ingesta de alcohol están ausentes para personas que no participaron en la encuesta.',
        'Los datos sobre la edad faltan aleatoriamente para todas las observaciones.',
        'Un estudio de rendimiento académico en el que los datos sobre las calificaciones están ausentes para los estudiantes que no asistieron a ciertas clases.'
      ],
      answer:
        'Un estudio de rendimiento académico en el que los datos sobre las calificaciones están ausentes para los estudiantes que no asistieron a ciertas clases.'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál es una ventaja clave de un Data Lake frente a un Data Warehouse tradicional?',
      options: [
        'Mayor velocidad para procesar transacciones en tiempo real (OLTP).',
        'Elimina automáticamente los datos duplicados.',
        'Solo trabaja con herramientas de BI tradicionales (ej: Tableau).',
        'Flexibilidad para almacenar datos sin necesidad de esquemas predefinidos.'
      ],
      answer:
        'Flexibilidad para almacenar datos sin necesidad de esquemas predefinidos.'
    },
    {
      type: 'multiple',
      question:
        "Un hospital quiere identificar pacientes con alto riesgo de diabetes usando datos médicos. La salida debe ser 'Riesgo Alto', 'Medio' o 'Bajo'. ¿Qué tipo de modelo aplicarías?",
      options: ['Regresión lineal', 'Clasificación multiclase', 'las dos'],
      answer: 'Clasificación multiclase'
    },
    {
      type: 'multiple',
      question: '¿Qué técnica es adecuada para manejar datos MCAR?',
      options: [
        'Imputación por la media',
        'Imputación por la moda',
        'Listwise deletion',
        'Pairwise Deletion'
      ],
      answer: 'Listwise deletion'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál es el principal objetivo de los métodos de eliminación de valores ausentes en el procesamiento de datos?',
      options: [
        'Conservar todos los datos disponibles.',
        'Reducir la dimensionalidad del conjunto de datos.',
        'Imputar valores para completar los datos faltantes.',
        'Eliminar los registros con valores ausentes.'
      ],
      answer: 'Eliminar los registros con valores ausentes.'
    },
    {
      type: 'multiple',
      question:
        'Debido al gran volumen de datos en Big Data, ¿cuáles de las siguientes tecnologías fueron desarrolladas específicamente para manejar su almacenamiento y procesamiento escalable?',
      options: [
        'MySQL y Oracle Database.',
        'Excel y Access.',
        'Blockchain y Redes Neuronales.',
        'HDFS (Hadoop Distributed File System) y bases de datos NoSQL.'
      ],
      answer: 'HDFS (Hadoop Distributed File System) y bases de datos NoSQL.'
    },
    {
      type: 'multiple',
      question: '¿Qué significa MCAR en el contexto de datos faltantes?',
      options: [
        'La probabilidad de que falten los datos está relacionada con alguna característica observada en el conjunto de datos.',
        'La probabilidad de que falten los datos está relacionada con alguna característica no observada en el conjunto de datos.',
        'Los datos faltantes se distribuyen aleatoriamente en el conjunto de datos.'
      ],
      answer:
        'Los datos faltantes se distribuyen aleatoriamente en el conjunto de datos.'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál es el problema de no escalar características antes de aplicar un modelo de ML?',
      options: [
        'Sobreajuste (overfitting) del modelo',
        'Pérdida de valores faltantes',
        'Corrupción de variables categóricas',
        'Las características con mayores magnitudes dominarán en los resultados'
      ],
      answer:
        'Las características con mayores magnitudes dominarán en los resultados'
    },
    {
      type: 'multiple',
      question:
        '¿En qué etapa del análisis de datos se suele aplicar la eliminación de valores ausentes?',
      options: [
        'Después de la exploración inicial de los datos.',
        'Durante la validación del modelo.',
        'Antes de cualquier análisis estadístico.'
      ],
      answer: 'Antes de cualquier análisis estadístico.'
    },
    {
      type: 'multiple',
      question:
        '¿Qué tecnología es comúnmente usada para implementar un Data Lake?',
      options: [
        'Bases de datos relacionales como Oracle.',
        'Herramientas de streaming como Apache Kafka.',
        'Sistemas de memorización en caché como Redis.',
        'Apache Hadoop (HDFS) o soluciones en la nube como AWS S3.'
      ],
      answer: 'Apache Hadoop (HDFS) o soluciones en la nube como AWS S3.'
    },
    {
      type: 'multiple',
      question:
        '¿Qué medida de tendencia central es más sensible a los valores extremos en un conjunto de datos?',
      options: ['Mediana', 'Moda', 'Varianza', 'Media'],
      answer: 'Media'
    },
    {
      type: 'multiple',
      question:
        "Para datos MAR en una columna de 'edad', ¿qué técnica es apropiada?",
      options: [
        'Imputación por la media',
        'Listwise deletion',
        'Imputación por la moda',
        'Ignorar los faltantes',
        'Pairwise Deletion'
      ],
      answer: 'Pairwise Deletion'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál de las siguientes técnicas se utiliza para manejar datos faltantes en un dataset?',
      options: [
        'One-Hot Encoding',
        'Normalización Min-Max',
        'PCA (Análisis de Componentes Principales)',
        'Imputación con la media'
      ],
      answer: 'Imputación con la media'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál es el propósito de dividir los datos en conjuntos de entrenamiento, validación y prueba?',
      options: [
        'Para aumentar la cantidad de datos disponibles',
        'Para mejorar la velocidad del algoritmo',
        'Para eliminar datos irrelevantes',
        'Para evaluar el rendimiento del modelo y prevenir el sobreajuste'
      ],
      answer: 'Para evaluar el rendimiento del modelo y prevenir el sobreajuste'
    },
    {
      type: 'multiple',
      question:
        '¿Qué tipo de datos son adecuados para un test de chi-cuadrado?',
      options: [
        'Datos continuos.',
        'Datos de intervalo.',
        'Todos los tipos de datos.',
        'Datos categóricos.'
      ],
      answer: 'Datos categóricos.'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál de las siguientes afirmaciones describe mejor la moda de un conjunto de datos?',
      options: [
        'Es el valor medio de los datos.',
        'Es el rango de valores de los datos.',
        'Es la dispersión de los datos alrededor de la media.',
        'Es el valor que ocurre con mayor frecuencia en los datos.'
      ],
      answer: 'Es el valor que ocurre con mayor frecuencia en los datos.'
    },
    {
      type: 'multiple',
      question:
        '¿Cuál de las siguientes medidas se utiliza comúnmente para representar el valor típico de un conjunto de datos?',
      options: ['Desviación estándar', 'Rango', 'Varianza', 'Mediana'],
      answer: 'Mediana'
    },
    {
      type: 'multiple',
      question:
        "Tienes una variable categórica 'Ciudad' con 100 valores únicos (ej.: 'Madrid', 'Barcelona', ...). ¿Qué técnica reduciría la dimensionalidad y evitaría el problema de alta cardinalidad?",
      options: [
        'One-Hot Encoding',
        'Codificación ordinal',
        'Codificación de frecuencia'
      ],
      answer: 'Codificación de frecuencia'
    },
    {
      type: 'multiple',
      question:
        "Tienes un dataset de películas con la columna 'Género' (valores: 'Acción', 'Comedia', 'Drama'). ¿Qué codificación aplicarías para esta variable?",
      options: [
        'Codificación ordinal',
        'Codificación de frecuencia',
        'Ninguna de las anteriores',
        'One-Hot Encoding'
      ],
      answer: 'One-Hot Encoding'
    },
    {
      type: 'multiple',
      question: '¿Cómo se calcula la media de un conjunto de datos?',
      options: [
        'Sumando todos los valores y dividiendo por el número de valores.',
        'Seleccionando el valor que ocurre con mayor frecuencia.',
        'Ordenando los valores y seleccionando el valor central.',
        'alculando la diferencia entre el valor máximo y el valor mínimo.'
      ],
      answer: 'Sumando todos los valores y dividiendo por el número de valores.'
    },
    {
      type: 'multiple',
      question:
        '¿Qué método es adecuado para manejar variables categóricas ordinales?',
      options: [
        'Eliminarlas del dataset',
        'Label Encoding (asignando valores numéricos según el orden)',
        'One-Hot Encoding sin considerar el orden',
        'Normalización Z-score'
      ],
      answer: 'Label Encoding (asignando valores numéricos según el orden)'
    },
    {
      type: 'multiple',
      question:
        '¿Qué describe mejor el concepto de "List Wise Deletion" en el manejo de valores ausentes?',
      options: [
        'La eliminación de atributos que contienen valores ausentes en un conjunto de datos.',
        'La eliminación de registros completos que contienen al menos (N) atributos con valores ausentes',
        'La imputación de valores para completar los datos faltantes en un conjunto de datos.'
      ],
      answer:
        'La eliminación de registros completos que contienen al menos (N) atributos con valores ausentes'
    }
  ]
]
const completeQuestions = [
  {
    type: 'complete',
    question:
      '¿Qué es la desviación estándar y qué indica en un conjunto de datos?',
    answer:
      'La desviación estándar mide cuánto se alejan los datos de la media. Una desviación estándar alta indica mayor dispersión, mientras que una baja indica que los datos están más concentrados alrededor de la media.'
  },
  {
    type: 'complete',
    question: '¿Qué representa un boxplot y para qué se utiliza?',
    answer:
      'El boxplot muestra la mediana, cuartiles y posibles outliers de un conjunto de datos. Es útil para observar la distribución y detectar valores atípicos.'
  },
  {
    type: 'complete',
    question: '¿Qué diferencia hay entre media y mediana?',
    answer:
      'La media es el promedio aritmético de los valores. La mediana es el valor central. La mediana no se ve afectada por outliers, mientras que la media sí.'
  },
  {
    type: 'complete',
    question: '¿Qué información aporta una matriz de correlación?',
    answer:
      'Muestra la fuerza y dirección de las relaciones lineales entre variables numéricas, con valores entre -1 y 1.'
  },
  {
    type: 'complete',
    question: '¿Por qué la moda es útil en variables categóricas?',
    answer:
      'Porque indica el valor más frecuente, lo cual es útil para comprender la distribución de datos no numéricos.'
  },
  {
    type: 'complete',
    question: '¿Qué es el rango intercuartílico (IQR) y por qué es importante?',
    answer:
      'Es la diferencia entre el tercer y primer cuartil. Mide la dispersión del 50% central de los datos y es menos sensible a outliers que el rango total.'
  },
  {
    type: 'complete',
    question: '¿Qué limitación tiene la matriz de correlación?',
    answer:
      'Solo muestra relaciones lineales. No detecta relaciones no lineales, por lo que puede subestimar asociaciones complejas.'
  },
  {
    type: 'complete',
    question:
      '¿Qué es un gráfico de densidad y en qué se diferencia de un histograma?',
    answer:
      'Es una curva suavizada que muestra la distribución de una variable continua. A diferencia del histograma, no tiene barras y permite ver probabilidades.'
  },
  {
    type: 'complete',
    question: '¿Qué representan los percentiles en un dataset?',
    answer:
      'Dividen los datos en 100 partes iguales. Ayudan a conocer la posición relativa de un valor dentro del conjunto de datos.'
  },
  {
    type: 'complete',
    question: '¿Por qué es importante analizar estadísticas multivariables?',
    answer:
      'Porque permite identificar relaciones entre atributos que pueden afectar el rendimiento del modelo, como multicolinealidad.'
  },
  {
    type: 'complete',
    question: '¿Qué significa que un valor faltante sea MCAR?',
    answer:
      'Significa que los valores faltantes no dependen de ninguna variable observada ni del valor en sí mismo. La ausencia ocurre completamente al azar.'
  },
  {
    type: 'complete',
    question: '¿Cuál es la diferencia entre listwise y pairwise deletion?',
    answer:
      'Listwise elimina filas completas con valores faltantes, mientras que pairwise solo excluye valores faltantes en los cálculos específicos de cada par de variables.'
  },
  {
    type: 'complete',
    question: '¿Qué es la imputación simple y cuándo es útil?',
    answer:
      'Es un método para rellenar valores faltantes con un valor único como la media, mediana o moda. Es útil cuando los datos faltantes son pocos y aleatorios (MCAR).'
  },
  {
    type: 'complete',
    question:
      '¿Por qué eliminar columnas con muchos valores faltantes puede ser útil?',
    answer:
      'Porque simplifica el análisis, reduce el ruido y mejora la interpretabilidad, especialmente si la columna es irrelevante o tiene más del 30-50% de faltantes.'
  },
  {
    type: 'complete',
    question:
      '¿Cuál es el peligro de imputar datos sin considerar su patrón de ausencia?',
    answer:
      'Puede introducir sesgo y reducir la variabilidad, afectando la validez del análisis o del modelo predictivo.'
  },
  {
    type: 'complete',
    question: '¿Qué representa un patrón NMAR en datos faltantes?',
    answer:
      'Significa que la ausencia de un valor depende del propio valor faltante o de variables directamente relacionadas, lo que puede sesgar el análisis si no se trata adecuadamente.'
  },
  {
    type: 'complete',
    question:
      '¿Qué impacto tiene la imputación por la media en datos sesgados?',
    answer:
      'Puede distorsionar la distribución, ya que la media se ve afectada por valores extremos y no representa adecuadamente la tendencia central en distribuciones sesgadas.'
  },
  {
    type: 'complete',
    question:
      '¿Qué herramientas visuales ayudan a identificar valores faltantes?',
    answer:
      'Los mapas de calor (heatmaps) son útiles para visualizar patrones de ausencia de datos y su relación con otras variables.'
  },
  {
    type: 'complete',
    question: '¿Cuál es la ventaja de usar la mediana en la imputación?',
    answer:
      'Es menos sensible a los valores atípicos que la media, por lo que da una mejor representación central en datos con distribución sesgada.'
  },
  {
    type: 'complete',
    question:
      '¿Qué tipo de imputación es más recomendable para variables categóricas?',
    answer:
      'Imputación por la moda, ya que representa el valor más frecuente dentro de la variable.'
  },
  {
    type: 'complete',
    question: '¿Qué es la imputación múltiple y por qué es útil?',
    answer:
      'Es una técnica que estima múltiples valores posibles para cada dato faltante, reduciendo el sesgo e incorporando la incertidumbre en el análisis.'
  },
  {
    type: 'complete',
    question: '¿Cómo funciona el IterativeImputer?',
    answer:
      'Usa modelos predictivos para estimar iterativamente los valores faltantes basándose en otras columnas, mejorando la precisión con cada iteración.'
  },
  {
    type: 'complete',
    question:
      '¿Qué es un outlier y por qué puede ser problemático en modelos de ML?',
    answer:
      'Es un valor atípico alejado de la mayoría de los datos, puede distorsionar el ajuste del modelo y afectar la precisión de las predicciones.'
  },
  {
    type: 'complete',
    question: '¿Qué mide el rango intercuartílico (IQR)?',
    answer:
      'La dispersión del 50% central de los datos. Se usa para detectar outliers al identificar valores que caen fuera de Q1 - 1.5IQR y Q3 + 1.5IQR.'
  },
  {
    type: 'complete',
    question: '¿Cómo identifica outliers el método de envolvente elíptica?',
    answer:
      'Estima una distribución elíptica de los datos y marca como outliers aquellos que se alejan significativamente del centro de esa elipse.'
  },
  {
    type: 'complete',
    question:
      '¿Por qué la codificación ordinal no debe usarse con variables nominales?',
    answer:
      'Porque asigna un orden numérico que el modelo puede interpretar erróneamente como jerárquico, introduciendo sesgos.'
  },
  {
    type: 'complete',
    question: '¿Qué es la codificación one-hot y cuándo se usa?',
    answer:
      'Convierte categorías en columnas binarias. Se usa en variables nominales sin orden para evitar relaciones falsas entre categorías.'
  },
  {
    type: 'complete',
    question: '¿Cuál es el riesgo de imputar por media en datos sesgados?',
    answer:
      'Puede distorsionar la distribución original del atributo y ocultar patrones importantes, especialmente si hay outliers.'
  },
  {
    type: 'complete',
    question:
      '¿Qué representa un valor de decision_function muy negativo en EllipticEnvelope?',
    answer:
      'Que ese punto tiene alta probabilidad de ser un outlier según el modelo elíptico.'
  },
  {
    type: 'complete',
    question:
      '¿Por qué es importante transformar variables categóricas antes de usarlas en modelos ML?',
    answer:
      'Porque los modelos requieren variables numéricas y una codificación incorrecta puede generar resultados inválidos.'
  },
  {
    type: 'complete',
    question: '¿Qué es la normalización en aprendizaje automático?',
    answer:
      'Es el proceso de ajustar los valores de los atributos a una escala común, normalmente entre 0 y 1.'
  },
  {
    type: 'complete',
    question: '¿Cuál es el objetivo de la estandarización con Z-score?',
    answer:
      'Hacer que los atributos tengan una media de 0 y una desviación estándar de 1.'
  },
  {
    type: 'complete',
    question: '¿Qué es la ingeniería de características?',
    answer:
      'Es la técnica de crear o transformar atributos para mejorar el rendimiento de los modelos de ML.'
  },
  {
    type: 'complete',
    question: '¿Qué es VarianceThreshold y para qué se usa?',
    answer:
      'Es una técnica que elimina atributos con baja varianza por considerarse poco informativos.'
  },
  {
    type: 'complete',
    question: '¿En qué consiste el test de Chi-cuadrado?',
    answer:
      'Evalúa la dependencia entre variables categóricas y la variable objetivo mediante el uso de p-valores.'
  },
  {
    type: 'complete',
    question: '¿Qué es el PCA y cuál es su función?',
    answer:
      'Es una técnica para reducir la dimensionalidad transformando las variables en componentes principales.'
  },
  {
    type: 'complete',
    question:
      '¿Cuándo se recomienda aplicar normalización en vez de estandarización?',
    answer:
      'Cuando los datos tienen escalas muy dispares o no siguen una distribución normal.'
  },
  {
    type: 'complete',
    question: '¿Qué es la codificación One Hot Encoder?',
    answer:
      'Es una técnica que transforma variables categóricas en variables binarias para cada categoría.'
  },
  {
    type: 'complete',
    question: '¿Qué representa el p-valor en el test de Chi-cuadrado?',
    answer:
      'La probabilidad de que la relación observada entre variables ocurra por azar.'
  },
  {
    type: 'complete',
    question: '¿Por qué eliminar atributos con alta cardinalidad?',
    answer:
      'Porque pueden introducir ruido o complejidad innecesaria al modelo sin aportar valor predictivo.'
  },
  {
    type: 'complete',
    question: '¿Qué es PCA (Análisis de Componentes Principales)?',
    answer:
      'Es una técnica estadística para reducir la dimensionalidad de un conjunto de datos, transformándolos en componentes principales que conservan la mayor varianza posible.'
  },
  {
    type: 'complete',
    question: '¿Qué es la matriz de covarianza en PCA?',
    answer:
      'Es una matriz cuadrada que describe la relación entre las variables del dataset, incluyendo varianzas en la diagonal y covarianzas fuera de ella.'
  },
  {
    type: 'complete',
    question: '¿Qué representan los valores propios en PCA?',
    answer:
      'Indican cuánta varianza de los datos originales está explicada por cada componente principal.'
  },
  {
    type: 'complete',
    question: '¿Qué es la estratificación en la división de datos?',
    answer:
      'Es la técnica que asegura que la proporción de clases se mantenga en cada subconjunto de datos (train/val/test).'
  },
  {
    type: 'complete',
    question: '¿Qué es el sobreajuste (overfitting)?',
    answer:
      'Es cuando un modelo aprende en exceso los datos de entrenamiento, incluyendo el ruido, y falla al generalizar.'
  },
  {
    type: 'complete',
    question: '¿Qué es el subajuste (underfitting)?',
    answer:
      'Es cuando un modelo es demasiado simple y no logra aprender patrones significativos de los datos.'
  },
  {
    type: 'complete',
    question: '¿Por qué es importante la validación del modelo?',
    answer:
      'Para detectar sobreajuste y ajustar hiperparámetros antes de evaluar el modelo en datos de prueba.'
  },
  {
    type: 'complete',
    question: '¿Qué papel juega el conjunto de prueba?',
    answer:
      'Sirve para evaluar de manera imparcial el rendimiento final del modelo en datos nunca vistos.'
  },
  {
    type: 'complete',
    question: '¿Cuál es el primer paso antes de aplicar PCA?',
    answer:
      'Estandarizar los datos para que tengan media 0 y desviación estándar 1.'
  },
  {
    type: 'complete',
    question: '¿Por qué reducir la dimensionalidad en ML?',
    answer:
      'Para disminuir la complejidad del modelo, reducir el riesgo de sobreajuste y mejorar el tiempo de entrenamiento.'
  },
  {
    type: 'complete',
    question: '¿Qué es la formulación del problema en ML?',
    answer:
      'Es traducir una necesidad empresarial en un problema que pueda ser abordado con machine learning.'
  },
  {
    type: 'complete',
    question: '¿Qué significa clasificación binaria en ML?',
    answer:
      'Es un tipo de aprendizaje supervisado donde la salida puede tomar uno de dos valores posibles (por ejemplo: sí/no, 1/0).'
  },
  {
    type: 'complete',
    question: '¿Qué es la ingeniería de características?',
    answer:
      'Es el proceso de transformar, combinar o crear atributos que mejoren la capacidad predictiva de un modelo.'
  },
  {
    type: 'complete',
    question: '¿Qué son datos nominales?',
    answer:
      'Son datos categóricos sin un orden específico, como colores o nombres.'
  },
  {
    type: 'complete',
    question: '¿Qué son datos ordinales?',
    answer:
      'Son datos categóricos con un orden, pero sin diferencia cuantificable entre categorías (como bajo, medio, alto).'
  },
  {
    type: 'complete',
    question: '¿Qué es la exploración de datos?',
    answer:
      'Es el análisis inicial para entender la estructura, calidad y patrones de los datos antes de procesarlos.'
  },
  {
    type: 'complete',
    question: '¿Por qué es importante tener datos representativos?',
    answer:
      'Porque el modelo necesita aprender de una muestra que refleje adecuadamente los escenarios reales.'
  },
  {
    type: 'complete',
    question: '¿Qué es la estadística descriptiva?',
    answer:
      'Es un conjunto de técnicas para resumir, describir y visualizar datos de forma numérica y gráfica.'
  },
  {
    type: 'complete',
    question: '¿Qué es un DataFrame?',
    answer:
      'Es una estructura de datos tabular de la biblioteca Pandas que permite manipular conjuntos de datos fácilmente.'
  },
  {
    type: 'complete',
    question: "¿Qué tipo de dato es la columna 'Survived' en Titanic?",
    answer:
      'Es un dato binario que indica si el pasajero sobrevivió (1) o no (0).'
  }
]
export const questions = [
  ...quuestionsUnit1,
  {
    type: 'multiple',
    question:
      '¿Qué medida de dispersión representa la diferencia entre el valor máximo y el mínimo?',
    options: ['Varianza', 'Rango', 'Mediana', 'IQR'],
    answer: 'Rango'
  },
  {
    type: 'multiple',
    question: '¿Cuál de las siguientes no es una medida de tendencia central?',
    options: ['Media', 'Mediana', 'Varianza', 'Moda'],
    answer: 'Varianza'
  },
  {
    type: 'multiple',
    question:
      '¿Qué función en Python se usa comúnmente para obtener estadísticas básicas de un DataFrame?',
    options: ['stats()', 'mean()', 'info()', 'describe()'],
    answer: 'describe()'
  },
  {
    type: 'multiple',
    question: '¿Qué medida es más resistente a los valores atípicos?',
    options: ['Media', 'Mediana', 'Varianza', 'Rango'],
    answer: 'Mediana'
  },
  {
    type: 'multiple',
    question:
      '¿Qué gráfico se recomienda para observar la distribución de una variable continua?',
    options: [
      'Diagrama de barras',
      'Diagrama de pastel',
      'Histograma',
      'Diagrama de caja y bigotes'
    ],
    answer: 'Histograma'
  },
  {
    type: 'multiple',
    question: 'El coeficiente de variación se utiliza principalmente para:',
    options: [
      'Determinar la moda',
      'Ver si los datos son normales',
      'Ver correlaciones',
      'Comparar variabilidad entre variables con diferentes escalas'
    ],
    answer: 'Comparar variabilidad entre variables con diferentes escalas'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el propósito principal de un gráfico de dispersión?',
    options: [
      'Observar relaciones entre dos variables numéricas',
      'Identificar la moda',
      'Mostrar datos categóricos',
      'Mostrar valores faltantes'
    ],
    answer: 'Observar relaciones entre dos variables numéricas'
  },
  {
    type: 'multiple',
    question: '¿Qué valor representa el percentil 75?',
    options: ['Q1', 'Media', 'Q3', 'Mediana'],
    answer: 'Q3'
  },
  {
    type: 'multiple',
    question: '¿Qué mide la varianza?',
    options: [
      'Tendencia central',
      'Dispersión respecto a la media',
      'Frecuencia absoluta',
      'Relación entre variables'
    ],
    answer: 'Dispersión respecto a la media'
  },
  {
    type: 'multiple',
    question: '¿Qué representa un IQR alto?',
    options: [
      'Que no hay valores atípicos',
      'Que los datos están muy dispersos en el 50% central',
      'Que todos los datos están cerca de la media',
      'Que la media es cero'
    ],
    answer: 'Que los datos están muy dispersos en el 50% central'
  },
  {
    type: 'multiple',
    question: 'Los datos semiestructurados se caracterizan por:',
    options: [
      'No tener ningún formato predefinido',
      'Usar etiquetas o metadatos para organizar la información (ej: JSON, XML)',
      'Requerir siempre bases de datos relacionales',
      'Ser exclusivamente numéricos'
    ],
    answer:
      'Usar etiquetas o metadatos para organizar la información (ej: JSON, XML)'
  },
  {
    type: 'multiple',
    question: 'Una matriz de correlación no detecta bien:',
    options: [
      'Correlaciones positivas',
      'Correlaciones negativas',
      'Relaciones no lineales',
      'Variables redundantes'
    ],
    answer: 'Relaciones no lineales'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes es una representación visual de una matriz de correlación?',
    options: ['Diagrama de barras', 'Boxplot', 'Histograma', 'Mapa de calor'],
    answer: 'Mapa de calor'
  },
  {
    type: 'multiple',
    question: 'Un histograma sirve para:',
    options: [
      'Comparar dos atributos categóricos',
      'Mostrar la distribución de una variable continua',
      'Visualizar relaciones lineales',
      'Visualizar outliers'
    ],
    answer: 'Mostrar la distribución de una variable continua'
  },
  {
    type: 'multiple',
    question: '¿Cuál de las siguientes no es una medida de dispersión?',
    options: ['Desviación estándar', 'Varianza', 'Rango', 'Moda'],
    answer: 'Moda'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes técnicas es adecuada para visualizar outliers?',
    options: [
      'Histograma',
      'Gráfico de líneas',
      'Boxplot',
      'Diagrama de pastel'
    ],
    answer: 'Boxplot'
  },
  {
    type: 'multiple',
    question: 'Si la desviación estándar es baja, significa que:',
    options: [
      'Hay muchos outliers',
      'Los datos están cerca de la media',
      'Los datos son categóricos',
      'Hay datos perdidos'
    ],
    answer: 'Los datos están cerca de la media'
  },
  {
    type: 'multiple',
    question:
      'En la relación entre tarifa y supervivencia del Titanic, ¿por qué la correlación no refleja completamente la relación?',
    options: [
      'Porque la muestra es muy pequeña',
      'Porque todos los sobrevivientes pagaron igual',
      'Porque la relación no es perfectamente lineal',
      'Porque no hay relación'
    ],
    answer: 'Porque la relación no es perfectamente lineal'
  },
  {
    type: 'multiple',
    question: '¿Qué mide una frecuencia relativa?',
    options: [
      'El número absoluto de repeticiones',
      'El valor máximo de una categoría',
      'La proporción respecto al total de observaciones',
      'El promedio de frecuencias'
    ],
    answer: 'La proporción respecto al total de observaciones'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál sería una herramienta adecuada para analizar la relación entre edad, tarifa y supervivencia?',
    options: ['Histograma', 'Boxplot', 'Gráfico de dispersión', 'Media y moda'],
    answer: 'Gráfico de dispersión'
  },
  {
    type: 'multiple',
    question: '¿Qué describe mejor un conjunto de datos multimodal?',
    options: [
      'Tiene más de una media',
      'Tiene alta desviación estándar',
      'Tiene valores negativos',
      'Tiene más de una moda'
    ],
    answer: 'Tiene más de una moda'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el objetivo principal de la limpieza de datos en machine learning?',
    options: [
      'Reducir el tamaño del dataset',
      'Mejorar la calidad y precisión de los modelos',
      'Eliminar columnas irrelevantes',
      'Crear modelos más complejos'
    ],
    answer: 'Mejorar la calidad y precisión de los modelos'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de valor faltante no depende de ninguna variable observada?',
    options: ['MAR', 'MCAR', 'NMAR', 'Outlier'],
    answer: 'MCAR'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes estrategias no es una técnica válida para tratar valores faltantes?',
    options: [
      'Eliminación de columnas',
      'Imputación con la mediana',
      'Recolección manual de datos',
      'Agrupamiento jerárquico'
    ],
    answer: 'Agrupamiento jerárquico'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de ausencia ocurre cuando los valores faltantes dependen de la variable misma?',
    options: ['MAR', 'MCAR', 'NMAR', 'Outlier'],
    answer: 'NMAR'
  },
  {
    type: 'multiple',
    question:
      '¿En qué situación es apropiado usar la eliminación por lista completa (listwise deletion)?',
    options: [
      'Cuando hay muchos valores faltantes',
      'Cuando los datos son NMAR',
      'Cuando los datos son MCAR y el porcentaje de valores faltantes es bajo',
      'Cuando se usa aprendizaje no supervisado'
    ],
    answer:
      'Cuando los datos son MCAR y el porcentaje de valores faltantes es bajo'
  },
  {
    type: 'multiple',
    question:
      '¿Qué ventaja tiene la eliminación por pares (pairwise deletion)?',
    options: [
      'Siempre es más precisa',
      'Es mejor que cualquier imputación',
      'Aprovecha más datos al usar subconjuntos para cada análisis',
      'Funciona solo con datos categóricos'
    ],
    answer: 'Aprovecha más datos al usar subconjuntos para cada análisis'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una desventaja de la eliminación por lista completa?',
    options: [
      'Es difícil de implementar',
      'No permite usar visualizaciones',
      'Puede reducir significativamente el tamaño del dataset',
      'Introduce outliers'
    ],
    answer: 'Puede reducir significativamente el tamaño del dataset'
  },
  {
    type: 'multiple',
    question:
      '¿Qué método elimina directamente variables con alto porcentaje de valores faltantes?',
    options: [
      'Listwise deletion',
      'Column deletion',
      'Pairwise deletion',
      'Imputación por moda'
    ],
    answer: 'Column deletion'
  },
  {
    type: 'multiple',
    question: 'La imputación por la media es preferible cuando:',
    options: [
      'La distribución no está sesgada',
      'Hay múltiples modas',
      'Los datos son categóricos',
      'Hay alta correlación'
    ],
    answer: 'La distribución no está sesgada'
  },
  {
    type: 'multiple',
    question:
      '¿Qué medida de tendencia central es más adecuada para datos con outliers?',
    options: ['Media', 'Mediana', 'Moda', 'Rango'],
    answer: 'Mediana'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de imputación es más adecuada para variables categóricas?',
    options: ['Media', 'Mediana', 'Moda', 'Rango'],
    answer: 'Moda'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una desventaja común de la imputación simple?',
    options: [
      'Aumenta la varianza',
      'Reduce la variabilidad del dataset',
      'No se puede aplicar en Python',
      'Es muy costosa computacionalmente'
    ],
    answer: 'Reduce la variabilidad del dataset'
  },
  {
    type: 'multiple',
    question: '¿Qué representa un patrón MAR?',
    options: [
      'Valores faltantes sin causa conocida',
      'Valores faltantes relacionados con otras variables observadas',
      'Valores que no dependen de ninguna variable',
      'Valores creados artificialmente'
    ],
    answer: 'Valores faltantes relacionados con otras variables observadas'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de gráfico es útil para detectar patrones visuales en valores faltantes?',
    options: [
      'Diagrama de barras',
      'Boxplot',
      'Histograma',
      'Mapa de calor (heatmap)'
    ],
    answer: 'Mapa de calor (heatmap)'
  },
  {
    type: 'multiple',
    question: '¿Cuál de estas afirmaciones es falsa?',
    options: [
      'Listwise deletion elimina filas completas',
      'Pairwise deletion calcula con pares de variables',
      'Column deletion conserva las columnas con muchos faltantes',
      'Imputación simple puede introducir sesgo'
    ],
    answer: 'Column deletion conserva las columnas con muchos faltantes'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de valores faltantes presenta la variable "embarked" según el análisis del Titanic?',
    options: ['NMAR', 'MAR', 'MCAR', 'No se puede determinar'],
    answer: 'MAR'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de los siguientes métodos no permite conservar la estructura general del dataset?',
    options: [
      'Pairwise deletion',
      'Imputación simple',
      'Column deletion',
      'Imputación por la moda'
    ],
    answer: 'Column deletion'
  },
  {
    type: 'multiple',
    question: '¿Qué técnica puede reducir el "ruido" en el análisis?',
    options: [
      'Listwise deletion',
      'Imputación por media',
      'Column deletion',
      'Pairwise deletion'
    ],
    answer: 'Column deletion'
  },
  {
    type: 'multiple',
    question: '¿Cuál es la ventaja principal de la imputación simple?',
    options: [
      'Simplicidad y facilidad de implementación',
      'Alta precisión',
      'Reducción del sesgo',
      'Preservación de correlaciones'
    ],
    answer: 'Simplicidad y facilidad de implementación'
  },
  {
    type: 'multiple',
    question:
      'En un dataset donde una variable tiene más del 50% de valores faltantes irrelevantes, la acción recomendada es:',
    options: [
      'Imputar con la media',
      'Imputar con valores aleatorios',
      'Hacer normalización',
      'Eliminar la columna'
    ],
    answer: 'Eliminar la columna'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica genera varios valores posibles para cada dato faltante?',
    options: [
      'Imputación simple',
      'Imputación múltiple',
      'Eliminación por pares',
      'Relleno por interpolación'
    ],
    answer: 'Imputación múltiple'
  },
  {
    type: 'multiple',
    question:
      '¿Qué ventaja tiene la imputación múltiple sobre la imputación simple?',
    options: [
      'Es más fácil de aplicar',
      'Reduce el sesgo e incorpora incertidumbre',
      'Usa solo la mediana',
      'No requiere modelos predictivos'
    ],
    answer: 'Reduce el sesgo e incorpora incertidumbre'
  },
  {
    type: 'multiple',
    question:
      '¿Qué herramienta de Scikit-learn se usa para realizar imputación múltiple iterativa?',
    options: [
      'SimpleImputer',
      'KNNImputer',
      'IterativeImputer',
      'MultipleFill'
    ],
    answer: 'IterativeImputer'
  },
  {
    type: 'multiple',
    question:
      'En el proceso del IterativeImputer, ¿cuál es el modelo predeterminado que se utiliza?',
    options: [
      'LinearRegression',
      'BayesianRidge',
      'DecisionTree',
      'GradientBoosting'
    ],
    answer: 'BayesianRidge'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una causa común para la aparición de outliers?',
    options: [
      'Datos perfectamente limpios',
      'Errores de medición o registros excepcionales',
      'Falta de etiquetas',
      'Normalización de datos'
    ],
    answer: 'Errores de medición o registros excepcionales'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica consiste en limitar los valores extremos a ciertos percentiles?',
    options: [
      'Boxplot',
      'Eliminación',
      'Capping (winsorizing)',
      'Imputación múltiple'
    ],
    answer: 'Capping (winsorizing)'
  },
  {
    type: 'multiple',
    question: '¿Qué gráfico permite identificar outliers de manera visual?',
    options: [
      'Mapa de calor',
      'Histograma apilado',
      'Boxplot',
      'Diagrama de dispersión circular'
    ],
    answer: 'Boxplot'
  },
  {
    type: 'multiple',
    question: '¿Qué define un outlier según el método de cuartiles e IQR?',
    options: [
      'Media ± 3 * desviación estándar',
      'Percentil 90',
      'Fuera del rango Q1 - 1.5IQR a Q3 + 1.5IQR',
      'Mínimo y máximo'
    ],
    answer: 'Fuera del rango Q1 - 1.5IQR a Q3 + 1.5IQR'
  },
  {
    type: 'multiple',
    question: '¿Qué suposición hace el algoritmo de envolvente elíptica?',
    options: [
      'Distribución uniforme',
      'Distribución categórica',
      'Distribución normal multivariada',
      'Distribución binomial'
    ],
    answer: 'Distribución normal multivariada'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una herramienta de Scikit-learn para detectar outliers multivariados?',
    options: [
      'IsolationForest',
      'EllipticEnvelope',
      'DBSCAN',
      'PCAOutlierDetector'
    ],
    answer: 'EllipticEnvelope'
  },
  {
    type: 'multiple',
    question: '¿Qué devuelve el método decision_function en EllipticEnvelope?',
    options: [
      'Una puntuación de distancia respecto al límite de decisión',
      'La media imputada',
      'Una matriz de correlación',
      'Una visualización de boxplot'
    ],
    answer: 'Una puntuación de distancia respecto al límite de decisión'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una estrategia válida frente a los outliers?',
    options: [
      'Sustitución por 0',
      'Eliminar columnas completas',
      'Imputación por mediana',
      'Agrupamiento jerárquico'
    ],
    answer: 'Imputación por mediana'
  },
  {
    type: 'multiple',
    question:
      '¿Qué ocurre si imputamos valores ausentes con la media cuando los datos están sesgados?',
    options: [
      'Mejora la precisión',
      'Se vuelve MCAR',
      'Se distorsiona la distribución',
      'Nada, es indiferente'
    ],
    answer: 'Se distorsiona la distribución'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es una desventaja de la imputación simple mostrada con la variable "edad"?',
    options: [
      'Es costosa computacionalmente',
      'Cambia la forma de la distribución',
      'No funciona con variables numéricas',
      'Elimina valores únicos'
    ],
    answer: 'Cambia la forma de la distribución'
  },
  {
    type: 'multiple',
    question: '¿Qué transformación convierte categorías en columnas binarias?',
    options: [
      'Codificación ordinal',
      'One-hot encoding',
      'Escalado robusto',
      'Codificación inversa'
    ],
    answer: 'One-hot encoding'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es un riesgo de codificar variables nominales con números enteros?',
    options: [
      'Se pierde memoria',
      'Mejora la precisión',
      'El modelo puede asumir una relación ordinal falsa',
      'Aumenta la varianza'
    ],
    answer: 'El modelo puede asumir una relación ordinal falsa'
  },
  {
    type: 'multiple',
    question: '¿Cuándo se recomienda codificación ordinal?',
    options: [
      'Para variables categóricas con un orden natural',
      'Para variables numéricas',
      'En todas las variables',
      'Solo en variables binarias'
    ],
    answer: 'Para variables categóricas con un orden natural'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica asigna un número basado en la frecuencia de aparición de una categoría?',
    options: [
      'Codificación ordinal',
      'One-hot encoding',
      'Codificación por frecuencia',
      'Agrupamiento supervisado'
    ],
    answer: 'Codificación por frecuencia'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es la ventaja de la codificación one-hot frente a la ordinal para datos nominales?',
    options: [
      'Reduce dimensiones',
      'Evita introducir un orden artificial',
      'Es más precisa con números enteros',
      'No necesita interpretación'
    ],
    answer: 'Evita introducir un orden artificial'
  },
  {
    type: 'multiple',
    question:
      '¿Qué transformación se recomienda si una variable nominal tiene muchas categorías?',
    options: [
      'Codificación por frecuencia',
      'Normalización',
      'One-hot encoding',
      'Eliminación directa'
    ],
    answer: 'Codificación por frecuencia'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el objetivo principal de la normalización de atributos en aprendizaje automático?',
    options: [
      'Reducir el número de columnas',
      'Aumentar la varianza',
      'Colocar los atributos en una escala común',
      'Eliminar valores atípicos'
    ],
    answer: 'Colocar los atributos en una escala común'
  },
  {
    type: 'multiple',
    question: '¿Qué método se utiliza en Python para aplicar Min-Max Scaling?',
    options: [
      'OneHotEncoder',
      'LabelEncoder',
      'MinMaxScaler',
      'VarianceScaler'
    ],
    answer: 'MinMaxScaler'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes afirmaciones describe mejor la estandarización Z-Score?',
    options: [
      'Escala los datos entre 0 y 1',
      'Genera una media de 0 y desviación estándar de 1',
      'Utiliza codificación categórica',
      'Agrupa los valores en intervalos'
    ],
    answer: 'Genera una media de 0 y desviación estándar de 1'
  },
  {
    type: 'multiple',
    question:
      '¿En qué caso es más apropiado aplicar la normalización en lugar de la estandarización?',
    options: [
      'Cuando las variables tienen media cero',
      'Cuando los datos son gaussianos',
      'Cuando las variables tienen rangos muy dispares',
      'Cuando no hay outliers'
    ],
    answer: 'Cuando las variables tienen rangos muy dispares'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica transforma datos para tener media cero y desviación estándar uno?',
    options: [
      'Normalización',
      'Estandarización',
      'Discretización',
      'Codificación ordinal'
    ],
    answer: 'Estandarización'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una desventaja del test de Chi-cuadrado?',
    options: [
      'Funciona con datos continuos',
      'No permite reducción de dimensionalidad',
      'No captura relaciones no lineales',
      'Requiere transformación de datos numéricos a categóricos'
    ],
    answer: 'No captura relaciones no lineales'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica permite eliminar características con valores casi constantes?',
    options: ['PCA', 'Chi-cuadrado', 'VarianceThreshold', 'MinMaxScaler'],
    answer: 'VarianceThreshold'
  },
  {
    type: 'multiple',
    question: '¿Cuál es un ejemplo de extracción de características?',
    options: [
      'Eliminar columnas con baja varianza',
      'Calcular la tarifa por persona a partir del total del pasaje',
      'Seleccionar columnas por correlación',
      'Codificar una variable categórica'
    ],
    answer: 'Calcular la tarifa por persona a partir del total del pasaje'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica permite crear nuevas variables mediante la combinación de columnas?',
    options: [
      'Selección de atributos',
      'Extracción de características',
      'PCA',
      'Estandarización'
    ],
    answer: 'Extracción de características'
  },
  {
    type: 'multiple',
    question:
      '¿Qué se recomienda cuando hay atributos numéricos con diferentes unidades?',
    options: [
      'Codificarlos como categóricos',
      'Estandarizarlos',
      'Eliminarlos',
      'Aplicar Chi-cuadrado'
    ],
    answer: 'Estandarizarlos'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el principal objetivo del PCA?',
    options: [
      'Estandarizar datos',
      'Agrupar datos en categorías',
      'Reducir la dimensionalidad manteniendo la mayor información posible',
      'Eliminar outliers'
    ],
    answer:
      'Reducir la dimensionalidad manteniendo la mayor información posible'
  },
  {
    type: 'multiple',
    question:
      '¿Qué atributo del dataset Titanic se menciona como difícil de interpretar y recomendable eliminar?',
    options: ['Clase', 'Edad', 'Ticket', 'Tarifa'],
    answer: 'Ticket'
  },
  {
    type: 'multiple',
    question: '¿Qué significa discretización?',
    options: [
      'Eliminar valores extremos',
      'Convertir variables continuas en intervalos',
      'Normalizar los datos',
      'Agrupar variables categóricas'
    ],
    answer: 'Convertir variables continuas en intervalos'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de codificación se aplica cuando una variable no es ordinal?',
    options: [
      'Codificación ordinal',
      'One Hot Encoder',
      'Label Encoder',
      'Codificación numérica'
    ],
    answer: 'One Hot Encoder'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el propósito de la ingeniería de características?',
    options: [
      'Seleccionar los mejores modelos',
      'Mejorar el rendimiento del modelo con nuevas variables',
      'Validar datos perdidos',
      'Estandarizar los datos'
    ],
    answer: 'Mejorar el rendimiento del modelo con nuevas variables'
  },
  {
    type: 'multiple',
    question: '¿Qué problema puede causar la multicolinealidad?',
    options: [
      'Overfitting',
      'Mejora del rendimiento',
      'Inestabilidad en modelos',
      'Reducción de dimensionalidad'
    ],
    answer: 'Inestabilidad en modelos'
  },
  {
    type: 'multiple',
    question:
      '¿Qué métrica se usa en Chi-cuadrado para evaluar relación entre atributos?',
    options: ['Varianza', 'p-valor', 'Error cuadrático', 'Score F1'],
    answer: 'p-valor'
  },
  {
    type: 'multiple',
    question:
      '¿Qué se debe hacer con variables únicas por registro como identificadores?',
    options: ['Agruparlas', 'Eliminarlas', 'Codificarlas', 'Estandarizarlas'],
    answer: 'Eliminarlas'
  },
  {
    type: 'multiple',
    question:
      '¿Qué método es útil para seleccionar atributos con alta relación con la variable objetivo?',
    options: ['PCA', 'Chi-cuadrado', 'Normalización', 'One Hot Encoder'],
    answer: 'Chi-cuadrado'
  },
  {
    type: 'multiple',
    question: '¿Qué describe mejor la técnica de binning?',
    options: [
      'Agrupar columnas',
      'Categorizar valores numéricos en rangos',
      'Codificar categorías',
      'Reducir columnas redundantes'
    ],
    answer: 'Categorizar valores numéricos en rangos'
  },
  {
    type: 'multiple',
    question: '¿Cuál es uno de los requisitos previos para aplicar PCA?',
    options: [
      'Soporta datos faltantes',
      'Requiere datos numéricos y sin valores faltantes',
      'Funciona mejor con variables categóricas',
      'Se aplica directamente a datos brutos'
    ],
    answer: 'Requiere datos numéricos y sin valores faltantes'
  },
  {
    type: 'multiple',
    question: '¿Qué representa cada valor propio en PCA?',
    options: [
      'Una media de los datos originales',
      'La cantidad de varianza explicada por un componente',
      'La media de cada componente',
      'El ruido del conjunto de datos'
    ],
    answer: 'La cantidad de varianza explicada por un componente'
  },
  {
    type: 'multiple',
    question:
      '¿Qué herramienta de Python se utiliza para calcular valores y vectores propios?',
    options: [
      'pandas.eigen',
      'numpy.linalg.eig',
      'sklearn.pca.decompose',
      'math.linear'
    ],
    answer: 'numpy.linalg.eig'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el objetivo principal del PCA?',
    options: [
      'Incrementar la varianza de los datos',
      'Reducir la dimensionalidad conservando la información',
      'Aumentar el número de características',
      'Separar datos en clústeres'
    ],
    answer: 'Reducir la dimensionalidad conservando la información'
  },
  {
    type: 'multiple',
    question:
      '¿Qué porcentaje de varianza se considera generalmente suficiente para no perder información en PCA?',
    options: ['85%', '70%', '95%', '50%'],
    answer: '95%'
  },
  {
    type: 'multiple',
    question: '¿Qué representa la matriz de covarianza en PCA?',
    options: [
      'La matriz de distancias',
      'Las relaciones lineales entre atributos',
      'Una transformación de Fourier',
      'La matriz de decisión'
    ],
    answer: 'Las relaciones lineales entre atributos'
  },
  {
    type: 'multiple',
    question:
      '¿Qué sucede si no dividimos los datos para entrenamiento, validación y prueba?',
    options: [
      'El modelo mejora su precisión',
      'Es imposible evaluar la capacidad de generalización',
      'Los hiperparámetros se optimizan',
      'Se reduce el sobreajuste'
    ],
    answer: 'Es imposible evaluar la capacidad de generalización'
  },
  {
    type: 'multiple',
    question: '¿Qué se debe evitar al dividir un dataset de series temporales?',
    options: [
      'Normalización',
      'División aleatoria',
      'Validación cruzada',
      'Codificación ordinal'
    ],
    answer: 'División aleatoria'
  },
  {
    type: 'multiple',
    question: '¿Qué representa el conjunto de validación?',
    options: [
      'Datos para entrenar',
      'Datos no vistos usados para ajustar hiperparámetros',
      'Datos finales de producción',
      'Datos ruidosos'
    ],
    answer: 'Datos no vistos usados para ajustar hiperparámetros'
  },
  {
    type: 'multiple',
    question:
      '¿Qué problema aparece cuando un modelo tiene un bajo desempeño en entrenamiento y validación?',
    options: ['Sobreajuste', 'Subajuste', 'Ruido', 'Generalización'],
    answer: 'Subajuste'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál de las siguientes afirmaciones es verdadera sobre el sobreajuste?',
    options: [
      'Se obtiene bajo error en entrenamiento y alto error en validación',
      'Aumenta la capacidad de generalización',
      'Se evita con modelos simples',
      'Mejora la precisión del modelo'
    ],
    answer: 'Se obtiene bajo error en entrenamiento y alto error en validación'
  },
  {
    type: 'multiple',
    question: '¿Qué indica un modelo con subajuste?',
    options: [
      'Tiene muchos parámetros',
      'No ha aprendido correctamente los patrones',
      'Memoriza los datos',
      'Tiene alta varianza'
    ],
    answer: 'No ha aprendido correctamente los patrones'
  },
  {
    type: 'multiple',
    question:
      '¿Qué conjunto de datos se menciona en el laboratorio para aplicar PCA?',
    options: ['Titanic', 'RT-IoT2022', 'Breast Cancer Wisconsin', 'MNIST'],
    answer: 'Breast Cancer Wisconsin'
  },
  {
    type: 'multiple',
    question: '¿Qué técnica debe aplicarse antes de usar PCA?',
    options: [
      'Min-Max scaling',
      'Codificación ordinal',
      'Estandarización de los datos',
      'Codificación one hot'
    ],
    answer: 'Estandarización de los datos'
  },
  {
    type: 'multiple',
    question:
      '¿Por qué es importante mantener la estratificación en la división de datos?',
    options: [
      'Para reducir ruido',
      'Para preservar la proporción de clases',
      'Para aumentar la precisión',
      'Para normalizar los datos'
    ],
    answer: 'Para preservar la proporción de clases'
  },
  {
    type: 'multiple',
    question: '¿Cuál es una buena proporción de división con muchos datos?',
    options: ['60/20/20', '50/30/20', '80/10/10', '70/15/15'],
    answer: '80/10/10'
  },
  {
    type: 'multiple',
    question:
      '¿Qué proceso incluye la matriz de covarianza y vectores propios?',
    options: [
      'Agrupamiento',
      'PCA',
      'Clasificación supervisada',
      'Árboles de decisión'
    ],
    answer: 'PCA'
  },
  {
    type: 'multiple',
    question: '¿Qué caracteriza a los vectores propios en PCA?',
    options: [
      'Definen el rango de los datos',
      'Definen los nuevos ejes del espacio transformado',
      'Representan la media',
      'Detectan valores atípicos'
    ],
    answer: 'Definen los nuevos ejes del espacio transformado'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el rol del conjunto de prueba?',
    options: [
      'Ajustar el modelo',
      'Optimizar la función de pérdida',
      'Evaluar el rendimiento final del modelo',
      'Preprocesar los datos'
    ],
    answer: 'Evaluar el rendimiento final del modelo'
  },
  {
    type: 'multiple',
    question: '¿Qué puede causar el sobreajuste?',
    options: [
      'Modelo lineal en datos lineales',
      'Entrenamiento excesivo y demasiados parámetros',
      'Dataset pequeño',
      'Eliminación de columnas'
    ],
    answer: 'Entrenamiento excesivo y demasiados parámetros'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el primer paso del flujo de trabajo en Machine Learning?',
    options: [
      'Procesamiento de datos',
      'Recolección de datos',
      'Formulación del problema',
      'Entrenamiento del modelo'
    ],
    answer: 'Recolección de datos'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el objetivo de la formulación del problema en ML?',
    options: [
      'Obtener métricas de precisión',
      'Traducir una necesidad empresarial en un problema de ML',
      'Elegir la métrica adecuada',
      'Clasificar el tipo de datos'
    ],
    answer: 'Traducir una necesidad empresarial en un problema de ML'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de problema es el de predecir si un pasajero del Titanic sobrevivió o no?',
    options: [
      'Clasificación multiclase',
      'Regresión',
      'Clustering',
      'Clasificación binaria'
    ],
    answer: 'Clasificación binaria'
  },
  {
    type: 'multiple',
    question:
      '¿Qué se debe definir para que una solución de ML esté alineada con los objetivos del negocio?',
    options: [
      'Dataset base',
      'Métrica de éxito empresarial cuantificable',
      'Variable latente',
      'Métrica F1'
    ],
    answer: 'Métrica de éxito empresarial cuantificable'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de problema es predecir niveles de CO2 en el aire?',
    options: [
      'Clasificación binaria',
      'Regresión',
      'Clustering',
      'Clasificación ordinal'
    ],
    answer: 'Regresión'
  },
  {
    type: 'multiple',
    question:
      '¿Qué conjunto de datos fue usado para segmentar a la población del Ecuador?',
    options: [
      'Calidad del aire',
      'Censo de población',
      'Titanic',
      'Diagnóstico de cáncer'
    ],
    answer: 'Censo de población'
  },
  {
    type: 'multiple',
    question:
      '¿Qué técnica se recomienda cuando los datos están dispersos en varios formatos y fuentes?',
    options: [
      'Estandarización',
      'Tokenización',
      'Armonización de datos',
      'Evaluación de atributos'
    ],
    answer: 'Armonización de datos'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de datos requieren valores positivos y negativos para predecir correctamente?',
    options: [
      'Continuos',
      'Discretos',
      'Etiquetados (como fraude/no fraude)',
      'Categóricos'
    ],
    answer: 'Continuos'
  },
  {
    type: 'multiple',
    question: '¿Qué ocurre si los datos son ruidosos o irrelevantes?',
    options: [
      'Aumenta la precisión',
      'El modelo no puede aprender correctamente',
      'Mejora el recall',
      'Mejora la regularización'
    ],
    answer: 'El modelo no puede aprender correctamente'
  },
  {
    type: 'multiple',
    question: '¿Qué implica la selección de características?',
    options: [
      'Generar atributos desde cero',
      'Elegir los atributos más relevantes',
      'Crear variables binarias',
      'Aumentar el tamaño del dataset'
    ],
    answer: 'Elegir los atributos más relevantes'
  },
  {
    type: 'multiple',
    question: '¿Cuál es el propósito de la ingeniería de características?',
    options: [
      'Transformar datos crudos en nuevas variables útiles',
      'Guardar los datos en la nube',
      'Calcular la varianza',
      'Reducir la dimensionalidad'
    ],
    answer: 'Transformar datos crudos en nuevas variables útiles'
  },
  {
    type: 'multiple',
    question:
      '¿Qué biblioteca de Python permite cargar archivos CSV y convertirlos en tablas?',
    options: ['Numpy', 'Matplotlib', 'Pandas', 'Seaborn'],
    answer: 'Pandas'
  },
  {
    type: 'multiple',
    question:
      '¿Qué archivo es necesario para conectar Google Colab con Google Drive?',
    options: [
      'credentials.json',
      'Autenticación con drive.mount',
      'settings.py',
      'token.json'
    ],
    answer: 'Autenticación con drive.mount'
  },
  {
    type: 'multiple',
    question:
      '¿Cuál es el formato más común de archivo de datos usado en el laboratorio?',
    options: ['.json', '.xml', '.xlsx', '.csv'],
    answer: '.csv'
  },
  {
    type: 'multiple',
    question:
      '¿Qué tipo de datos se usan para medir atributos como altura o peso?',
    options: ['Discretos', 'Continuos', 'Categóricos', 'Binarios'],
    answer: 'Continuos'
  },
  {
    type: 'multiple',
    question: '¿Qué tipo de datos categóricos tienen un orden inherente?',
    options: ['Nominales', 'Binarios', 'Ordinales', 'Continuos'],
    answer: 'Ordinales'
  },
  {
    type: 'multiple',
    question: '¿Cuál de los siguientes es un dato binario?',
    options: ['Número de hijos', 'Color favorito', 'Verdadero o Falso', 'Edad'],
    answer: 'Verdadero o Falso'
  },
  {
    type: 'multiple',
    question: '¿Qué paso sigue después de la evaluación de datos?',
    options: [
      'Entrenamiento',
      'Formulación del problema',
      'Ingeniería de características',
      'Segmentación de datos'
    ],
    answer: 'Ingeniería de características'
  },
  {
    type: 'multiple',
    question:
      '¿Qué afirmación representa el principio “garbage in, garbage out”?',
    options: [
      'Si usamos menos datos, el modelo es más preciso',
      'Si usamos datos discretos, la regresión mejora',
      'Si los datos son malos, el modelo será malo',
      'Si los datos son grandes, siempre funciona bien'
    ],
    answer: 'Si los datos son malos, el modelo será malo'
  },
  {
    type: 'multiple',
    question:
      '¿Qué parte del dataset Titanic representa un atributo categórico?',
    options: ['Fare', 'Age', 'Sex', 'PassengerId'],
    answer: 'Sex'
  },
  ...completeQuestions
]
