import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoaderFunction } from "./Loader";
import PropTypes  from "prop-types";



export const GifGrid = ({category}) => {
const categoryUpper = category.toUpperCase();
const {images,isLoading} = useFetchGifs(category);


  return (
    <div className="mt-5">
      
      <h2 className="textTitles d-flex align-item-center"><i className="fi fi-ss-bullet"></i>{categoryUpper}</h2>
      {
        isLoading && (<LoaderFunction/>)
      }
      
      <div className="card-grid">
      {images.map(({title,url,id}) => 
        <GifItem key={id} 
        title={title}
        url={url}
        />
      )}
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category:  PropTypes.string.isRequired,
}