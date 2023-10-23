import PropTypes from "prop-types";

export const DropdownPropTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
};
