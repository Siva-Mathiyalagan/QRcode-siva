import PropTypes from "prop-types";
export const new = (props) => {
  return (
    <div>{props.children}</div>
  )
}
new.PropTypes={
    children:PropTypes.array,
}