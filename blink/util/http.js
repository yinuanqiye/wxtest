import {config} from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appKey无效，请前往www.7yue.pro申请', 
  3000: '期刊不存在'
}
class HTTP{
  request(params){
    // URL, data, method
    if(!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header:{
        'content-type':'application/json',
        'appKey': config.appKey
      },
      success:(res)=>{
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } 
        else {
          let err_code = res.data.err_code
          this._show_error(err_code)
        }
      },
      fail:(err)=>{
        this._show_error(1)
      }
    })
  }

  _show_error(err_code){
    if(!err_code) {
      err_code = 1
    }
    wx.showToast({
      title: tips[err_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP}