import './App.css'

export default function ImgItem({urls, alt_description, shuff, id}) {
  return (
    <div className='item'>
        <img src={urls.small} 
        id={id}
        alt={alt_description} 
        className='item__img' 
        onClick={shuff}
        />
    </div>
  )
}
