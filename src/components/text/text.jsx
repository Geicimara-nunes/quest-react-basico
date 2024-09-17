import PropTypes from "prop-types";

const Text = ({children,color}) => {
    return (
        <p style={{ color: color }}>{children.toUpperCase()}</p>
    )
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
};

export default Text

