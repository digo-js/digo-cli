const fetchTemplate = require('./fetchTemplate')
const processCmd = require('./precessCmd')
;(async () => {
  const templateList = await fetchTemplate()
  processCmd(templateList)
})()
