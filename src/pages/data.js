const infogimnasio = [
  {
    nomejercicio: "Brazo Fácil",
    imagen: require("../images/brazo.jpg"),
    ruta: "Brazo-Facil",
    ejercicios: [
      {
        descripcion:
          " 7 repeticiones de flexiones de pecho en rodilla - 4 series",
        imagen: require("../images/flexionesbrazod.jpg")
      },
      {
        descripcion: "7 repeticiones de flexion de pecho - 3 series",
        imagen: require("../images/brazopecho.jpg")
      },
      {
        descripcion: "5 repeticiones de levantamineto de Pesas - 4 series",
        imagen: require("../images/brazomancuernad.jpg")
      }
    ]
  },
  {
    nomejercicio: "Brazo Dificíl",
    imagen: require("../images/brazoPesa.jpg"),
    ruta: "Brazo-Dificil",
    ejercicios: [
      {
        descripcion: "14 repeticiones de flexiones de pecho en rodilla - 4",
        imagen: require("../images/flexionesbrazod.jpg")
      },
      {
        descripcion: "14 repeticiones de flexion de pecho - 4 series",
        imagen: require("../images/brazopechpd.jpg")
      },
      {
        descripcion: "14 repeticiones de levantamineto de Pesas - 4 series",
        imagen: require("../images/brazomancuernad.jpg")
      }
    ]
  },
  {
    nomejercicio: "Abdomen fácil",
    imagen: require("../images/abdofacil.jpg"),
    ruta: "Abdomen-Facil",
    ejercicios: [
      {
        descripcion: "10 abdominales",
        imagen: require("../images/abdomenf.jpg")
      },
      {
        descripcion: "20 seg de piernas levantadas",
        imagen: require("../images/pieslevantadosf.jpg")
      },
      {
        descripcion: "10 abdominales cruzadas de ciclismo",
        imagen: require("../images/cruzadasf.png")
      },
      {
        descripcion: "20 seg de plancha",
        imagen: require("../images/planchaf.jpg")
      },
      {
        descripcion: "15 abdominales de rodilla",
        imagen: require("../images/rodillad.jpg")
      },
      {
        descripcion: "12 toques de talon",
        imagen: require("../images/talonf.jpg")
      }
    ]
  },
  {
    nomejercicio: "Abdomen Dificíl",
    imagen: require("../images/abdodificil.jpg"),
    ruta: "Abdomen-Dificil",
    ejercicios: [
      {
        descripcion: "30 abdominales de rodilla",
        imagen: require("../images/abdominalesd.jpg")
      },
      {
        descripcion: "40 seg de piernas levantadas",
        imagen: require("../images/levantadasd.jpeg")
      },
      {
        descripcion: "30 abdominales cruzadas de ciclismo",
        imagen: require("../images/cruzadasd.jpg")
      },
      {
        descripcion: "40 seg de plancha",
        imagen: require("../images/planchad.jpg")
      },
      {
        descripcion: "30 abdominales de rodilla",
        imagen: require("../images/rodillasd.gif")
      },
      {
        descripcion: "20 toques de talon",
        imagen: require("../images/talond.png")
      }
    ]
  },
  {
    nomejercicio: "Pierna Fácil",
    imagen: require("../images/piernafacil.jpg"),
    ruta: "Pierna-Facil",
    ejercicios: [
      {
        descripcion: "20 repeticiones de sentadillas - 4 series",
        imagen: require("../images/sentadillaf.jpg")
      },
      {
        descripcion: " 15 repeticiones de zancadas por acada pierna",
        imagen: require("../images/zancadasf.jpg")
      },
      {
        descripcion: "12 sentadillas búlgara por cada pierna - 4 series",
        imagen: require("../images/bulgaraf.jpg")
      },
      {
        descripcion: "20 repeticiones de puente de cadera - 4 series",
        imagen: require("../images/puentecaderaf.jpg")
      },
      {
        descripcion: "20 repeticionesde abducción de cadera - 3 series",
        imagen: require("../images/abduccionf.jpg")
      },
      {
        descripcion: " 15 repeticiones de gemelo - 4 series",
        imagen: require("../images/pantorrilaf.jpg")
      }
    ]
  },
  {
    nomejercicio: "Pierna Dificíl",
    imagen: require("../images/piernadificil.jpg"),
    ruta: "Pierna-Dificil",
    ejercicios: [
      {
        descripcion: "30 repeticiones de sentadillas - 4 series",
        imagen: require("../images/sentadillad.jpg")
      },
      {
        descripcion: " 20 repeticiones de zancadas por acada pierna - series",
        imagen: require("../images/zancadasd.jpg")
      },
      {
        descripcion: "20 sentadillas búlgara por cada pierna - 4 series",
        imagen: require("../images/bulgarad.jpeg")
      },
      {
        descripcion: "30 repeticiones de puente de cadera - 4 series",
        imagen: require("../images/puentecaderad.jpg")
      },
      {
        descripcion: "30 repeticionesde abducción de cadera - 3 series",
        imagen: require("../images/abducciond.jpg")
      },
      {
        descripcion: "20 repeticiones de gemelo - 4 series",
        imagen: require("../images/pantorrilad.jpg")
      }
    ]
  }
];

const diasdelasemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

export default {
  diasdelasemana,
  infogimnasio
};
