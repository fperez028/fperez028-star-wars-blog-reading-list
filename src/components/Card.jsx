import PropTypes from "prop-types";

export const Card = ({
  title,
  imageUrl,
  subtitleLines,
  onLearnMore,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div className="card mx-2" style={{ width: "18rem", flex: "0 0 auto" }}>
      <img
        src={imageUrl || "https://c4.wallpaperflare.com/wallpaper/317/787/611/movies-star-wars-collage-wallpaper-preview.jpg"}
        className="card-img-top"
        alt={title}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "200px" }} >
        <h5 className="card-title">{title}</h5>
        <div>
          {subtitleLines?.map((line, index) => (
            <p key={index} className="card-text mb-1">{line}</p>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-primary" onClick={onLearnMore}>
            Learn more!
          </button>
          <button
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={onToggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <i className="fa fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  subtitleLines: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  onLearnMore: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};
