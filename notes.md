1. perkenalan
skop presentasi adalah pengenalan node.js, kenapa, buat apa?



2. definisi node.js dari halaman website
jelaskan satu-per-satu.

server side javascript. kenapa harus ada? emang solusi yg ada ga cukup?

Brendan Eich js creator bilang bahwa javascript itu bisa digunakan sebagai general-purpose programming language dan mumpuni untuk buat aplikasi secara utuh.

mozilla punya script monkey,
ariya punya phantom.js -- headless webkit

lalu, kenapa Ryan Dahl itu harus buat node.js?



3. berdasarkan slides-nya dia di jsconf 2009, @ryah keluarkan statement tsb

apa yang dimaksud dengan I/O?

semua hal yang berhubungan dengan proses input/output. misalnya membaca berkas yang ada di harddisk. atau membuka halaman website. atau mendownload lagu. atau memutar lagu.

paling gampangnya lagi yang dekat dengan kita programmer website



4. multiple db queries
5. menunggu
jelaskan bahwa tiap statemen itu mem-blok proses yg berlangsung selama I/O belum selesai. ini disebut I/O blocking.

jelaskan bahwa aku menggunakan slides dari ryan dahl sendiri dan slide dari full frontal untuk menjelaskan apa itu Evented / event pool

sebelum buka slides-nya ryan, tanyakan dulu apakah mereka mau tahu detailnya?

mau tahu latar belakang node.js?

jika iya, buka slides ryan 2009 dari halaman 3

stop di halaman 11. lanjutkan ke evented webserver explained.

lalu balik ke slides



6. jadi apa itu node.js?

platform yg dibangun dengan chrome' v8 javascript runtime.

menggunakan pendekatan event dan non-blocking I/O sehingga ringan dan efisien.



7. hehe. ngomong emang gampang. tapi kita lebih percaya code daripada bacot

tunjukkan query.php vs query.js

tekankan pada urutan fungsi yang dipanggil vs yang mana yang duluan selesai.

kasih lihat juga ketika koneksi ke db tidak di putus, aplikasi akan tetap berjalan.

ini karena node.js masih merasa punya event yang harus ditangani sehingga dia belum bisa exit.

cocok untuk webserver dan segala macam service lainnya

ga cocok buat layanan yg butuh komputasi berat semacem video encoding dsb.



8. helloworld.js

jalankan dulu supaya semua bisa lihat hasilnya



9. apa yg kita require? oh itu namanya node module

namanya request

semacam http client atau curl kalau di php dsb.

berfungsi untuk mengambil isi dari URL.



10. solusi yang populer biasanya karena banyak tersedia modul / libraries pendukung

disini peran NPM sebagai alat bantu yg memudahkan pengguna mendapatkan atau mendistribusikan modul yg dibutuhkan/ dibuat.

di Ubuntu ada aptitude, di php ada pear, dsb

jelaskan bahwa biasanya tiap project pasti punya dependensi ke modul2 tambahan.

helloworld butuh request

npm install request

penting: package.json



11. package.json semacam metadata tentang modul bersangkutan. isinya ada informasi detail modul tsb, sumbernya, pembuatnya, bahkan dependensinya thdp modul lain.

yg paling penting menurutku ada dokumentasi dan gimana sih cara pakai modul tsb.

klik untuk marking link github



12. dokumentasi request. klik dan buka saja



13. balik lagi ke helloworld, lanjutkan



14. maksudnya arguments?

kenapa akses ke index ke-3?



15. lalu apapula ini debugger?

explisit breakpoint

jelaskan bahwa ini adalah opening ke topik debugger. bagian yg gw suka. membantu development



16. detail dokumentasi debugger node.js

cara mulai sesi debugging.

jelaskan bahwa otomatis akan stop di line pertama

kita yang pegang kontrol.

lanjut



17. oleh karena itu kita kasih kontrol ke node untuk melanjutkan proses

ketik cont di debug console

cont : continue

klik sekali lagi untuk kasih liat penjelasan cont



18. otomatis akan break di breakpoint yg sudah kita buat.



19. coba kita cek isi arguments dengan REPL

jelaskan tentang REPL. buka juga halaman REPL punya node.js

baru mulai masuk ke repl dari debug console.

cek isi arguments

klik sekali lagi

arguments adalah parameter yg disuplai caller.



20. what's next?

cluster untuk utilise multi core

modules penting

events juga, khususnya untuk stream. ceritakan sedikit kenapa harus ada event di stream

java xml misalnya. data dalam jlh besar bisa buat aplikasi bengong.

maka tiap data masuk trigger event tertentu untuk memproses event tsb (event handler)



21. References
