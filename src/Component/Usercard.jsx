import PropTypes from "prop-types";
const userData=[
{
        name:"Siva",
        city:"Mannai",
        desc:"Front-End Developer",
        skills:["HTML","CSS","python","mysql","JavaScript"],
        online:true,
        profile:"images/img1.jpg",
    },
    {
        name:"Matheen",
        city:"Tanjore",
        desc:"Full stack developer",
        skills:["React","Python","Node","JavaScript","Mongo"],
        online:false,
        profile:"images/img2.jpeg",
    },
    {
        name:"Rizwan",
        city:"Dalmia",
        desc:"Designer",
        skills:["Adobe","Sketch","Figma ","CSS","HTML"],
        online:true,
        profile:"images/img3.jpeg",
    },
]
    


function User(props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
           <h6>Sills</h6>
           <ul>
            {
                props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))
            }
           </ul>
        </div>
    </div>
}
export const Usercard = () => {
  return (
    <>
    {userData.map((user,index) =>(
        <User 
        key={index}
        name={user.name}
        city={user.city}
        desc={user.desc}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
    ))}
  
  </>
     
);  
  
};

 User.PropTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
 }