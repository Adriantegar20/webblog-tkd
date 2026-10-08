      function ic(d, s) {
        return (
          '<svg width="' +
          (s || 24) +
          '" height="' +
          (s || 24) +
          '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          d +
          "</svg>"
        );
      }
      var I = {
        bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
        wifi: '<path d="M5 12.500a10 10 0 0 1 14 0"/><path d="M8.500 16a5 5 0 0 1 7 0"/><path d="M2 9a14 14 0 0 1 20 0"/><circle cx="12" cy="19.500" r="1"/>',
        lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
        bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.500c.8.8 1 1.500 1 2.500h6c0-1 .2-1.700 1-2.500A6 6 0 0 0 12 3z"/>',
        sat: '<circle cx="12" cy="12" r="2"/><path d="M16.200 7.800a6 6 0 0 1 0 8.400"/><path d="M7.800 16.200a6 6 0 0 1 0-8.400"/><path d="M19.100 4.900a10 10 0 0 1 0 14.200"/><path d="M4.900 19.100a10 10 0 0 1 0-14.200"/>',
        back: '<path d="m15 18-6-6 6-6"/>',
      };
      var STAR =
        '<svg class="star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="vertical-align:-2px"><path d="m12 2 3.100 6.300 6.900 1-5 4.900 1.200 6.900L12 17.800 5.800 21l1.200-6.900-5-4.900 6.900-1z"/></svg>';
      function board(c) {
        return (
          '<svg viewBox="0 0 120 120"><rect x="30" y="8" width="60" height="104" rx="6" fill="' +
          c +
          '"/><rect x="42" y="20" width="36" height="34" rx="3" fill="#d1d5db"/><rect x="48" y="86" width="24" height="16" rx="2" fill="#9ca3af"/><g fill="#fbbf24"><rect x="24" y="16" width="6" height="4"/><rect x="24" y="30" width="6" height="4"/><rect x="24" y="44" width="6" height="4"/><rect x="90" y="16" width="6" height="4"/><rect x="90" y="30" width="6" height="4"/><rect x="90" y="44" width="6" height="4"/></g></svg>'
        );
      }

      /* ===== DATA: edit di sini ===== */
      var PRODUK = [
        {
          n: "ESP32 DOT DEVKIT V1 IoT Board Compatible Arduino IDE",
          p: "Rp85.000",
          badge: "Pilihan Pemula",
          rate: "4.9 · 23 penilaian",
          s: "Tokopedia · stok terbatas",
          c: "#065f46",
          bg: "#ecfdf5",
          img: "/img/image.png",
          u: "https://www.tokopedia.com/kelasrobot/esp32-dot-devkit-v1-iot-board-compatible-arduino-ide",
        },
        {
          n: "ESP32 DevKitC V4 ESP32-WROOM-32U Development Board IoT",
          p: "Rp29.500",
          badge: "Paling Hemat",
          rate: "4.8 · 15 penilaian",
          s: "Antena eksternal · cek varian · stok banyak",
          c: "#1e3a8a",
          bg: "#eff6ff",
          img: "/img/image2.png",
          u: "https://www.tokopedia.com/alfaelectro/esp32-devkitc-v4-esp-32-wroom-32u-development-board-iot-32u-shild-esp32-38p-48f97",
        },
        {
          n: "Papan Pengembangan ESP32-DevKitC WROOM-32D / 32U",
          p: "Rp191.000",
          badge: "Paling Lengkap",
          rate: "4.7 · 8 penilaian",
          s: "Tokopedia · stok banyak",
          c: "#7c2d12",
          bg: "#fff7ed",
          img: "/img/image3.png",
          u: "https://www.tokopedia.com/badiashoop/papan-pengembangan-inti-esp32-devkitc-esp32-wroom-32d-esp32-wroom-32u",
        },
      ];
      var ARTIKEL = [
        {
          id: "keamanan",
          t: "Tantangan dan Keamanan IoT",
          d: "8 Oktober 2026",
          tags: ["Keamanan", "IoT"],
          b: "<p>Walaupun memberikan banyak manfaat, penerapan IoT juga memiliki berbagai tantangan, terutama yang berkaitan dengan keamanan dan privasi. Semakin banyak perangkat yang terhubung ke internet, semakin banyak pula titik yang berpotensi menjadi celah keamanan.</p><h3>1. Keamanan Data</h3><p>Perangkat IoT dapat mengumpulkan berbagai jenis data. Apabila data tersebut tidak dilindungi dengan baik, pihak yang tidak berwenang dapat memperoleh atau menyalahgunakan informasi tersebut.</p><p>Oleh karena itu, data yang dikirim antara perangkat, server, dan aplikasi perlu dilindungi dengan mekanisme keamanan seperti enkripsi dan autentikasi.</p><h3>2. Password dan Autentikasi</h3><p>Salah satu masalah yang sering muncul pada perangkat IoT adalah penggunaan kata sandi yang lemah atau tidak pernah diganti. Perangkat dengan kredensial bawaan yang mudah ditebak dapat menjadi sasaran serangan.</p><p>Penggunaan password yang kuat, autentikasi yang baik, serta mekanisme multi-factor authentication jika tersedia dapat membantu meningkatkan keamanan.</p><h3>3. Kerentanan Perangkat</h3><p>Perangkat IoT menggunakan perangkat lunak dan firmware yang dapat memiliki celah keamanan. Jika produsen tidak menyediakan pembaruan keamanan secara berkala, perangkat dapat menjadi lebih rentan terhadap serangan.</p><p>Karena itu, pembaruan firmware dan perangkat lunak merupakan bagian penting dalam pengelolaan keamanan IoT.</p><h3>4. Privasi Pengguna</h3><p>Perangkat IoT tertentu dapat mengumpulkan informasi mengenai aktivitas dan kebiasaan pengguna. Contohnya kamera keamanan, smartwatch, dan perangkat smart home.</p><p>Pengumpulan data tersebut harus dilakukan secara bertanggung jawab. Pengguna perlu mengetahui jenis data yang dikumpulkan, tujuan penggunaannya, serta bagaimana data tersebut disimpan dan dilindungi.</p><h3>5. Keterbatasan Perangkat</h3><p>Sebagian perangkat IoT memiliki keterbatasan dalam hal kapasitas pemrosesan, memori, penyimpanan, dan sumber daya listrik. Kondisi tersebut membuat penerapan mekanisme keamanan yang kompleks menjadi lebih menantang.</p><p>Selain masalah keamanan, koneksi internet juga menjadi faktor penting. Jika jaringan mengalami gangguan, beberapa fungsi IoT yang bergantung pada internet dapat ikut terganggu.</p><h3>6. Banyaknya Perangkat yang Terhubung</h3><p>Jumlah perangkat IoT yang terus bertambah membuat pengelolaan perangkat menjadi semakin kompleks. Setiap perangkat dapat menjadi titik masuk potensial bagi serangan apabila tidak dikonfigurasi dan diamankan dengan benar.</p><p>Oleh karena itu, keamanan IoT tidak cukup hanya dilakukan pada satu perangkat, tetapi perlu diterapkan pada seluruh ekosistem, mulai dari sensor, jaringan, server, aplikasi, hingga pengguna.</p>",
        },
        {
          id: "komponen",
          t: "Perangkat dan Komponen Dasar IoT",
          d: "5 Oktober 2026",
          tags: ["Perangkat", "IoT"],
          b: "<p>Sebuah sistem IoT tidak hanya terdiri dari satu perangkat, tetapi merupakan gabungan beberapa komponen yang saling berkomunikasi. Setiap komponen memiliki fungsi yang berbeda dalam proses pengumpulan, pengolahan, pengiriman, dan penyajian data.</p><h3>1. Sensor</h3><p>Sensor merupakan komponen yang digunakan untuk mendeteksi kondisi tertentu dari lingkungan. Sensor dapat mengukur berbagai parameter seperti suhu, kelembapan, cahaya, jarak, tekanan, gerakan, kualitas udara, hingga tingkat kekeruhan air.</p><p>Contohnya adalah DHT11 atau DHT22 untuk mengukur suhu dan kelembapan, HC-SR04 untuk mengukur jarak, serta sensor LDR untuk mendeteksi intensitas cahaya.</p><h3>2. Mikrokontroler</h3><p>Mikrokontroler berfungsi sebagai pusat pengendalian perangkat IoT. Komponen ini menerima data dari sensor, melakukan pemrosesan berdasarkan program yang diberikan, kemudian mengendalikan perangkat lain atau mengirimkan data melalui jaringan.</p><p>Beberapa mikrokontroler yang sering digunakan dalam proyek IoT antara lain ESP32, ESP8266, Arduino, dan Raspberry Pi Pico. ESP32 cukup populer karena sudah memiliki konektivitas Wi-Fi dan Bluetooth sehingga cocok untuk berbagai proyek IoT.</p><h3>3. Modul Komunikasi</h3><p>Komponen komunikasi memungkinkan perangkat IoT bertukar data dengan perangkat lain atau server. Teknologi komunikasi yang digunakan dapat berupa Wi-Fi, Bluetooth, Zigbee, LoRa, NB-IoT, maupun jaringan seluler.</p><p>Pemilihan teknologi komunikasi biasanya disesuaikan dengan kebutuhan sistem. Misalnya, Wi-Fi cocok digunakan untuk perangkat rumah pintar, sedangkan LoRa dapat digunakan untuk komunikasi jarak jauh dengan konsumsi daya yang relatif rendah.</p><h3>4. Aktuator</h3><p>Aktuator merupakan komponen yang menjalankan tindakan berdasarkan perintah dari sistem. Jika sensor berfungsi menerima informasi dari lingkungan, aktuator berfungsi memberikan respons terhadap informasi tersebut.</p><p>Contoh aktuator antara lain motor DC, servo, relay, pompa air, buzzer, dan solenoid valve. Sebagai contoh, ketika sensor mendeteksi ketinggian air yang rendah, sistem IoT dapat mengaktifkan relay untuk menyalakan pompa secara otomatis.</p><h3>5. Jaringan dan Internet</h3><p>Jaringan berfungsi sebagai media komunikasi antara perangkat IoT dengan server atau perangkat pengguna. Data yang dikumpulkan sensor dapat dikirim melalui jaringan menuju sistem pemrosesan sehingga dapat dipantau dari jarak jauh.</p><h3>6. Cloud atau Server</h3><p>Cloud atau server digunakan untuk menyimpan, mengolah, dan mengelola data yang dikirimkan oleh perangkat IoT. Penggunaan cloud memungkinkan data diakses dari berbagai perangkat selama pengguna memiliki koneksi internet dan hak akses.</p><h3>7. Aplikasi atau Antarmuka Pengguna</h3><p>Aplikasi menjadi media bagi pengguna untuk berinteraksi dengan sistem IoT. Melalui aplikasi berbasis web atau mobile, pengguna dapat melihat data sensor, menerima notifikasi, maupun mengendalikan perangkat secara jarak jauh.</p><p>Secara sederhana, alur kerja IoT dapat digambarkan sebagai:</p><p>Sensor → Mikrokontroler → Jaringan → Server/Cloud → Aplikasi → Pengguna</p><p>Dalam sistem tertentu, alurnya dapat berjalan dua arah karena pengguna juga dapat memberikan perintah dari aplikasi menuju perangkat IoT.</p>",
        },
        {
          id: "penerapan",
          t: "Contoh Penerapan IoT Sehari-hari",
          d: "3 Oktober 2026",
          tags: ["Penerapan", "IoT"],
          b: "<p>IoT telah diterapkan dalam berbagai aktivitas sehari-hari, baik di rumah, lingkungan pendidikan, industri, pertanian, maupun transportasi. Beberapa penerapannya dapat ditemukan tanpa disadari dalam aktivitas sehari-hari.</p><h3>1. Smart Home</h3><p>Smart home merupakan salah satu contoh penerapan IoT yang paling mudah ditemukan. Perangkat seperti lampu, kamera keamanan, AC, televisi, dan kunci pintu dapat dihubungkan ke internet dan dikendalikan melalui smartphone.</p><p>Misalnya, lampu dapat dinyalakan atau dimatikan melalui aplikasi tanpa harus menekan sakelar secara langsung. Sistem juga dapat dibuat otomatis dengan memanfaatkan sensor sehingga lampu menyala ketika seseorang memasuki ruangan.</p><h3>2. Smart Agriculture</h3><p>Dalam bidang pertanian, IoT dapat digunakan untuk memantau kondisi tanaman dan lingkungan secara otomatis. Sensor dapat digunakan untuk mengukur kelembapan tanah, suhu, kelembapan udara, dan intensitas cahaya.</p><p>Data tersebut kemudian dikirim ke sistem sehingga petani dapat mengetahui kondisi lahan secara real-time. Sistem juga dapat mengaktifkan pompa air secara otomatis ketika kelembapan tanah berada di bawah batas tertentu.</p><h3>3. Sistem Keamanan</h3><p>Kamera CCTV yang terhubung dengan internet merupakan salah satu penerapan IoT dalam bidang keamanan. Kamera dapat mengirimkan rekaman atau notifikasi ke smartphone ketika mendeteksi aktivitas tertentu.</p><p>Selain kamera, sensor pintu, sensor gerakan, dan alarm juga dapat diintegrasikan ke dalam sistem IoT untuk meningkatkan keamanan rumah maupun bangunan.</p><h3>4. Perangkat Kesehatan</h3><p>IoT juga digunakan dalam perangkat kesehatan seperti smartwatch dan fitness tracker. Perangkat tersebut dapat mengumpulkan informasi seperti jumlah langkah, detak jantung, aktivitas fisik, dan pola tidur.</p><p>Data kemudian dapat ditampilkan melalui aplikasi sehingga pengguna dapat memantau kondisi dan aktivitas tubuhnya secara lebih mudah.</p><h3>5. Kendaraan dan Transportasi</h3><p>Pada sektor transportasi, IoT dapat digunakan untuk pelacakan kendaraan, pemantauan kondisi kendaraan, hingga sistem transportasi pintar. GPS yang terhubung dengan internet memungkinkan lokasi kendaraan diketahui secara real-time.</p><p>Teknologi ini juga dapat digunakan pada kendaraan operasional perusahaan untuk memantau posisi, rute perjalanan, dan kondisi kendaraan.</p><h3>6. Smart City</h3><p>Konsep smart city memanfaatkan IoT untuk mengelola berbagai fasilitas perkotaan. Contohnya adalah lampu jalan otomatis, sensor tempat sampah, pemantauan kualitas udara, sistem parkir pintar, dan pemantauan lalu lintas.</p><p>Dengan pengumpulan data secara real-time, pemerintah atau pengelola kota dapat memperoleh informasi yang dapat digunakan untuk meningkatkan efisiensi pelayanan publik.</p>",
        },
        {
          id: "pengantar",
          t: "Apa itu Iot?",
          d: "1 Oktober 2026",
          tags: ["Pengantar", "IoT"],
          b: "<p>Internet of Things (IoT) adalah konsep teknologi yang menghubungkan berbagai perangkat fisik ke jaringan internet sehingga perangkat tersebut dapat mengumpulkan, mengirimkan, menerima, dan mengolah data secara otomatis. Perangkat yang terhubung dalam sistem IoT tidak hanya berupa komputer atau smartphone, tetapi juga dapat berupa sensor, kamera, kendaraan, peralatan rumah tangga, mesin industri, hingga perangkat kesehatan.</p><p>Pada dasarnya, IoT memungkinkan benda-benda di sekitar manusia untuk menjadi lebih \"cerdas\" karena dapat berkomunikasi dengan perangkat lain melalui jaringan. Sebagai contoh, lampu pintar dapat dikendalikan menggunakan smartphone, kamera keamanan dapat mengirimkan pemberitahuan ketika mendeteksi gerakan, dan sensor suhu dapat mengirimkan data secara otomatis ke sebuah aplikasi.</p><p>Sistem IoT umumnya bekerja melalui beberapa tahapan. Sensor terlebih dahulu mengambil data dari lingkungan, kemudian mikrokontroler atau perangkat pemroses mengolah data tersebut. Data selanjutnya dapat dikirimkan melalui jaringan internet menuju server atau layanan cloud. Setelah data diproses, pengguna dapat melihat informasi melalui aplikasi atau sistem tertentu dan memberikan perintah kembali kepada perangkat.</p><p>Dengan kemampuan tersebut, IoT banyak digunakan untuk meningkatkan efisiensi, otomatisasi, pemantauan, dan pengambilan keputusan berdasarkan data. Perkembangan IoT juga semakin didukung oleh teknologi seperti kecerdasan buatan, cloud computing, jaringan 5G, dan edge computing.</p>",
        },
      ];
      /* ===== akhir data ===== */

      function cardP(x) {
        return (
          '<a class="card" data-n="' +
          x.n.toLowerCase() +
          '" href="' +
          x.u +
          '" target="_blank" rel="noopener sponsored"><div class="img" style="background:' +
          x.bg +
          '">' +
          board(x.c) +
          '<img alt="' +
          x.n +
          '" data-src="' +
          x.img +
          '">' +
          (x.badge ? '<span class="badge">' + x.badge + "</span>" : "") +
          '</div><div class="info"><div class="name">' +
          x.n +
          '</div><div class="price">' +
          x.p +
          "</div>" +
          (x.rate ? '<div class="sub">' + STAR + " " + x.rate + "</div>" : "") +
          '<div class="sub">' +
          x.s +
          '</div><div class="buy">Beli di Tokopedia</div></div></a>'
        );
      }
      function cardA(a) {
        return (
          '<div class="post" onclick="location.hash=\'#artikel/' +
          a.id +
          "'\"><h3>" +
          a.t +
          '</h3><div class="date">' +
          a.d +
          "</div>" +
          a.tags
            .map(function (t) {
              return '<span class="tag">' + t + "</span>";
            })
            .join("") +
          '<p style="margin:8px 0 0"><span class="more">Baca selengkapnya</span></p></div>'
        );
      }
      var tagF = null;
      function renderArtikel() {
        var all = {};
        ARTIKEL.forEach(function (a) {
          a.tags.forEach(function (t) {
            all[t] = 1;
          });
        });
        document.getElementById("tagBar").innerHTML =
          '<button class="tag' +
          (!tagF ? " on" : "") +
          '" onclick="setTag(null)">Semua</button>' +
          Object.keys(all)
            .map(function (t) {
              return (
                '<button class="tag' +
                (t === tagF ? " on" : "") +
                '" onclick="setTag(\'' +
                t +
                "')\">" +
                t +
                "</button>"
              );
            })
            .join("");
        document.getElementById("aAll").innerHTML = ARTIKEL.filter(
          function (a) {
            return !tagF || a.tags.indexOf(tagF) > -1;
          },
        )
          .map(cardA)
          .join("");
      }
      function setTag(t) {
        tagF = t;
        renderArtikel();
      }
      function cari() {
        var q = document.getElementById("q").value.toLowerCase().trim();
        if (q && location.hash !== "#produk") location.hash = "#produk";
        var n = 0;
        document.querySelectorAll("#gAll .card").forEach(function (c) {
          var ok = !q || c.getAttribute("data-n").indexOf(q) > -1;
          c.style.display = ok ? "" : "none";
          if (ok) n++;
        });
        document.getElementById("kosong").style.display = n ? "none" : "block";
      }
      function detail(id) {
        var a = ARTIKEL.filter(function (x) {
          return x.id === id;
        })[0];
        if (!a) {
          location.hash = "#artikel";
          return;
        }
        document.getElementById("p-detail").innerHTML =
          '<a class="back" href="#artikel">' +
          ic(I.back, 18) +
          'Kembali ke artikel</a><div class="full"><h1>' +
          a.t +
          '</h1><div class="date">' +
          a.d +
          "</div>" +
          a.b +
          a.tags
            .map(function (t) {
              return '<span class="tag">' + t + "</span>";
            })
            .join("") +
          "</div>";
      }
      function route() {
        var h = (location.hash || "#beranda").slice(1),
          parts = h.split("/"),
          page = parts[0];
        if (["beranda", "produk", "artikel", "tentang"].indexOf(page) < 0)
          page = "beranda";
        var show = page;
        if (page === "artikel" && parts[1]) {
          detail(parts[1]);
          show = "detail";
        }
        document.querySelectorAll(".page").forEach(function (p) {
          p.classList.toggle("on", p.id === "p-" + show);
        });
        document.querySelectorAll("#nav a").forEach(function (a) {
          a.classList.toggle("on", a.getAttribute("data-p") === page);
        });
        window.scrollTo(0, 0);
      }
      document.getElementById("heroIc").innerHTML = ic(I.sat, 72);
      document.getElementById("perks").innerHTML = [
        ["bolt", "Mudah dipasang"],
        ["wifi", "Terhubung WiFi"],
        ["lock", "Aman dikendalikan"],
        ["bulb", "Hemat listrik"],
      ]
        .map(function (x) {
          return "<div>" + ic(I[x[0]], 22) + "<span>" + x[1] + "</span></div>";
        })
        .join("");
      document.getElementById("gHome").innerHTML = PRODUK.map(cardP).join("");
      document.getElementById("gAll").innerHTML = PRODUK.map(cardP).join("");
      document.getElementById("aHome").innerHTML = ARTIKEL.slice(0, 2)
        .map(cardA)
        .join("");
      renderArtikel();
      document.querySelectorAll("img[data-src]").forEach(function (i) {
        var s = i.getAttribute("data-src");
        if (s) i.src = s;
      });
      window.addEventListener("hashchange", route);
      route();
