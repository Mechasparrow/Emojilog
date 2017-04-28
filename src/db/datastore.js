export default {
  getAll: function () {
    var emojieString = window.localStorage['emojies']

    if (emojieString) {
      return JSON.parse(emojieString)
    }
    return []
  },
  saveEmojie: function (emojies) {
    window.localStorage['emojies'] = JSON.stringify(emojies)
  },
  clear: function () {
    window.localStorage['emojies'] = JSON.stringify([])
  }
}
