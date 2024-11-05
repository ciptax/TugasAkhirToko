const products = [{
        id: 1,
        name: "Beras Sovia",
        description: "Beras Sovia dikenal sebagai beras premium dengan tekstur pulen dan aroma yang khas.",
        price: "Rp90.000",
        image: "assets/img_products/sembako/beras.png",
        category: "SEMBAKO",
    },
    {
        id: 2,
        name: "Gula Pasir",
        description: "Gula Pasir murni yang sempurna untuk manisan dan kue.",
        price: "Rp13.500 / Rp16.000",
        image: "assets/img_products/sembako/gula pasir2.png",
        category: "SEMBAKO",
    },
    {
        id: 3,
        name: "Beras Bunga Premium",
        description: "Beras bunga yang memiliki aroma yang harum rasa yang lembut.",
        price: "Rp80.000",
        image: "assets/img_products/sembako/berasbungapremium-removebg-preview.png",
        category: "SEMBAKO",
    },
    {
        id: 4,
        name: "Telur Ayam",
        price: "Rp27.000",
        image: "assets/img_products/sembako/telurayam.png",
        description: "Telur Ayam segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        id: 5,
        name: "Telur Bebek",
        price: "Rp51.000",
        image: "assets/img_products/sembako/telur_bebek_1tre-removebg-preview.png",
        description: "Telur Bebek segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        id: 6,
        name: "Telur Ayam Kampung",
        price: "Rp38.000",
        image: "assets/img_products/sembako/telurayam_kampung1kg-removebg-preview.png",
        description: "Telur Ayam Kampung segar dari peternakan lokal.",
        category: "SEMBAKO",
    },
    {
        id: 7,
        name: "Beras Kantil",
        price: "Rp77.000.000",
        image: "assets/img_products/sembako/beraskantil-removebg-preview.png",
        description: "Beras Kantil memiliki butiran panjang dan aroma yang wangi dengan rasa yang cenderung manis.",
        category: "SEMBAKO",
    },
    {
        id: 8,
        name: "Beras Rojo Lele",
        price: "Rp83.000",
        image: "assets/img_products/sembako/berasrojolele-removebg-preview.png",
        description: "Beras Rojo lele ini memiliki karakteristik yang pulen dan sedikit lengket yang menambah cita rasa legit.",
        category: "SEMBAKO",
    },
    {
        id: 9,
        name: "Beras Medium",
        price: "Rp60.000",
        image: "assets/img_products/sembako/berasmedium-removebg-preview.png",
        description: "Beras Medium memiliki tekstur yang sedang, tidak terlalu pulen.",
        category: "SEMBAKO",
    },
    {
        id: 10,
        name: "Mentega Anchor",
        price: "Rp60.000",
        image: "assets/img_products/sembako/anchor.png",
        description: "Mentega Anchor memiliki rasa creamy dan milky, khas dari susu sapi.",
        category: "SEMBAKO",
    },
    {
        id: 11,
        name: "Minyak Goreng Bimoli",
        price: "Rp38.000",
        image: "assets/img_products/sembako/bimoli2ltr-removebg-preview.png",
        description: "Minyak Bimoli memiliki rasa yang lembut dan sedikit nutty.",
        category: "SEMBAKO",
    },
    {
        id: 12,
        name: "Minyak Goreng SunCo",
        price: "Rp22.000",
        image: "assets/img_products/sembako/mingor2ltr-removebg-preview.png",
        description: "Minyak SunCo memiliki rasa yang cenderung netral dan tidak menggangu rasa asli makanan.",
        category: "SEMBAKO",
    },
    {
        id: 13,
        name: "Minyak Goreng Sabrina",
        price: "Rp20.000",
        image: "assets/img_products/sembako/sabrina2ltr-removebg-preview.png",
        description: "Minyak Sabrina menawarkan rasa yang bersih dan ringan, ideal untuk berbagai masakan.",
        category: "SEMBAKO",
    },
    {
        id: 14,
        name: "Minyak Goreng Fortune 5L",
        price: "Rp135.000",
        image: "assets/img_products/sembako/fortune5ltr-removebg-preview.png",
        description: "Minyak Fortune menghasilkan tekstur yang renyah saat digoreng.",
        category: "SEMBAKO",
    },
    {
        id: 15,
        name: "Tepung Segitiga Biru",
        price: "Rp12.000",
        image: "assets/img_products/sembako/segitigabiru1kg-removebg-preview.png",
        description: "Tepung terigu serba guna yang memiliki tekstur halus dan mengandung protein tinggi.",
        category: "SEMBAKO",
    },
    {
        id: 16,
        name: "Tepung Cakra Kembar",
        price: "Rp16.000",
        image: "assets/img_products/sembako/cakrakembar1kg-removebg-preview.png",
        description: "Tepung terigu yang berkualitas tinggi dengan kadar protein 13,5%.",
        category: "SEMBAKO",
    },
    {
        id: 17,
        name: "Tepung Sania",
        price: "Rp18.000",
        image: "assets/img_products/sembako/saniatepung1kg-removebg-preview.png",
        description: "Tepung terigu serba guna dengan rasa netral, ideal untuk berbagai jenis makanan.",
        category: "SEMBAKO",
    },
    {
        id: 18,
        name: "Tepung Bumbu Sajiku",
        price: "Rp2.500",
        image: "assets/img_products/sembako/tepungSAJIKU-TB-900g-removebg-preview.png",
        description: "Tepung bumbu racik dengan rempah pilihan, memberikan rasa yang kaya dan aroma menggugah selera.",
        category: "SEMBAKO",
    },
    {
        id: 19,
        name: "Gula Merah / Gula Jawa",
        price: "Rp16.000",
        image: "assets/img_products/sembako/gulamerah_gljawa_1kg-removebg-preview.png",
        description: "Gula Merah mempunyai rasa yang manis khas dan lembut.",
        category: "SEMBAKO",
    },
    {
        id: 20,
        name: "Gula Halus Claris",
        price: "Rp8.000",
        image: "assets/img_products/sembako/gulaclarishalus500gr-removebg-preview.png",
        description: "Gula Halus Claris mempunyai tekstur yang lembut dan lumer di mulut.",
        category: "SEMBAKO",
    },
    {
        id: 21,
        name: "Gula Batu Tawon",
        price: "Rp56.000",
        image: "assets/img_products/sembako/gulabatucaptawon-removebg-preview.png",
        description: "Gula Batu Tawon memiliki rasa yang manis dan mudah larut.",
        category: "SEMBAKO",
    },
    // jajanan
    {
        id: 22,
        name: "Choki - Choki",
        price: "Rp18.000",
        image: "assets/img_products/jajanan/choki4.png",
        description: "Snack choklat berbentuk stick yang mudah dibawa kemana - mana",
        category: "JAJANAN",
    },
    {
        id: 23,
        name: "Nextar Coklat Isi 12",
        price: "Rp20.000",
        image: "assets/img_products/jajanan/nextar1.png",
        description: "Biskuit renyah dengan cream yang menggoda memiliki rasa coklat",
        category: "JAJANAN",
    },
    {
        id: 24,
        name: "Tanggo Wafer",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/tanggo-removebg-preview.png",
        description: "Wafer renyah dengan cream dengan aneka rasa",
        category: "JAJANAN",
    },
    {
        id: 25,
        name: "Sari Gandum Sandwich",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/sarigandum-removebg-preview.png",
        description: "Biskuit memiliki tekstur renyah diluar dan lembut didalam, diisi dengan cream coklat dan susu",
        category: "JAJANAN",
    },
    {
        id: 26,
        name: "Sari Roti",
        price: "Rp5.000",
        image: "assets/img_products/jajanan/sari_roti_5rb-removebg-preview.png",
        description: "Memiliki rasa yang lembut, manis dengan tekstur yang empuk dan kenyal",
        category: "JAJANAN",
    },
    {
        id: 27,
        name: "Roti Aoka Sandwich",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/roti_aoka-removebg-preview.png",
        description: "Roti lembut yang diisi dengan selai manis",
        category: "JAJANAN",
    },
    {
        id: 28,
        name: "Pocky Stick",
        price: "Rp4.000",
        image: "assets/img_products/jajanan/pockybox-removebg-preview.png",
        description: "Biskuit stick yang dilapisi dengan berbagai rasa",
        category: "JAJANAN",
    },
    {
        id: 29,
        name: " Biskuit Malkist",
        price: "Rp5.000",
        image: "assets/img_products/jajanan/malkist-removebg-preview.png",
        description: "Snack biskuit berisi cream manis yang disukai anak - anak",
        category: "JAJANAN",
    },
    {
        id: 30,
        name: " Biskuit Hello Panda",
        price: "Rp9.000",
        image: "assets/img_products/jajanan/helopandabox-removebg-preview.png",
        description: "Biskuit berbentuk panda yang diisi cream tersedia berbagai macam rasa",
        category: "JAJANAN",
    },
    {
        id: 31,
        name: " Biskuit Good Time",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/goodtime-removebg-preview.png",
        description: "Biskuit renyah yang sering disajikan sebagai cemilan dengan rasa coklat yang lezat",
        category: "JAJANAN",
    },
    {
        id: 32,
        name: " Wafer Dilan ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/dilan1990-removebg-preview.png",
        description: "pocky enak",
        category: "JAJANAN",
    },
    {
        id: 33,
        name: " Wafer Beng-Beng ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/beng_beng_mini-removebg-preview.png",
        description: "Wafer dengan rasa manis, gurih dan renyah dimulut",
        category: "JAJANAN",
    },
    {
        id: 34,
        name: " Roti Aoka Gulung ",
        price: "Rp2.000",
        image: "assets/img_products/jajanan/aoka_gulung-removebg-preview.png",
        description: "Roti yang memiliki rasa manis dan lembut dengan tekstur yang kenyal",
        category: "JAJANAN",
    },
    {
        id: 35,
        name: " Biskuit Roma Kelapa",
        price: "Rp8.500",
        image: "assets/img_products/jajanan/2.ROMA-COCONUT-BISCUIT-300G-removebg-preview.png",
        description: "Biskuit dengan rasa kelapa yang khas, menawarkan kombinasi renyah dan manis",
        category: "JAJANAN",
    },
    // minuman
    {
        id: 36,
        name: "Sirup ABC",
        price: "Rp15.000",
        image: "assets/img_products/minuman/abc-removebg-preview.png",
        description: "sirup dengan aneka rasa",
        category: "MINUMAN",
    },
    {
        id: 37,
        name: "Sirup Marjan",
        price: "Rp23.000",
        image: "assets/img_products/minuman/marjan-removebg-preview.png",
        description: "Sirup manis cocok saat berbuka puasa",
        category: "MINUMAN",
    },
    {
        id: 38,
        name: "Sirup Tjampolai",
        price: "Rp35.000",
        image: "assets/img_products/minuman/tjampolai-removebg-preview.png",
        description: "Sirup khas Cirebon dengan berbagai rasa yang lezat",
        category: "MINUMAN",
    },
    {
        id: 39,
        name: "Susu Ultra Milk",
        price: "Rp8.500",
        image: "assets/img_products/minuman/ultramilk-removebg-preview.png",
        description: "Susu sehat tinggi protein untuk anak-anak dan dewasa ",

        category: "MINUMAN",
    },
    {
        id: 40,
        name: "Susu Bear Brand",
        price: "Rp10.000",
        image: "assets/img_products/minuman/beruang-removebg-preview.png",
        description: "Susu steril berkualitas tinggi",
        category: "MINUMAN",
    },
    {
        id: 41,
        name: "Susu Real Good",
        price: "Rp2.500",
        image: "assets/img_products/minuman/realgood-removebg-preview.png",
        description: "Susu beraneka rasa yang baik untuk anak anak",
        category: "MINUMAN",
    },
    {
        id: 42,
        name: "Susu Yakult",
        price: "Rp2.500",
        image: "assets/img_products/minuman/yakult-removebg-preview.png",
        description: "Susu yang mengandung bakteri baik cocok untuk pencernaan",
        category: "MINUMAN",
    },
    {
        id: 43,
        name: "Teh Pucuk",
        price: "Rp4.000",
        image: "assets/img_products/minuman/PUCUK-removebg-preview.png",
        description: "Minuman Teh dengan rasa yang khas dan segar",
        category: "MINUMAN",
    },
    {
        id: 44,
        name: "Teh Kotak",
        price: "Rp5.500",
        image: "assets/img_products/minuman/kotak-removebg-preview.png",
        description: "Minuman Teh dengan berkualitas tinggi",

        category: "MINUMAN",
    },
    // sabun
    {
        id: 45,
        name: "Shampoo Clear",
        price: "Rp32.500",
        image: "assets/img_products/sabun/clear-removebg-preview.png",
        description: "Membersihkan kulit kepala dari ketombe",
        category: "SABUN",
    },
    {
        id: 46,
        name: "CloseUp",
        price: "Rp16.000",
        image: "assets/img_products/sabun/close160-removebg-preview.png",
        description: "Membuat nafas segar sepanjang hari",
        category: "SABUN",
    },
    {
        id: 47,
        name: "Shampoo Dove Renceng",
        price: "Rp10.000",
        image: "assets/img_products/sabun/dove_saset-removebg-preview.png",
        description: "Mencegah rambut rontok,  membuat rambut kuat",
        category: "SABUN",
    },
    {
        id: 48,
        name: "Pewangi Downy",
        price: "Rp49.500",
        image: "assets/img_products/sabun/downy-removebg-preview.png",
        description: "Memberikan aroma wangi sepanjang hari",
        category: "SABUN",
    },
    {
        id: 49,
        name: "Shampoo Emeron",
        price: "Rp23.500",
        image: "assets/img_products/sabun/emeron-removebg-preview.png",
        description: "Memberikan kelembapan dan nutrisi pada rambut yang membuat rambut berkilau",
        category: "SABUN",
    },
    {
        id: 50,
        name: "Formula",
        price: "Rp13.500",
        image: "assets/img_products/sabun/formula-removebg-preview.png",
        description: "Perlindungan gigi yang optimal, mencegah kerusakan dan menjaga kesegaran napas sepanjang hari",
        category: "SABUN",
    },
    {
        id: 51,
        name: "Garnier Man",
        price: "Rp28.500",
        image: "assets/img_products/sabun/garnierman-removebg-preview.png",
        description: "Mengatasi kotoran diwajah, menghilangkan minyak berlebih dan membuat muka segar sepanjang hari",
        category: "SABUN",
    },
    {
        id: 52,
        name: "Garnier",
        price: "Rp22.500",
        image: "assets/img_products/sabun/garnier-removebg-preview.png",
        description: "Menghilangkan komedo, mengatasi minyak berlebih dan membuat muka segar",
        category: "SABUN",
    },
    {
        id: 53,
        name: "Giv Cair 450ML",
        price: "Rp16.000",
        image: "assets/img_products/sabun/givcair_450ml-removebg-preview.png",
        description: "Menghilangkan keringat berlebih, menghilangkan bau badan dan membuat badan harum sepanjang hari",
        category: "SABUN",
    },
    {
        id: 54,
        name: "Kahf",
        price: "Rp32.500",
        image: "assets/img_products/sabun/kahf-removebg-preview.png",
        description: "Mengandung bahan alami, memberikan kelembapan dan membersihkan hingga ke pori-pori",
        category: "SABUN",
    },
    {
        id: 55,
        name: "LifeBoy",
        price: "Rp4.000",
        image: "assets/img_products/sabun/lifeboy-removebg-preview.png",
        description: "Memberikan perlindungan dari kuman, menjaga kebersihan tangan dan tubuh ",
        category: "SABUN",
    },
    {
        id: 56,
        name: "LifeBoy Cair 500 ML",
        price: "Rp20.000",
        image: "assets/img_products/sabun/lifecair500ml-removebg-preview.png",
        description: "Membunuh 99% kuman, menghilangkan bau badan dan membuat badan harum sepanjang hari",
        category: "SABUN",
    },
    {
        id: 57,
        name: "Sabun Mandi LUX",
        price: "Rp17.000",
        image: "assets/img_products/sabun/lux-removebg-preview.png",
        description: "Memberikan kelembapan dan sensasi segar setelah mandi, ",
        category: "SABUN",
    },
    {
        id: 58,
        name: "Molto Pewangi Pakaian",
        price: "Rp10.000",
        image: "assets/img_products/sabun/molto-removebg-preview.png",
        description: "Membuat pakaian wangi tanpa merusak warna dan serat pakaian",
        category: "SABUN",
    },
    {
        id: 59,
        name: "Pepsodents 75g",
        price: "Rp5.000",
        image: "assets/img_products/sabun/peps75g-removebg-preview.png",
        description: "Perlindungan pada gigi dari kerusakan dan gigi berlubang, membuat nafas segar sepanjang hari",
        category: "SABUN",
    },
    {
        id: 60,
        name: "SoKlin Liquid",
        price: "Rp5.000",
        image: "assets/img_products/sabun/soklin-removebg-preview.png",
        description: "Membunuh kuman pada pakaian dan membersihkan noda yang membandel",
        category: "SABUN",
    },
    {
        id: 61,
        name: "Sunlight",
        price: "Rp5.000",
        image: "assets/img_products/sabun/sunlight-removebg-preview.png",
        description: "Menghilangkan lemak membandel dengan sekali usap, membuat piring dan gelas tampak berkilau",
        category: "SABUN",
    },
    {
        id: 62,
        name: "Sunsilk Renceng / Saset",
        price: "Rp10.000",
        image: "assets/img_products/sabun/sunsulk_renceng-removebg-preview.png",
        description: "Menghilangkan ketombe basah, dan membuat rambut tampak berkilau sepanjang hari",
        category: "SABUN",
    },
    {
        id: 63,
        name: "Wardah Sabun Cuci Muka",
        price: "Rp30.500",
        image: "assets/img_products/sabun/wardah-removebg-preview.png",
        description: "Mengandung bahan alami yang lembut di kulit, cocok untuk semua jenis kulit",
        category: "SABUN",
    },
    // bumbu dapur
    {
        id: 64,
        name: "Kecap ABC 600ml",
        price: "Rp25.000",
        image: "assets/img_products/bumbu/abc600ml-removebg-preview.png",
        description: "Kecap manis dengan rasa khas, cocok untuk berbagai masakan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 65,
        name: "Saos ABC Extra Pedas 335ml",
        price: "Rp20.000",
        image: "assets/img_products/bumbu/ABC-Extra-Pedas-Saos-Sambal-335ml-removebg-preview.png",
        description: "Saos sambal pedas yang menggugah selera, ideal untuk hidangan pedas.",
        category: "BUMBU DAPUR",
    },
    {
        id: 66,
        name: "AJINOMOTO Penyedap Rasa",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/ajinomoto-removebg-preview.png",
        description: "Penyedap rasa untuk menambah cita rasa masakan Anda.",
        category: "BUMBU DAPUR",
    },
    {
        id: 67,
        name: "Kecap Asin 58 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/asin58_135ml-removebg-preview.png",
        description: "Kecap asin dengan rasa yang khas, sempurna untuk menambah cita rasa.",
        category: "BUMBU DAPUR",
    },
    {
        id: 68,
        name: "Kecap Asin MENJANGAN 140ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/asinmenjangan140ml-removebg-preview.png",
        description: "Kecap asin premium yang cocok untuk berbagai hidangan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 69,
        name: "Kecap Bangau 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/bangau135ml-removebg-preview.png",
        description: "Kecap manis dengan rasa yang pas, ideal untuk masakan sehari-hari.",
        category: "BUMBU DAPUR",
    },
    {
        id: 70,
        name: "Garam Dapur Cap KAPAL",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/capkapalgaram-removebg-preview.png",
        description: "Garam dapur berkualitas, cocok untuk memasak.",
        category: "BUMBU DAPUR",
    },
    {
        id: 71,
        name: "Garam Dapur Cap DAUN",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/garam_capdaun-removebg-preview.png",
        description: "Garam dapur dengan kualitas terbaik, memberikan rasa yang pas.",
        category: "BUMBU DAPUR",
    },
    {
        id: 72,
        name: "Garam Dapur Cap SEGITIGA EMAS",
        price: "Rp5.000",
        image: "assets/img_products/bumbu/garamsegitiga-removebg-preview.png",
        description: "Garam dapur yang sempurna untuk segala masakan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 73,
        name: "Saos Sambal INDOFOOD PEDAS 135ml",
        price: "Rp20.000",
        image: "assets/img_products/bumbu/indofood_pedas-removebg-preview.png",
        description: "Saos sambal pedas yang nikmat, ideal untuk menemani makanan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 74,
        name: "Masako Kaldu Ayam Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/masako-removebg-preview.png",
        description: "Kaldu bubuk untuk menambah rasa gurih pada masakan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 75,
        name: "Royko Ayam / Sapi Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/roykoayamsapi-removebg-preview.png",
        description: "Penyedap rasa dalam bentuk saset untuk masakan Anda.",
        category: "BUMBU DAPUR",
    },
    {
        id: 76,
        name: "Saos Tomat Kemasan Plastik 450g",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/saos_tomat_450g.png",
        description: "Saos tomat segar untuk hidangan pasta dan makanan lainnya.",
        category: "BUMBU DAPUR",
    },
    {
        id: 77,
        name: "SASA Penyedap Rasa Saset",
        price: "Rp10.000",
        image: "assets/img_products/bumbu/sasa-removebg-preview.png",
        description: "Penyedap rasa yang praktis dan mudah digunakan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 78,
        name: "Kecap Sedap 135ml",
        price: "Rp12.000",
        image: "assets/img_products/bumbu/sedap-removebg-preview.png",
        description: "Kecap manis yang nikmat untuk menambah cita rasa masakan.",
        category: "BUMBU DAPUR",
    },
    {
        id: 79,
        name: "Saori Saos Tiram / Teriyaki 135ml",
        price: "Rp25.000",
        image: "assets/img_products/bumbu/tiramteriyaki_135ml-removebg-preview.png",
        description: "Saos tiram dan teriyaki yang kaya rasa, sempurna untuk masakan Asia.",
        category: "BUMBU DAPUR",
    },
    {
        id: 80,
        name: "Minyak Wijen ABC 195ml",
        price: "Rp30.000",
        image: "assets/img_products/bumbu/wijen195ml-removebg-preview.png",
        description: "Minyak wijen berkualitas tinggi, ideal untuk menumis.",
        category: "BUMBU DAPUR",
    },
    {
        id: 81,
        name: "KARA Santan Kelapa Kemasan",
        price: "Rp15.000",
        image: "assets/img_products/bumbu/kara3.png",
        description: "Santan kelapa yang kental dan lezat, cocok untuk masakan tradisional.",
        category: "BUMBU DAPUR",
    },
];
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cart = JSON.parse(localStorage.getItem("cart")) || []; // Ambil keranjang dari localStorage atau buat array kosong jika belum ada

