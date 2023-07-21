import React from "react";
import "./style.css";

const UX = () => {
  return (
    <div>
      <h1>Problemas de UX</h1>
      <h2>Identificación de problemas de UX:</h2>
      <ul>
        <li>
          Interfaz Sobrecargada: La pantalla de inicio y el feed muestran
          demasiada información a la vez, lo que causa una sobrecarga visual y
          dificulta que los usuarios se enfoquen en el contenido que les
          interesa.
        </li>
        <li>
          Inconsistencia Visual: La aplicación carece de consistencia visual,
          incluyendo tamaños de fuente, colores y estilos de botones, lo que
          puede confundir a los usuarios y hacer que la interfaz se sienta
          desarticulada.
        </li>
        <li>
          Navegación Poco Clara: La estructura de navegación no está bien
          definida, lo que dificulta que los usuarios encuentren características
          o secciones específicas dentro de la aplicación.
        </li>
        <li>
          Falta de Retroalimentación: Cuando los usuarios realizan acciones como
          dar me gusta o comentar una publicación, no reciben retroalimentación
          inmediata, lo que los deja inciertos sobre si sus acciones fueron
          exitosas.
        </li>
        <li>
          Problemas de Accesibilidad: La aplicación no proporciona suficientes
          características de accesibilidad para usuarios con discapacidades,
          como lectores de pantalla o alternativas de texto para imágenes.
        </li>
      </ul>
      <h2>Aplicación de Principios de UX:</h2>
      <ul>
        <li>
          Simplificar la Interfaz: Simplificar la pantalla de inicio y el feed
          al priorizar el contenido, reducir elementos innecesarios y
          proporcionar una jerarquía visual más clara. Utilizar espacios en
          blanco para separar diferentes secciones y permitir que los usuarios
          se enfoquen en el contenido esencial.
        </li>
        <li>
          Garantizar la Consistencia Visual: Establecer un estilo visual
          consistente en toda la aplicación, incluyendo tipografía, colores y
          diseños de botones. La consistencia crea una sensación de familiaridad
          y mejora la experiencia general del usuario.
        </li>
        <li>
          Mejorar la Navegación: Definir una estructura de navegación clara e
          intuitiva que permita a los usuarios encontrar fácilmente
          características o secciones específicas. Un diseño de navegación
          mejorado facilita la exploración y mejora la usabilidad.
        </li>
        <li>
          Proporcionar Retroalimentación Oportuna: Implementar retroalimentación
          visual o auditiva inmediata cuando los usuarios realicen acciones,
          como dar me gusta o comentar. La retroalimentación oportuna brinda
          confianza y claridad sobre el éxito de las acciones realizadas.
        </li>
        <li>
          Incluir Funcionalidad de Accesibilidad: Asegurarse de que la
          aplicación sea accesible para usuarios con discapacidades, mediante la
          implementación de lectores de pantalla compatibles, texto alternativo
          para imágenes y un diseño amigable para personas con discapacidades
          visuales.
        </li>
      </ul>
    </div>
  );
};

export default UX;
