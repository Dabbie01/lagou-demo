/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-11-21 11:19:15
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-11-21 11:41:30
 * @FilePath: \lagou-demo\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
