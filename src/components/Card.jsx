import PropTypes from "prop-types";

export const Card = ({ title, subtitleLines, onClick }) => {
    return (
        <div className="card mx-2" style={{ width: "18rem", flex: "0 0 auto", cursor: "pointer" }} onClick={onClick}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
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
    onClick: PropTypes.func.isRequired
};