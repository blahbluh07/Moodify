const songsData = {
    "chill-vibes": [
        { title: "Ocean Waves", artist: "Calm Beats", src: "songs/ocean-waves.mp3" },
        { title: "Soft Piano", artist: "Relax Sounds", src: "songs/soft-piano.mp3" }
    ],
    "workout-beats": [
        { title: "Pump It Up", artist: "Energy Vibes", src: "songs/pump-it-up.mp3" },
        { title: "Run Fast", artist: "Fit Beats", src: "songs/run-fast.mp3" }
    ]
};

function loadPlaylistSongs() {
    const urlParams = new URLSearchParams(window.location.search);
    const playlistId = urlParams.get('id');

    const playlistTitle = document.getElementById("playlist-title");
    const songListContainer = document.getElementById("song-list");

    if (songsData[playlistId]) {
        playlistTitle.textContent = playlistId.replace("-", " ").toUpperCase();
        songListContainer.innerHTML = "";

        songsData[playlistId].forEach(song => {
            const songItem = document.createElement("div");
            songItem.classList.add("song-item");

            songItem.innerHTML = `
                <p><strong>${song.title}</strong> - ${song.artist}</p>
                <button class="play-btn" onclick="playSong('${song.src}', '${song.title}')">▶</button>
            `;

            songListContainer.appendChild(songItem);
        });
    } else {
        playlistTitle.textContent = "Playlist Not Found";
        songListContainer.innerHTML = "<p>No songs available.</p>";
    }
}

function playSong(songSrc, songTitle) {
    document.getElementById("now-playing").textContent = `🎵 Now Playing: ${songTitle}`;
    const audio = new Audio(songSrc);
    audio.play();
}

document.addEventListener("DOMContentLoaded", loadPlaylistSongs);
