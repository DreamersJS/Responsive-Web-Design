import './style.css'
import { setUploadButton } from './upload'

document.querySelector('#app').innerHTML = `
  <div>

  <div>
    <input type="file" id="imageUpload" accept="image/*">
    <button id="uploadButton">Upload</button>
  </div>


    <div id="gallery">
    
    </div>
  </div>
`

setUploadButton(document.querySelector('#uploadButton'))
