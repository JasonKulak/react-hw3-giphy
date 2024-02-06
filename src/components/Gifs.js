

function Gifs(props) {
    console.log(props)
    return (
      <div>
        <h2>Here's your Gif!</h2>
        <img src={props.gifSrc} />
      </div>
    )
  }
  
  export default Gifs;