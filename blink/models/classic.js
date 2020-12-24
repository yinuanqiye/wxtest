import { HTTP } from '../util/http.js'
class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        wx.setStorageSync('latest', res.index)
      }
    })
  }

  getClassic(index, nextOrPre, sCallback) {
    let key = nextOrPre == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)

    if (!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextOrPre,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    }
    else {
      sCallback(classic)
    }
  }

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let latestIndex = wx.getStorageSync('latest')
    return index == latestIndex ? true : false
  }
  
  _getKey(index) {
    let key = 'classic-' + index
    return key
  }
}
export { ClassicModel }