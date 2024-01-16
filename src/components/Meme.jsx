import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/23ls.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  React.useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMeme();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="container2">
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="Enter bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button id="btn" onClick={getMemeImage}>
        Change the meme image
      </button>
      <div className="image">
        <img
          src={meme.randomImage}
          alt="This is the image of the meme"
          className="memeImage"
        />
        <h2 className="meme--Text topText">{meme.topText}</h2>
        <h2 className="meme--Text bottomText">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
