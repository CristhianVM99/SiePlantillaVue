import Api from './Api'

function getMenuAreasyCarreras(){
  return Api().get('/api/area')
}

function getMenuConvocatorias() {
  return Api().get('/api/Tipoconvocatorias')
}

function getMenuCursos() {
  return Api().get('/api/TipoCurso')
}

function getLinks() {
  return Api().get('/api/linksIntExtAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getInstitucion() {
  return Api().get('/api/InstitucionUPEA/'+import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

//Home View 

function getCarreras(){
  return Api().get('api/upeacarrera')
}

function getConvocatoriasAll(){
    return Api().get('/api/convocatoriasAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getConvocatoriasAllUPEA(){
  return Api().get('/api/convocatoriasAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}
function getConvocatoria(id){
  return Api().get('/api/convocatorias/'+id)
}

function getCursosAll(){
  return Api().get('/api/cursosAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}
function getCurso(id){
  return Api().get('/api/cursos/'+id)
}

function getServiciosAll(){
  return Api().get('/api/ServicioAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getServicio(id){
  return Api().get('/api/Servicio/' + id)
}

function getOfertasAll(){
  return Api().get('/api/OfertasAcademicasAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getOferta(id){
  return Api().get('/api/OfertasAcademicas/' +id)
}

function getPublicaciones(){
  return Api().get('/api/publicacionesAll/'+ import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getPublicacion(id){
  return Api().get('/api/publicaciones/'+ id)
}

function getGacetaAll(){
  return Api().get('/api/gacetaunivAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getGaceta(id){
  return Api().get('/api/gacetauniv/' + id)
}

function getEventos(){
  return Api().get('/api/eventoAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getEvento(id){
  return Api().get('/api/evento/' + id)
}

function getVideos(){
  return Api().get('/api/VideosAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getVideo(id){
  return Api().get('/api/Videos/' + id)
}

//Convocatorias
function getTipoConvocatoria(tipo_id){
  return Api().get('/api/Tipoconvocatorias/'+tipo_id)
}
//Cursos
function getTipoCurso(tipo_id){
  return Api().get('/api/TipoCurso/'+tipo_id)
}

export default {
  getMenuAreasyCarreras,
  getMenuConvocatorias,
  getMenuCursos,
  getLinks,
  getInstitucion,
  //Home View
  getCarreras,

  getConvocatoriasAll,
  getConvocatoria,
  getConvocatoriasAllUPEA,

  getCursosAll,
  getCurso,

  getServiciosAll,
  getServicio,

  getOfertasAll,
  getOferta,

  getPublicaciones,
  getPublicacion,
  
  getGacetaAll,
  getGaceta,

  getEventos,
  getEvento,

  getVideos,
  getVideo,
  //Convocatorias View
  getTipoConvocatoria,
  getTipoCurso 
}
