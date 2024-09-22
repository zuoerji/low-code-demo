

export const generatorProps = (props) => {
  let propsString = `\n`;
  for(let key in props){
    propsString += `    ${key}='${props[key]}'\n`
  }
  return propsString
}

export const generatorEvents = (events,tag) => {
  let eventString = `\n`;
  let eventArr = []
  events.forEach((item,index)=>{
    eventString += `    @${item.value}='${tag}Handle${item.value}' ${events.length-1===index ? '': '\n' }`
    eventArr.push(`${tag}Handle${item.value}`)
  })
  console.log(eventArr)
  return {
    eventArr,
    eventString
  };
}


export const renderHtmlTag = (tags) => {
  let tagsString = ``;
  const tagTemplate = (item) => {
    console.log(item);
    // return `<lulu-${item.componentKey} ${generatorProps(item.props)}></lulu-${item.componentKey}>\n`;
    return `<lulu-${item.componentKey} ${generatorEvents(item.events,item.componentKey).eventString} ${generatorProps(item.props)}/>\n`;
  }
  tags?.forEach(item=>{
    tagsString += tagTemplate(item)
  })
  return tagsString;
}



export const htmlGenerator = (json) => {
  console.log(json);
  const innerComponents = json.filter(item=>item.moduleName === 'baseWidgets');
  console.log(renderHtmlTag(innerComponents))
  return renderHtmlTag(innerComponents)
}