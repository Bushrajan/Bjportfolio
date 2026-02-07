const ThreeDBox = () => {
  return (
    <div>
      <div className="container">
  <div className="cube">
    <div className="cube__face cube-face--bottom shadow"></div>
    <div className="cube__face cube-face--left">
      <img src="/react.png" alt="react" />
    </div>
    <div className="cube__face cube-face--front">
      <img src="/nodejs.png" alt="Node JS"/>
    </div>
    <div className="cube__face cube-face--back">
      <img src="/expressjs.png" alt="Java"/>
    </div>
    <div className="cube__face cube-face--right">
     <img src="/mongodb.png" alt="Sharepoint"/>
    </div>
    <div className="cube__face cube-face--top">
      <img src="/css.png" alt="CSharp"/>
    </div>
    <div className="cube__face cube-face--bottom">
      <img src="/html.png" alt="Node JS"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default ThreeDBox