export const replaceString = (template, params = {}) => {
  Object.keys(params).forEach((key) => {
    template = template.replace(new RegExp(key, 'g'), params[key] || key);
  });
  return template;
};

export const searchInObj = (search, obj = {}) => {
  let isMatch = false;
  // Object.keys(obj).forEach((key) => {
  //   if (obj[key] && obj[key].search(search)) {
  //     isMatch = true;
  //   }
  // });
  for(let key in obj) {
    if(obj[key].indexOf(search)!==-1) {
      isMatch = true;
      break;
    }
  }
  return isMatch;
};

const expObj = {
  replaceString,
  searchInObj
};
export default expObj;
