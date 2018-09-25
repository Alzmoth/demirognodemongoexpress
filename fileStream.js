var fs = require('fs')

fs.readFile('dosya.txt', "utf8", function (hata, data) {

    if (hata) {
        throw hata;
    }
    console.log(data);
})
fs.writeFile('dosya2.txt', "\n hello", function (hata) {//dosya 2 olarak yazdırmak

    if (hata) {
        throw hata;
    }
    console.log("yazildi");
})
fs.appendFile('dosya2.txt', "\n hello", function (hata) {//dosya ikinin devamına eklemek

    if (hata) {
        throw hata;
    }
    console.log("yazildi");
})
fs.unlink('dosya2.txt', function (hata) {//dosyayi silmek için kullanılır

    if (hata) {
        throw hata;
    }
    console.log("silindi");
})

