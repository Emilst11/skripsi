import React from "react";
import MainLayout from "../layouts/MainLayout";
import '../styles/About.scss'

const About = () => {
    return(
        <MainLayout>
            <h1>About</h1>
            <p><b>Textplag</b> adalah sebuah aplikasi pengecekan plagiasi pada laporan kerja magang mahasiswa, aplikasi ini akan melakukan pengecekan pada berkas 1 folder yang telah dijadikan berkas zip dan diekstraksi kemudian dalam berkas tersebut akan dilakukan pengecekan berkas satu sama lainnya sebanyak jumlah berkas yang ada di dalam folder tersebut. Hasilnya akan menampilkan tingkat kesamaan antara berkas berkas yang telah dilakukan pengecekan.</p>
            <h2>Tujuan</h2>
            <p>Adapun tujuan aplikasi ini dibuat yaitu sebagai berikut:</p>
            <ol start={1}>
                <li>Mengetahui seberapa efektifnya algoritma Rabin-Karp digunakan sebagai metode pengecekan kesamaan pada sebuah berkas</li>
                <li>Mengetahui batasan jenis berkas apa saja yang bisa dibaca sehingga bisa diterima dan dilakukannya proses plagiasi oleh sistem Regular Expression (Regex).</li>
                <li>Mengetahui framework React.js sebagai framework frontend web yang baik dalam pengoperasiannya karena memiliki middleware yaitu Redux-saga, sehingga dalam berkomunikasi dengan data API dan menempatkannya kedalam store jadi jauh lebih efektif dan menjadikan setiap komponen pada React.js lebih bersih dan efektif.</li>
                <li>Mengetahui Redux saga bisa menangani pemanggilan API yang begitu banyak bisa jadi jauh lebih tertata dan efisien.</li>
                <li>Mengetahui pola pengerjaan Flask sebagai Backend yang menjalankan proses pengecekan plagiarisme.</li>
                <li>Mengetahui keefektifan framework Laravel yang menjadikan Backend sebagai komunikasi Frontend dengan database menggunakan API.</li>
            </ol>
            {/* Framework */}
            <h2>Framework</h2>
            <p>Dalam pembuatan aplikasi ini, digunakan beberapa framework yang diantaranya adalah:</p>
            <div className="desc">
                <div className="desc-box">
                    <h3>React.js (Frontend)</h3>
                    <p>Menggunakan framework React.js ini karena dalam mengimplementasikan data dan ditampilkan terhadap user, React.js mampu bereaksi cepat dan merender-nya secara otomatis. Yang mana ketika ada perubahan data React.js akan bereaktif terhadap perubahan ataupun update sehingga tidak diperlukan refresh berulang-ulang</p>
                    <p>React.js merupakan sebuah framework yang dibungkus 1 buah aplikasi sehingga routing terhadap setiap halamannya tidak diperlukannya loading atau menunggu dan ini merupakan sebuah keunggulan yang dimiliki React.</p>
                </div>
                <div className="desc-box">
                    <h3>Flask (Backend)</h3>
                    <p>Framework Flask digunakan sebagai pengoperasian perintah-perintah pada python untuk menjelankan proses plagiasi yang sudah dibentuk ataupun dibuat. Nantinya flask akan mengirimkan endpoint API yang akan digunakan oleh frontend sebagai alat komunikasi dalam menjalankan perintah python yang sudah dibuat.</p>
                </div>
                <div className="desc-box">
                    <h3>Laravel (Backend)</h3>
                    <p>Laravel digunakan sebagai alat komunikasi dari frontend terhadap database, dengan cara Laravel akan mengirimkan endpoint API untuk digunakan berkomunikasi pada database, sebenarnya Flask bisa melakukannya namun dalam pengerjaannya yang sangat mendadak maka dibutuhkan Laravel karena lebih mudah dioperasikan dan minim kendala. Pada pembuatan endpoint API dengan Laravel ini bukan dibuat oleh peniliti alias peneliti dibuatkan oleh partner kuliah dalam menyelesaikan projek ini.</p>
                </div>
            </div>

            {/* Kendala */}
            <h2>Kendala</h2>
            <p>Waktu yang digunakan dalam mengembangkan projek ini bisa dikatakan singkat sehingga banyak kendala yang didapatkan oleh peniliti, berikut daftar kendala yang dialami peneliti:</p>
            <ol start={1}>
                <li>Pengimplementasian metode menggunakan bahasa python merupakan sebuah kendala, dikarenakan selama kuliah peneliti tidak pernah belajar tentang bahasa ini secara teratur. Adapun praktikum menggunakan python tidaklah mempelajari bahasa ini terperinci dari awal seperti mengenal konsep-konsep if, loop yang ada di python. Sehingga peneliti harus meluangkan waktu seharian dalam mempelejari sekaligus mengimplementasi metode Algoritma Rabin-Karp secara bersamaan yang mana dibantu dengan latihan sedikit demi sedikit dan dokumentasi yang cukup.</li>
                <li>Kurang mengerti tentang Backend, peneliti merupakan seorang yang memiliki keahlian dibidang Frontend saja. Namun dalam pengembangan projek akhir ini peneliti harus belajar sedikit tentang Backend seperti Flask ataupun Laravel.</li>
                <li>Seperti yang disebutkan pada kendala pemahaman bahasa pemrograman python, dikarenakan kurang mengertinya bahasa pemrograman python seperti apa sehingga dalam pembuatan atau pengoperasian Flask peneliti tidak bisa menuliskan atau memanfaatkannya dengan baik sehingga masih banyak error hingga saat ini dan hanya mengandalkan dokumentasi seadanya saja.</li>
                <li>Pengetahuan React yang terbatas saat itu merupakan sebuah kendala dan ini merupakan alasan mengapa peneliti melakukan rework pada tampilan sehingga bisa dioperisakan jadi lebih baik.</li>
                <li>Tidak mengerti bahasa PHP, dalam kebutuhan data yang akan dimunculkan peneleiti harus meminta partnernya untuk melakukan modifikasi pada Laravel agar bisa dioperasikannya jadi lebih baik.</li>
            </ol>

            {/* Kesimpulan */}
            <h2>Kesimpulan</h2>
            <p>Dalam menyelesaikan penelitian, gunakan waktu secukupnya dan berikan patokan setiap hari dan setiap minggunya goals yang akan didapatkan</p>

            <p>Copyright by @Emil Setiawan</p>
        </MainLayout>
    )
}

export default About