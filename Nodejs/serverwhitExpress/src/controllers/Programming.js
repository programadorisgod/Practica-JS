const { programming } = require('../data/curso').curse

exports.getData = (req, res) => {
  res.json(programming)
}

exports.getDataLanguage = (req, res) => {
  const language = req.params.lenguaje
  const result = programming.filter(curse => curse.language === language)

  result.length === 0
    ? res.status(404).end(` Not found curse the ${language}`)
    : res.json(result)
}

exports.getDataLevel = (req, res) => {
  const language = req.params.lenguaje
  const level = req.params.nivel

  const result = programming.filter(curse => curse.language === language && curse.level.toLowerCase() === level.toLowerCase())

  result.length === 0
    ? res.status(404).end(`Not found curse the ${language} whit level ${level}`)
    : res.json(result)
}
