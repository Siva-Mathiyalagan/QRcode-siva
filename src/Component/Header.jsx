

export const Header = () => {
  let customCSS = "code";
  const islogin =true;
  const greet =islogin ? <p>vanakam da mapla</p> : <p>moodittu po da mapla</p>
  const items =["efuo","siva","majabha","mass pah nee"];
  return <>
  <div>
    <h1 className="banner">tutor</h1>
    <p className={customCSS} style={{fontSize:"20px"}}>eyfudbshjiu  </p>
    {
      greet
    }
    <ul>

      {items.map((item,index) => (<li key={index}>{item}</li>))}
    </ul>
  </div>
  </>;
};
