import './share.css'

function Share() {
    return (
      <div className='share-inner-container'>
          <a href="https://www.facebook.com/sharer/sharer.php?u=[url]">
            <img src="/img/Facebook.png" alt="Facebook" className="icons"/>
          </a>
          <a href="https://twitter.com/intent/tweet?text=[text]&url=[url]&hashtags=[hashtag]">
          <img src="/img/Twitter Circled.png" alt="Twitter" className="icons"/>
          </a>
          {/*Texto : escola informática i disseny
  Hashtag : dissenyweb */}
          <a href="https://api.whatsapp.com/send?text=[textyurl]">
          <img src="/img/WhatsApp.png" alt="WhatsApp" className="icons"/>
          </a>
          {/*<a href="https://api.whatsapp.com/send?text=escola%20inform%C3%A1tica%20i%20disseny%20https://espai.es">Compartir en Whatsapp</a> */}
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=[url]">
          <img src="/img/Linkedin Circled.png" alt="Linkedin" className="icons"/>
          </a>
      </div>
    )
  }
  
  export default Share