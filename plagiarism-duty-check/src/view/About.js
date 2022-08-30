import React from "react";

const About = () => {
    const desc = [
        {
            id: 1,
            title: "About Us",
            text: "TextPlag merupakan sebuah aplikasi pengecekan plagiasi pada laporan kerja magang mahasiswa, terutama mahasiswa kampus Institut Teknologi PLN Jakarta Barat di program studi S1 Teknik Informatika. Aplikasi ini dibuat karena dapat ditemukan kasus tidak sedikit mahasiswa melakukan plagiasi pada penulisan laporan kerja magang, dan laporan kerja magang tersebut akan diserahkan pada jurusan sebagai syarat kelulusan pada mata kuliah magang dan syarat kelulusan pada program studi S1 Teknik Informatika di Institut Teknologi PLN, hal inilah yang menjadi alasan mengapa aplikasi ini dibuat dan dikembangkan. Aplikasi ini menggunakan metode Algoritma Rabin-Karp sebagai metode pengecekan plagiasi antar dokumen dan menggunakan Regex dalam mengotomasi pemotongan berkas yang diambil dari BAB 1 hingga BAB 5 saja"
        },
        {
            id: 2,
            title: "Tujuan",
            text: "Tujuan dari aplikasi ini dibuat yaitu untuk melihat tindak kecurangan terutama plagiasi pada penulisan laporan kerja magang mahasiswa, yang mana laporan kerja magang mahasiswa tersebut menjadi syarat untuk maju sidang dalam menyelesaikan atau lulus di mata kuliah kerja magang di program studi S1 Teknik Informatika ITPLN. Selain itu, tujuan lain aplikasi ini dibuat untuk membantu atau melengkapi teori yang dilakukan penelitian berupa skripsi yang menjadi tugas akhir dalam menyelesaikan studi S1 Teknik Informatika di ITPLN."
        },
        {
            id: 3,
            title: "Framework",
            text: "Dalam pengaplikasian pada penelitian ini, dibutuhkan 3 framework dalam pengembangannya. Yaitu React.js sebagai Front-end pada website, Flask sebagai Back-End dan berfungsi sebagai API dalam melakukan pengecekan plagiasi pada dokumen, dan yang terakhir Laravel sebagai API untuk mengintegrasikan aplikasi dengan database."
        },
        {
            id: 4,
            title: "Kelebihan",
            text: "Kelebihan aplikasi ini adalah ketika menggunakan aplikasi ini untuk pengecekan plagiasi pada dokumen laporan kerja magang, pengguna tidak harus membelah datanya terlebih dahulu atau yang dimaksud adalah pengguna tidak perlu mengedit berkas dan mengambil halamnan yang dimulai dari BAB 1 hingga BAB 5. Hanya dengan mengunggah dokumen saja nantinya sistem yang akan memilih halaman dan mengambil BAB 1 hingga BAB 5 nya saja."
        },
        {
            id: 5,
            title: "Kekurangan",
            text: "Kekurangannya adalah pengguna tidak mengetahui letak mana saja yang memliki pola kesamaan pada teks yang ada di dokumen dan hanya akan disajikan hasil dari presentasenya saja."
        },
        {
            id: 6,
            title: "Saran",
            text: "Apabila dilakukannya pengembangan pada aplikasi ini, adapun saran agar pengembang atau peneliti bisa mengembangkan aplikasi ini lebih optimal. Yang pertama adalah menambahkan metode consine similarity untuk pengecekan plagiasi dan mengkombinasikannya dengan algoritma Rabin-Karp sehingga aplikasi pengecekan lebih optimal lagi, kemudian ditampilkannya bentuk atau pola karakter mana saja yang memiliki kesamaan antar pola sehingga bisa menjadi bahan evaluasi pada pengguna, mengoptimalkan penggunaan framework yang mana menggunakan 3 framework merupakan sebuah pemborosan sehingga bisa mengoptimalkannya adalah dengan mengintegrasikan database cukup dengan Flask saja, menambah role pengguna berupa mahasiswa sehingga bisa melakukan pengecekan secara pribadi, dan yang terakhir menambahkan private router pada react sehingga lebih optimal."
        }
    ]
    return(
        <div className="w-1/2 min-w-[800px] mx-auto py-10">
            <h1 className="text-5xl font-semibold">ABOUT</h1>
            <div>
                {desc.map(item => 
                    <div key={item.id} className="pt-10">
                        <h2 className="text-3xl font-medium">{item.title}</h2>
                        <p className="text-lg font-light text-justify py-5 text-[#909090]">{item.text}</p>
                    </div>)}
            </div>
            <h2 className="text-xl font-medium">Dibuat oleh mahasiswa ITPLN - Emil Setiawan</h2>
        </div>
    )
}

export default About