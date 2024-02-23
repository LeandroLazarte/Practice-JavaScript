// Reproductor de musica con Arrow Functions

const reproductor = {
    song: '',
    play: (id) => console.log(`Reproduciendo cancion con id: ${id}`),
    pause: (id) => console.log(`Pausando cancion con id: ${id}`),
    delete: (id) => console.log(`Borrando cancion con id: ${id}`),
    createPlaylist: (namePlaylist) => console.log(`Creando Playlist con el nombre: ${namePlaylist}`),
    playPlaylist: (namePlaylist) => console.log(`Reproduciendo Playlist con nombre: ${namePlaylist}`),

    set newSong(song) {
        this.song = song
        console.log(`Añadiendo cancion: ${song}`);
    },
    get getSong(){
        console.log(`Nombre cancion: ${this.song}`);
    }
}

// Añadir cancion
reproductor.newSong = 'N95 - Kendrik Lamar';
reproductor.getSong;
reproductor.newSong = 'Sneaky - 21 Savage';
reproductor.getSong;
// Reproducir
reproductor.play(10);
reproductor.play(20);
reproductor.play(30);
// Pausar
reproductor.pause(10);
reproductor.pause(20);
reproductor.pause(30);
//Borrar
reproductor.delete(10);
reproductor.delete(20);
reproductor.delete(30);
//CrearPlaylist
reproductor.createPlaylist('Cumbia');
reproductor.createPlaylist('Techno');
reproductor.createPlaylist('Reggae');
//ReproducirPlaylist
reproductor.playPlaylist('Cumbia');
reproductor.playPlaylist('Techno');
reproductor.playPlaylist('Reggae');
