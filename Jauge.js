export default class Jauge extends HTMLElement {
  constructor() {
    super();
    this.create();
    this.setStyle();
    this.percent();
  }

  create() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.shadow.append(this.container);
    this.stylec = document.createElement("style");
    this.cercle = document.createElement("div");
    this.cercle.classList.add("jauge");
    this.progress = document.createElement("div");
    this.progress.classList.add("progress");
    this.tper = document.createElement("span");
    this.container.append(this.tper);
    this.cercle.append(this.progress);
    this.input = document.createElement("input");
    this.input.type = "number";
    this.container.append(this.cercle);
    this.container.append(this.input);
    this.shadow.append(this.stylec);
  }
  setStyle() {
    this.stylec.textContent =
      /* CSS */
      `
    :host{
        
    }
    .container{
        position: relative;
       
        height: 400px;
        width: 400px; 
    }
    input{
        position:absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .jauge{
        border: solid 2px black;
        position: relative;
        margin: auto;
        margin-top:150px;
        width:80%;
        height:10%;
        background-color: white;
        border-radius: 50px;
        overflow: hidden;
    
    }
    .progress {
        position:absolute;
        // transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        transition: width 1s linear
    }
    .container span{
        z-index: 100000;
        position:absolute;
        top: 42.5%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.2rem;
        margin:auto;
    }
    
    `;
    this.style.height = "100vh";
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
    console.log(this.stylec);
  }
  percent() {
    this.input.addEventListener("input", () => {
      this.inval = this.input.value;
      if (this.inval > 100) {
        this.progress.style.width = `100%`;
      } else if (this.inval < 0) {
        this.progress.style.width = `0%`;
      } else {
        this.progress.style.width = `${this.inval}%`;
      }
      this.tper.textContent = this.progress.style.width;
    });
  }
}
customElements.define("jauge-charge", Jauge);
