// ** Filter Achievements */
// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const achievementItems = document.querySelectorAll('.achievement-item');

//   filterButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const filter = button.getAttribute('data-filter');
//       filterAchievements(filter);
//     });
//   });

//   function filterAchievements(filter) {
//     achievementItems.forEach((item) => {
//       const year = item.getAttribute('data-year');
//       const type = item.getAttribute('data-type');

//       if (filter === 'all' || filter === year || filter === type) {
//         item.style.opacity = '0';
//         setTimeout(() => {
//           item.style.display = 'block';
//           item.style.opacity = '1';
//         }, 300);
//       } else {
//         item.style.opacity = '0';
//         setTimeout(() => {
//           item.style.display = 'none';
//         }, 300);
//       }
//     });
//   }
// });

//** Flip Achievement Card */
document.querySelectorAll('.achievement-item').forEach((item) => {
  item.addEventListener('click', function () {
    this.querySelector('.card').classList.toggle('flipped');
  });
});
