# art-server
少儿美术馆Node服务端
## 说明
  抽空帮别人做的一个vue的项目，后端采用Koa,主要是密码的加密和解密，采用Node自由的crypto库进行实现
  import crypto from 'crypto'

export function cipher (algorithm, key, buf) {
  var encrypted = ''
  var cip = crypto.createCipher(algorithm, key)
  encrypted += cip.update(buf, 'utf8', 'hex')
  encrypted += cip.final('hex')
  return encrypted
}
export function decipher (algorithm, key, encrypted) {
  var decrypted = ''
  var decipher = crypto.createDecipher(algorithm, key)
  decrypted += decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
};
## 使用方式
  * 复制项目
    git clone https://github.com/xikou1314/art-server.git
  * 安装依赖
    npm install
  * 运行项目
    npm run dev
