import validate, { isEmpty, getDeepObjectValue } from 'validate.js';
import { appConfig } from 'src/logic';
export const objDig = getDeepObjectValue;

export const toPascalCase = function(str) {
  // convert 'my worD' to 'My Word'
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export const toTitleCase = function(str) {
  // convert 'my worD' to 'My WorD'
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
};

/**
 * convertCase
 * @param {*} type oneOf(['lowerCase', 'upperCase', 'pascalCase', 'TitleCase'])
 * @param {*} text string
 */
export const convertCase = function(type, text) {
  if (!text || !type) return text;
  let convertText = '';
  switch (type) {
    case 'lowerCase':
      convertText = text.toLowerCase();
      break;
    case 'upperCase':
      convertText = text.toUpperCase();
      break;
    case 'pascalCase':
      convertText = toPascalCase(text);
      break;
    case 'titleCase':
      convertText = toTitleCase(text);
      break;
    default:
      convertText = text;
  }
  return convertText;
};

/**
 * dig
 * @param {*} obj pass the object that hold the data
 * @param {*} target pass string to target: 'props.user[0].name'
 * @return return the target or null
 */
/* eslint no-restricted-syntax: "off" */
export const dig = function(obj, target) {
  console.warn('please stop using dig and use helpers.objDig(myobj, "mykey.nextKet.3.age")');
  const keys = target.split('.');
  let digged = obj;
  for (const key of keys) {
    const parts = key.split('[');
    const _key = parts[0];
    digged = digged[_key];
    if (typeof digged === 'undefined' || digged === null) {
      return digged;
    }
    if (parts[1]) {
      digged = digged[parts[1].replace(']', '')];
      if (typeof digged === 'undefined' || digged === null) {
        return undefined;
      }
    }
  }
  return digged;
};

/**
 * Check if string is undefined, null or empty
 * @param {string} str - the string to test
 * @returns {bool} true if the string is undefined or null or empty
 */
export const isEmptyString = function(str) {
  return str === undefined || str === null || str.trim().length === 0;
};

/**
 * isEmptyValue- return true if it ""/[]/{}/null/undefined
 */
export const isEmptyValue = function(val) {
  return isEmpty(val);
};
/**
 * createUserPointer- return pointer to Parse _User
 */
export const createUserPointer = function(userId) {
  return {
    className: '_User',
    objectId: userId,
    __type: 'Pointer'
  };
};

export const getEmailErr = function(email) {
  let message = validate.single(email, { presence: true, email: true });
  if (message) {
    return message;
  }
};
export const getPasswordErr = function(password) {
  let message = validate.single(password, appConfig.passwordValidator);
  if (message) {
    return message;
  }
};

export const fadeInOut = (el, bool) => {
  if (bool) {
    setTimeout(() => {
      el.style.display = 'none';
    }, 1000);
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
  } else {
    el.style.display = 'flex';
    el.classList.remove('fade-out');
    el.classList.add('fade-in');
  }
};
export const shrinkScale = (el, bool) => {
  if (bool) {
    setTimeout(() => {
      el.classList.remove('shrink-out');
      el.classList.add('scale-in');
    }, 1000);
  } else {
    el.classList.remove('scale-in');
    el.classList.add('shrink-out');
  }
};

export const queryAllExtract = nodeList => {
  const arr = [];
  for (let i = 0; i < nodeList.length; i++) {
    arr.push(nodeList[i]);
  }
  console.log(arr);
  return arr;
};
