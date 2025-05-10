let getSongByTheirDuration = (songs, duration) => {
  return songs.filter(song => song.duration >= duration);
}

export { getSongByTheirDuration };