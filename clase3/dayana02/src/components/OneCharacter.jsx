import image from "../assets/image.jpeg"


const OneCharacter = ({item}) => {

    const imgCharacter  = item.image ? item.image:image;
  
    return (
    <article>
        <img src={imgCharacter} alt="Character" />
        <h2>Actor / Actress: {item.actor}</h2>
        <h3> Name of the character: {item.name}</h3>
    </article>
  )
}

export default OneCharacter