# BOOK NOTES

Bu projede okuduğum kitap notlarını gösteren bir websitesi yapmayı hedefledim. Bu websitesi verilerini postgresql üzerinde kurmuş olduğum veritabanında tutuyor. Kitap notları ekleyebilir, görüntüleyebilir, düzenleyebilir ve silebilirsiniz. Ayrıca tarihe ve kitap puanına göre sıralama yapabilirsiniz.

## Installation

Projemi kendi bilgisayarınızda çalıştırmak istiyorsanız projenin kodlarını github'tan indirdikten sonra package.json dosyasındaki npm paket ve modüllerini aşağıdaki komutu takip ederek indirmelisiniz.

```
bash npm install
```

Node.js ortamının bilgisayarınızda kurulu olduğundan emin olun eğer henüz kurmadıysanız burdan kurabilirsiniz. [node.js](https://nodejs.org/en/download/package-manager)

Aşağıdaki komutu terminalinizde projenin konumundayken kullanarak projeyi bilgisayarınızda çalıştırabilirsiniz.

```bash 
node index.js
```

Eğer nodemon aracına sahip değilseniz bu linkten indirerek projeyi çalıştırma ve geliştirme sürecinizi kolaylaştırabilirsiniz. [nodemon](https://www.npmjs.com/package/nodemon)

Aşağıdaki komutu kullanarak nodemon ile projeyi çalıştırabilirsiniz.

```bash 
nodemon index.js
```

Artık "localhost:3000" adresine giderek websitesini görüntüleyebilir ve kullanabilirsiniz. Not: 3000 portunun dolu olmadığına dikkat edin.

📌**Not:** Bu proje yerel veritabanı kullandığı için kendi bilgisayarınızda postgresql üzerinde veritabanı kurmalısınız. Daha sonra projenin kök dizinine .env dosyası açıp içine şu verileri ekleyin.

```env
DB_USER=YourUserName
DB_HOST=YourHostName
DB_NAME=YourDBName
DB_PORT=YourDBPort
DB_PASSWORD=YourDBPassword
```

## 🗂️ Book Notes ER Diyagramı

![ER Diagram](./public/assests/Book%20Note%20ER%20Diagram.png)

## Technologies

HTML5, CSS3, JavaScript, Node.js, Express.js, PostgreSQL, EJS Templates

## Website's Pictures

![Website Look](./public/assests/website%201.png)
![Website Look2](./public/assests/website%202.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)