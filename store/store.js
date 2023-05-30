import { defineStore } from 'pinia'

export const datosStore = defineStore('datosStore',{
    state: ()=>({
        url_api: process.env.VUE_APP_ROOT_API,
        institucion_id: process.env.VUE_APP_ID_INSTITUCION,
        carrera_id: process.env.VUE_APP_ID_CARRERA,
        MenuConvocatorias: [],
        MenuCursos: [],
        MenuAreasyCarreras:[],
        Links: [],
        Institucion: {},    
    })
})