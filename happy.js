// document.addEventListener("DOMContentLoaded", function() {
//   const playButtons = document.querySelectorAll(".play-btn");
//   playButtons.forEach(function(button) {
//       button.addEventListener("click", function() {
//           const audio = button.parentElement.nextElementSibling.querySelector('audio');
//           if (audio.paused) {
//               audio.play();
//               button.textContent = "Pause";
//           } else {
//               audio.pause();
//               button.textContent = "Play";
//           }
//       });
//   });
// });

// function appendSong(songName, audioSrc) {
//   const playlistContainer = document.querySelector('.playlist');
//   const songDiv = document.createElement('div');
//   songDiv.classList.add('song');

//   const songInfoDiv = document.createElement('div');
//   songInfoDiv.classList.add('song-info');

//   const songNameHeading = document.createElement('h2');
//   songNameHeading.textContent = songName;

//   const playButton = document.createElement('button');
//   playButton.classList.add('play-btn');
//   playButton.textContent = 'Play';

//   const audioElement = document.createElement('audio');
//   audioElement.src = audioSrc;

//   songInfoDiv.appendChild(songNameHeading);
//   songInfoDiv.appendChild(playButton);
//   songDiv.appendChild(songInfoDiv);
//   songDiv.appendChild(audioElement);

//   playlistContainer.appendChild(songDiv);

//   playButton.addEventListener('click', function() {
//       const audio = songDiv.querySelector('audio');
//       if (audio.paused) {
//           audio.play();
//           playButton.textContent = "Pause";
//       } else {
//           audio.pause();
//           playButton.textContent = "Play";
//       }
//   });
// }

// //Example usage to append a new song


// appendSong('lil boo thang', 'lbt.mp3');
// appendSong('permission to dance', 'ptd.mp3');
// appendSong('buddhu sa mann', 'bsm.mp3');

// let play_btn = document.querySelector(".playpause-track");

// function playpauseTrack() {
//     // Switch between playing and pausing
//     // depending on the current state
//     if (!isPlaying) playTrack();
//     else pauseTrack();
//   }
   
//   function playTrack() {
//     // Play the loaded track
//     curr_track.play();
//     isPlaying = true;
   
//     // Replace icon with the pause icon
//     playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
//   }
   
//   function pauseTrack() {
//     // Pause the loaded track
//     curr_track.pause();
//     isPlaying = false;
   
//     // Replace icon with the play icon
//     playpause_btn.innerHTML = '<i class="bx bxs-right-arrow"></i>';
//   }
