import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isMarried</th>
            <td>{props.ismarried ? "is married" : "no marriage"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  ismarried: PropTypes.bool,
};
Student.defultProps ={
    name:"no name",
    age:0,
    ismarried:false,
}
