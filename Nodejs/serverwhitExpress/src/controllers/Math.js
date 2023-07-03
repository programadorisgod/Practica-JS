
const { math } = require('../data/curso').curse

exports.getData = (req, res) => {
  res.json(math)
}

exports.getDataTheme = (req, res) => {
  const theme = req.params.tema
  const result = math.filter(curse => curse.theme === theme)

  result.length === 0
    ? res.status(404).end(`No se encontro el tema ${theme}`)
    : res.json(result)
}
