const displayCard = (data, div) => {
  data.every((set) => {
    if (set._id > 31) {
      return false;
    }
    if (
      set._id === 14 ||
      set._id === 16 ||
      set._id === 18 ||
      set._id === 24 ||
      set._id === 31 ||
      set._id === 34
    ) {
      set.tvShows = set.films[0];
    } else if (set._id === 13 || set._id === 23) {
      set.tvShows = set.videoGames;
    } else if (set._id === 11) {
      set.tvShows = set.parkAttractions;
    } else if (set._id === 6) {
      set.tvShows = set.name;
    }

    console.log(set.tvShows);
    div.innerHTML += `<div
    class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
    <div class="icon-box">
      <img class="image-container"
        src="${set.imageUrl}"
        alt="${set.name}"/>
      <h4 class="title"><a href="">${set.name}</a></h4>
      <p class="description">${set.tvShows}</p>
      <div class="likes"><p>${
        137 - set._id
      } likes</p><i class="bx bx-heart"></i></div>
      <div class="text-center mt-3">
        <a href="#" class="comments text-center">Comments</a></div>
    </div>
  </div>`;
    return true;
  });
};

export default displayCard;
