module.exports = function tiny(string) {
  if(typeof(string)!=="string") throw new TypeError("Tiny only accepts Strings");
  return string.replace(/\s/g,"");
};
