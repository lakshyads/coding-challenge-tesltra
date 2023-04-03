/**
 * Transform the payload by replacing reference values as per referenceData and prints the total number of replacements made.
 * @param {*} payload
 * @param {*} referenceData
 * @returns Transformed data
 * ---
 * - For string values, references in the strings will be replaced as per referenceData
 * - For Array values, transform logic will be recursively called on each item in the array.
 */
const transformController = (payload, referenceData) => {
  let replaceCount = 0;

  //   Function with transformation logic
  const transform = (payload, referenceData) => {
    const keys = 'referenceData';

    if (payload.valueType === 'string') {
      // check if value contains any reference
      const regex = /{REF_[A-Z]+}/;
      const match = payload.value.match(regex);
      // if match happens, proceed to transform
      if (match) {
        const replaceVal = match[0];
        const key = replaceVal.substr(1, replaceVal.length - 2);
        // use key to update value with reference
        payload.value = payload.value.replace(replaceVal, referenceData[key]);
        replaceCount++;
      }
    } else if (payload.valueType === 'array') {
      // recursively transform each object in the array
      payload.value.forEach((obj) => {
        obj = transform(obj, referenceData);
      });
    }

    return payload;
  };

  // Start transformation
  const transformed = transform(payload, referenceData);
  console.log(`Substituted ${replaceCount} references.`);
  return transformed;
};

module.exports = transformController;
