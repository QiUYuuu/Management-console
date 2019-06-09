// 懒加载组件
function lazy(name) {
  let file = name.split('#');
  if(file.length === 3){
    return resolve => require([`../components/${file[0]}/${file[1]}/${file[2]}`],resolve);
  }else if(file.length === 2) {
    return resolve => require([`../components/${file[0]}/${file[1]}`],resolve);
  }else {
    return resolve => require([`../components/${file[0]}`],resolve);
  }
}
export {lazy}

