import GetNewColor from "./GetNewColor";

const Content = () => {
  <GetNewColor/>

  return (
    <div className="content">
      <span id="hex">#9980FA</span>

      <button onClick={GetNewColor}>Get Random Color</button>
    </div>
  );
}

export default Content;
