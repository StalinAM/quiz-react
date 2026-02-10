export const questions = {
  Unidad_1: [
    {
      type: 'complete',
      question: 'Blockchain es un ejemplo de criptografía de clave:',
      answer: 'Asimétrica'
    },
    {
      type: 'true-false',
      question:
        '¿Es la Criptografía la solución a todos los problemas de seguridad?',
      answer: 'Falso'
    },
    {
      type: 'complete',
      question: 'La Firma Electrónica es un ejemplo de criptografía de clave:',
      answer: 'Asimétrica'
    },
    {
      type: 'complete',
      question:
        'La Criptografía ______ es aquella en la que se emite una única clave entre emisor y receptor.',
      answer: 'Simétrica'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de los siguientes son Algoritmos de cifrado simétrico?',
      options: ['ECDSA', 'Blowfish', 'DSA', 'ElGamal', 'Serpent', 'FEAL'],
      answers: ['Blowfish', 'Serpent', 'FEAL']
    },
    {
      type: 'complete',
      question:
        'A la criptografía ______ se la conoce como Criptografía de clave pública.',
      answer: 'Asimétrica'
    },
    {
      type: 'single-choice',
      question:
        'Si se cifra el mensaje ESTO ES UNA PRUEBA con 3 filas, el criptograma será:',
      options: [
        'ETEUA REASO SNPUB',
        'ESRSU UTNEO ABEPA',
        'EOUPE SENRB TSAUA',
        'Ninguna de las respuestas es correcta',
        'EEAES SPBTU RAONU'
      ],
      answer: 'EOUPE SENRB TSAUA'
    },
    {
      type: 'single-choice',
      question: 'En el cifrado por filas:',
      options: [
        'Ninguna de las respuestas es correcta',
        'Se escribe el texto en claro por columnas y se lee al revés',
        'Se escribe el texto en claro por columnas y se lee por filas',
        'Se escribe el texto en claro por filas y se lee por columnas',
        'Se escribe el texto en claro por filas y se lee en saltos de dos'
      ],
      answer: 'Se escribe el texto en claro por columnas y se lee por filas'
    },
    {
      type: 'single-choice',
      question: 'Es un área que se dedica al estudio de ocultar datos:',
      options: [
        'Criptoanálisis',
        'Todas las respuestas son correctas',
        'Criptología',
        'Esteganografía',
        'Criptografía'
      ],
      answer: 'Esteganografía'
    },
    {
      type: 'single-choice',
      question: '¿Cuál algoritmo tiene una clave de 32 bits?',
      options: [
        'Advanced Encryption Standard',
        'Triple Data Encryption Standard',
        'Ninguna de las opciones es correcta',
        'Data Encryption Standard'
      ],
      answer: 'Ninguna de las opciones es correcta'
    },
    {
      type: 'multiple-select',
      question: '¿Cuáles son Algoritmos de cifrado asimétrico?',
      options: [
        'Digital Signature Algorithm',
        'Taher ElGamal',
        'Data Encryption Algorithm',
        'Software-Optimized Encryption Algorithm',
        'Advanced Encryption Standard',
        'Diffie Hellman'
      ],
      answers: [
        'Digital Signature Algorithm',
        'Taher ElGamal',
        'Diffie Hellman'
      ]
    },
    {
      type: 'complete',
      question: '¿Cuál es el mensaje del criptograma NMHGKQTBK con clave UCE?',
      answer: 'HOLAMUNDO'
    },
    {
      type: 'single-choice',
      question:
        'Un cifrado en el que unidades de texto plano se sustituyen en diferentes series formando una tabla se conoce como:',
      options: [
        'Cifrado por Sustitución',
        'Cifrado de Vigenère',
        'Ninguna',
        'Cifrado por Transposición',
        'Cifrado por Libro'
      ],
      answer: 'Cifrado de Vigenère'
    },
    {
      type: 'true-false',
      question: 'Las Funciones Hash siempre tienen salida de longitud fija.',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question: '¿Cuál algoritmo tiene clave de 56 bits?',
      options: [
        'Ninguna',
        'Triple DES',
        'Data Encryption Standard',
        'Advanced Encryption Standard'
      ],
      answer: 'Data Encryption Standard'
    },
    {
      type: 'single-choice',
      question:
        'Un cifrado donde unidades de texto plano se reemplazan siguiendo un esquema definido se conoce como:',
      options: ['Transposición', 'Vigenère', 'Sustitución', 'Ninguna', 'Libro'],
      answer: 'Sustitución'
    },
    {
      type: 'complete',
      question: '¿Qué significan las siglas SHA?',
      answer: 'Secure Hash Algorithm'
    },
    {
      type: 'complete',
      question: '¿Qué significan las siglas SSL?',
      answer: 'Secure Sockets Layer'
    },
    {
      type: 'complete',
      question:
        'Un cifrado donde unidades de texto plano se cambian de posición se conoce como cifrado por:',
      answer: 'Transposición'
    },
    {
      type: 'complete',
      question:
        'Rama de la criptografía que estudia técnicas para romper códigos cifrados:',
      answer: 'Criptoanálisis'
    },
    {
      type: 'matching',
      question:
        'Técnica de cifrado que agrupa datos en grupos de longitud fija / Técnica de cifrado que agrupa datos en grupos de 1 bit o 1 byte',
      pairs: [
        {
          left: 'Técnica de cifrado que agrupa datos en grupos de longitud fija',
          answer: 'Block Cipher'
        },
        {
          left: 'Técnica de cifrado que agrupa datos en grupos de 1 bit o 1 byte',
          answer: 'Stream Cipher'
        }
      ]
    },
    {
      type: 'open-text',
      question:
        'En la Criptografía ______ el método de protección de la clave es fácilmente vulnerable, mientras que en la Criptografía ______ las claves tienen un código de encriptación que hace difícil romperlas.',
      answer: 'Simétrica / Asimétrica'
    },
    {
      type: 'matching',
      question: 'Asocie cada uno de los conceptos con su definición:',
      pairs: [
        {
          left: 'Criptografía',
          answer: 'Estudia técnicas y métodos para proteger la información'
        },
        {
          left: 'Esteganoanálisis',
          answer:
            'Estudia técnicas para detectar mensajes ocultos con esteganografía'
        },
        {
          left: 'Criptoanálisis',
          answer:
            'Estudia técnicas para descifrar un mensaje protegido con criptografía, explotando vulnerabilidades existentes en la protección de la información'
        },
        {
          left: 'Esteganografía',
          answer: 'Estudia técnicas para ocultar la existencia de un mensaje'
        }
      ]
    },
    {
      type: 'matching',
      question:
        'Empareje correctamente las características con el tipo de criptografía:',
      pairs: [
        {
          left: 'Usa cifrado complejo y es resistente a ataques de fuerza bruta',
          answer: 'Criptografía Asimétrica'
        },
        {
          left: 'Es actualmente débil frente a ataques cibernéticos',
          answer: 'Criptografía Simétrica'
        },
        {
          left: 'Es más lenta y requiere más capacidad de cómputo',
          answer: 'Criptografía Asimétrica'
        },
        {
          left: 'Es más rápida y utiliza menos recursos computacionales',
          answer: 'Criptografía Simétrica'
        },
        {
          left: 'Es más fácil de implementar',
          answer: 'Criptografía Simétrica'
        }
      ]
    },
    {
      type: 'single-choice',
      question: 'Es un área que se dedica al estudio de la escritura secreta',
      options: [
        'Criptografía',
        'Esteganografía',
        'Todas las respuestas son correctas',
        'Criptoanálisis',
        'Criptología'
      ],
      answer: 'Criptología'
    },
    {
      type: 'single-choice',
      question: 'En el cifrado por columnas:',
      options: [
        'Se escribe el texto en claro por columnas y se lee al revés',
        'Ninguna de las respuestas es correcta',
        'Se escribe el texto en claro por filas y se lee por columnas',
        'Se escribe el texto en claro por columnas y se lee por filas',
        'Se escribe el texto en claro por filas y se lee en saltos de dos'
      ],
      answer: 'Se escribe el texto en claro por filas y se lee por columnas'
    },
    {
      type: 'complete',
      question:
        'Kerberos es un protocolo que se basa en criptografía de clave: ______',
      answer: 'Simétrica'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes algoritmos tiene una clave con longitud de 32 bits?',
      options: [
        'Triple Data Encryption Standard',
        'Ninguna de las opciones es correcta',
        'Data Encryption Standard',
        'Advanced Encryption Standard'
      ],
      answer: 'Ninguna de las opciones es correcta'
    }
  ],

  Unidad_2: [
    {
      type: 'open-text',
      question: '¿A qué hacen referencia las siglas SHA?',
      answer: 'Secure Hash Algorithm'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes protocolos es históricamente el más utilizado para las comunicaciones en Internet?',
      options: [
        'SSH',
        'TCP/IP',
        'Ninguna de las respuestas es correcta',
        'HTTPS',
        'HTTP'
      ],
      answer: 'TCP/IP'
    },
    {
      type: 'open-text',
      question: '¿Qué significan las siglas TLS?',
      answer: 'Transport Layer Security'
    },
    {
      type: 'open-text',
      question:
        '¿Qué significan las siglas PLP en protección de redes inalámbricas?',
      answer: 'Packet Layer Protocol'
    },
    {
      type: 'open-text',
      question: '¿Qué significan las siglas DES?',
      answer: 'Data Encryption Standard'
    },
    {
      type: 'single-choice',
      question: '¿En qué capa del modelo OSI se encuentra IPsec?',
      options: ['Enlace', 'Transporte', 'Sesión', 'Red', 'Aplicación'],
      answer: 'Red'
    },
    {
      type: 'single-choice',
      question: '¿En qué capa del modelo OSI se encuentra SSL?',
      options: ['Enlace', 'Aplicación', 'Red', 'Sesión', 'Transporte'],
      answer: 'Transporte'
    },
    {
      type: 'open-text',
      question: '¿Qué significan las siglas EAP?',
      answer: 'Extensible Authentication Protocol'
    },
    {
      type: 'open-text',
      question:
        'Uno de los objetivos de los algoritmos criptográficos es proporcionar:',
      answer: 'Autenticación'
    },
    {
      type: 'true-false',
      question: 'AES es un ejemplo de algoritmo simétrico.',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question: '¿En qué capa del modelo OSI se encuentra EAP?',
      options: ['Enlace', 'Aplicación', 'Sesión', 'Transporte', 'Red'],
      answer: 'Enlace'
    },
    {
      type: 'true-false',
      question:
        'Los protocolos criptográficos garantizan la seguridad total de los datos en Internet.',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question: 'Diffie-Hellman es un ejemplo de algoritmo asimétrico.',
      answer: 'Verdadero'
    },
    {
      type: 'open-text',
      question:
        'A los algoritmos asimétricos también se los conoce como algoritmos de clave:',
      answer: 'Pública'
    },
    {
      type: 'single-choice',
      question: '¿En qué capa del modelo OSI se encuentra TLS?',
      options: ['Red', 'Transporte', 'Enlace', 'Sesión', 'Aplicación'],
      answer: 'Transporte'
    },
    {
      type: 'open-text',
      question:
        'A los algoritmos ______ también se los conoce como algoritmos de clave privada.',
      answer: 'Simétricos'
    },
    {
      type: 'true-false',
      question: 'MD5 es un ejemplo de función hash.',
      answer: 'Verdadero'
    },
    {
      type: 'true-false',
      question:
        'Los protocolos criptográficos impiden a usuarios no autorizados acceder a datos en una red.',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question: '¿En qué capa del modelo OSI se encuentra AKA?',
      options: ['Sesión', 'Transporte', 'Aplicación', 'Enlace', 'Red'],
      answer: 'Enlace'
    },
    {
      type: 'open-text',
      question: '¿A qué apellidos hacen referencia las siglas RSA?',
      answer: 'Rivest Shamir Adleman'
    },
    {
      type: 'single-choice',
      question:
        '¿En cuál de las siguientes capas del modelo OSI se encuentra el Protocolo AKA?',
      options: ['Red', 'Sesión', 'Transporte', 'Aplicación', 'Enlace'],
      answer: 'Enlace'
    }
  ],

  Unidad_3: [
    {
      type: 'single-choice',
      question:
        'Después de hackear sin autorización los sistemas de cajeros automáticos y luego colaborar para corregir vulnerabilidades, ¿qué tipo de atacante es?',
      options: [
        'White Hat',
        'Hacktivist',
        'Script Kiddie',
        'Gray Hat',
        'Black Hat'
      ],
      answer: 'Gray Hat'
    },
    {
      type: 'open-text',
      question:
        'La ............... es el conjunto de acciones que garantiza la modificación de los datos por parte de procesos y/o personas autorizadas.',
      answer: 'Integridad'
    },
    {
      type: 'single-choice',
      question: '¿Cuál es el objetivo principal de la informática forense?',
      options: [
        'Diseñar sistemas operativos más eficientes',
        'Optimizar el rendimiento de redes empresariales',
        'Desarrollar aplicaciones para la protección de datos personales',
        'Analizar, preservar y presentar evidencia digital para investigaciones legales',
        'Recuperar datos eliminados accidentalmente'
      ],
      answer:
        'Analizar, preservar y presentar evidencia digital para investigaciones legales'
    },
    {
      type: 'single-choice',
      question: '¿Cuál es el principal objetivo de un hacker ético?',
      options: [
        'Bloquear sistemas de manera preventiva',
        'Robar datos de empresas competidoras',
        'Desarrollar software malicioso para pruebas',
        'Identificar y corregir vulnerabilidades en los sistemas'
      ],
      answer: 'Identificar y corregir vulnerabilidades en los sistemas'
    },
    {
      type: 'single-choice',
      question:
        'Un atacante que roba información de tarjetas de crédito para venderla es:',
      options: [
        'Script Kiddie',
        'Gray Hat',
        'Hacktivist',
        'Black Hat',
        'White Hat'
      ],
      answer: 'Black Hat'
    },
    {
      type: 'open-text',
      question:
        'El proceso que garantiza el acceso y uso del sistema por parte del usuario se conoce como:',
      answer: 'Autorización'
    },
    {
      type: 'open-text',
      question:
        'Cuando un atacante sigue rápidamente a una persona autorizada para ingresar sin autorización a un lugar físico seguro, se llama:',
      answer: 'Tailgating'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué debe hacer para asegurarse de que las personas con las que comparte equipos informáticos no tengan acceso a sus datos seguros?',
      options: [
        'Activar y configurar el Firewall',
        'Proteger los datos con una contraseña',
        'Ninguna de las respuestas es correcta',
        'Instalar un Antivirus',
        'Configurar la privacidad de su navegador'
      ],
      answer: 'Proteger los datos con una contraseña'
    },
    {
      type: 'single-choice',
      question:
        '¿Por qué las amenazas internas pueden causar más daño que las externas?',
      options: [
        'Los usuarios internos tienen mejores conocimientos de hacking ético',
        'Los usuarios internos pueden acceder sin autenticación',
        'Ninguna de las respuestas es correcta',
        'Acceden por Internet',
        'Tienen acceso directo a la infraestructura tecnológica'
      ],
      answer: 'Tienen acceso directo a la infraestructura tecnológica'
    },
    {
      type: 'open-text',
      question:
        'Siglas del ataque que ocurre cuando un ciberdelincuente toma control de un dispositivo para interceptar información antes de enviarse:',
      answer: 'MitM'
    },
    {
      type: 'single-choice',
      question: '¿Cuál es un ejemplo de cómo se puede ocultar malware?',
      options: [
        'Ninguna de las respuestas es correcta',
        'Mejorar ranking de un sitio web',
        'Un botnet transporta información personal',
        'Enviar un correo con archivo adjunto que parece actualización de antivirus pero es spyware',
        'Ataque contra sitio web público'
      ],
      answer:
        'Enviar un correo con archivo adjunto que parece actualización de antivirus pero es spyware'
    },
    {
      type: 'true-false',
      question:
        'Si combinamos técnicas de seguridad informática, seguridad de la información y ciberseguridad podemos asegurar que el ambiente tecnológico es completamente seguro.',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tecnología evita que el malware supervise actividades y recopile información personal?',
      options: [
        'Firewall',
        'Autenticación de dos factores',
        'Todas las respuestas son correctas',
        'Gestor de contraseñas',
        'Antispyware'
      ],
      answer: 'Antispyware'
    },
    {
      type: 'multiple-select',
      question: '¿Cuáles métodos garantizan la confidencialidad? (Elija 3)',
      options: [
        'Autenticación de dos factores',
        'Encriptación de datos',
        'Control de versiones',
        'Configuración de permisos',
        'Usuario y contraseña',
        'Respaldos'
      ],
      answers: [
        'Autenticación de dos factores',
        'Encriptación de datos',
        'Usuario y contraseña'
      ]
    },
    {
      type: 'open-text',
      question:
        'Software que despliega anuncios falsos y recopila información del usuario:',
      answer: 'Adware'
    },
    {
      type: 'open-text',
      question:
        'Código malicioso que se replica aprovechando vulnerabilidades de red:',
      answer: 'Worm'
    },
    {
      type: 'open-text',
      question:
        'Malware que secuestra un sistema hasta que se realiza un pago:',
      answer: 'Ransomware'
    },
    {
      type: 'open-text',
      question:
        'Práctica de ingeniería social para ingresar a un área física restringida mediante engaño:',
      answer: 'Tailgating'
    },
    {
      type: 'open-text',
      question:
        'Complete: La Seguridad Informática protege la integridad y privacidad de los datos y equipos informáticos.',
      answer: 'Seguridad Informática'
    },
    {
      type: 'multiple-select',
      question: '¿Cuáles son estados de los datos? (Elija 3)',
      options: [
        'Almacenamiento',
        'UNICODE',
        'Transmisión',
        'Texto',
        'Binario',
        'ASCII',
        'Procesamiento'
      ],
      answers: ['Almacenamiento', 'Transmisión', 'Procesamiento']
    },
    {
      type: 'multiple_choice',
      question:
        '¿Cuál de las siguientes implementaciones de seguridad utiliza biometría? (Elija 2)',
      options: [
        'Tarjetas de crédito',
        'Teléfono Inteligente',
        'Token',
        'Huella dactilar',
        'Reconocimiento de voz'
      ],
      answers: ['Huella dactilar', 'Reconocimiento de voz']
    },
    {
      type: 'true-false',
      question:
        'La informática forense no es una rama de la ciberseguridad y de las ciencias forenses.',
      answer: 'Falso'
    },
    {
      type: 'open-text',
      question:
        'Técnica que consiste exclusivamente en el envío de SMS por parte de un ciberdelincuente, simulando ser una entidad legítima (banco, institución pública, etc.) con el objeto de robar información sensible:',
      answer: 'Smishing'
    },
    {
      type: 'open-text',
      question:
        'Técnica de estafa de malware que utiliza alertas de seguridad emergentes y otros trucos de ingeniería social para asustar al usuario y hacer que pague por software falso disfrazado de protección de ciberseguridad real:',
      answer: 'Scareware'
    },
    {
      type: 'single-choice',
      question:
        '¿Para qué son útiles las habilidades desarrolladas por los profesionales de la ciberseguridad?',
      options: [
        'Los profesionales desarrollan habilidades que sólo pueden ser utilizadas para el bien',
        'Ninguna de las respuestas es correcta',
        'Los profesionales desarrollan habilidades que no pueden utilizarse para hacer daño',
        'Los profesionales desarrollan habilidades que pueden ser utilizadas para hacer el bien o el mal',
        'Los profesionales desarrollan habilidades que sólo pueden usarse para hacer daño'
      ],
      answer:
        'Los profesionales desarrollan habilidades que pueden ser utilizadas para hacer el bien o el mal'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes es un área de la ciberseguridad que se dedica al estudio de ocultar datos?',
      options: [
        'Criptografía',
        'Esteganografía',
        'Ingeniería Forense',
        'Seguridad de la Información'
      ],
      answer: 'Esteganografía'
    },
    {
      type: 'open-text',
      question:
        'Se refiere a la penetración y ataque de los sistemas informáticos y las redes de un país con el objetivo de causar daños o interrumpir servicios básicos como electricidad o Internet:',
      answer: 'Ciberterrorismo'
    },
    {
      type: 'open-text',
      question:
        'Nos ayuda a detectar capacidades o acciones cibernéticas para identificar amenazas:',
      answer: 'Ciberinteligencia'
    },
    {
      type: 'open-text',
      question:
        'Siglas del ataque utilizado para tomar el control del dispositivo móvil de un usuario y exfiltrar información sensible:',
      answer: 'MitMo'
    },
    {
      type: 'open-text',
      question:
        'Al conjunto de acciones dirigidas contra bases de datos y redes de comunicaciones con el objetivo de robar datos se lo conoce como:',
      answer: 'Ciberataque'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tecnología de seguridad crea un token que permite a un usuario iniciar sesión en una aplicación web utilizando las credenciales de un sitio web de redes sociales?',
      options: [
        'Navegación privada',
        'Gestor de contraseñas',
        'Autorización abierta',
        'VPN',
        'IPS'
      ],
      answer: 'Autorización abierta'
    },
    {
      type: 'single-choice',
      question:
        '¿Cómo puede evitar que espíen el tráfico de la red cuando utiliza una computadora portátil en un punto de acceso Wi-Fi público?',
      options: [
        'Utilizando el cifrado WPA2',
        'Desactivando el Bluetooth',
        'Utilizando una VPN',
        'Ninguna de las respuestas es correcta',
        'Utilizando un gestor de contraseñas'
      ],
      answer: 'Utilizando una VPN'
    },
    {
      type: 'single-choice',
      question:
        '¿Cómo se llama un software escrito para aprovechar una vulnerabilidad de seguridad conocida?',
      options: ['Firewall', 'Exploit', 'Update', 'Antivirus'],
      answer: 'Exploit'
    },
    {
      type: 'open-text',
      question:
        'Un perfil de usuario en una red social es un ejemplo de un dato:',
      answer: 'Online'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes es la principal diferencia entre un hacker y un profesional de la ciberseguridad?',
      options: [
        'Los hackers sólo operan dentro de los límites legales',
        'Los hackers tienen habilidades especiales que los profesionales no tienen',
        'Ninguna de las respuestas es correcta',
        'Los profesionales de la ciberseguridad deben trabajar dentro de los límites legales',
        'Los profesionales no deben tener las mismas habilidades que los hackers'
      ],
      answer:
        'Los profesionales de la ciberseguridad deben trabajar dentro de los límites legales'
    },
    {
      type: 'single-choice',
      question:
        "De acuerdo con el siguiente ejemplo, identifique el tipo de atacante: 'Mientras realizaba una investigación, este atacante se topó con una vulnerabilidad de seguridad en la red de la organización a la que está autorizado a acceder'",
      options: [
        'White Hat',
        'Hacktivist',
        'Gray Hat',
        'Black Hat',
        'Script Kiddie'
      ],
      answer: 'White Hat'
    },
    {
      type: 'open-text',
      question:
        'Técnica que consiste en dejar abandonado un dispositivo infectado con software malicioso (USB, CD o teléfono móvil) en algún lugar para tentar a una víctima:',
      answer: 'Baiting'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles de las siguientes actividades son típicas de un hacker ético? (Elija 3)',
      options: [
        'Analizar vulnerabilidades de software',
        'Desarrollar exploits para mejorar la seguridad',
        'Compartir información confidencial con terceros',
        'Obtener acceso no autorizado a datos privados',
        'Realizar pruebas de penetración'
      ],
      answers: [
        'Realizar pruebas de penetración',
        'Analizar vulnerabilidades de software',
        'Desarrollar exploits para mejorar la seguridad'
      ]
    },
    {
      type: 'complete',
      question:
        '[______] son las siglas del ataque a la red que provoca interrupción del servicio de red a los usuarios, dispositivos o aplicaciones interconectadas.',
      answer: 'DoS'
    },
    {
      type: 'complete',
      question:
        'La seguridad [______] se encarga de la protección de los datos contra desastres naturales',
      answer: 'Física'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuál de las siguientes características describe a un gusano? (Elija 2)',
      options: [
        'Infecta los ordenadores mediante un software',
        'Se ejecuta cuando el software se ejecuta en un ordenador',
        'Se desplaza a nuevos ordenadores sin intervención ni conocimiento del usuario',
        'Se autorreplica',
        'Se esconde en estado pasivo'
      ],
      answers: [
        'Se desplaza a nuevos ordenadores sin intervención ni conocimiento del usuario',
        'Se autorreplica'
      ]
    },
    {
      type: 'open-text',
      question:
        'Un conjunto de cambios realizados en cualquier aplicación o sistema operativo con el objetivo de actualizarlo, arreglarlo o mejorarlo suele denominarse:',
      answer: 'Parche'
    },
    {
      type: 'single-choice',
      question:
        "De acuerdo con el siguiente ejemplo, identifique el tipo de atacante: 'Este atacante utiliza herramientas existentes en Internet para lanzar un ciberataque'",
      options: [
        'Gray Hat',
        'Black Hat',
        'Hacktivist',
        'Script Kiddie',
        'White Hat'
      ],
      answer: 'Script Kiddie'
    },
    {
      type: 'single-choice',
      question: 'Cuál de las siguientes áreas es parte de la ciberseguridad?',
      options: [
        'Seguridad Informática',
        'Todas las respuestas son correctas',
        'Ingeniería Social',
        'Criptografía',
        'Código Seguro'
      ],
      answer: 'Todas las respuestas son correctas'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles son los principios fundamentales de la Seguridad de la Información? (Elija 3)',
      options: [
        'Disponibilidad',
        'Confidencialidad',
        'Seguridad',
        'Integridad',
        'Intervención',
        'Escalabilidad',
        'Acceso'
      ],
      answers: ['Integridad', 'Disponibilidad', 'Confidencialidad']
    },
    {
      type: 'complete',
      question:
        'Al proceso de control de los tiempos y usuarios que han accedido a una aplicación, se lo conoce como [______]',
      answer: 'archivos de registro'
    },
    {
      type: 'true-false',
      question:
        'Un hacker ético debe obtener permiso antes de realizar pruebas en un sistema.',
      answer: 'Verdadero'
    },
    {
      type: 'complete',
      question:
        '______ es el proceso que garantiza la identidad de un usuario que accede al sistema.',
      answer: 'Autenticación'
    },
    {
      type: 'single-choice',
      question: '¿Cuál es el objetivo de la ciberseguridad?',
      options: [
        'Que personas no autorizadas accedan a los datos',
        'Mantener la confidencialidad, integridad y disponibilidad de los datos que existen de manera digital',
        'Ninguna de las respuestas es correcta',
        'Evitar ser hackeado',
        'Proteger todo tipo de dato'
      ],
      answer:
        'Mantener la confidencialidad, integridad y disponibilidad de los datos que existen de manera digital'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuál de los siguientes ejemplos se clasificarían como datos personales? (Elija 3)',
      options: [
        'Título universitario',
        'Cargo en el trabajo',
        'Número de cédula',
        'Número de historia clínica',
        'Fecha y lugar de nacimiento',
        'Dirección IP'
      ],
      answers: [
        'Número de cédula',
        'Número de historia clínica',
        'Fecha y lugar de nacimiento'
      ]
    },
    {
      type: 'matching',
      question:
        'Empareje las siguientes columnas relacionadas con evidencia digital:',
      pairs: [
        {
          left: 'Evidencia digital',
          answer:
            'Datos almacenados en dispositivos electrónicos que pueden ser utilizados en un proceso legal'
        },
        {
          left: 'Volcado de memoria',
          answer:
            'Técnica que permite capturar y analizar los datos de la RAM en un sistema'
        },
        {
          left: 'Cadena de custodia',
          answer:
            'Proceso para preservar la integridad de los datos desde su recolección hasta su presentación en un tribunal'
        },
        {
          left: 'Análisis forense',
          answer:
            'Proceso sistemático de examinar y extraer información relevante de dispositivos digitales'
        },
        {
          left: 'Hashing',
          answer:
            'Método utilizado para generar una firma única de un archivo o dato digital'
        }
      ]
    },
    {
      type: 'complete',
      question:
        'La seguridad ______ se encarga de la protección de los datos mediante el uso de técnicas criptográficas',
      answer: 'Lógica'
    },
    {
      type: 'matching',
      question:
        'Empareja cada término relacionado con hacking ético con su definición:',
      pairs: [
        {
          left: 'Grupo especializado en probar la seguridad de manera ofensiva',
          answer: 'Red Team'
        },
        {
          left: 'Ataque simulado para evaluar la seguridad de un sistema',
          answer: 'Pruebas de penetración'
        },
        {
          left: 'Hacker ético que trabaja para mejorar la seguridad',
          answer: 'White Hat'
        },
        {
          left: 'Hacker con intenciones maliciosas que actúa ilegalmente',
          answer: 'Black Hat'
        },
        {
          left: 'Técnica de ingeniería social para obtener información confidencial',
          answer: 'Phishing'
        }
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes conceptos hace referencia a las buenas prácticas de seguridad en el desarrollo de aplicaciones seguras?',
      options: [
        'Análisis de malware',
        'Todas las respuestas son correctas',
        'Código seguro',
        'Seguridad Informática',
        'Ciberinteligencia'
      ],
      answer: 'Código seguro'
    },
    {
      type: 'complete',
      question:
        'La cadena de ______ se encarga de preservar la integridad de una evidencia digital',
      answer: 'custodia'
    },
    {
      type: 'single-choice',
      question:
        "De acuerdo con el siguiente ejemplo, identifique el tipo de atacante: 'Este atacante transfirió 2 millones de dólares a su cuenta bancaria utilizando las credenciales de la cuenta y el PIN del cliente a las cuales tuvo acceso mediante las grabaciones del sistema de seguridad'",
      options: [
        'White Hat',
        'Black Hat',
        'Gray Hat',
        'Script Kiddie',
        'Hacktivist'
      ],
      answer: 'Black Hat'
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de los siguientes conceptos tiene que ver con la identificación e investigación de las características del software malicioso?',
      options: [
        'Antivirus',
        'Análisis de malware',
        'Seguridad Informática',
        'Ciberinteligencia'
      ],
      answer: 'Análisis de malware'
    }
  ],

  Unidad_4: [
    {
      type: 'single-choice',
      question: 'Una violación potencial de la seguridad es:',
      options: ['Incidente de seguridad', 'Vulnerabilidad', 'Amenaza'],
      answer: 'Amenaza'
    },
    {
      type: 'matching',
      question: 'Identifique el tipo de amenaza en cada caso:',
      pairs: [
        {
          left: 'Un empleado fue engañado para entregar información confidencial por alguien que simuló ser su gerente',
          answer: 'Amenaza Externa'
        },
        {
          left: 'Un ex-empleado pudo descargar archivos de clientes accediendo de forma remota a la red',
          answer: 'Amenaza Interna'
        },
        {
          left: 'Un empleado hizo clic en un enlace de correo',
          answer: 'Amenaza Interna'
        },
        {
          left: 'Un empleado permitió el ingreso de un desconocido a la empresa',
          answer: 'Amenaza Interna'
        },
        {
          left: 'Un atacante logra ingresar a la red de la empresa',
          answer: 'Amenaza Externa'
        },
        {
          left: 'Un proveedor de servicios ingresó información incorrecta en la base de datos',
          answer: 'Amenaza Interna'
        },
        {
          left: 'Un empleado conectó un USB infectado en su computador portátil del trabajo',
          answer: 'Amenaza Interna'
        }
      ]
    },
    {
      type: 'true-false',
      question:
        'Según la ISO 27040 seguridad es la probabilidad de que un sistema falle de tal manera que cause un daño.',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tecnología de seguridad utiliza comúnmente un trabajador remoto cuando accede a recursos de la red corporativa?',
      options: ['IPS', 'Antivirus', 'VPN', 'Acceso biométrico', 'Honeypot'],
      answer: 'VPN'
    },
    {
      type: 'single-choice',
      question:
        'Un ataque que se centra en las personas y no en la tecnología es:',
      options: ['Malware', 'Ingeniería Social', 'VPN', 'Acceso no autorizado'],
      answer: 'Ingeniería Social'
    },
    {
      type: 'true-false',
      question:
        'IPsec es un conjunto de protocolos cuya función es asegurar las comunicaciones sobre el TCP autenticando y/o cifrando cada paquete TCP.',
      answer: 'Falso'
    },
    {
      type: 'multiple-select',
      question: 'La arquitectura de las tecnologías PKI tienen:',
      options: [
        'Controladores de dominio que pueden autenticar a los usuarios finales y computadoras cuando solicitan certificados',
        'Ordenadores y usuarios clientes de dominio que solicitan, reciben y utilizan certificados',
        'La información de identificación del sujeto como nombre y correo electrónico'
      ],
      answers: [
        'Controladores de dominio que pueden autenticar a los usuarios finales y computadoras cuando solicitan certificados',
        'Ordenadores y usuarios clientes de dominio que solicitan, reciben y utilizan certificados'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Qué requisito de seguridad abarca la configuración de acceso para requerir autenticación antes de acceder a páginas web?',
      options: [
        'Escalabilidad',
        'Seguridad',
        'Confidencialidad',
        'Disponibilidad',
        'Integridad'
      ],
      answer: 'Confidencialidad'
    },
    {
      type: 'true-false',
      question:
        'Hay gastos ordinarios que tu compañía debe parar de pagar y renegociar como salarios y rentas.',
      answer: 'Falso'
    },
    {
      type: 'multiple-select',
      question: 'Aspectos a considerar para el intercambio de información:',
      options: [
        'Acuerdos de confidencialidad y secreto',
        'Mensajería electrónica',
        'Acuerdos de intercambio',
        'Transporte de activos'
      ],
      answers: [
        'Acuerdos de confidencialidad y secreto',
        'Mensajería electrónica',
        'Acuerdos de intercambio'
      ]
    },
    {
      type: 'true-false',
      question:
        'Confidencialidad es la prevención de la retención no autorizada de información o recursos.',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'Evidencia digital es cualquier documento o dato contenido en un soporte informático susceptible de tratamiento digital.',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cuáles políticas pertenecen al uso de los servicios de la red?',
      options: [
        'Control de Acceso',
        'Uso de Servicios de la Red',
        'Uso de la Red Inalámbrica (WIFI)',
        'Uso del Correo Electrónico Institucional',
        'Uso de Impresoras en Red'
      ],
      answers: [
        'Control de Acceso',
        'Uso de Servicios de la Red',
        'Uso de la Red Inalámbrica (WIFI)',
        'Uso del Correo Electrónico Institucional',
        'Uso de Impresoras en Red'
      ]
    },
    {
      type: 'single-choice',
      question:
        'Diseñado para proporcionar una fuerte autenticación para aplicaciones cliente/servidor mediante criptografía de clave secreta:',
      options: ['IPSec', 'Ninguna', 'VPN', 'Single Sign-On'],
      answer: 'Ninguna'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué equipo pone a prueba éticamente los sistemas de seguridad de una empresa?',
      options: [
        'Red Team',
        'Todas las respuestas son correctas',
        'Blue Team',
        'Dark Team'
      ],
      answer: 'Red Team'
    },
    {
      type: 'single-choice',
      question: '¿Cuál es el recurso más valioso de una organización?',
      options: [
        'Todas las respuestas son correctas',
        'Clientes',
        'Personal',
        'Datos',
        'Recursos financieros'
      ],
      answer: 'Datos'
    },
    {
      type: 'single-choice',
      question:
        'Herramienta escrita en Python que permite capturar hashes de credenciales en la misma red:',
      options: ['SAYCHEESE', 'STICKY KEYS', 'SEEKER', 'RESPONDER.PY'],
      answer: 'RESPONDER.PY'
    },
    {
      type: 'matching',
      question: 'Relaciona los conceptos:',
      pairs: [
        {
          left: 'Prueba y Certificación de los Planes BCP',
          answer:
            'La estrategia consiste en simular situaciones de contingencia'
        },
        {
          left: 'Business Impact Analysis (BIA)',
          answer: 'Identificación de procesos y funciones críticas'
        },
        {
          left: 'Estrategias de Mitigación',
          answer: 'Minimizar la probabilidad de interrupciones'
        },
        {
          left: 'Desarrollo de Planes de Contingencia',
          answer: 'Documento que incluye todas las unidades del negocio'
        }
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Qué término proporciona fuerte autenticación usando criptografía de clave secreta?',
      options: ['VPN', 'Kerberos', 'IPSec', 'Single Sign-On'],
      answer: 'Kerberos'
    },
    {
      type: 'single-choice',
      question: '¿Qué es hyperjacking?',
      options: [
        'Aumentar la velocidad de reloj de la red',
        'Agregar software desactualizado a una máquina virtual',
        'Usar procesadores de varias computadoras',
        'Todas las respuestas son correctas',
        'Tomar el control de un hipervisor de máquinas virtuales como parte de un ataque'
      ],
      answer:
        'Tomar el control de un hipervisor de máquinas virtuales como parte de un ataque'
    },
    {
      type: 'single-choice',
      question: 'Cuál de las siguientes NO es una función del Blue Team?',
      options: [
        'Educar al personal sobre las políticas de seguridad',
        'Documentar exactamente lo que debe proteger',
        'Identificar fallos de seguridad y/o vulnerabilidades',
        'Emular un ataque lo más realista y caótico posible',
        'Llevar a cabo una evaluación de riesgos'
      ],
      answer: 'Emular un ataque lo más realista y caótico posible'
    },
    {
      type: 'single-choice',
      question:
        '¿Qué tecnología se utiliza para proteger, monitorear y administrar dispositivos móviles?',
      options: [
        'Ninguna de las respuestas es correcta',
        'VPN',
        'ASA Firewall',
        'MDM',
        'rootkit'
      ],
      answer: 'MDM'
    },
    {
      type: 'true-false',
      question:
        'Un sistema PKI está basado en una información que el usuario conoce, como su contraseña, y un dispositivo externo que suele adoptar la forma de una tarjeta de crédito o una clave que el usuario puede tomar',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'Un objetivo específico de las políticas de seguridad es garantizar a los miembros de la comunidad de la Universidad Central que la información es debidamente asegurada',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        '¿Cómo proteger a los internos de las amenazas de la ingeniería social?',
      options: [
        'Los objetivos de un hacker de ingeniería social son similares a los de cualquier otro hacker: quieren el dinero, información o recursos...',
        'Los hackers de ingeniería social explotan la credulidad, la pereza, los buenos modales o incluso el entusiasmo de su personal...',
        'Si todos los procesos se ejecutaran con el menor conjunto de privilegios necesarios...'
      ],
      answers: [
        'Para atacar a su organización, los hackers de ingeniería social explotan la credulidad, la pereza, los buenos modales o incluso el entusiasmo de su personal...',
        'Los objetivos de un hacker de ingeniería social -alguien que intenta obtener acceso no autorizado a sus sistemas informáticos- son similares a los de cualquier otro hacker...'
      ]
    },
    {
      type: 'true-false',
      question:
        'En la etapa prematura de tu plan de recuperación, debes decidir dónde reanudarás las operaciones principales tu compañía. Una estrategia es no continuar en la zona perjudicada por el desastre',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        'A los usuarios no les gusta tener que autenticarse por separado en múltiples servidores y aplicaciones de red, por tanto utilizan',
      options: [
        'Single Sign-On',
        'Una firma digital',
        'Una autoridad de certificación',
        'Infraestructura PKI'
      ],
      answer: 'Single Sign-On'
    },
    {
      type: 'true-false',
      question:
        'En la política de seguridad de teletrabajo uno de los pasos del procedimiento dice que toda conexión que se genere en cualquier dispositivo debe estar asegurada por los administradores de la red mediante autenticación del perfil del trabajador',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question:
        'Capa de sockets seguros. Un protocolo desarrollado por Netscape Communications Corporation para garantizar la seguridad y la privacidad en las comunicaciones por Internet',
      options: ['SSH', 'Ninguno', 'IPSec', 'SSL/TLS'],
      answer: 'SSL/TLS'
    },
    {
      type: 'single-choice',
      question:
        'Las políticas de seguridad de la información son de gran importancia... pues pongan en riesgo la:',
      options: ['Integridad', 'Confiabilidad', 'Disponibiliad', 'TODAS'],
      answer: 'TODAS'
    },
    {
      type: 'multiple-select',
      question:
        'Para los traslados de soportes físicos, que procedimientos se debe seguir:',
      options: [
        'Mantener una lista de empresas de software autorizadas.',
        'Inicialmente se deberá contar con un procedimiento de cifrado de ser necesario',
        'Controlar los embalajes y las condiciones ambientales...',
        'Controlar la identificación de las empresas de software',
        'Registro de salida de los soportes para su cotejamiento con el transportista y lugar de destino...'
      ],
      answers: [
        'Registro de salida de los soportes para su cotejamiento con el transportista y el lugar de destino, incluyendo un control de tiempos de transporte',
        'Inicialmente se deberá contar con un procedimiento de cifrado de ser necesario',
        'Controlar los embalajes y las condiciones ambientales (Humedad, temperatura, etc.) con las especificaciones del medio de información'
      ]
    },
    {
      type: 'true-false',
      question:
        'Un delito informático es un número ilimitado de actos contra la confidencialidad, la integridad y la disponibilidad de los datos o sistemas informáticos',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question: 'Principio del menor privilegio es:',
      options: [
        'Los hackers de ingeniería social explotan la credulidad, la pereza...',
        'Si todos los procesos se ejecutaran con el menor conjunto de privilegios necesarios...',
        "Cualquiera que haya sido víctima de malware apreciará el principio de seguridad del 'menor privilegio'"
      ],
      answers: [
        "Cualquiera que haya sido víctima de virus, gusanos y otros programas maliciosos (malware) apreciará el principio de seguridad del 'menor privilegio'",
        'Si todos los procesos se ejecutaran con el menor conjunto de privilegios necesarios para realizar las tareas del usuario, sería más difícil que el software malicioso y molesto infectara una máquina y se propagara a otras'
      ]
    },
    {
      type: 'multiple-select',
      question: 'Servicio de Usuario de Autenticación Remota (RADIUS):',
      options: [
        'Originalmente desarrollado para el acceso remoto por marcación',
        'Proporciona un mecanismo utilizado para conectar, buscar y modificar directorios de Internet',
        'Soportado por servidores de VPN, puntos de acceso inalámbrico, autentificación de conmutadores...',
        'Es un protocolo ampliamente utilizado que permite la autenticación, autorización y contabilidad centralizadas'
      ],
      answers: [
        'Es un protocolo ampliamente utilizado que permite la autenticación, la autorización y la contabilidad centralizadas del acceso a la red',
        'Originalmente desarrollado para el acceso remoto por marcación',
        'Soportado por servidores de red privada virtual (VPN), puntos de acceso inalámbrico, autentificación de conmutadores Ethernet, acceso a línea de suscripción digital (DSL) y otros tipos de acceso a la red'
      ]
    },
    {
      type: 'true-false',
      question:
        'La zona local contiene sitios web que no están en su computadora o en su intranet local, o que no están ya asignados a otra zona. El nivel de seguridad predeterminado es medio',
      answer: 'Falso'
    },
    {
      type: 'matching',
      question: 'Empareje según corresponda:',
      pairs: [
        {
          left: 'Permite controlar quién ve la información del usuario y quién puede acceder al perfil o datos de la cuenta',
          answer: 'Configuración de privacidad'
        },
        {
          left: 'Describe lo que la empresa está haciendo para proteger los datos del usuario',
          answer: 'Política de seguridad'
        },
        {
          left: 'Describe cómo el proveedor de servicios recopilará, usará y compartirá los datos del usuario',
          answer: 'Política de uso de datos'
        }
      ]
    },
    {
      type: 'single-choice',
      question:
        'Esta herramienta permite obtener capturas de la cámara web de un celular, PC o laptop, que son enviadas a una víctima mediante un link y técnicas de ingeniería social',
      options: ['SEEKER', 'SAYCHEESE', 'ADCPISHING'],
      answer: 'SAYCHEESE'
    },
    {
      type: 'multiple-select',
      question: 'Una credencial electrónica',
      options: [
        'Emitido por una autoridad de certificación (CA)',
        'Es como una compañía externa',
        'Autentica a un usuario en la Internet e intranets',
        'Proporciona la clave pública',
        'Asegurar la transferencia legítima en línea de información confidencial, dinero...'
      ],
      answers: [
        'Autentica a un usuario en la Internet e intranets',
        'Emitido por una autoridad de certificación (CA)',
        'Asegurar la transferencia legítima en línea de información confidencial, dinero u otros materiales sensibles por medio de la tecnología de codificación pública'
      ]
    },
    {
      type: 'true-false',
      question:
        '¿Es ético el comportamiento de un empleado que presta su tarjeta de identificación hasta que uno de sus compañeros pueda obtener una nueva en Recursos Humanos debido a que la perdió?',
      answer: 'Falso'
    },
    {
      type: 'multiple-select',
      question:
        'Para proteger la información en los puestos de trabajo, las personas deben:',
      options: [
        'Los usuarios deben resguardar periódicamente su información histórica en períodos no mayor a 24 horas',
        'El equipo de seguridad no se encargará de cerrar de forma manual sesiones abiertas...',
        'El oficial de tecnología no se encarga de monitorear que cada usuario administrativo guarde la información...',
        'Notificar a cada funcionario que todos los equipos deben tener aplicado el cierre de sesión por inactividad en 5 min'
      ],
      answers: [
        'Notificar a cada funcionario de la Universidad Central que todos los equipos de cómputo, dispositivos portátiles deben tener aplicado el cierre de sesión por inactividad en un tiempo máximo de 5 minutos',
        'Los usuarios deben resguardar periódicamente su información histórica en períodos no mayor a 24 horas'
      ]
    },
    {
      type: 'true-false',
      question:
        'CCRYPT permite cifrar archivos tanto en Windows como Linux, para protegerlos de intrusiones no deseadas o de la filtración de los mismos, mediante un algoritmo de encripción y una clave predefinida',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        'Cuáles de las siguientes son funciones del Blue Team? (Elija 2)',
      options: [
        'Utilizar herramientas y técnicas utilizadas por los hackers',
        'Identificar fallos de seguridad y/o vulnerabilidades',
        'Emular ataques de la manera más realista posible',
        'Trabajar en la mejora continua de la seguridad',
        'Emular los comportamientos de un Black Team'
      ],
      answers: [
        'Identificar fallos de seguridad y/o vulnerabilidades',
        'Trabajar en la mejora continua de la seguridad'
      ]
    },
    {
      type: 'multiple-select',
      question: 'Escoja 2 características del análisis forense',
      options: [
        'Preservar los datos',
        'Identificar las amenazas',
        'Analizar los datos',
        'Buscar vulnerabilidades'
      ],
      answers: ['Preservar los datos', 'Analizar los datos']
    },
    {
      type: 'multiple-select',
      question: 'Según la ISO 27039:1 UN IDS es un conjunto de componentes de:',
      options: ['Software', 'Firmware', 'Hardware', 'Cableado'],
      answers: ['Hardware', 'Software']
    },
    {
      type: 'multiple-select',
      question:
        'Cuáles de los siguientes datos de la empresa deberían compartirse en sus redes sociales personales? (Elija 2)',
      options: [
        'El nombre de la organización',
        'La dirección de correo electrónico',
        'El número de teléfono móvil',
        'Los nombres y la información de contacto de sus colegas',
        'El nombre y la información de contacto del gerente',
        'La fecha de nacimiento',
        'La foto de perfil'
      ],
      answers: ['La foto de perfil', 'El nombre de la organización']
    },
    {
      type: 'multiple-select',
      question:
        'La comprensión del control interno se da a través de la indagación... mediante el empleo de los siguientes métodos:',
      options: [
        'Táctico',
        'Cuestionarios',
        'Gráfico',
        'Descriptivo',
        'Experiencial'
      ],
      answers: ['Descriptivo', 'Cuestionarios', 'Gráfico']
    },
    {
      type: 'true-false',
      question:
        'La clave pública encripta los datos, y una clave secreta correspondiente los descifra',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        'La ISO 22301 es aplicable a todo tipo y tamaño de organización que desea:',
      options: [
        'Realizar una autodeterminación y autodeclaración con el estándar.',
        'Buscar la certificación internacional',
        'Demostrar conformidad a terceros',
        'Asegurar conformidad con la política SGCN',
        'Establecer, implementar, mantener y mejorar un SGCN'
      ],
      answers: [
        'Establecer, implementar, mantener y mejorar un SGCN',
        'Asegurar conformidad con la política SGCN',
        'Demostrar conformidad a terceros',
        'Buscar la certificación internacional',
        'Realizar una autodeterminación y autodeclaración con el estándar.'
      ]
    },
    {
      type: 'multiple-select',
      question:
        'Los certificados normalmente contienen la siguiente información:',
      options: [
        'La firma digital del emisor',
        'El valor de clave pública del sujeto',
        'Información de identificación del emisor',
        'La información de identificación del sujeto, como el nombre y la dirección de correo electrónico',
        'El período de validez'
      ],
      answers: [
        'El valor de clave pública del sujeto',
        'La información de identificación del sujeto, como el nombre y la dirección de correo electrónico',
        'El período de validez',
        'Información de identificación del emisor',
        'La firma digital del emisor'
      ]
    },
    {
      type: 'multiple-select',
      question: '¿Cuáles son métodos de autentificación?',
      options: ['Passwords', 'IPsec', 'VPN', 'Users ID', 'Equipos biométricos'],
      answers: ['Passwords', 'Users ID', 'Equipos biométricos']
    },
    {
      type: 'matching',
      question: 'Empareje según corresponda:',
      pairs: [
        { left: 'Tipo de amenaza', answer: 'Ransomware y Errores de software' },
        {
          left: 'Castillos del mundo cibernético',
          answer: 'Facebook, Amazon, Twitter'
        },
        {
          left: 'Buena práctica de ciberseguridad',
          answer: 'Educar a los usuarios'
        },
        {
          left: 'Acción que tomar ante una brecha de seguridad',
          answer: 'Comunicar inmediatamente el problema'
        },
        { left: 'Dispositivos de seguridad', answer: 'IPS, IDS, Honeypots' }
      ]
    },
    {
      type: 'complete',
      question:
        'Al Blue Team se lo considera como un defensor ______ desde el punto de vista de la ciberseguridad empresarial.',
      answer: 'proactivo'
    },
    {
      type: 'open-text',
      question:
        'Es imposible que una organización esté protegida al 100%, por lo tanto los riesgos deben:',
      answer: 'Minimizarse'
    },
    {
      type: 'matching',
      question:
        'Ordenar en forma descendente la jerarquía de los conceptos de seguridad de la información:',
      pairs: [
        { left: 'Primero', answer: 'CIA' },
        { left: 'Segundo', answer: 'Políticas' },
        { left: 'Tercero', answer: 'Planes' },
        { left: 'Cuarto', answer: 'Procedimientos' },
        { left: 'Quinto', answer: 'Tareas' },
        { left: 'Sexto', answer: 'Registros' }
      ]
    },
    {
      type: 'multiple-select',
      question: 'El LDAP (Lightweight Directory Access Protocol):',
      options: [
        'La función de LDAP es permitir el acceso a un directorio existente.',
        'Es un protocolo de servicio de directorio que se ejecuta en una capa por encima de la pila TCP/IP.',
        'Proporciona un mecanismo utilizado para conectar, buscar y modificar directorios de Internet.',
        'El servicio de directorio LDAP se basa en un modelo cliente-servidor.'
      ],
      answers: [
        'Es un protocolo de servicio de directorio que se ejecuta en una capa por encima de la pila TCP/IP.',
        'Proporciona un mecanismo utilizado para conectar, buscar y modificar directorios de Internet.',
        'El servicio de directorio LDAP se basa en un modelo cliente-servidor.',
        'La función de LDAP es permitir el acceso a un directorio existente.'
      ]
    },
    {
      type: 'true-false',
      question:
        'DNS TUNNELING con esta herramienta se permite a través de tráfico del puerto DHCP ejecutar acciones, enviar archivos o navegar, este ataque será el único visible para un administrador de red',
      answer: 'Falso'
    },
    {
      type: 'multiple-select',
      question:
        'Al planificar como se realizará la auditoria, se debe determinar:',
      options: [
        '¿Cómo se evaluarán los resultados?',
        '¿Quién será responsable?',
        '¿Qué recursos se requerirán?',
        '¿Cuándo se finalizará?',
        '¿Qué se va a hacer?'
      ],
      answers: [
        '¿Qué se va a hacer?',
        '¿Qué recursos se requerirán?',
        '¿Quién será responsable?',
        '¿Cuándo se finalizará?',
        '¿Cómo se evaluarán los resultados?'
      ]
    },
    {
      type: 'multiple-select',
      question: 'Una autoridad de certificación:',
      options: [
        'Estas claves se utilizan para encriptar y desencriptar información sensible o confidencial entrante y saliente en línea',
        "Proporciona y asigna las cadenas únicas de números que constituyen las 'claves' utilizadas en los certificados digitales para la autenticación",
        'Puede ser una empresa emisora externa (como VeriSign)'
      ],
      answers: [
        "Proporciona y asigna las cadenas únicas de números que constituyen las 'claves' utilizadas en los certificados digitales para la autenticación",
        'Estas claves se utilizan para encriptar y desencriptar información sensible o confidencial entrante y saliente en línea',
        'Puede ser una empresa emisora externa (como VeriSign)'
      ]
    },
    {
      type: 'single-choice',
      question:
        '¿Cuál de las siguientes afirmaciones explica de forma correcta la evolución de las amenazas a la seguridad de la empresa?',
      options: [
        'Ninguna de las respuestas es correcta',
        'Las amenazas internas pueden causar daños aún mayores que las amenazas externas',
        'Los primeros usuarios de Internet frecuentemente participaban en actividades para ocasionar daño',
        'Las amenazas son cada vez menos sofisticadas',
        'Los arquitectos de red planearon la seguridad desde su diseño'
      ],
      answer:
        'Las amenazas internas pueden causar daños aún mayores que las amenazas externas'
    },
    {
      type: 'single-choice',
      question:
        'Cualquier código escrito con el propósito específico de causar daño, revelar información o violar la seguridad o la estabilidad de un sistema es:',
      options: ['Malware', 'Autenticación', 'Amenaza Interna', 'Criptografía'],
      answer: 'Malware'
    },
    {
      type: 'true-false',
      question:
        'WAP utiliza una clave secreta compartida para cifrar los paquetes antes de su transmisión entre los dispositivos de LAN inalámbrica y monitoriza los paquetes en tránsito para detectar los intentos de modificación',
      answer: 'Falso'
    },
    {
      type: 'single-choice',
      question:
        'Esta herramienta permite generar un diccionario con datos obtenidos de una persona, ayuda con el ingreso de información personal del objetivo y obtiene todas las combinaciones posibles:',
      options: ['SAYCHEESE', 'CUPP.PY', 'RESPONDER.PY', 'SEEKER'],
      answer: 'CUPP.PY'
    },

    {
      type: 'true-false',
      question:
        'Con base en los resultados de la evaluación, debes proteger y preservar los equipos de tu empresa. Por ejemplo, querrás implementar medidas para proteger tus equipos de nuevos daños y de los riesgos de robo',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question:
        'Según la ISO 27035 las etapas claves de la gestión de incidentes son:',
      options: [
        'Aprender de las lecciones',
        'Preparase para enfrentarse a los incidentes',
        'Reconocer los incidentes de seguridad de la información',
        'Dar respuesta a los incidentes, lo que quiere decir, investigarlos y resolverlos',
        'Examinar los incidentes y tomar las decisiones sobre la forma en que se han llevado a cabo las cosas'
      ],
      answers: [
        'Preparase para enfrentarse a los incidentes',
        'Reconocer los incidentes de seguridad de la información',
        'Examinar los incidentes y tomar las decisiones sobre la forma en que se han llevado a cabo las cosas',
        'Dar respuesta a los incidentes, lo que quiere decir, investigarlos y resolverlos',
        'Aprender de las lecciones'
      ]
    },
    {
      type: 'true-false',
      question:
        'Según la ISO 22301: Auditoría es el proceso para obtener evidencia y evaluarla objetivamente para determinar el grado en que requerimientos específicos han sido alcanzados',
      answer: 'Verdadero'
    },
    {
      type: 'multiple-select',
      question: 'El marco normativo de las normas de seguridad son:',
      options: [
        'Normas Ecuatorianas de Auditoría Gubernamental (NEAG).',
        'Normas de Auditoria Generalmente Aceptadas (NAGAs).',
        'COBIT',
        'ITIL',
        'Normas Internacionales de Auditoria y Aseguramiento (NIAAs).'
      ],
      answers: [
        'Normas Internacionales de Auditoria y Aseguramiento (NIAAs).',
        'Normas de Auditoria Generalmente Aceptadas (NAGAs).',
        'Normas Ecuatorianas de Auditoría Gubernamental (NEAG).'
      ]
    },
    {
      type: 'true-false',
      question:
        'La política de auditoría interna verificar y monitorear de forma mensual la ejecución de las normas y los procedimientos de seguridad informática vigentes dentro de las instalaciones de la UCE',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'IPsec incluye protocolos para el establecimiento de claves de cifrado.',
      answer: 'Verdadero'
    },
    {
      type: 'true-false',
      question:
        'La clave secreta encripta los datos, y una clave pública correspondiente los descifra',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'SHERLOCK para PowerShell permite realizar una búsqueda de amenazas (parches faltantes) de un equipo (servidor o endpoint) para posterior a esto elevar privilegios del mismo',
      answer: 'Falso'
    },
    {
      type: 'true-false',
      question:
        'Un cortafuegos es la parte de un sistema informático o una red informática que está diseñada para bloquear el acceso no autorizado',
      answer: 'Verdadero'
    },
    {
      type: 'single-choice',
      question:
        'El gerente de ventas viaja para encontrarse con un cliente. Se olvidó de descargar el contrato del servidor de la empresa. El tren tiene una red Wi-Fi abierta. ¿Qué debe hacer?',
      options: [
        'Esperar hasta llegar a la oficina del cliente y solicitar acceso a su red Wi-Fi privada...',
        'Olvidarse del contrato y ponerse al día con otros pendientes...',
        'Ninguna de las respuestas es correcta',
        'Usar la conexión 4G en su teléfono móvil para conectarse a la red Wi-Fi abierta',
        'Acceder a la red Wi-Fi abierta y conectarse a los servidores de la empresa usando una conexión VPN en su computador portátil'
      ],
      answer:
        'Acceder a la red Wi-Fi abierta y conectarse a los servidores de la empresa usando una conexión VPN en su computador portátil'
    }
  ]
}
