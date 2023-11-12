# Cài đặt môi trường
Nodejs là 1 nền tảng(platform) để chạy code js phía server side
express là 1 framework dùng để phát triển back-end website
1.  **Cài đặt môi trường:.**
    dependencies:
   ```sh
   dotenv: Đọc file môi trường
   body-parse: 
   ejs:
   babel:trình compliter code
      "@babel/core": 
      "@babel/node": 
      "@babel/preset-env": 
   ```
   devDependencies:
   ```sh
   nodemon
   ```
   file môi trường
   ```sh
   .gitignore: định nghĩa file không đẩy lên github
   .babelrc: nơi cấu hình trình complite code
   .env
   ```
   config
   ```sh
   const configViewEngine = (app) => {
   app.use(express.static("./src/public"));
   // config nơi lưu trữ code static
   app.set("view engine", "ejs");
   // định nghĩa html thông qua view engine, ở đây là ejs
   app.set("views", "./src/views");
   // định nghĩa nơi lưu trữ file view engine là src/views
   };
   module.exports = configViewEngine;
   ```
