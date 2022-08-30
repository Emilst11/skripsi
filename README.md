# Introduction
TextPlag merupakan sebuah aplikasi pengecekan plagiasi pada laporan kerja magang mahasiswa, terutama mahasiswa kampus Institut Teknologi PLN Jakarta Barat di program studi S1 Teknik Informatika. Aplikasi ini dibuat karena dapat ditemukan kasus tidak sedikit mahasiswa melakukan plagiasi pada penulisan laporan kerja magang, dan laporan kerja magang tersebut akan diserahkan pada jurusan sebagai syarat kelulusan pada mata kuliah magang dan syarat kelulusan pada program studi S1 Teknik Informatika di Institut Teknologi PLN, hal inilah yang menjadi alasan mengapa aplikasi ini dibuat dan dikembangkan. Aplikasi ini menggunakan metode Algoritma Rabin-Karp sebagai metode pengecekan plagiasi antar dokumen dan menggunakan Regex dalam mengotomasi pemotongan berkas yang diambil dari BAB 1 hingga BAB 5 saja

## Lingkupan
Pengecekan plagiarismenya sendiri berada pada lingkupan kelas yaitu pengecekan tugas individu siswa dalam lingkup kelas saja

## API
API flask url Post
<http://127.0.0.1:5000/api/>
route API = python > myapiapp.py

API Database
<http://127.0.0.1:8000/api/auth/>

route API = skripsiEmil > routes > api.php

## Figma
<https://www.figma.com/file/uAUOzqwvWXIhog6xH3V7GV/Skripsi?node-id=0%3A1>

## Must Install

In react
1. React-router-dom
2. axios

In python
1. NLTK
2. flask
3. CORS
4. zipfile
5. flask caching