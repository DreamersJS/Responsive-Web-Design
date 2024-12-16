import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>

    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  <div class="card">
    <input type="file" id="imageUpload" accept="image/*">
    <button id="uploadButton">Upload</button>
  </div>


    <div id="gallery">
    
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
setUploadButton(document.querySelector('#uploadButton'))
