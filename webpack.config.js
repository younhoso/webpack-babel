var path = require('path'); //require로 path 라이브러리 불러오기

module.exports = {
  context: __dirname,       // 프로젝트 루트를 말한다.
  entry: './src/app.js',    // 번들링할 대상을 말한다.
  output: {                 // 번들링을 했을때 나오는 결과물
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')   //__dirname라고한것을 절대경로를 현재 폴더까지 생략해서 __dirname라고만 칭하는 것이다. 
  },
  module: {
    rules: [
        {  //babel loader
            test: /\.js$/,                      //정규표현식에서 확장자가 .js 모든 파일에대해서 build 시키겠다.
            exclude: /(node_modules)|(dist)/,   //node_modules디렉토리 아래있는 파일들은 제외하고, | dist디렉토리 제외하고
            loader: 'babel-loader'
        }
    ]
  },
};