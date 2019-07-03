var fs = require("fs");
fs.readFile("sample.txt", "utf8", function(err, data) {
  // 읽고 싶은 파일을 적음 현재는 sample.txt fs는 fileSystem 의 약자
  console.log(data);
});
