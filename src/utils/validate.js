Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

/**
 * Devuelve un objeto con los datos del número de cédula ingresado.
 * @param {string} cedula - El número de cédula.
 * @author merlos
 */

const validate = (cedula) => {
  const regex = /^P$|^(?:PE|E|N|[23456789]|[23456789](?:A|P)?|1[0123]?|1[0123]?(?:A|P)?)$|^(?:PE|E|N|[23456789]|[23456789](?:AV|PI)?|1[0123]?|1[0123]?(?:AV|PI)?)-?$|^(?:PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(?:\d{1,4})-?$|^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i;
  const matched = cedula.match(regex);
  let isComplete = false;

  if (matched !== null) {
    matched.splice(0, 1);

    if (matched[0] !== undefined) {
      isComplete = true;

      if (matched[0].match(/^PE|E|N$/)) {
        matched.insert(0, "0");
      }

      if (matched[0].match(/^(1[0123]?|[23456789])?$/)) {
        matched.insert(1, "");
      }

      if (matched[0].match(/^(1[0123]?|[23456789])(AV|PI)$/)) {
        var tmp = matched[0].match(/(\d+)(\w+)/);

        matched.splice(0, 1);
        matched.insert(0, tmp[1]);
        matched.insert(1, tmp[2]);
      }
    }
  }

  var result = {
    isValid: cedula.length === 0 ? true : regex.test(cedula),
    inputString: cedula,
    isComplete: isComplete,
    cedula: isComplete ? matched.splice(0, 4) : null,
  };

  return result;
};

module.exports = validate;
