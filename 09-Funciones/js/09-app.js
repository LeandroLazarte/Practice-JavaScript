// Reproductor de musica

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con id : ${id}`);
    },
    pausar: function (id) {
        console.log(`Pausando cancion con id: ${id}`);
    },
    borrar: function (id) {
        console.log(`Borrando cancion con id: ${id}`);
    },
    crearPlaylist: function (namePlaylist) {
        console.log(`Playlist ${namePlaylist} creada exitosamente` );
    },
    reproducirPlaylist: function (namePlaylist) {
        console.log(`Reproduciendo Playlist ${namePlaylist}`);
    }
}

// Reproducir
reproductor.reproducir(10);
reproductor.reproducir(20);
reproductor.reproducir(30);
// Pausar
reproductor.pausar(10);
reproductor.pausar(20);
reproductor.pausar(30);
//Borrar
reproductor.borrar(10);
reproductor.borrar(20);
reproductor.borrar(30);
//CrearPlaylist
reproductor.crearPlaylist('Cumbia');
reproductor.crearPlaylist('Techno');
reproductor.crearPlaylist('Reggae');
//ReproducirPlaylist
reproductor.reproducirPlaylist('Cumbia');
reproductor.reproducirPlaylist('Techno');
reproductor.reproducirPlaylist('Reggae');
