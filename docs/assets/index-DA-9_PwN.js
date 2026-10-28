(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const p=e=>document.querySelector(e),r=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),h=()=>{p("#mod").style.display="none"},P=e=>{p("#mb").innerHTML=e,p("#mod").style.display="flex"},b=e=>{const a=p("#toast");a.textContent=e,a.style.display="block",clearTimeout(b.t),b.t=setTimeout(()=>{a.style.display="none"},2200)};p("#mod").onclick=e=>{e.target.id=="mod"&&h()};const J=()=>({companies:[{id:"c1",n:"Desierto Digital",sec:"Tecnología",city:"Hermosillo",areas:["Sistemas","Análisis de datos"],skills:["JavaScript","SQL"],prog:"Prácticas de verano",d:"Estudio de software que crea herramientas para negocios del noroeste.",col:"#2C3E66"},{id:"c2",n:"Manufacturas del Yaqui",sec:"Manufactura",city:"Cd. Obregón",areas:["Manufactura","Ingeniería"],skills:["Calidad","Lean"],prog:"Becas para ingeniería",d:"Planta de componentes metálicos con enfoque en mejora continua.",col:"#6D4FD6"},{id:"c3",n:"Logística Frontera Norte",sec:"Logística",city:"Nogales",areas:["Logística"],skills:["Excel","Inventarios"],prog:"Programa de primer empleo",d:"Operador logístico con almacenes cerca de la frontera.",col:"#4F6DB8"},{id:"c4",n:"Mayo y Asociados",sec:"Servicios contables",city:"Navojoa",areas:["Contabilidad"],skills:["Excel","Contpaqi"],prog:"",d:"Despacho contable para pequeñas empresas del sur de Sonora.",col:"#8B6CF0"},{id:"c5",n:"Costa Azul Agroindustrial",sec:"Agroindustria",city:"Guaymas",areas:["Marketing","Atención al cliente"],skills:["Canva","Comunicación"],prog:"Becas de marketing",d:"Empacadora de productos del mar y hortalizas.",col:"#3B5B92"},{id:"c6",n:"Solaris Energía Sonora",sec:"Energía",city:"Hermosillo",areas:["Ingeniería"],skills:["AutoCAD","Excel"],prog:"Prácticas en campo",d:"Instaladora de sistemas solares residenciales e industriales.",col:"#7A5AC8"},{id:"c7",n:"Despacho Fiscal del Noroeste",sec:"Servicios contables y fiscales",city:"Hermosillo",areas:["Contabilidad","Finanzas"],skills:["CFDI","Declaraciones","Excel"],prog:"Prácticas para contadores",d:"Despacho que atiende a pequeñas empresas y profesionistas de Sonora.",col:"#5A4BA8"},{id:"c8",n:"Agroexportadora del Mayo",sec:"Agroindustria",city:"Cd. Obregón",areas:["Contabilidad","Recursos humanos"],skills:["Nómina","Auditoría"],prog:"Becas en finanzas",d:"Empresa agrícola con operación de exportación y área administrativa propia.",col:"#2C3E66"},{id:"c9",n:"Minera Sierra Alta",sec:"Minería",city:"Cananea",areas:["Ingeniería","Seguridad industrial"],skills:["Seguridad industrial","AutoCAD"],prog:"Prácticas en operación minera",d:"Operación minera ficticia con programas para estudiantes de ingeniería.",col:"#6D4FD6"},{id:"c10",n:"Campos del Valle Agrícola",sec:"Agroindustria",city:"Caborca",areas:["Agronomía","Calidad"],skills:["Agricultura de precisión","Inocuidad"],prog:"Prácticas de temporada",d:"Productora agrícola ficticia del desierto de Sonora.",col:"#4F6DB8"},{id:"c11",n:"Bufete Jurídico Sonorense",sec:"Servicios legales",city:"Hermosillo",areas:["Derecho"],skills:["Redacción","Derecho laboral"],prog:"Pasantías en derecho",d:"Despacho ficticio con áreas laboral, civil y mercantil.",col:"#8B6CF0"},{id:"c12",n:"Clínica Familiar del Desierto",sec:"Salud",city:"Cd. Obregón",areas:["Salud"],skills:["Primeros auxilios","Atención al paciente"],prog:"Bolsa para recién egresados",d:"Clínica ficticia de atención primaria y consulta externa.",col:"#3B5B92"},{id:"c13",n:"Estudio Cactus Diseño",sec:"Diseño y arquitectura",city:"Hermosillo",areas:["Diseño"],skills:["Figma","AutoCAD","Canva"],prog:"Prácticas creativas",d:"Estudio ficticio de diseño gráfico e interiores.",col:"#7A5AC8"},{id:"c14",n:"Constructora Mar de Cortés",sec:"Construcción",city:"Puerto Peñasco",areas:["Construcción","Ingeniería"],skills:["AutoCAD","Presupuestos de obra"],prog:"Becas de residencia de obra",d:"Constructora ficticia de obra residencial y turística.",col:"#5A4BA8"},{id:"c15",n:"Centro de Talento Mayo",sec:"Recursos humanos",city:"Navojoa",areas:["Recursos humanos"],skills:["Entrevistas","Psicometría"],prog:"Prácticas en reclutamiento",d:"Consultora ficticia de selección y clima laboral.",col:"#2C3E66"}],jobs:[{id:"j1",co:"c1",t:"Practicante de desarrollo web",city:"Hermosillo",area:"Sistemas",mode:"Híbrida",type:"Prácticas",exp:"Sin experiencia",sal:"$6,000–8,000 (demo)",days:2,skills:["JavaScript","HTML","Git"],careers:["Ing. en Sistemas"],status:"activa",desc:"Apoyarás al equipo en interfaces web de clientes locales."},{id:"j2",co:"c1",t:"Analista de datos jr.",city:"Hermosillo",area:"Análisis de datos",mode:"Remota",type:"Primer empleo",exp:"Menos de 1 año",sal:"$14,000–17,000 (demo)",days:5,skills:["SQL","Excel","Power BI"],careers:["Ing. en Sistemas","Ingeniería Industrial"],status:"activa",desc:"Construirás tableros y reportes semanales para clientes."},{id:"j3",co:"c2",t:"Becario de calidad",city:"Cd. Obregón",area:"Manufactura",mode:"Presencial",type:"Beca",exp:"Sin experiencia",sal:"$7,000 (demo)",days:1,skills:["Calidad","Excel","Lean"],careers:["Ingeniería Industrial"],status:"activa",desc:"Participarás en auditorías internas y análisis de defectos."},{id:"j4",co:"c2",t:"Auxiliar de producción",city:"Cd. Obregón",area:"Manufactura",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$9,500 (demo)",days:9,skills:["Trabajo en equipo","Seguridad"],careers:["Ingeniería Industrial"],status:"activa",desc:"Apoyo en línea de ensamble con capacitación inicial."},{id:"j5",co:"c3",t:"Practicante de logística",city:"Nogales",area:"Logística",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"$6,500 (demo)",days:3,skills:["Excel","Inventarios"],careers:["Ingeniería Industrial","Administración"],status:"activa",desc:"Control de inventarios y seguimiento de embarques."},{id:"j6",co:"c3",t:"Coordinador de tráfico jr.",city:"Nogales",area:"Logística",mode:"Híbrida",type:"Primer empleo",exp:"1 a 2 años",sal:"$16,000 (demo)",days:12,skills:["Excel","Inglés"],careers:["Ingeniería Industrial"],status:"activa",desc:"Coordinarás rutas y comunicación con transportistas."},{id:"j7",co:"c4",t:"Auxiliar contable",city:"Navojoa",area:"Contabilidad",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$10,000 (demo)",days:4,skills:["Excel","Contpaqi"],careers:["Contaduría"],status:"activa",desc:"Captura de pólizas y apoyo en declaraciones."},{id:"j8",co:"c5",t:"Becario de marketing digital",city:"Guaymas",area:"Marketing",mode:"Híbrida",type:"Beca",exp:"Sin experiencia",sal:"$6,000 (demo)",days:6,skills:["Canva","Redes sociales"],careers:["Mercadotecnia"],status:"activa",desc:"Calendario de contenido y reportes de redes."},{id:"j9",co:"c6",t:"Practicante de ingeniería solar",city:"Hermosillo",area:"Ingeniería",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"$7,500 (demo)",days:7,skills:["AutoCAD","Excel"],careers:["Ing. Eléctrica","Ingeniería Industrial"],status:"activa",desc:"Levantamientos técnicos y apoyo en diseño de instalaciones."},{id:"j10",co:"c5",t:"Atención a clientes",city:"Guaymas",area:"Atención al cliente",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$9,000 (demo)",days:15,skills:["Comunicación"],careers:["Administración"],status:"activa",desc:"Atención telefónica y seguimiento de pedidos."},{id:"j11",co:"c7",t:"Auxiliar fiscal",city:"Hermosillo",area:"Contabilidad",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$11,000–13,000 (demo)",days:2,skills:["CFDI","Declaraciones","Excel"],careers:["Contaduría"],status:"activa",desc:"Apoyo en declaraciones mensuales y revisión de comprobantes."},{id:"j12",co:"c7",t:"Practicante contable",city:"Hermosillo",area:"Contabilidad",mode:"Híbrida",type:"Prácticas",exp:"Sin experiencia",sal:"$6,500 (demo)",days:4,skills:["Contpaqi","Excel"],careers:["Contaduría"],status:"activa",desc:"Captura de pólizas, conciliaciones y archivo contable."},{id:"j13",co:"c4",t:"Auxiliar de cuentas por pagar",city:"Navojoa",area:"Finanzas",mode:"Presencial",type:"Primer empleo",exp:"Menos de 1 año",sal:"$12,000 (demo)",days:8,skills:["Excel","Conciliaciones"],careers:["Contaduría","Administración"],status:"activa",desc:"Registro de facturas de proveedores y programación de pagos."},{id:"j14",co:"c8",t:"Analista de nómina jr.",city:"Cd. Obregón",area:"Contabilidad",mode:"Presencial",type:"Primer empleo",exp:"Menos de 1 año",sal:"$13,500 (demo)",days:3,skills:["Nómina","IMSS","Excel"],careers:["Contaduría"],status:"activa",desc:"Cálculo de nómina quincenal y altas y bajas del personal."},{id:"j15",co:"c8",t:"Becario de auditoría interna",city:"Cd. Obregón",area:"Contabilidad",mode:"Híbrida",type:"Beca",exp:"Sin experiencia",sal:"$7,000 (demo)",days:6,skills:["Auditoría","Excel"],careers:["Contaduría"],status:"activa",desc:"Revisión de inventarios y procesos junto al equipo de control interno."},{id:"j16",co:"c3",t:"Auxiliar de facturación y cobranza",city:"Nogales",area:"Contabilidad",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$10,500 (demo)",days:5,skills:["CFDI","Excel","Inglés"],careers:["Contaduría"],status:"activa",desc:"Emisión de facturas y seguimiento a clientes de exportación."},{id:"j17",co:"c5",t:"Analista de costos jr.",city:"Guaymas",area:"Finanzas",mode:"Presencial",type:"Primer empleo",exp:"1 a 2 años",sal:"$15,000 (demo)",days:10,skills:["Costos","Excel"],careers:["Contaduría","Ingeniería Industrial"],status:"activa",desc:"Cálculo de costos de producción y reportes mensuales."},{id:"j18",co:"c1",t:"Practicante de finanzas",city:"Hermosillo",area:"Finanzas",mode:"Remota",type:"Prácticas",exp:"Sin experiencia",sal:"$6,000 (demo)",days:1,skills:["Excel","Análisis financiero"],careers:["Contaduría","Administración"],status:"activa",desc:"Apoyo en presupuestos, flujo de efectivo y reportes para clientes."},{id:"j19",co:"c9",t:"Practicante de seguridad industrial",city:"Cananea",area:"Ingeniería",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"$8,000 (demo)",days:3,skills:["Seguridad industrial","Excel"],careers:["Ing. en Minas","Ingeniería Industrial"],status:"activa",desc:"Apoyo en inspecciones y capacitación de seguridad en planta."},{id:"j20",co:"c9",t:"Becario de planeación minera",city:"Cananea",area:"Ingeniería",mode:"Presencial",type:"Beca",exp:"Sin experiencia",sal:"$9,000 (demo)",days:7,skills:["AutoCAD","Excel"],careers:["Ing. en Minas","Ing. Civil"],status:"activa",desc:"Apoyo en planos y programas de producción."},{id:"j21",co:"c10",t:"Técnico agrónomo jr.",city:"Caborca",area:"Agronomía",mode:"Presencial",type:"Primer empleo",exp:"Menos de 1 año",sal:"$13,000 (demo)",days:5,skills:["Agricultura de precisión","Calidad"],careers:["Ing. Agrónomo"],status:"activa",desc:"Seguimiento de cultivos, riego y registros de campo."},{id:"j22",co:"c10",t:"Practicante de inocuidad agroalimentaria",city:"Caborca",area:"Agronomía",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"$6,500 (demo)",days:9,skills:["Calidad","Inocuidad"],careers:["Ing. Agrónomo","Ingeniería Industrial"],status:"activa",desc:"Apoyo en bitácoras y auditorías de inocuidad."},{id:"j23",co:"c11",t:"Pasante de derecho laboral",city:"Hermosillo",area:"Derecho",mode:"Híbrida",type:"Prácticas",exp:"Sin experiencia",sal:"$6,000 (demo)",days:2,skills:["Derecho laboral","Redacción"],careers:["Derecho"],status:"activa",desc:"Revisión de expedientes y redacción de escritos sencillos."},{id:"j24",co:"c11",t:"Asistente jurídico jr.",city:"Hermosillo",area:"Derecho",mode:"Presencial",type:"Primer empleo",exp:"Menos de 1 año",sal:"$12,500 (demo)",days:11,skills:["Redacción","Atención al cliente"],careers:["Derecho"],status:"activa",desc:"Atención a clientes y seguimiento de trámites."},{id:"j25",co:"c12",t:"Enfermera/o auxiliar recién egresado/a",city:"Cd. Obregón",area:"Salud",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$12,000 (demo)",days:4,skills:["Primeros auxilios","Atención al paciente"],careers:["Enfermería"],status:"activa",desc:"Apoyo en consulta, toma de signos y registro de pacientes."},{id:"j26",co:"c13",t:"Diseñador/a gráfico jr.",city:"Hermosillo",area:"Diseño",mode:"Híbrida",type:"Primer empleo",exp:"Menos de 1 año",sal:"$11,000 (demo)",days:6,skills:["Figma","Canva"],careers:["Diseño Gráfico","Mercadotecnia"],status:"activa",desc:"Piezas para redes, impresos y presentaciones de clientes."},{id:"j27",co:"c13",t:"Practicante de diseño de interiores",city:"Hermosillo",area:"Diseño",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"$6,000 (demo)",days:13,skills:["AutoCAD","SketchUp"],careers:["Arquitectura","Diseño Gráfico"],status:"activa",desc:"Apoyo en planos, moodboards y cotizaciones."},{id:"j28",co:"c14",t:"Auxiliar de residencia de obra",city:"Puerto Peñasco",area:"Construcción",mode:"Presencial",type:"Primer empleo",exp:"Sin experiencia",sal:"$12,500 (demo)",days:8,skills:["AutoCAD","Presupuestos de obra"],careers:["Ing. Civil","Arquitectura"],status:"activa",desc:"Control de avances, generadores y bitácora de obra."},{id:"j29",co:"c14",t:"Becario de supervisión de obra",city:"Puerto Peñasco",area:"Construcción",mode:"Presencial",type:"Beca",exp:"Sin experiencia",sal:"$7,500 (demo)",days:3,skills:["Planos","Seguridad industrial"],careers:["Ing. Civil"],status:"activa",desc:"Acompañamiento a residentes en campo."},{id:"j30",co:"c15",t:"Practicante de reclutamiento y selección",city:"Navojoa",area:"Recursos humanos",mode:"Híbrida",type:"Prácticas",exp:"Sin experiencia",sal:"$6,000 (demo)",days:5,skills:["Entrevistas","Comunicación"],careers:["Psicología","Administración"],status:"activa",desc:"Filtro de candidatos y programación de entrevistas."},{id:"j31",co:"c15",t:"Psicólogo/a organizacional jr.",city:"Navojoa",area:"Recursos humanos",mode:"Presencial",type:"Primer empleo",exp:"Menos de 1 año",sal:"$13,000 (demo)",days:14,skills:["Psicometría","Clima laboral"],careers:["Psicología"],status:"activa",desc:"Aplicación de pruebas y encuestas de clima laboral."}],courses:[{id:"k1",t:"Excel desde cero",cat:"Excel",lvl:"Básico",price:0,dur:"6 h",prov:"Aula Abierta (demo)",kind:"Video",skills:["Excel"],d:"Fórmulas, tablas y gráficos para tu primer trabajo."},{id:"k2",t:"Excel para análisis de procesos",cat:"Excel",lvl:"Intermedio",price:199,dur:"8 h",prov:"Aula Abierta (demo)",kind:"Curso",skills:["Excel","Calidad"],d:"Tablas dinámicas y control de calidad con datos reales."},{id:"k3",t:"IA para buscar empleo",cat:"Inteligencia artificial",lvl:"Básico",price:0,dur:"2 h",prov:"Taller Sonora (demo)",kind:"Video",skills:["IA"],d:"Usa asistentes de IA para tu CV y tus entrevistas."},{id:"k4",t:"Introducción a JavaScript",cat:"Programación",lvl:"Básico",price:149,dur:"12 h",prov:"Código Norte (demo)",kind:"Curso",skills:["JavaScript"],d:"Variables, funciones y tu primera página interactiva."},{id:"k5",t:"SQL para análisis de datos",cat:"Análisis de datos",lvl:"Intermedio",price:0,dur:"10 h",prov:"Datos Abiertos (demo)",kind:"Curso",skills:["SQL"],d:"Consultas, uniones y agregaciones paso a paso."},{id:"k6",t:"Inglés para entrevistas",cat:"Idiomas",lvl:"Intermedio",price:99,dur:"5 h",prov:"Idiomas MX (demo)",kind:"Curso",skills:["Inglés"],d:"Vocabulario y práctica para entrevistas."},{id:"k7",t:"Comunicación efectiva",cat:"Habilidades profesionales",lvl:"Básico",price:0,dur:"3 h",prov:"Aula Abierta (demo)",kind:"Video",skills:["Comunicación"],d:"Escucha, claridad y presentaciones breves."},{id:"k8",t:"Fundamentos de Lean",cat:"Administración",lvl:"Básico",price:0,dur:"4 h",prov:"Mejora Continua (demo)",kind:"Guía",skills:["Lean","Calidad"],d:"Elimina desperdicios y mejora procesos en planta."},{id:"k9",t:"Marketing digital básico",cat:"Marketing",lvl:"Básico",price:129,dur:"6 h",prov:"Código Norte (demo)",kind:"Curso",skills:["Canva","Redes sociales"],d:"Contenido, métricas y campañas pequeñas."},{id:"k10",t:"Contabilidad financiera: del asiento al balance",cat:"Finanzas y contabilidad",lvl:"Básico",price:0,dur:"10 h",prov:"Aula Abierta (demo)",kind:"Curso",skills:["Contabilidad"],d:"Cuentas, pólizas, balanza de comprobación y estados financieros."},{id:"k11",t:"Facturación electrónica CFDI 4.0",cat:"Finanzas y contabilidad",lvl:"Básico",price:149,dur:"4 h",prov:"Fiscal Práctico (demo)",kind:"Curso",skills:["CFDI"],d:"Emisión, cancelación y complementos de comprobantes."},{id:"k12",t:"Declaración anual de personas físicas",cat:"Finanzas y contabilidad",lvl:"Intermedio",price:0,dur:"3 h",prov:"Fiscal Práctico (demo)",kind:"Video",skills:["Declaraciones","Impuestos"],d:"Deducciones, ingresos y errores frecuentes, paso a paso."},{id:"k13",t:"Contpaqi Contabilidad: primeros pasos",cat:"Finanzas y contabilidad",lvl:"Básico",price:199,dur:"8 h",prov:"Código Norte (demo)",kind:"Curso",skills:["Contpaqi"],d:"Catálogo de cuentas, captura de pólizas y reportes."},{id:"k14",t:"Nómina e IMSS para principiantes",cat:"Recursos humanos",lvl:"Intermedio",price:199,dur:"6 h",prov:"Fiscal Práctico (demo)",kind:"Curso",skills:["Nómina","IMSS"],d:"Percepciones, deducciones, cuotas y movimientos de personal."},{id:"k15",t:"Excel financiero: flujo de efectivo y presupuestos",cat:"Finanzas y contabilidad",lvl:"Intermedio",price:149,dur:"8 h",prov:"Aula Abierta (demo)",kind:"Curso",skills:["Excel","Análisis financiero"],d:"Modelos de flujo, escenarios y tableros para tomar decisiones."},{id:"k16",t:"Introducción a la auditoría interna",cat:"Finanzas y contabilidad",lvl:"Intermedio",price:0,dur:"5 h",prov:"Mejora Continua (demo)",kind:"Guía",skills:["Auditoría"],d:"Muestreo, papeles de trabajo y reporte de hallazgos."},{id:"k17",t:"Costos y presupuestos para pymes",cat:"Finanzas y contabilidad",lvl:"Básico",price:129,dur:"6 h",prov:"Código Norte (demo)",kind:"Curso",skills:["Costos"],d:"Costeo por producto, punto de equilibrio y presupuesto anual."},{id:"k18",t:"Seguridad e higiene industrial",cat:"Habilidades profesionales",lvl:"Básico",price:0,dur:"5 h",prov:"Mejora Continua (demo)",kind:"Guía",skills:["Seguridad industrial"],d:"Normas básicas, equipo de protección y prevención de accidentes."},{id:"k19",t:"Agricultura de precisión: primeros pasos",cat:"Herramientas digitales",lvl:"Básico",price:149,dur:"6 h",prov:"Campo Digital (demo)",kind:"Curso",skills:["Agricultura de precisión"],d:"Sensores, mapas de campo y riego eficiente."},{id:"k20",t:"Introducción al derecho laboral",cat:"Recursos humanos",lvl:"Básico",price:0,dur:"4 h",prov:"Aula Abierta (demo)",kind:"Video",skills:["Derecho laboral"],d:"Contratos, prestaciones y obligaciones de las partes."},{id:"k21",t:"Primeros auxilios básicos",cat:"Habilidades profesionales",lvl:"Básico",price:0,dur:"3 h",prov:"Salud Comunitaria (demo)",kind:"Video",skills:["Primeros auxilios"],d:"Qué hacer en las primeras emergencias, paso a paso."},{id:"k22",t:"AutoCAD para principiantes",cat:"Herramientas digitales",lvl:"Básico",price:199,dur:"10 h",prov:"Código Norte (demo)",kind:"Curso",skills:["AutoCAD"],d:"Dibujo 2D, capas, cotas e impresión de planos."},{id:"k23",t:"Diseño con Canva y Figma",cat:"Herramientas digitales",lvl:"Básico",price:149,dur:"6 h",prov:"Código Norte (demo)",kind:"Curso",skills:["Canva","Figma"],d:"Piezas para redes, presentaciones y prototipos sencillos."},{id:"k24",t:"Psicología organizacional: lo esencial",cat:"Recursos humanos",lvl:"Intermedio",price:129,dur:"5 h",prov:"Aula Abierta (demo)",kind:"Curso",skills:["Psicometría","Clima laboral"],d:"Selección, evaluación y clima en el trabajo."},{id:"k25",t:"Presupuestos de obra",cat:"Administración",lvl:"Intermedio",price:179,dur:"8 h",prov:"Campo Digital (demo)",kind:"Curso",skills:["Presupuestos de obra"],d:"Volúmenes, precios unitarios y control de costos."},{id:"k26",t:"Capacítate Carso: capacitación en línea",cat:"Habilidades profesionales",lvl:"Básico",price:0,dur:"Variable",prov:"Capacítate Carso (sitio externo)",kind:"Plataforma",skills:["Capacitación en línea"],d:"Plataforma externa. La dirección capacitateparaelempleo.org, que medios asocian con la Fundación Carlos Slim, redirige a este sitio. Revisa cursos, costos y requisitos directamente ahí.",ext:!0,url:"https://capacitatecarso.com"}],articles:[{id:"a1",t:"Cómo hacer un CV sin experiencia",cat:"CV",min:5,upd:"Hace 3 días",ic:"📄",body:`Empieza con un resumen de tres líneas. Después enlista proyectos escolares, cursos y habilidades.

Usa una sola página, verbos de acción y resultados medibles: “Organicé un evento de 80 personas”.`},{id:"a2",t:"Cómo prepararte para una entrevista",cat:"Entrevistas",min:6,upd:"Hace 1 semana",ic:"🎤",body:`Investiga a la empresa y prepara tres historias que muestren tus habilidades.

Practica en voz alta y lleva dos preguntas para quien te entreviste.`},{id:"a3",t:"Cómo encontrar prácticas profesionales",cat:"Prácticas",min:4,upd:"Hace 2 semanas",ic:"🧭",body:`Pregunta primero en tu coordinación de carrera. Después busca empresas de tu ciudad y escribe directamente a recursos humanos.

Envía tu CV con un mensaje breve y específico.`},{id:"a4",t:"Cómo mejorar tu LinkedIn",cat:"Redes",min:5,upd:"Hace 5 días",ic:"💼",body:`Usa una foto clara, un titular con tu carrera y una sección “Acerca de” breve.

Agrega proyectos y conecta con profesionales de tu área en Sonora.`},{id:"a5",t:"La IA en tu búsqueda laboral",cat:"Herramientas",min:7,upd:"Hace 1 día",ic:"🤖",body:`Pide a un asistente que mejore la redacción de tu CV, pero revisa cada dato.

Úsala para practicar preguntas de entrevista; nunca compartas datos sensibles.`},{id:"a6",t:"Cómo conseguir tu primer empleo como contador",cat:"Primer empleo",min:5,upd:"Hace 2 días",ic:"📊",body:`Empieza por despachos y áreas de contabilidad de empresas de tu ciudad. Muchos aceptan pasantes desde sexto semestre.

Destaca en tu CV el dominio de Excel, el manejo de facturación y cualquier práctica con un sistema contable.`},{id:"a7",t:"Herramientas que valoran los despachos contables",cat:"Herramientas",min:5,upd:"Hace 4 días",ic:"🧾",body:`Los despachos suelen pedir Excel avanzado, facturación electrónica y algún sistema contable.

Practica con casos reales y arma un pequeño portafolio con ejercicios resueltos para mostrar en entrevistas.`},{id:"a8",t:"Cómo presentar tus proyectos académicos",cat:"Proyectos",min:5,upd:"Hace 3 días",ic:"📁",body:`Elige dos o tres proyectos y cuenta el problema, lo que hiciste tú y el resultado.

Agrega un enlace, una imagen o un número que demuestre el impacto. Menos proyectos, mejor explicados.`},{id:"a9",t:"Cómo desarrollar habilidades profesionales",cat:"Habilidades",min:5,upd:"Hace 1 semana",ic:"🌱",body:`Escoge una habilidad a la vez: comunicación, Excel, trabajo en equipo. Practica con retos pequeños cada semana.

Pide retroalimentación a compañeros y profesores, y anota tus avances para contarlos en entrevistas.`},{id:"a10",t:"Cómo redactar un correo de solicitud de empleo",cat:"Correo",min:5,upd:"Hace 5 días",ic:"✉️",body:`Usa un asunto claro con el puesto y tu nombre. En tres párrafos cortos presenta quién eres, por qué te interesa la vacante y qué adjuntas.

Revisa ortografía y envía tu CV en PDF con un nombre ordenado.`},{id:"a11",t:"Cómo prepararte para tu primer trabajo",cat:"Primer empleo",min:5,upd:"Hace 2 días",ic:"🚀",body:`Confirma horario, transporte y forma de pago antes del primer día. Llega con tiempo y lleva una libreta.

Pregunta, escucha y pide objetivos claros para tus primeras semanas.`}],cats:{courses:["Excel","Inteligencia artificial","Herramientas digitales","Programación","Análisis de datos","Idiomas","Administración","Finanzas y contabilidad","Marketing","Recursos humanos","Comunicación","Habilidades profesionales"],articles:["CV","Entrevistas","Prácticas","Redes","Herramientas","Primer empleo","Habilidades","Proyectos","Correo"]}}),se="conecta-sonora-v2",V=3,te=e=>JSON.parse(JSON.stringify(e)),U={name:"Ana Moreno (demo)",city:"Hermosillo",career:"Ingeniería Industrial",school:"Universidad del Desierto (ficticia)",semester:"7.º semestre",grad:"Junio 2027",interests:["Logística","Manufactura"],skills:["Excel","Calidad"],langs:"Español (nativo), Inglés (intermedio)",exp:"Servicio social en una planta de manufactura.",mode:"Híbrida",opp:"Prácticas",bio:"Estudiante de último año con interés en mejora de procesos."},ie=()=>[{id:"p1",job:"j2",cand:"Luis Pérez (demo)",st:"En revisión"},{id:"p2",job:"j1",cand:"María Soto (demo)",st:"Recibida"}],i={...J(),role:null,me:te(U),sj:[],cs:{},apps:ie(),myco:"c1",users:[],session:null,seq:100,sv:V},H={pt:"info",signup:"cand"},m={},v={},y={},_={};try{const e=JSON.parse(localStorage.getItem(se));if(e&&e.companies&&(Object.assign(i,e),(e.sv||1)<V)){const a=J();for(const s of["companies","jobs","courses","articles"]){const t=new Set(i[s].map(o=>o.id));a[s].forEach(o=>{t.has(o.id)||i[s].push(o)})}e.cats||(i.cats=a.cats),i.sv=V}}catch{}const oe=()=>{try{const e=i.users.find(a=>a.id==i.session);e&&e.role=="cand"&&(e.me=i.me,e.sj=i.sj,e.cs=i.cs),localStorage.setItem(se,JSON.stringify(i))}catch{}};function $e(){Object.assign(i,J(),{sj:[],cs:{},apps:ie()}),i.users.filter(e=>e.role=="emp").forEach(e=>i.companies.unshift(te(e.company)))}const Ce="/conecta-sonora/images/logo-mark.png",ke="/conecta-sonora/images/logo-mark-light.png";function _e(e){const a=i.role,s=i.users.find(d=>d.id==i.session),t=a=="emp"?["/panel","Panel empresa"]:a=="admin"?["/admin","Administración"]:["/perfil","Mi perfil"],o=[["/","Inicio"],["/cursos","Cursos"],["/empleos","Empleos"],["/empresas","Empresas"],["/orientacion","Orientación"],t],c=`<select
    class="header__role"
    id="rs"
    aria-label="Cambiar perfil de demostración"
  >
    ${[["cand","Estudiante"],["emp","Empresa"],["admin","Administrador"]].map(([d,F])=>`<option value="${d}" ${a==d?"selected":""}>${F}</option>`).join("")}
  </select>`,n=a?`${s?`<span class="header__user">${r(s.name)}</span>`:c}<button class="btn" data-a="role" data-id="">Salir</button>`:`<a class="btn" href="#/login">Iniciar sesión</a
        ><a class="btn btn--primary" href="#/registro">Crear cuenta</a>`;p("#hd").innerHTML=`<a class="logo" href="#/"
      ><picture
        ><source media="(prefers-color-scheme: dark)" srcset="${ke}" />
        <img class="logo__mark" src="${Ce}" alt="" /></picture
      ><span class="logo__text"
        ><span class="logo__name">Conecta</span><span class="logo__accent">Sonora</span></span
      ></a
    >
    <nav class="nav">
      ${o.map(([d,F])=>`<a class="nav__link ${e==d?"nav__link--active":""}" href="#${d}">${F}</a>`).join("")}
    </nav>
    ${n}`}const k=(e,a)=>[...new Set(e.map(s=>s[a]))],je=(e,a)=>`<option value="">${a}</option>`+e.map(s=>`<option>${r(s)}</option>`).join(""),re=e=>e?`$${e} MXN (demo)`:"Gratis",ce=e=>e<2?"Hace 1 día":`Hace ${e} días`,xe=["de","del","la","las","el","los","y","en"],Y=e=>e.split(" ").filter(a=>a&&!xe.includes(a.toLowerCase())).slice(0,2).map(a=>a[0].toUpperCase()).join(""),$=e=>String(e).split(",").map(a=>a.trim()).filter(Boolean),g=(e,a,s,t)=>`<select class="filters__control" data-f="${t}.${e}" aria-label="${s}">
    ${je(a,s)}
  </select>`,Pe=()=>{document.querySelectorAll("[data-f]").forEach(e=>{const[a,s]=e.dataset.f.split(".");e.value={jobs:m,courses:v,companies:y,articles:_}[a][s]||""})},j={guardado:"Guardado",progreso:"En progreso",completado:"Completado ✓"},D=(e,a)=>`<div class="card">
    <span
      ><span class="tag">${r(e.cat)}</span
      ><span class="tag tag--accent">${e.lvl}</span
      >${e.ext?'<span class="tag tag--success">Sitio externo</span>':""}</span
    >
    <h3 style="margin:0;font-size:17px">${r(e.t)}</h3>
    <div class="u-muted">${r(e.d)}</div>
    <div class="u-muted">${e.kind} · ${e.dur} · ${r(e.prov)}</div>
    <b>${e.ext?"Consulta costos en el sitio":re(e.price)}</b
    >${a?`<p class="card__why">${a}</p>`:""}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="course" data-id=${e.id}>
        Ver detalles</button
      ><button class="btn btn--small" data-a="cs" data-id=${e.id}>
        ${i.cs[e.id]?j[i.cs[e.id]]+" ▸":"☆ Guardar"}
      </button>
    </div>
  </div>`,E=e=>({list:()=>i[e],get:a=>i[e].find(s=>s.id==a),create:a=>(i[e].unshift({...a,id:e[0]+ ++i.seq}),i[e][0]),update:(a,s)=>Object.assign(i[e].find(t=>t.id==a)||{},s),remove:a=>{i[e]=i[e].filter(s=>s.id!=a)}}),l={companies:E("companies"),jobs:E("jobs"),courses:E("courses"),articles:E("articles")},f=e=>l.companies.get(e)||{n:"Empresa"},q=(e,a)=>`<div class="card">
    <div class="row">
      <div class="avatar" style="background:${f(e.co).col}">
        ${Y(f(e.co).n)}
      </div>
      <div>
        <h3 style="margin:0;font-size:17px">${r(e.t)}</h3>
        <span class="u-muted">${r(f(e.co).n)} · ${r(e.city)}</span>
      </div>
    </div>
    <div>
      <span class="tag">${e.mode}</span><span class="tag tag--success">${e.type}</span
      ><span class="tag tag--accent">${e.exp}</span>
    </div>
    <div class="u-muted">${r(e.sal)} · ${ce(e.days)}</div>
    <div class="u-muted">${e.skills.map(r).join(" · ")}</div>
    ${a?`<p class="card__why">${a}</p>`:""}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="job" data-id=${e.id}>Ver más</button
      ><button class="btn btn--small" data-a="sj" data-id=${e.id}>
        ${i.sj.includes(e.id)?"★ Guardada":"☆ Guardar"}
      </button>
    </div>
  </div>`,L=()=>[...i.me.skills||[],...i.me.interests||[],i.me.career||""].map(e=>e.toLowerCase());function Ae(){const e=L(),a=i.me;return i.jobs.filter(s=>s.status=="activa").map(s=>{let t=0,o=[];s.careers.includes(a.career)&&(t+=3,o.push("es para tu carrera"));const c=s.skills.filter(n=>e.includes(n.toLowerCase()));return c.length&&(t+=2*c.length,o.push("pide "+c.join(", "))),e.includes(s.area.toLowerCase())&&(t+=2,o.push("te interesa "+s.area)),s.city==a.city&&(t++,o.push("está en "+a.city)),{j:s,s:t,r:o}}).filter(s=>s.s).sort((s,t)=>t.s-s.s).slice(0,3)}function Ee(){const e=L();return i.courses.map(a=>{const s=[...a.skills,a.cat].filter(t=>e.includes(t.toLowerCase()));return{c:a,s:s.length,r:s}}).filter(a=>a.s).sort((a,s)=>s.s-a.s).slice(0,3)}const ne=()=>{const e=i.me,a=[e.name,e.city,e.career,e.school,e.semester,e.grad,e.bio,(e.skills||[]).length,(e.interests||[]).length,e.langs,e.exp,e.mode,e.opp];return Math.round(a.filter(Boolean).length/a.length*100)};function Se(){const e=L(),a=i.me;return i.companies.map(s=>{let t=0,o=[];const c=s.areas.filter(d=>e.includes(d.toLowerCase()));c.length&&(t+=2*c.length,o.push("trabaja en "+c.join(", ")));const n=s.skills.filter(d=>e.includes(d.toLowerCase()));return n.length&&(t+=2*n.length,o.push("busca "+n.join(", "))),i.jobs.some(d=>d.co==s.id&&d.status=="activa"&&d.careers.includes(a.career))&&(t+=3,o.push("tiene vacantes para tu carrera")),s.city==a.city&&(t++,o.push("opera en "+a.city)),{c:s,s:t,r:o}}).filter(s=>s.s).sort((s,t)=>t.s-s.s).slice(0,3)}function Ie(){const e=L(),a=i.me.opp&&i.me.opp!="Cualquiera";return i.articles.map(s=>{const t=(s.t+" "+s.body).toLowerCase(),o=e.filter(d=>d.length>3&&t.includes(d));let c=o.length*2,n=o.length?["menciona "+o.slice(0,2).join(", ")]:[];return a&&/primer|prácticas|cv/i.test(s.t)&&(c++,n.push("te ayuda a buscar "+i.me.opp.toLowerCase())),{a:s,s:c,r:n}}).filter(s=>s.s).sort((s,t)=>t.s-s.s).slice(0,3)}const Q=(e,a)=>{const s=i.jobs.filter(t=>t.co==e.id&&t.status=="activa").length;return`<div class="card">
    <div class="row">
      <div class="avatar" style="background:${e.col}">${Y(e.n)}</div>
      <div>
        <h3 style="margin:0;font-size:17px">${r(e.n)}</h3>
        <span class="u-muted">${r(e.sec)} · ${r(e.city)}</span>
      </div>
      <span class="tag tag--accent u-grow" style="flex:none">Datos de ejemplo</span>
    </div>
    <div class="u-muted">${r(e.d)}</div>
    <div>
      ${e.areas.map(t=>`<span class="tag">${r(t)}</span>`).join("")}
    </div>
    <div class="u-muted">${s} vacante(s) activa(s) de demostración</div>
    ${a?`<p class="card__why">${a}</p>`:""}
    <div class="row">
      <button class="btn btn--primary btn--small" data-a="comp" data-id=${e.id}>Ver perfil</button
      ><button class="btn btn--small" data-a="cojobs" data-id=${e.id}>Explorar vacantes</button>
    </div>
  </div>`},K=(e,a)=>`<div class="card">
    <div class="card__icon">${r(e.ic)}</div>
    <span class="tag card__tag">${r(e.cat)}</span>
    <h3 class="card__title">${r(e.t)}</h3>
    <div class="u-muted">${e.min} min de lectura · ${r(e.upd)}</div>
    ${a?`<p class="card__why">${a}</p>`:""}<button
      class="btn btn--primary btn--small"
      data-a="art"
      data-id=${e.id}
    >
      Leer
    </button>
  </div>`,we=()=>{const e=ne();return`<section class="hero">
      <svg class="hero__bg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E4DCFF" />
            <stop offset="1" stop-color="#F6E7FF" />
          </linearGradient>
        </defs>
        <rect width="1200" height="360" fill="url(#sk)" />
        <circle cx="700" cy="85" r="34" fill="#A78BFA" />
        <path d="M420 300 640 120 730 200 820 110 1050 300Z" fill="#6C7DB3" />
        <path d="M0 300 200 215 420 300Z" fill="#9AA7D6" />
        <rect y="290" width="1200" height="70" fill="#DCD3F8" />
        <g fill="#2C3E66">
          <rect x="900" y="150" width="24" height="150" rx="12" />
          <rect x="868" y="200" width="14" height="50" rx="7" />
          <rect x="868" y="236" width="44" height="14" rx="7" />
          <rect x="940" y="190" width="14" height="44" rx="7" />
          <rect x="912" y="222" width="40" height="14" rx="7" />
        </g>
      </svg>
      <div class="hero__content">
        <h1 class="hero__title">Conecta tu talento con nuevas oportunidades</h1>
        <p class="hero__text">
          Vacantes, cursos y empresas de Sonora para estudiantes y recién egresados, en un solo
          lugar.
        </p>
        <form class="search" data-form="search">
          <input
            class="search__input"
            name="q"
            placeholder="Buscar vacantes, cursos o empresas…"
            aria-label="Buscar"
          /><button class="btn btn--primary">Buscar</button>
        </form>
        <div class="row">
          <a class="btn btn--accent" href="#/empleos">Explorar vacantes</a
          ><a class="btn" href="#/cursos">Descubrir cursos</a>
        </div>
      </div>
    </section>
    <div class="grid grid--4">
      <a class="section-card section-card--courses" href="#/cursos"
        ><h3 class="section-card__title">🎓 Cursos y capacitación</h3>
        <ul class="section-card__list">
          <li>Excel</li>
          <li>Inteligencia artificial</li>
          <li>Idiomas y más</li>
        </ul></a
      ><a class="section-card section-card--jobs" href="#/empleos"
        ><h3 class="section-card__title">💼 Oportunidades laborales</h3>
        <ul class="section-card__list">
          <li>Prácticas y becas</li>
          <li>Primer empleo</li>
        </ul></a
      ><a class="section-card section-card--companies" href="#/empresas"
        ><h3 class="section-card__title">🏢 Conoce las empresas</h3>
        <ul class="section-card__list">
          <li>Perfiles de Sonora</li>
          <li>Habilidades que buscan</li>
        </ul></a
      ><a class="section-card section-card--guides" href="#/orientacion"
        ><h3 class="section-card__title">🧭 Orientación profesional</h3>
        <ul class="section-card__list">
          <li>CV y entrevistas</li>
          <li>Consejos para empezar</li>
        </ul></a
      >
    </div>
    <div class="section split">
      <div>
        <h2 class="section__title">Oportunidades destacadas</h2>
        <div style="display:grid;gap:12px">
          ${i.jobs.filter(a=>a.status=="activa").slice(0,3).map(a=>q(a)).join("")}
        </div>
        <p><a href="#/empleos">Ver todas las vacantes</a></p>
      </div>
      <div class="card" style="align-self:start">
        <h2 style="font-size:20px">Completa tu perfil</h2>
        <p class="u-muted">Para recibir recomendaciones personalizadas.</p>
        <div class="progress"><i class="progress__fill" style="width:${e}%"></i></div>
        <b>${e}%</b
        ><a class="btn btn--primary" href="#/perfil" style="text-align:center;text-decoration:none"
          >${i.role=="cand"?"Editar mi perfil":"Entrar como estudiante"}</a
        >
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">Cursos recomendados</h2>
      <div class="grid grid--cards">
        ${i.courses.slice(0,3).map(a=>D(a)).join("")}
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">Conoce las empresas de Sonora</h2>
      <div class="grid grid--cards">
        ${i.companies.slice(0,3).map(a=>Q(a)).join("")}
      </div>
      <p><a href="#/empresas">Ver todas las empresas</a></p>
    </div>
    <div class="section">
      <h2 class="section__title">Orientación profesional</h2>
      <div class="grid grid--cards">
        ${i.articles.slice(0,3).map(a=>K(a)).join("")}
      </div>
      <p><a href="#/orientacion">Ver todas las guías</a></p>
    </div>
    <div class="section">
      <h2 class="section__title">Cómo funciona</h2>
      <ol class="steps">
        <li class="steps__item">
          <h3 class="steps__title">Crea tu perfil</h3>
          <span class="u-muted">Cuéntanos tu carrera, habilidades e intereses.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Aprende</h3>
          <span class="u-muted">Toma cursos que fortalezcan lo que piden las empresas.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Conoce empresas</h3>
          <span class="u-muted">Explora perfiles y vacantes de tu ciudad.</span>
        </li>
        <li class="steps__item">
          <h3 class="steps__title">Postúlate</h3>
          <span class="u-muted">Envía tu postulación y da seguimiento.</span>
        </li>
      </ol>
    </div>
    <div
      class="card"
      style="background:var(--tint-3);flex-direction:row;align-items:center;flex-wrap:wrap"
    >
      <div class="u-grow">
        <h2 style="margin:0">¿Eres empresa de Sonora?</h2>
        <span class="u-muted">Publica vacantes y conoce talento joven (demostración).</span>
      </div>
      <button class="btn btn--accent" data-a="login">Ingresar como empresa</button>
    </div>`},B=(e,a="Limpiar filtros")=>`<div class="empty-state">
    <p>${e}</p>
    <button class="btn btn--primary" data-a="clear">${a}</button>
  </div>`,M=(e,a)=>`<div class="empty-state empty-state--gate">
    <h2>${e}</h2>
    <p>Inicia sesión como ${a} para ver esta sección.</p>
    <div class="row" style="justify-content:center">
      <a class="btn btn--primary" href="#/login">Iniciar sesión</a
      ><a class="btn" href="#/registro">Crear cuenta</a>
    </div>
  </div>`,De=()=>`<h1 class="page-title page-title--spaced">Oportunidades laborales en Sonora</h1>
    <p class="u-muted">Vacantes ficticias para demostración.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="jobs.q"
        placeholder="Palabra clave"
        aria-label="Palabra clave"
      />${g("city",k(i.jobs,"city"),"Ciudad","jobs")}${g("area",k(i.jobs,"area"),"Área","jobs")}${g("career",[...new Set(i.jobs.flatMap(e=>e.careers))].sort(),"Carrera","jobs")}${g("mode",["Presencial","Híbrida","Remota"],"Modalidad","jobs")}${g("type",k(i.jobs,"type"),"Tipo","jobs")}${g("exp",k(i.jobs,"exp"),"Experiencia","jobs")}<select
        class="filters__control"
        data-f="jobs.days"
        aria-label="Fecha"
      >
        <option value="">Cualquier fecha</option>
        <option value="3">Últimos 3 días</option>
        <option value="7">Última semana</option>
        <option value="30">Último mes</option></select
      ><select class="filters__control" data-f="jobs.sort" aria-label="Orden">
        <option value="">Más recientes</option>
        <option value="old">Más antiguas</option>
      </select>
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`,qe=()=>{const e=(m.q||"").toLowerCase(),a=i.jobs.filter(s=>s.status=="activa"&&(!e||(s.t+s.skills+f(s.co).n).toLowerCase().includes(e))&&["city","area","mode","type","exp"].every(t=>!m[t]||s[t]==m[t])&&(!m.days||s.days<=+m.days)&&(!m.career||s.careers.includes(m.career))).sort((s,t)=>m.sort?t.days-s.days:s.days-t.days);p("#cnt").textContent=`${a.length} resultado(s)`,p("#res").innerHTML=a.length?a.map(s=>q(s)).join(""):`<div style="grid-column:1/-1">
        ${B("No encontramos vacantes con esos filtros. Prueba quitar alguno.")}
      </div>`},Me=()=>`<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Cursos y capacitación</h1>
      ${i.role=="admin"?'<button class="btn btn--accent" data-a=newc>+ Nuevo curso</button>':""}
    </div>
    <p class="u-muted">Precios y proveedores ficticios; no hay inscripción real.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="courses.q"
        placeholder="Buscar curso"
        aria-label="Buscar"
      />${g("cat",i.cats.courses,"Categoría","courses")}${g("lvl",["Básico","Intermedio","Avanzado"],"Nivel","courses")}<select
        class="filters__control"
        data-f="courses.pr"
        aria-label="Precio"
      >
        <option value="">Cualquier precio</option>
        <option value="free">Gratis</option>
        <option value="paid">De pago (demo)</option>
      </select>
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`,He=()=>{const e=(v.q||"").toLowerCase(),a=i.courses.filter(s=>(!e||(s.t+s.d).toLowerCase().includes(e))&&(!v.cat||s.cat==v.cat)&&(!v.lvl||s.lvl==v.lvl)&&(!v.pr||v.pr=="free"==!s.price));p("#cnt").textContent=`${a.length} curso(s)`,p("#res").innerHTML=a.length?a.map(s=>D(s)).join(""):`<div style="grid-column:1/-1">
        ${B("No hay cursos con esos filtros.")}
      </div>`},Le=()=>`<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Conoce las empresas</h1>
      ${i.role=="admin"?'<button class="btn btn--accent" data-a=newco>+ Nueva empresa</button>':""}
    </div>
    <p class="u-muted">Perfiles inventados; no representan empresas reales.</p>
    <div class="filters">
      <input
        class="filters__control"
        data-f="companies.q"
        placeholder="Nombre de la empresa"
        aria-label="Nombre"
      />${g("city",k(i.companies,"city"),"Ciudad","companies")}${g("sec",k(i.companies,"sec"),"Sector","companies")}
    </div>
    <p id="cnt" class="u-muted"></p>
    <div class="grid grid--cards" id="res"></div>`,Be=()=>{const e=(y.q||"").toLowerCase(),a=i.companies.filter(s=>(!e||s.n.toLowerCase().includes(e))&&(!y.city||s.city==y.city)&&(!y.sec||s.sec==y.sec));p("#cnt").textContent=`${a.length} empresa(s)`,p("#res").innerHTML=a.length?a.map(s=>Q(s)).join(""):`<div style="grid-column:1/-1">
        ${B("Ninguna empresa coincide con tu búsqueda.")}
      </div>`},Ne=()=>`<h1 class="page-title page-title--spaced">Orientación profesional</h1>
    <div class="filters">
      <input
        class="filters__control"
        data-f="articles.q"
        placeholder="Buscar guía"
        aria-label="Buscar"
      />${g("cat",i.cats.articles,"Categoría","articles")}
    </div>
    <div class="grid grid--cards" id="res"></div>`,Fe=()=>{const e=(_.q||"").toLowerCase(),a=i.articles.filter(s=>(!e||s.t.toLowerCase().includes(e))&&(!_.cat||s.cat==_.cat));p("#res").innerHTML=a.length?a.map(s=>K(s)).join(""):`<div style="grid-column:1/-1">
        ${B("No hay guías con esa búsqueda.")}
      </div>`},Oe=[["info","Mi información"],["skills","Mis habilidades"],["cursos","Mis cursos"],["guard","Vacantes guardadas"],["apps","Mis postulaciones"],["prefs","Mis preferencias"],["rec","Recomendado"]],le="<span class=u-muted>Sin completar</span>",X=e=>e&&e.length?e.map(a=>`<span class="tag">${r(a)}</span>`).join(""):le,O=e=>`<dl class="data">
    ${e.map(([a,s])=>`<div class="data__row">
            <dt class="data__label">${a}</dt>
            <dd class="data__value">${s||le}</dd>
          </div>`).join("")}
  </dl>`,G=e=>`<div class="grid grid--cards">${e}</div>`,S=(e,a)=>a?`<h2 class="section__title">${e}</h2>
        ${G(a)}`:"",R=e=>"Por qué: "+e.join("; ")+".",z=(e,a)=>`<div class="row">
    <button class="btn btn--primary" data-a="edit" data-id=${e}>${a}</button>
  </div>`,Re=()=>{if(i.role!="cand")return M("Mi perfil","estudiante");const e=i.me,a=ne(),s=H.pt;let t="";if(s=="info"&&(t=`<div class="card">
      ${O([["Nombre",r(e.name)],["Ciudad",r(e.city)],["Carrera",r(e.career)],["Institución",r(e.school)],["Semestre o nivel",r(e.semester)],["Egreso estimado",r(e.grad)],["Presentación",r(e.bio)]])}${z("info","Editar información")}
    </div>`),s=="skills"&&(t=`<div class="card">
      <h3>Habilidades</h3>
      <div>${X(e.skills)}</div>
      <h3>Áreas de interés</h3>
      <div>${X(e.interests)}</div>
      ${O([["Idiomas",r(e.langs)],["Experiencia",r(e.exp)]])}${z("skills","Editar habilidades")}
    </div>`),s=="prefs"&&(t=`<div class="card">
      ${O([["Modalidad preferida",r(e.mode)],["Tipo de oportunidad",r(e.opp)]])}${z("prefs","Editar preferencias")}
    </div>`),s=="cursos"){const o=Object.keys(i.cs).map(n=>l.courses.get(n)).filter(Boolean),c=n=>o.filter(d=>i.cs[d.id]==n).length;t=o.length?`<p class="u-muted">
            ${j.guardado}: ${c("guardado")} · ${j.progreso}:
            ${c("progreso")} · ${j.completado}: ${c("completado")}
          </p>
          ${G(o.map(n=>D(n)).join(""))}`:'<div class=empty-state>Aún no guardas cursos. <a href="#/cursos">Explora el catálogo</a>.</div>'}if(s=="guard"){const o=i.sj.map(c=>l.jobs.get(c)).filter(Boolean);t=o.length?G(o.map(c=>q(c)).join("")):'<div class=empty-state>Aún no guardas vacantes. <a href="#/empleos">Explora las oportunidades</a>.</div>'}if(s=="apps"){const o=i.apps.filter(c=>c.cand==(i.session||"me"));t=o.length?`<div class="card">
          ${o.map(c=>{const n=l.jobs.get(c.job);return`<div class="row">
                <b class="u-grow">${r(n==null?void 0:n.t)}</b
                ><span class="u-muted">${r(f(n==null?void 0:n.co).n)}</span
                ><span class="tag tag--success">${c.st}</span>
              </div>`}).join("")}
          <p class="u-muted">Postulaciones ficticias: no se enviaron a ninguna empresa.</p>
        </div>`:"<div class=empty-state>Todavía no te has postulado.</div>"}return s=="rec"&&(t=S("Vacantes para ti",Ae().map(({j:o,r:c})=>q(o,R(c))).join(""))+S("Cursos recomendados",Ee().map(({c:o,r:c})=>D(o,"Por qué: coincide con "+c.join(", ")+".")).join(""))+S("Empresas para conocer",Se().map(({c:o,r:c})=>Q(o,R(c))).join(""))+S("Guías que te pueden servir",Ie().map(({a:o,r:c})=>K(o,R(c))).join(""))||"<div class=empty-state>Agrega habilidades e intereses en tu perfil para recibir recomendaciones.</div>"),`<h1 class="page-title page-title--spaced">Mi perfil</h1>
    <div class="card profile">
      <div class="row">
        <div class="avatar profile__avatar">${r(Y(e.name))}</div>
        <div class="u-grow">
          <h2 class="profile__name">${r(e.name)}</h2>
          <span class="u-muted">${r(e.career)} · ${r(e.city)}</span>
        </div>
        <div class="profile__progress">
          <span class="u-muted">Perfil completo al ${a}%</span>
          <div class="progress"><i class="progress__fill" style="width:${a}%"></i></div>
        </div>
      </div>
    </div>
    <div class="tabs">
      ${Oe.map(([o,c])=>`<button class="btn ${s==o?"btn--active":""}" data-a="tab" data-id=${o}>${c}</button>`).join("")}
    </div>
    ${t}`},ze=()=>{if(i.role!="emp")return M("Panel de empresa","empresa");const e=l.companies.get(i.myco);if(!e)return M("Panel de empresa","empresa");const a=i.jobs.filter(t=>t.co==e.id),s=i.apps.filter(t=>a.some(o=>o.id==t.job));return`<div class="row" style="margin-top:24px">
      <h1 class="page-title u-grow">Panel de ${r(e.n)}</h1>
      <button class="btn btn--accent" data-a="newj">+ Nueva vacante</button
      ><button class="btn" data-a="comp" data-id=${e.id}>Ver vista pública</button>
    </div>
    <div class="grid grid--4" style="margin:14px 0">
      ${[["Vacantes activas",a.filter(t=>t.status=="activa").length],["Postulaciones",s.length],["Visitas (ficticias)",1240]].map(([t,o])=>`<div class="card">
              <span class="u-muted">${t}</span><b style="font-size:28px">${o}</b>
            </div>`).join("")}
    </div>
    <h2>Mis vacantes</h2>
    <div class="card u-scroll-x">
      <table class="table">
        ${a.map(t=>`<tr>
                  <td class="table__cell">
                    <b>${r(t.t)}</b><br /><span class="u-muted"
                      >${r(t.city)}</span
                    >
                  </td>
                  <td class="table__cell">
                    <span class="tag ${t.status=="activa"?"tag--success":"tag--accent"}"
                      >${t.status}</span
                    >
                  </td>
                  <td class="table__cell row">
                    ${t.status=="activa"?`<button class="btn btn--small" data-a="jst" data-id=${t.id} data-s="pausada">Pausar</button>`:`<button class="btn btn--small" data-a="jst" data-id=${t.id} data-s="activa">Reactivar</button>`}${t.status!="cerrada"?`<button class="btn btn--small" data-a="jst" data-id=${t.id} data-s="cerrada">Cerrar</button>`:""}<button
                      class="btn btn--small"
                      data-a="editj"
                      data-id=${t.id}
                    >
                      Editar</button
                    ><button class="btn btn--small" data-a="delj" data-id=${t.id}>Eliminar</button>
                  </td>
                </tr>`).join("")||"<tr><td class=table__cell>Aún no tienes vacantes.</td></tr>"}
      </table>
    </div>
    <h2 style="margin-top:24px">Postulaciones simuladas</h2>
    <div class="card u-scroll-x">
      <table class="table">
        ${s.map(t=>{var o,c;return`<tr>
                  <td class="table__cell">
                    <b
                      >${r(t.cand=="me"?i.me.name:((o=i.users.find(n=>n.id==t.cand))==null?void 0:o.name)||t.cand)}</b
                    >
                  </td>
                  <td class="table__cell">${r((c=l.jobs.get(t.job))==null?void 0:c.t)}</td>
                  <td class="table__cell">
                    <select class="table__select" data-ap=${t.id} aria-label="Estado">
                      ${["Recibida","En revisión","Entrevista","No seleccionada"].map(n=>`<option ${n==t.st?"selected":""}>${n}</option>`).join("")}
                    </select>
                  </td>
                </tr>`}).join("")||"<tr><td class=table__cell>Sin postulaciones aún.</td></tr>"}
      </table>
    </div>`},I=(e,a,s,t,o,c)=>`<div class="row admin__head">
      <h2 class="admin__title u-grow">${e} (${s.length})</h2>
      <button class="btn btn--accent btn--small" data-a=${o}>+ Nuevo</button>
    </div>
    <div class="card u-scroll-x">
      <table class="table">
        ${s.map(n=>`<tr>
                  <td class="table__cell">${r(t(n))}</td>
                  <td class="table__cell admin__actions">
                    <button class="btn btn--small" data-a=${c} data-id=${n.id}>Editar</button>
                    <button class="btn btn--small" data-a="del" data-id=${n.id} data-k=${a}>
                      Eliminar
                    </button>
                  </td>
                </tr>`).join("")||"<tr><td class=table__cell>Sin elementos.</td></tr>"}
      </table>
    </div>`,Z=(e,a)=>`<div class="card">
    <div class="row">
      <h3 class="u-grow">${e}</h3>
      <button class="btn btn--small" data-a="catadd" data-id=${a}>+ Categoría</button>
    </div>
    <div>
      ${i.cats[a].map(s=>`<span class="chip">${r(s)}<button class="chip__remove" data-a="catdel" data-id=${a} data-n="${r(s)}" aria-label="Quitar ${r(s)}">×</button></span>`).join("")}
    </div>
  </div>`,Te=()=>i.role!="admin"?M("Administración","administrador"):`<div class="row admin__head">
          <h1 class="page-title u-grow">Administración</h1>
          <button class="btn btn--accent" data-a="reset">Restablecer demostración</button>
        </div>
        <p class="u-muted">
          Herramientas para gestionar el contenido de ejemplo. Es una demostración, no un sistema de
          permisos.
        </p>
        ${I("Empresas","E",i.companies,e=>e.n+" · "+e.city,"newco","editco")}${I("Vacantes","V",i.jobs,e=>`${e.t} · ${f(e.co).n} · ${e.status}`,"newj","editj")}${I("Cursos","C",i.courses,e=>`${e.t} · ${e.cat}`,"newc","editc")}${I("Artículos","A",i.articles,e=>`${e.t} · ${e.cat}`,"newa","edita")}
        <div class="row admin__head"><h2 class="admin__title">Categorías</h2></div>
        <div class="grid grid--4">
          ${Z("Cursos","courses")}${Z("Artículos","articles")}
        </div>`,x=e=>JSON.parse(JSON.stringify(e)),de=async(e,a)=>{var o;const s=a+e;if(!((o=globalThis.crypto)!=null&&o.subtle))return"b64:"+btoa(unescape(encodeURIComponent(s)));const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(t)].map(c=>c.toString(16).padStart(2,"0")).join("")},pe=e=>String(e||"").trim().toLowerCase(),Ve=e=>e.role=="emp"?"#/panel":"#/perfil";function ue(e){i.session=e.id,i.role=e.role,e.role=="cand"&&(i.me=x(e.me),i.sj=x(e.sj||[]),i.cs=x(e.cs||{})),e.role=="emp"&&(i.myco=e.company.id)}function Ge(e){i.session&&(i.me=x(U),i.sj=[],i.cs={}),i.session=null,i.role=e,e=="emp"&&(i.myco="c1")}function Je(){i.session=null,i.role=null,i.me=x(U),i.sj=[],i.cs={}}async function Ue(e,a){const s=i.users.find(t=>t.email==pe(e));return!s||s.hash!==await de(a||"",s.salt)?{error:"Correo o contraseña incorrectos."}:(ue(s),{user:s})}async function Ye(e){const a=e.role=="emp",s=(e.name||"").trim(),t=pe(e.email);if(s.length<3)return{error:"Escribe tu nombre completo (mínimo 3 caracteres)."};if(!/^\S+@\S+\.\S+$/.test(t))return{error:"Escribe un correo electrónico válido."};if(i.users.some(c=>c.email==t))return{error:"Ya existe una cuenta con ese correo. Inicia sesión."};if((e.pass||"").length<6)return{error:"La contraseña debe tener al menos 6 caracteres."};if(e.pass!==e.pass2)return{error:"Las contraseñas no coinciden."};const o={id:"u"+ ++i.seq,role:a?"emp":"cand",name:s,email:t,salt:Math.random().toString(36).slice(2)};if(o.hash=await de(e.pass,o.salt),a){const c=(e.company||"").trim();if(c.length<3)return{error:"Escribe el nombre de la empresa."};if(!(e.sector||"").trim())return{error:"Indica el sector de la empresa."};if(l.companies.list().some(n=>n.n.toLowerCase()==c.toLowerCase()))return{error:"Ya existe una empresa con ese nombre."};o.company=x(l.companies.create({n:c,sec:e.sector.trim(),city:e.city,areas:[],skills:[],prog:"",d:"Empresa registrada en la demostración.",col:"#2C3E66"}))}else o.me={name:s,city:e.city,career:e.career,school:"",semester:"",grad:"",interests:[],skills:[],langs:"",exp:"",mode:"Híbrida",opp:"Cualquiera",bio:""},o.sj=[],o.cs={};return i.users.push(o),ue(o),{user:o,created:!0}}const Qe=()=>`<section class="auth">
    <div class="auth__panel">
      <h1 class="auth__title">Iniciar sesión</h1>
      <p class="u-muted">
        Las cuentas se guardan solo en este navegador. No uses una contraseña que utilices en otros
        sitios.
      </p>
      <form class="form" data-form="login" novalidate>
        <label class="form__label"
          >Correo electrónico<input
            class="form__control"
            name="email"
            type="email"
            autocomplete="username"
        /></label>
        <label class="form__label"
          >Contraseña<input
            class="form__control"
            name="pass"
            type="password"
            autocomplete="current-password"
        /></label>
        <p class="form__error" id="er"></p>
        <button class="btn btn--primary">Entrar</button>
      </form>
      <p>¿Aún no tienes cuenta? <a href="#/registro">Crear cuenta</a></p>
      <div class="auth__demo">
        <p class="u-muted">O explora sin cuenta:</p>
        <div class="row">
          <button class="btn btn--small" data-a="role" data-id="cand">
            Explorar como estudiante
          </button>
          <button class="btn btn--small" data-a="role" data-id="emp">Explorar como empresa</button>
          <button class="btn btn--small" data-a="role" data-id="admin">
            Explorar como administrador
          </button>
        </div>
      </div>
    </div>
  </section>`,Ke=e=>Ue(e.email,e.pass),me=["Ingeniería Industrial","Ing. en Sistemas","Ing. Eléctrica","Contaduría","Administración","Mercadotecnia","Derecho","Psicología","Enfermería","Ing. Civil","Ing. Agrónomo","Ing. en Minas","Arquitectura","Diseño Gráfico"],N=["Hermosillo","Cd. Obregón","Nogales","Guaymas","Navojoa","Caborca","Cananea","Puerto Peñasco","San Luis Río Colorado","Agua Prieta"],C=(e,a,s="text",t="")=>`<label class="form__label"
    >${e}<input class="form__control" name="${a}" type="${s}" ${t}
  /></label>`,W=(e,a,s)=>`<label class="form__label"
    >${e}<select class="form__control" name="${a}">
      ${s.map(t=>`<option>${t}</option>`).join("")}
    </select></label
  >`,Xe=()=>{const e=H.signup=="emp";return`<section class="auth">
    <div class="auth__panel">
      <h1 class="auth__title">Crear cuenta</h1>
      <p class="u-muted">Cuenta local de demostración: se guarda solo en este navegador.</p>
      <div class="tabs">
        <button class="btn ${e?"":"btn--active"}" data-a="signupType" data-id="cand">
          Soy estudiante</button
        ><button class="btn ${e?"btn--active":""}" data-a="signupType" data-id="emp">
          Soy empresa
        </button>
      </div>
      <form class="form" data-form="signup" novalidate>
        <input type="hidden" name="role" value="${e?"emp":"cand"}" />
        ${C(e?"Nombre de la persona responsable":"Nombre completo","name","text",'autocomplete="name"')}${C("Correo electrónico","email","email",'autocomplete="username"')}
        ${C("Contraseña (mínimo 6 caracteres)","pass","password",'autocomplete="new-password"')}${C("Confirmar contraseña","pass2","password",'autocomplete="new-password"')}
        ${e?C("Nombre de la empresa","company")+C("Sector","sector"):W("Carrera","career",me)}${W("Ciudad","city",N)}
        <p class="form__error" id="er"></p>
        <button class="btn btn--primary">Crear cuenta</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="#/login">Iniciar sesión</a></p>
    </div>
  </section>`},Ze=e=>Ye(e),ee={"/":we,"/empleos":De,"/cursos":Me,"/empresas":Le,"/orientacion":Ne,"/perfil":Re,"/panel":ze,"/admin":Te,"/login":Qe,"/registro":Xe},be=()=>location.hash.slice(1)||"/",T={"/empleos":qe,"/cursos":He,"/empresas":Be,"/orientacion":Fe},ge=()=>{var e;return(e=T[be()])==null?void 0:e.call(T)};function u(){const e=be();_e(e),p("#app").innerHTML=(ee[e]||ee["/"])(),Pe(),ge(),oe(),window.scrollTo(0,0)}const We={x:h,tab:e=>{H.pt=e,u()},clear:()=>{[m,v,y,_].forEach(e=>{for(const a in e)delete e[a]}),u()}},ve={login:()=>{h(),location.hash="#/login"},role:e=>{e?Ge(e):Je(),h(),location.hash=e=="emp"?"#/panel":e=="admin"?"#/admin":e?"#/perfil":"#/",u(),b(e?"Perfil de demostración activo":"Sesión cerrada")},signupType:e=>{H.signup=e,u()}};function A(e,a,s,t){P(`<h2>${e}</h2>
      <form class="form" id="fm">
        ${a.map(o=>`<label class="form__label"
                >${o.l}${o.t=="sel"?`<select class="form__control" name=${o.k}>
                        ${o.o.map(c=>`<option ${c==s[o.k]?"selected":""}>${r(c)}</option>`).join("")}
                      </select>`:o.t=="area"?`<textarea class="form__control" name=${o.k} rows="3">
${r(s[o.k])}</textarea>`:`<input
                          class="form__control"
                          name=${o.k}
                          value="${r(s[o.k])}"
                        />`}</label
              >`).join("")}
        <p class="form__error" id="er"></p>
        <div class="row">
          <button class="btn btn--primary">Guardar</button
          ><button type="button" class="btn" data-a="x">Cancelar</button>
        </div>
      </form>`),p("#fm").onsubmit=o=>{o.preventDefault();const c=Object.fromEntries(new FormData(o.target));for(const d of a)if(d.r&&!String(c[d.k]||"").trim())return p("#er").textContent=`Completa el campo «${d.l}».`;const n=t(c);if(n)return p("#er").textContent=n;h(),b("Cambios guardados en la demostración"),u()}}const ea=()=>[{k:"t",l:"Puesto",r:1},{k:"city",l:"Ciudad",t:"sel",o:N},{k:"area",l:"Área profesional",r:1},{k:"careers",l:"Carreras relacionadas (separadas por coma)"},{k:"mode",l:"Modalidad",t:"sel",o:["Presencial","Híbrida","Remota"]},{k:"type",l:"Tipo de oportunidad",t:"sel",o:["Prácticas","Beca","Primer empleo"]},{k:"exp",l:"Experiencia",t:"sel",o:["Sin experiencia","Menos de 1 año","1 a 2 años"]},{k:"sal",l:"Rango salarial (demo)"},{k:"skills",l:"Habilidades (separadas por coma)",r:1},{k:"desc",l:"Descripción",t:"area",r:1}];function ae(e){const a=i.role=="admin",s=e?l.jobs.get(e):{city:"Hermosillo",mode:"Presencial",type:"Prácticas",exp:"Sin experiencia",sal:"A tratar (demo)"},t=ea();a&&t.unshift({k:"empresa",l:"Empresa",t:"sel",o:i.companies.map(o=>o.n)}),A(e?"Editar vacante":"Nueva vacante",t,{...s,skills:(s.skills||[]).join(", "),careers:(s.careers||[]).join(", "),empresa:f(s.co||i.myco).n},o=>{if(o.t.trim().length<5)return"El puesto debe tener al menos 5 caracteres.";if(o.desc.trim().length<20)return"La descripción debe tener al menos 20 caracteres.";const c=a?i.companies.find(d=>d.n==o.empresa):l.companies.get(i.myco);if(!c)return"Selecciona una empresa.";delete o.empresa;const n={...o,skills:$(o.skills),careers:$(o.careers),co:c.id};e?l.jobs.update(e,n):l.jobs.create({...n,days:0,status:"activa"})})}const aa={job:e=>{const a=l.jobs.get(e),s=f(a.co);P(`<h2>${r(a.t)}</h2>
        <p>
          <a href="#" data-a="comp" data-id=${a.co}>${r(s.n)}</a> · ${r(a.city)} ·
          ${a.mode}
        </p>
        <div><span class="tag">${a.type}</span><span class="tag tag--accent">${a.exp}</span></div>
        <p>${r(a.desc)}</p>
        <b>Responsabilidades</b>
        <ul class="list">
          <li>Apoyar al equipo en tareas del área de ${r(a.area)}.</li>
          <li>Dar seguimiento a pendientes semanales.</li>
        </ul>
        <b>Requisitos</b>
        <ul class="list">
          ${a.skills.map(t=>`<li>${r(t)}</li>`).join("")}
        </ul>
        <p class="u-muted">
          Condiciones de ejemplo: ${r(a.sal)} · publicada ${ce(a.days).toLowerCase()}.
          Vacante ficticia.
        </p>
        <div class="row">
          <button class="btn btn--accent" data-a="apply" data-id=${a.id}>Postularme</button
          ><button class="btn" data-a="sj" data-id=${a.id}>
            ${i.sj.includes(a.id)?"★ Guardada":"☆ Guardar"}
          </button>
        </div>`)},sj:e=>{i.sj=i.sj.includes(e)?i.sj.filter(a=>a!=e):[...i.sj,e],u(),b("Vacante guardada actualizada")},apply:e=>{if(i.role!="cand")return ve.login();if(i.apps.some(s=>s.cand==(i.session||"me")&&s.job==e))return b("Ya te postulaste a esta vacante");const a=l.jobs.get(e);P(`<h2>Postularme: ${r(a.t)}</h2>
        <p class="u-muted">Simulación: tu postulación no se envía a ninguna empresa.</p>
        <form class="form" id="af">
          <label class="form__label"
            >Mensaje de presentación<textarea
              class="form__control"
              name="m"
              rows="4"
            ></textarea></label
          ><label class="form__label"
            >CV (solo muestra el nombre del archivo)<input
              class="form__control"
              type="file"
              name="f"
              id="ff"
          /></label>
          <p class="form__error" id="er"></p>
          <button class="btn btn--primary">Enviar postulación de ejemplo</button>
        </form>`),p("#af").onsubmit=s=>{if(s.preventDefault(),p("#af").m.value.trim().length<10)return p("#er").textContent="Escribe al menos 10 caracteres en tu mensaje.";i.apps.push({id:"p"+ ++i.seq,job:e,cand:i.session||"me",st:"Recibida"}),h(),u(),b("Postulación simulada registrada en Mis postulaciones")}},cojobs:e=>{h();for(const a in m)delete m[a];m.q=f(e).n,location.hash="#/empleos",u()},newj:()=>ae(),editj:e=>ae(e),delj:e=>{confirm("¿Eliminar esta vacante de la demostración?")&&(l.jobs.remove(e),u())},jst:(e,a)=>{l.jobs.update(e,{status:a.dataset.s}),u(),b("Estado actualizado: "+a.dataset.s)}},fe={course:e=>{const a=l.courses.get(e);P(`<h2>${r(a.t)}</h2>
        <span class="tag">${r(a.cat)}</span><span class="tag tag--accent">${a.lvl}</span>
        <p>${r(a.d)}</p>
        <b>Habilidades que desarrolla</b>
        <ul class="list">
          ${a.skills.map(s=>`<li>${r(s)}</li>`).join("")}
        </ul>
        <p class="u-muted">
          ${a.kind} · ${a.dur} · ${r(a.prov)} ·
          ${a.ext?"Consulta costos y requisitos en el sitio.":re(a.price)+". Recurso demostrativo: no hay inscripción ni enlace real."}
        </p>
        ${a.ext?`<p>
                  <a
                    class="btn btn--accent"
                    href="${r(a.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Abrir sitio externo</a
                  >
                </p>
                <p class="u-muted">
                  Enlace externo verificado el 10 de octubre de 2026. Al abrirlo sales de Conecta
                  Sonora.
                </p>`:""}
        <div class="row">
          <button class="btn btn--primary" data-a="cs" data-id=${a.id}>
            ${i.cs[e]?j[i.cs[e]]+" ▸":"☆ Guardar"}</button
          >${i.role=="admin"?`<button class="btn" data-a="editc" data-id=${e}>Editar</button>`:""}
        </div>`)},cs:e=>{const a={undefined:"guardado",guardado:"progreso",progreso:"completado"}[i.cs[e]];a?i.cs[e]=a:delete i.cs[e],u(),b(a?j[a]:"Curso quitado de tu lista")},newc:()=>fe.editc(),editc:e=>{const a=e?l.courses.get(e):{cat:i.cats.courses[0],lvl:"Básico",kind:"Curso",price:0};A(e?"Editar curso":"Nuevo curso",[{k:"t",l:"Nombre",r:1},{k:"cat",l:"Categoría",t:"sel",o:i.cats.courses},{k:"lvl",l:"Nivel",t:"sel",o:["Básico","Intermedio","Avanzado"]},{k:"kind",l:"Tipo de recurso",t:"sel",o:["Curso","Video","Guía","Plataforma"]},{k:"price",l:"Precio demo (0 = gratis)"},{k:"dur",l:"Duración",r:1},{k:"prov",l:"Proveedor (demo)",r:1},{k:"skills",l:"Habilidades que desarrolla (coma)"},{k:"d",l:"Descripción",t:"area",r:1}],{...a,skills:(a.skills||[]).join(", ")},s=>{if(isNaN(+s.price))return"El precio debe ser un número.";const t=$(s.skills),o={...s,price:+s.price,skills:t.length?t:[s.cat]};e?l.courses.update(e,o):l.courses.create(o)})}},sa=(e,a)=>i.companies.some(s=>s.n.toLowerCase()==e.trim().toLowerCase()&&s.id!=a),ye={comp:e=>{const a=l.companies.get(e),s=i.jobs.filter(t=>t.co==e&&t.status=="activa");P(`<h2>${r(a.n)}</h2>
        <span class="tag tag--accent">Datos de ejemplo</span>
        <p>${r(a.d)}</p>
        <p class="u-muted">
          ${r(a.sec)} ·
          ${r(a.city)}${a.prog?" · Programa: "+r(a.prog):""}
        </p>
        <div>
          ${a.skills.map(t=>`<span class="tag">${r(t)}</span>`).join("")}
        </div>
        <h3 style="margin-top:14px">Vacantes activas (${s.length})</h3>
        ${s.map(t=>`<p><a href="#" data-a="job" data-id=${t.id}>${r(t.t)}</a> <span class="u-muted">· ${t.type}</span></p>`).join("")||"<p class=u-muted>Sin vacantes activas.</p>"}${i.role=="admin"?`<button class="btn" data-a="editco" data-id=${e}>Editar empresa</button>`:""}`)},newco:()=>ye.editco(),editco:e=>{const a=e?l.companies.get(e):{city:"Hermosillo",col:"#2C3E66"};A(e?"Editar empresa":"Nueva empresa",[{k:"n",l:"Nombre",r:1},{k:"sec",l:"Sector",r:1},{k:"city",l:"Ciudad",t:"sel",o:N},{k:"areas",l:"Áreas profesionales (coma)"},{k:"skills",l:"Habilidades que busca (coma)"},{k:"prog",l:"Programa para estudiantes (opcional)"},{k:"d",l:"Descripción",t:"area",r:1}],{...a,areas:(a.areas||[]).join(", "),skills:(a.skills||[]).join(", ")},s=>{if(sa(s.n,e))return"Ya existe una empresa con ese nombre.";const t={...s,areas:$(s.areas),skills:$(s.skills),col:a.col};e?l.companies.update(e,t):l.companies.create(t)})}},he={art:e=>{const a=l.articles.get(e),s=i.articles.filter(t=>t.cat==a.cat&&t.id!=e).concat(i.articles.filter(t=>t.cat!=a.cat&&t.id!=e)).slice(0,2);P(`<h2>${a.ic} ${r(a.t)}</h2>
        <p class="u-muted">${a.min} min · ${a.upd} (simulado)</p>
        ${r(a.body).split(`

`).map(t=>`<p>${t}</p>`).join("")}
        <h3>Artículos relacionados</h3>
        ${s.map(t=>`<p><a href="#" data-a="art" data-id=${t.id}>${r(t.t)}</a></p>`).join("")}`)},newa:()=>he.edita(),edita:e=>{const a=e?l.articles.get(e):{cat:i.cats.articles[0],ic:"📄",min:5};A(e?"Editar artículo":"Nuevo artículo",[{k:"t",l:"Título",r:1},{k:"cat",l:"Categoría",t:"sel",o:i.cats.articles},{k:"ic",l:"Icono (un emoji)",r:1},{k:"min",l:"Minutos de lectura"},{k:"body",l:"Contenido (separa párrafos con una línea en blanco)",t:"area",r:1}],a,s=>{if(!(+s.min>0))return"Los minutos de lectura deben ser un número mayor que 0.";if(s.body.trim().length<40)return"El contenido debe tener al menos 40 caracteres.";const t={...s,min:+s.min,upd:"Hoy (simulado)"};e?l.articles.update(e,t):l.articles.create(t)})}},ta={info:["Editar información",[{k:"name",l:"Nombre",r:1},{k:"city",l:"Ciudad",t:"sel",o:N},{k:"career",l:"Carrera",t:"sel",o:me},{k:"school",l:"Institución educativa"},{k:"semester",l:"Semestre o nivel de estudios"},{k:"grad",l:"Fecha estimada de egreso"},{k:"bio",l:"Presentación profesional",t:"area"}]],skills:["Editar habilidades",[{k:"skills",l:"Habilidades (separadas por coma)"},{k:"interests",l:"Áreas de interés (separadas por coma)"},{k:"langs",l:"Idiomas"},{k:"exp",l:"Experiencia",t:"area"}]],prefs:["Editar preferencias",[{k:"mode",l:"Modalidad preferida",t:"sel",o:["Presencial","Híbrida","Remota"]},{k:"opp",l:"Tipo de oportunidad buscada",t:"sel",o:["Cualquiera","Prácticas","Beca","Primer empleo"]}]]},ia={edit:e=>{const[a,s]=ta[e||"info"],t=i.me;A(a,s,{...t,skills:(t.skills||[]).join(", "),interests:(t.interests||[]).join(", ")},o=>{"skills"in o&&(o.skills=$(o.skills)),"interests"in o&&(o.interests=$(o.interests)),Object.assign(i.me,o)})}},oa={catadd:e=>A("Nueva categoría",[{k:"n",l:"Nombre",r:1}],{},a=>{const s=a.n.trim();if(i.cats[e].some(t=>t.toLowerCase()==s.toLowerCase()))return"Esa categoría ya existe.";i.cats[e].push(s)}),catdel:(e,a)=>{const s=a.dataset.n;if((e=="courses"?i.courses:i.articles).some(t=>t.cat==s))return b("No se puede eliminar: hay elementos que usan esta categoría.");confirm("¿Eliminar la categoría?")&&(i.cats[e]=i.cats[e].filter(t=>t!=s),u())},del:(e,a)=>{if(confirm("¿Eliminar este elemento de la demostración?")){const s={E:"companies",V:"jobs",C:"courses",A:"articles"}[a.dataset.k];s=="companies"&&(i.jobs=i.jobs.filter(t=>t.co!=e)),l[s].remove(e),u()}},reset:()=>{confirm("¿Restablecer todos los datos de ejemplo?")&&($e(),u(),b("Demostración restablecida"))}},w={...We,...ve,...aa,...fe,...ye,...he,...ia,...oa},ra={jobs:m,courses:v,companies:y,articles:_},ca={login:Ke,signup:Ze,search:async e=>(Object.keys(m).forEach(a=>delete m[a]),m.q=e.q,location.hash="#/empleos",u(),{})};document.addEventListener("click",e=>{var s;const a=e.target.closest("[data-a]");a&&(e.preventDefault(),(s=w[a.dataset.a])==null||s.call(w,a.dataset.id,a))});document.addEventListener("input",e=>{const a=e.target.dataset.f;if(a){const[s,t]=a.split(".");ra[s][t]=e.target.value,ge()}});document.addEventListener("change",e=>{const a=e.target;a.id=="rs"&&w.role(a.value),a.dataset.ap&&(i.apps.find(s=>s.id==a.dataset.ap).st=a.value,oe(),b("Estado de la postulación actualizado"))});document.addEventListener("submit",async e=>{const a=e.target.dataset.form;if(!a)return;e.preventDefault();const s=await ca[a](Object.fromEntries(new FormData(e.target)));if(s.error){const t=p("#er");t&&(t.textContent=s.error);return}s.user&&(location.hash=Ve(s.user),u(),b(s.created?"Cuenta creada. ¡Bienvenida/o, "+s.user.name+"!":"Sesión iniciada"))});window.addEventListener("hashchange",u);u();
