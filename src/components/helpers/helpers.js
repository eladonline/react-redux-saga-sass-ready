export const nodeToArray = node => {
  var nodesArray = [].slice.call(node);
  return nodesArray;
};

export const picture = (imgComponent, aSet, uniqkey) => {
  const aMedia = ['(min-width: 1600px)', '(min-width: 768px)', '(min-width: 0px)'];
  const sources = aMedia.map((media, i) => {
    return <source key={`${uniqkey}-${i}`} srcSet={aSet[i]} media={media} />;
  });
  return (
    <picture>
      {sources}
      {imgComponent}
    </picture>
  );
};
/**
 * @function hudiniElement
 * @argument {string} id
 * @argument {array} aColor
 * @argument {object} ref
 * @summary change element style
 */
export const hudiniElement = (
  el,
  aValue = { positive: 'transparent', negative: '#888' },
  bool,
  sStyle = 'background'
) => {
  bool ? (el.style[sStyle] = aValue.positive) : (el.style[sStyle] = aValue.negative);
};

/**
 * @function labelPage
 * @argument {array} pathsList [HOME,POTHOS]
 * @summary returns a path - like this HOME / PHOTOS
 */

export const labelPage = pathsList => {
  const li = pathsList.map((path, i) => {
    const last = i + 1 === pathsList.length;
    return (
      <ul key={`${path}-${i}`}>
        <li data-active={last}>{path}</li>
        {!last && <li>/</li>}
      </ul>
    );
  });
  return <ul className="navigation">{li}</ul>;
};

/*
  this will slice the length of the string by the maxLength 
  and will add dots to the end if gets true
  */

export const strLengthSlicer = (str, maxLength, dots = false) => {
  const strToLong = str.length > maxLength;
  if (strToLong) {
    str = str.slice(0, maxLength);
  }
  if (typeof dots === 'string') {
    str = `${str}${dots}`;
  }
  if (dots === true && strToLong) {
    str = `${str}...`;
  }
  return str;
};
/**
 * @function distanceMeasure
 * @param {Object} el
 * @param {String, Array} side top/right/bottom/left
 * @return {Object, Number} the distance of the element from the side
 */
export const distanceMeasure = (el, sides = 'top') => {
  if (el === null) throw Error('the element is null');

  const viewportOffset = el.getBoundingClientRect();
  if (typeof sides === 'string') {
    return viewportOffset[sides];
  } else if (Array.isArray(sides)) {
    const oSidesDistance = {};
    sides.forEach(side => {
      oSidesDistance[side] = viewportOffset[side];
    });
    return oSidesDistance;
  } else {
    throw Error('sides propery have to be: string/array');
  }
};

export const findMyDecimal = num => {
  const dec = num - Math.floor(num);
  return Math.round(dec * 10) / 10;
};
