import Image from "next/image"


const Header = () => {
    const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href
  return (
    <header>
      <div>
        <Image 
        src={imgUrl}
        alt="netflix"
        width={150}
        height={150}
        className="cursor-pointer object-contain"/>
      </div>
    </header>
  )
}

export default Header