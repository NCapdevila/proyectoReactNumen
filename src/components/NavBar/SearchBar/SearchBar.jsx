import './SearchBar.style.css'
const SearchBar = () =>{
    return (
        <div className="searchNavBar__container mobilesearch">
        <svg
          width="25"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.934 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.502 16.443L21.058 21"
            stroke="#989BA0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <input
          className="inputNavBar"
          type="text"
          placeholder="Buscar productos..."
        />
      </div>
    )
}

export default SearchBar;