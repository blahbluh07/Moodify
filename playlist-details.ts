// Sample Songs Data for Each Playlist
const songsData = {
    "chill-vibes": [
        { title: "Ocean Waves", artist: "Calm Beats", src: "songs/ocean-waves.mp3" },
        { title: "Soft Piano", artist: "Relax Sounds", src: "songs/soft-piano.mp3" }
    ],
    "workout-beats": [
        { title: "Pump It Up", artist: "Energy Vibes", src: "songs/pump-it-up.mp3" },
        { title: "Run Fast", artist: "Fit Beats", src: "songs/run-fast.mp3" }
    ],
    "party-hits": [
        { title: "Club Anthem", artist: "DJ Party", src: "songs/club-anthem.mp3" },
        { title: "Dance Tonight", artist: "Pop Star", src: "songs/dance-tonight.mp3" }
    ],
    "lofi-beats": [
        { title: "Late Night Chill", artist: "LoFi Vibes", src: "songs/late-night.mp3" },
        { title: "Deep Focus", artist: "Study Beats", src: "songs/deep-focus.mp3" }
    ]
};

// Function to Load Playlist Songs
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
                <button onclick="playSong('${song.src}')">Play</button>
            `;

            songListContainer.appendChild(songItem);
        });
    } else {
        playlistTitle.textContent = "Playlist Not Found";
        songListContainer.innerHTML = "<p>No songs available for this playlist.</p>";
    }
}

// Function to Play Song
function playSong(songSrc) {
    alert(`Now Playing: ${songSrc}`);
    const audio = new Audio(songSrc);
    audio.play();
}

// Load Songs When Page Loads
document.addEventListener("DOMContentLoaded", loadPlaylistSongs);