let currentPage = 1;
const productsPerPage = 36; // Jumlah produk per halaman

function displayProducts(filteredProducts) {
    productList.innerHTML = "";

    // Hitung total produk dan total halaman
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Hitung indeks produk yang ditampilkan berdasarkan halaman
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

    // Ambil produk yang akan ditampilkan di halaman ini
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsToShow.forEach((product) => {
        const productHTML = `
            <div class="col-2">
                <div class="card w-100">
                    <div class="text-center">
                        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Harga: ${product.price}</strong></p>
                        <div class="d-flex align-items-center">
                            <input type="number" min="0" value="0" class="form-control" style="width: 70px;" id="quantity-${product.id}">
                            <button class="btn btn-primary btn-cart ms-2" onclick="addToCart(${product.id})">
                                <i class="bi bi-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn btn-success w-100" style="margin-top: 15px; margin-bottom: 20px;">Beli Sekarang</a>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productHTML);
    });

    // Tampilkan navigasi pagination
    displayPagination(totalProducts, totalPages);
    productList.scrollIntoView({ behavior: "smooth", block: "start" });
}

function displayPagination(totalProducts, totalPages) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.className = "btn btn-light ms-1";

        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayProducts(products); // Tampilkan produk berdasarkan halaman yang dipilih
        });

        paginationContainer.appendChild(pageButton);
    }
}

// Tampilkan semua produk saat pertama kali
displayProducts(products);

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm)
    );
    currentPage = 1; // Reset halaman saat melakukan pencarian
    displayProducts(filteredProducts);
});

function filterByCategory(category) {
    const filteredProducts = products.filter(
        (product) => product.category === category
    );
    currentPage = 1; // Reset halaman saat memfilter kategori
    displayProducts(filteredProducts);
}
// Fungsi untuk menambah produk ke keranjang
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        // Konversi harga produk ke angka, hilangkan "Rp" dan tanda titik jika ada
        const price = parseInt(product.price.replace("Rp", "").replace(/\./g, ""));
        const totalPrice = price * quantity;

        // Cari apakah produk sudah ada di keranjang
        const existingProduct = cart.find((item) => item.id === productId);

        if (existingProduct) {
            // Jika produk sudah ada, tambahkan jumlah dan total harga
            existingProduct.quantity += quantity;
            existingProduct.totalPrice += totalPrice;
        } else {
            // Jika produk belum ada, tambahkan sebagai item baru
            cart.push({...product, quantity, totalPrice });
        }

        // Simpan keranjang ke localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Perbarui notifikasi keranjang
        updateCartNotification();

        // Kosongkan input kuantitas
        quantityInput.value = 0;
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}

// Fungsi untuk menampilkan barang yang ada di keranjang dengan gambar produk, total harga, dan tombol hapus
function showCartItems() {
    const cartListContainer = document.getElementById("cartList");
    cartListContainer.innerHTML = "";

    if (cart.length === 0) {
        cartListContainer.innerHTML = "<p>Keranjang kosong</p>";
    } else {
        cart.forEach((item, index) => {
            const cartItemHTML = `
                <div class="d-flex align-items-center mb-3">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                    <div>
                        <h5>${item.name}</h5>
                        <p>Jumlah: ${item.quantity}</p>
                        <p>Harga per unit: Rp${item.price}</p>
                        <p><strong>Total: Rp${item.totalPrice}</strong></p>
                        <button class="btn btn-danger btn-sm mt-2" onclick="removeFromCart(${index})">Hapus</button>
                    </div>
                </div>
                <hr>
            `;
            cartListContainer.insertAdjacentHTML("beforeend", cartItemHTML);
        });
    }
}

// Fungsi untuk menghapus item dari keranjang berdasarkan index
function removeFromCart(index) {
    cart.splice(index, 1); // Hapus item dari array cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Perbarui data di localStorage
    updateCartNotification(); // Perbarui notifikasi keranjang
    showCartItems(); // Tampilkan ulang daftar keranjang
}

// Fungsi untuk memperbarui notifikasi jumlah barang di keranjang
function updateCartNotification() {
    const cartButton = document.querySelector(".btn-keranjang");
    const cartCount = cart.length;
    cartButton.innerHTML = `<i class="bi bi-cart"></i> (${cartCount})`;
}

// Tambahkan event listener untuk tombol keranjang di navigasi
document.querySelector(".btn-keranjang").addEventListener("click", () => {
    const cartListContainer = document.getElementById("cartList");
    cartListContainer.style.display =
        cartListContainer.style.display === "none" ? "block" : "none";
    showCartItems(); // Memanggil fungsi untuk menampilkan item keranjang
});

// Perbarui notifikasi keranjang saat halaman dimuat
updateCartNotification();