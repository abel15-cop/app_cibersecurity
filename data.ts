/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Module } from './types.ts';

export const STUDY_PLAN: Module[] = [
  {
    id: 'networking',
    title: 'Fundamentos de Redes',
    difficulty: 'Básico',
    icon: 'Network',
    topics: [
      {
        id: 'net-1',
        title: 'Modelo OSI y TCP/IP',
        theory: 'El Modelo OSI define 7 capas de comunicación. TCP/IP es el protocolo real de la web. Comprender cómo los datos bajan por las capas (encapsulación) es vital para el hacking de red.',
        tags: ['Redes', 'OSI'],
        resources: [
          { title: 'Wikipedia: Modelo OSI', url: 'https://es.wikipedia.org/wiki/Modelo_OSI', type: 'web' },
          { title: 'Video: Modelo OSI en 10 min', url: 'https://www.youtube.com/watch?v=ODY4q4_3Acc', type: 'video' }
        ]
      },
      {
        id: 'net-2',
        title: 'Protocolos: HTTP, DNS y SSH',
        theory: 'DNS traduce nombres a IPs. HTTP es la base de la web. SSH permite administración segura. Aprende cómo se pueden interceptar o suplantar estos servicios.',
        tags: ['Protocolos', 'Internet'],
        resources: [
          { title: 'Cloudflare: Qué es DNS', url: 'https://www.cloudflare.com/es-es/learning/dns/what-is-dns/', type: 'web' },
          { title: 'Video: Cómo funciona el DNS', url: 'https://www.youtube.com/watch?v=t7EGv2I5FpM', type: 'video' }
        ]
      },
      {
        id: 'net-3',
        title: 'Direccionamiento IP y Subneteo',
        theory: 'Aprende a dividir redes grandes en subredes pequeñas. Es clave para la segmentación y el control de accesos en empresas.',
        tags: ['IP', 'Networking'],
        resources: [
          { title: 'RedesZone: IPv4 y Subneteo', url: 'https://www.redeszone.net/tutoriales/redes-wi-fi/calculo-mascara-subred-ipv4/', type: 'web' },
          { title: 'Video: Subneteo paso a paso', url: 'https://www.youtube.com/watch?v=SHbBso63X38', type: 'video' }
        ]
      },
      {
        id: 'net-4',
        title: 'Kali Linux: Instalación y Terminal',
        theory: 'Kali es la plataforma líder para hacking. Dominar la terminal Linux (bash) es indispensable antes de usar cualquier herramienta gráfica.',
        tags: ['Kali', 'Linux'],
        resources: [
          { title: 'Kali.org: Documentos', url: 'https://www.kali.org/docs/', type: 'web' },
          { title: 'Video: Instalación Kali 2024', url: 'https://www.youtube.com/watch?v=sIcZqmJxan4', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'offensive',
    title: 'Seguridad Ofensiva',
    difficulty: 'Intermedio',
    icon: 'Zap',
    topics: [
      {
        id: 'off-1',
        title: 'Fases del Ethical Hacking',
        theory: 'Reconocimiento, Escaneo, Obtención de Acceso, Mantenimiento y Reporte. La metodología asegura que el hacking sea ético y profesional.',
        tags: ['Hacking', 'Metodología'],
        resources: [
          { title: 'INCIBE: Auditoría de Seguridad', url: 'https://www.incibe.es/incibe-cert/blog/puntos-clave-de-un-test-de-intrusion', type: 'web' },
          { title: 'Video: Fases del Pentesting', url: 'https://www.youtube.com/watch?v=x49doCJqtco', type: 'video' }
        ]
      },
      {
        id: 'off-2',
        title: 'Google Dorking y OSINT',
        theory: 'Aprende a encontrar información pública expuesta usando Google y herramientas de recolección de inteligencia de fuentes abiertas.',
        tags: ['Reconocimiento', 'OSINT'],
        resources: [
          { title: 'Guía Google Dorks', url: 'https://www.hackplayers.com/2018/06/google-dorks-busqueda-avanzada.html', type: 'web' },
          { title: 'Video: Técnicas de OSINT', url: 'https://www.youtube.com/watch?v=KOT3JWaWSpI', type: 'video' }
        ]
      },
      {
        id: 'off-3',
        title: 'Escaneo con Nmap',
        theory: 'Escaneo de activos para identificar puertos y servicios. La herramienta Nmap es el estándar de la industria para el reconocimiento activo.',
        tags: ['Nmap', 'Escaneo'],
        resources: [
          { title: 'Manual Nmap en Español', url: 'https://nmap.org/man/es/', type: 'web' },
          { title: 'Video: Máster en Nmap', url: 'https://www.youtube.com/watch?v=U5A3szBzne0', type: 'video' }
        ]
      },
      {
        id: 'off-4',
        title: 'Explotación con Metasploit',
        theory: 'Uso del framework Metasploit para lanzar exploits contra vulnerabilidades confirmadas. Manejo de sesiones y payloads reversos.',
        tags: ['Exploit', 'Metasploit'],
        resources: [
          { title: 'Guía de uso Metasploit', url: 'https://www.redeszone.net/tutoriales/seguridad/metasploit-framework-guia-uso/', type: 'web' },
          { title: 'Video: Metasploit Tutorial', url: 'https://www.youtube.com/watch?v=43wbfCsFefg', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'web',
    title: 'Hacking Web (OWASP)',
    difficulty: 'Intermedio',
    icon: 'Globe',
    topics: [
      {
        id: 'web-1',
        title: 'Inyección SQL (SQLi)',
        theory: 'Manipulación de bases de datos a través de campos de entrada. Una de las vulnerabilidades más críticas y comunes en la web.',
        tags: ['OWASP', 'Inyección'],
        resources: [
          { title: 'OWASP: SQL Injection', url: 'https://owasp.org/www-community/attacks/SQL_Injection', type: 'web' },
          { title: 'Video: SQLi Práctico', url: 'https://www.youtube.com/watch?v=qLeeLRn9Z78', type: 'video' }
        ]
      },
      {
        id: 'web-2',
        title: 'Cross-Site Scripting (XSS)',
        theory: 'Ejecución de scripts maliciosos en el navegador del usuario. Aprende a robar cookies de sesión y realizar ataques de phishing.',
        tags: ['XSS', 'JS'],
        resources: [
          { title: 'PortSwigger: Academy XSS', url: 'https://portswigger.net/web-security/cross-site-scripting', type: 'web' },
          { title: 'Video: Hacking con XSS', url: 'https://www.youtube.com/watch?v=b47UKL_KshI', type: 'video' }
        ]
      },
      {
        id: 'web-3',
        title: 'Inclusión de Archivos (LFI/RFI)',
        theory: 'Vulnerabilidades que permiten leer archivos sensibles del servidor o ejecutar código remoto cargado externamente.',
        tags: ['LFI', 'Backend'],
        resources: [
          { title: 'Guía LFI y RFI', url: 'https://www.osi.es/es/actualidad/blog/2016/10/24/que-es-lfi-y-rfi', type: 'web' },
          { title: 'Video: Ataques LFI', url: 'https://www.youtube.com/watch?v=t15Xvv6k-1U', type: 'video' }
        ]
      },
      {
        id: 'web-4',
        title: 'Burp Suite: Proxy y Análisis',
        theory: 'Intercepción de peticiones HTTP para analizar y modificar datos en tránsito. La herramienta fundamental del pentester web.',
        tags: ['Burp', 'Proxy'],
        resources: [
          { title: 'Documentación Burp Suite', url: 'https://portswigger.net/burp/documentation', type: 'web' },
          { title: 'Video: Burp Suite Tutorial', url: 'https://www.youtube.com/watch?v=KT6McmK0FgA', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'crypto',
    title: 'Criptografía Aplicada',
    difficulty: 'Avanzado',
    icon: 'Key',
    topics: [
      {
        id: 'cry-1',
        title: 'Cifrado Simétrico y Asimétrico',
        theory: 'Bases de la confidencialidad. Uso de claves únicas (AES) y pares de claves pública/privada (RSA/ECC) para proteger datos.',
        tags: ['AES', 'RSA'],
        resources: [
          { title: 'Xataka: Criptografía', url: 'https://www.xataka.com/basics/criptografia-simetrica-y-asimetrica-diferencias-y-como-funcionan', type: 'web' },
          { title: 'Video: Diferencias Cifrado', url: 'https://www.youtube.com/watch?v=wDpqrasDmxM', type: 'video' }
        ]
      },
      {
        id: 'cry-2',
        title: 'Hashing e Integridad',
        theory: 'Algoritmos de resumen unidireccional (SHA-256). Asegura que los archivos no han sido alterados durante la transmisión.',
        tags: ['Hash', 'Seguridad'],
        resources: [
          { title: 'Bit2Me: Hashing Guía', url: 'https://academy.bit2me.com/que-es-hash-criptografia/', type: 'web' },
          { title: 'Video: Cómo funciona el Hash', url: 'https://www.youtube.com/watch?v=NUEOvdZujP0', type: 'video' }
        ]
      },
      {
        id: 'cry-3',
        title: 'HTTPS, SSL y TLS',
        theory: 'Protección del tráfico web. Entender la cadena de confianza, autoridades de certificación (CAs) y protocolos modernos.',
        tags: ['SSL/TLS', 'Seguro'],
        resources: [
          { title: 'Cloudflare: Certificados SSL', url: 'https://www.cloudflare.com/es-es/learning/ssl/what-is-an-ssl-certificate/', type: 'web' },
          { title: 'Video: Guía HTTPS', url: 'https://www.youtube.com/watch?v=6HJAWFenYx8', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'defense',
    title: 'Defensa y Blue Team',
    difficulty: 'Intermedio',
    icon: 'Shield',
    topics: [
      {
        id: 'def-1',
        title: 'Monitorización y SIEM',
        theory: 'Centralización de logs y detección de amenazas en tiempo real. Herramientas base del analista SOC.',
        tags: ['SOC', 'Logs'],
        resources: [
          { title: 'IBM: Fundamentos de SIEM', url: 'https://www.ibm.com/es-es/topics/siem', type: 'web' },
          { title: 'Video: Blue Team Intro', url: 'https://www.youtube.com/watch?v=xgxJUUaD3lg', type: 'video' }
        ]
      },
      {
        id: 'def-2',
        title: 'IDS/IPS: Snort y Suricata',
        theory: 'Detección y prevención de intrusos en red. Aprende a crear reglas para bloquear tráfico malicioso automáticamente.',
        tags: ['Red', 'Detección'],
        resources: [
          { title: 'Wikipedia: IDS/IPS', url: 'https://es.wikipedia.org/wiki/Sistema_de_detecci%C3%B3n_de_intrusos', type: 'web' },
          { title: 'Video: Tutorial Snort', url: 'https://www.youtube.com/watch?v=PHwaH6z0MJ0', type: 'video' }
        ]
      },
      {
        id: 'def-3',
        title: 'Respuesta ante Incidentes',
        theory: 'Protocolos de actuación tras un hackeo. Contención, mitigación y recuperación de servicios críticos.',
        tags: ['DFIR', 'Gestión'],
        resources: [
          { title: 'INCIBE: Gestión Incidentes', url: 'https://www.incibe.es/incibe-cert/servicios/gestion-incidentes', type: 'web' },
          { title: 'Video: Ciclo de Vida Incidente', url: 'https://www.youtube.com/watch?v=zjSpqNfH77c', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Seguridad Cloud',
    difficulty: 'Avanzado',
    icon: 'Cloud',
    topics: [
      {
        id: 'cld-1',
        title: 'Nube Segura: AWS / Azure',
        theory: 'Responsabilidad compartida en la nube. Protección de buckets, instancias y redes virtuales en entornos cloud.',
        tags: ['AWS', 'Cloud'],
        resources: [
          { title: 'AWS: Seguridad Nube', url: 'https://aws.amazon.com/es/compliance/shared-responsibility-model/', type: 'web' },
          { title: 'Video: Hacking en Cloud', url: 'https://www.youtube.com/watch?v=ym_oHKnoneE', type: 'video' }
        ]
      },
      {
        id: 'cld-2',
        title: 'Seguridad en Docker y K8s',
        theory: 'Protección de contenedores y orquestadores. Escaneo de imágenes y endurecimiento del entorno de ejecución.',
        tags: ['Docker', 'Microservicios'],
        resources: [
          { title: 'Xataka: Qué es Docker', url: 'https://www.xataka.com/pro/docker-que-es-para-que-sirve-y-como-funciona', type: 'web' },
          { title: 'Video: Pentesting Docker', url: 'https://www.youtube.com/watch?v=OIoXJP9zs7g', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Cumplimiento y Ley',
    difficulty: 'Básico',
    icon: 'FileText',
    topics: [
      {
        id: 'com-1',
        title: 'RGPD y Privacidad Legal',
        theory: 'Normativa europea de protección de datos. Derechos de los ciudadanos y responsabilidades de las empresas críticas.',
        tags: ['Legal', 'GDPR'],
        resources: [
          { title: 'AEPD: Derechos RGPD', url: 'https://www.aepd.es/es/derechos-y-deberes/conoce-tus-derechos', type: 'web' },
          { title: 'Video: RGPD Resumen', url: 'https://www.youtube.com/watch?v=heKapvVLjng', type: 'video' }
        ]
      },
      {
        id: 'com-2',
        title: 'ISO 27001 Estándar SGSI',
        theory: 'Certificación internacional de gestión de seguridad. Mejora continua y controles de seguridad estandarizados.',
        tags: ['ISO', 'Gestión'],
        resources: [
          { title: 'ISO 27001 Oficial', url: 'https://www.iso.org/standard/27001', type: 'web' },
          { title: 'Video: Tutorial ISO 27001', url: 'https://www.youtube.com/watch?v=iZNUDnf7QgQ', type: 'video' }
        ]
      }
    ]
  }
];
