# vue-test-code

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Expected Output :
![expected](./src/assets/Expected.png)

# Error :
1. beberapa import tidak digunakan
2. mapstate tidak digunakan
3. mapactions tidak digunakan
4. beberapa typo variabel di store.js seperti variabel list
5. getCountData dieksekusi sebelum data terisi

# Langkah yang dilakukan :
1. Mengcomment import { INCREMENT } from "../mutation-types";
2. Menambahkan mapState,
3. Menambahkan mapActions,
4. Fix typo lists di store.js
5. Mengcomment import { SET_DATA } from "./mutation-types";
6. mengganti mutations menjadi setLists
7. menambahkan kondisional pada getCountData
7. menginstall bootstrap
8. menggunakan card component
9. menggunakan grid system
10. Mengubah ukuran font dan warna menggunakan css