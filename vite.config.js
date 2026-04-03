import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        editorial: resolve(__dirname, 'editorial/index.html'),
        resena: resolve(__dirname, 'resena/index.html'),
        poesia: resolve(__dirname, 'poesia/index.html'),
        narrativa: resolve(__dirname, 'narrativa/index.html'),
        ensayo: resolve(__dirname, 'ensayo/index.html'),
        convocatoria: resolve(__dirname, 'convocatoria/index.html'),
        // Artículos
        'narrativa-calle': resolve(__dirname, 'narrativa/calle-florida-esquina-viamonte.html'),
        'narrativa-eco': resolve(__dirname, 'narrativa/el-eco-de-las-palabras-mudas.html'),
        'ensayo-arquitecturas': resolve(__dirname, 'ensayo/arquitecturas-del-deseo.html'),
        'ensayo-ceniza': resolve(__dirname, 'ensayo/ceniza-digital-en-urna-digital.html'),
        'ensayo-cielos': resolve(__dirname, 'ensayo/cielos-compartidos.html'),
        'ensayo-futuro': resolve(__dirname, 'ensayo/el-futuro-como-advertencia.html'),
        'poesia-dos': resolve(__dirname, 'poesia/dos-imagenes-sobre-mi-padre.html'),
        'resena-cine': resolve(__dirname, 'resena/cine-y-melancolia.html'),
        'resena-petiso': resolve(__dirname, 'resena/el-que-aqui-reposa-fue-criminal-y-llego-a-ser-godino.html'),
      }
    }
  }
})
