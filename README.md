# Cài đặt môi trường
## NodeJS:
https://nodejs.org/en/
Kiểm tra version sau khi cài đặt: node --version

## Visual Studio Code
https://code.visualstudio.com/

* Một số extension cho VS Code
Auto Import: Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX.
Git History (including git log)
TSLint

## Angular CLI
https://github.com/angular/angular-cli#installation

Kiểm tra version: ng --version

# Tạo ứng dụng với Angular CLI
```bash
ng new PROJECT-NAME
cd PROJECT-NAME
ng serve
```
Mở trình duyệt và nhập `http://localhost:4200/`. 
Bạn có chạy trên cổng khác với lệnh sau

```bash
ng serve --host 0.0.0.0 --port 4201
```

Hoặc bạn có thể sửa trong file .angular\_cli.json

* Tạo component, pipe, ...
https://github.com/angular/angular-cli/wiki/generate

* Thêm thư viện boostrap:
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-bootstrap.md



# Build
https://github.com/angular/angular-cli/wiki/build
Chú ý: nên build với lựa chọn `--prod`

# Deploy
https://codegym.scm.azurewebsites.net/basicauth
username: $codegym
password: Cvwsdecxxf9pK4F669hrNK83JiHYTvttzmEsn4s4GHxcAoBSw46hg3yjqKT8

* Tạo thư mục trong `wwwroot` (vd: my-app)
* Drag & Drop tất cả file trong folder `dest`
* Sửa `<base href="/">` trong file html theo tên app (vd: `<base href="/my-app/">`)

