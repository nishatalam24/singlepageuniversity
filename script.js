import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return `
        <div class="wrapper">
        <div class="boxes">
        <div class="box1 box">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/PlbupGCBV6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <p style="color: aliceblue;">0 JavaScript Tutorial for Beginners </p>
    
    </div>
    
    <div class="box2 box">
    <iframe width="400" height="315" src="https://www.youtube.com/embed/POPLF-Qc0OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <p style="color: aliceblue;">1 Getting Started | JavaScript </p>
    </div>
    
    <div class="box3 box">
    <iframe width="400" height="315" src="https://www.youtube.com/embed/BxZKLKfjaRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <p style="color: aliceblue;">2 NodeJS, VS Code Installation</p>
    </div>
    
    <div class="box4 box">
        
    <iframe width="400" height="315" src="https://www.youtube.com/embed/TOkU5HxES1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        <p style="color: aliceblue;">3 Variables in JavaScript</p>
    </div>
    <div class="box5 box">
        
    <iframe width="400" height="315" src="https://www.youtube.com/embed/Wsy7nhFnfbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        <p style="color: aliceblue;">4 Constants in JavaScript</p>
    </div>
    <div class="box6 box">
        
    <iframe width="400" height="315" src="https://www.youtube.com/embed/nCwQY8inRvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    
        <p style="color: aliceblue;">5 Data Types in JavaScript - 1 </p>
    </div>
    
        </div>
    </div>
        `;
    }
}
