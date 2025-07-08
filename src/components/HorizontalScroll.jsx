import PropTypes from "prop-types";

export const HorizontalScroll = ({ title, children }) => {
    return (
        <div className="mb-5">
            <h2>{title}</h2>
            <div className="d-flex overflow-auto py-2">
                {children}
            </div>
        </div>
    );
};

HorizontalScroll.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};