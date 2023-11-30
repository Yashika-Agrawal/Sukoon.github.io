export function Music() {
  // Dummy data for music playlist
  const playlist = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" },
    { title: "Song 4", artist: "Artist 3" },
    { title: "Song 5", artist: "Artist 3" },
    { title: "Song 6", artist: "Artist 3" },
    // Add more songs as needed
  ];

  return (
    <div className="bg-purple-400 h-1/2 mt-5 rounded-t-lg p-5 overflow-auto shadow-2xl">
      <h1 className="text-white text-2xl font-bold mb-3">Music Playlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {playlist.map((song, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg flex items-center justify-between shadow-lg"
          >
            <div>
              <h2 className="text-purple-800 text-lg font-bold">
                {song.title}
              </h2>
              <p className="text-gray-500">{song.artist}</p>
            </div>
            {/* You can add play button, pause button, etc. as needed */}
            <button className="bg-purple-800 text-white px-3 py-1 rounded">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
