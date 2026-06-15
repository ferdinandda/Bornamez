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
        'resena-murmullo': resolve(__dirname, 'resena/el-murmullo-de-los-estorninos.html'),
        'resena-crestas': resolve(__dirname, 'resena/entre-crestas-y-caidas.html'),
        'narrativa-verano': resolve(__dirname, 'narrativa/del-verano-al-otono-nueve-anos-atras.html'),
        'narrativa-carreta': resolve(__dirname, 'narrativa/la-carreta-las-fogatas.html'),
        'editorial-n1': resolve(__dirname, 'editorial/editorial-n1-una-forma-de-hablar-llano.html'),
        'editorial-n2': resolve(__dirname, 'editorial/editorial-n2-despues-de-las-formas.html'),
        'ensayo-contra-poesia': resolve(__dirname, 'ensayo/contra-la-poesia-contra-el-corazon.html'),
        'ensayo-belleza-vacio': resolve(__dirname, 'ensayo/sobre-la-belleza-del-vacio.html'),
        'ensayo-retratos-cardinales': resolve(__dirname, 'ensayo/retratos-cardinales.html'),
        'ensayo-teoria-inmortalidad': resolve(__dirname, 'ensayo/teoria-de-la-inmortalidad.html'),
        'poesia-aranguiz': resolve(__dirname, 'poesia/cinco-poemas-de-david-aranguiz.html'),
        'poesia-joaquin': resolve(__dirname, 'poesia/quisiera-flores-blancas-sobre-mis-brazos.html'),
        'poesia-tres': resolve(__dirname, 'poesia/tres-poemas-de-pantano.html'),
        'poesia-cuatro-contreras': resolve(__dirname, 'poesia/cuatro-poemas-de-patricio-contreras.html'),
        'poesia-desarma-drones': resolve(__dirname, 'poesia/desarma-drones.html'),
        'poesia-tarasco': resolve(__dirname, 'poesia/dos-poemas-de-tarasco.html'),
        'poesia-otras-ciudades': resolve(__dirname, 'poesia/otras-ciudades.html'),
        'poesia-terrones': resolve(__dirname, 'poesia/terrones-en-el-craneo.html'),
        'poesia-pterigion': resolve(__dirname, 'poesia/pterigion.html'),
        'poesia-lenticular': resolve(__dirname, 'poesia/lenticular.html'),
        'poesia-mardones': resolve(__dirname, 'poesia/tres-poemas-de-ignacio-mardones.html'),
        'narrativa-dos-de-cinco': resolve(__dirname, 'narrativa/dos-de-cinco.html'),
        'narrativa-solicitud': resolve(__dirname, 'narrativa/la-solicitud.html'),
        'narrativa-mujer-internet': resolve(__dirname, 'narrativa/una-mujer-conectada-a-internet.html'),
        'narrativa-cuidado-perro': resolve(__dirname, 'narrativa/cuidado-con-el-perro.html'),
        'resena-al-sur-invierno': resolve(__dirname, 'resena/al-sur-del-invierno-esta-la-nieve.html'),
        'resena-de-sol-a-sol': resolve(__dirname, 'resena/de-sol-a-sol.html'),
        'resena-migrar-artes': resolve(__dirname, 'resena/migrar-y-otras-artes.html'),
        'resena-pequeno-rito': resolve(__dirname, 'resena/un-pequeno-rito-para-mantenerse-con-vida.html'),
      }
    }
  }
})
