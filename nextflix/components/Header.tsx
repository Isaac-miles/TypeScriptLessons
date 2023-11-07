import Image from "next/image"


const Header = () => {
    const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image 
        src={imgUrl}
        alt="netflix"
        width={150}
        height={150}
        className="cursor-pointer object-contain"/>

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Movie</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
      </div>

      <div></div>
    </header>
  )
}

export default Header