import PropTypes from "prop-types";

export const Card = ({ title, subtitleLines, onClick, isFavorite, onToggleFavorite }) => {
    return (
        <div
            className="card mx-2"
            style={{ width: "18rem", flex: "0 0 auto", cursor: "pointer" }}
            onClick={onClick}
        >
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{title}</h5>
                    {onToggleFavorite && (
                        <button
                            className="btn btn-sm btn-outline-warning"
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleFavorite();
                            }}
                        >
                            {isFavorite ? "★" : "☆"}
                        </button>
                    )}
                </div>

                {subtitleLines.map((line, index) => (
                    <p className="card-text mb-1 text-muted" key={index}>
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitleLines: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool,
    onToggleFavorite: PropTypes.func
};
