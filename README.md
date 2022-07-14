# Introduction
Repository ini adalah project skripsi saya yang mana pada project ini saya membuat aplikasi pengecekan plagiarisme menggunakan algoritma rabin karp dan akan diterapkan pada platform website

## Lingkupan
Pengecekan plagiarismenya sendiri berada pada lingkupan kelas yaitu pengecekan tugas individu siswa dalam lingkup kelas saja

## API
API flask url Post
<http://127.0.0.1:5000/api/uploader>

## Figma
<https://www.figma.com/file/uAUOzqwvWXIhog6xH3V7GV/Skripsi?node-id=0%3A1>

## Updates
1. Frontend konek, backend konek
2. React sudah berjalan

## Next Objectives
1. Return json dengan format dibawah ini
    record: [
        {
            iteration: 1,
            result: [
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                },
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                },
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                }
            ]
        },
        {
            iteration: 2,
            result: [
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                },
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                },
                {
                    data1: abcdefgh,
                    data2, absedaada,
                    presentase: 50
                }
            ]
        }
    ]