import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <div class="wrapper">
        <div class="boxes">
        <div class="box1 box">
        <iframe width="400" height="315"" src="https://www.youtube.com/embed/qKoajPPWpmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <p style="color: aliceblue;">
        01 - Introduction to CSS</p>
    
    </div>
    
    <div class="box2 box">
    <iframe width="400" height="315"" src="https://www.youtube.com/embed/UO0ZPL8yMpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <p style="color: aliceblue;">02 - Changing font type, color, and size</p>
    </div>
    
    <div class="box3 box">
    <iframe width="400" height="315"" src="https://www.youtube.com/embed/JT0gyzbpD2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        <p style="color: aliceblue;">03 - Multiple selectors </p>
    </div>
    
    <div class="box4 box">
    <iframe width="400" height="315"" src="https://www.youtube.com/embed/hCoMjvtsyPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style="color: aliceblue;">04 - Add a line to header and border property</p>
    </div>
    <div class="box5 box">
        
    <iframe width="400" height="315"" src="https://www.youtube.com/embed/Bj2ZCfDPP2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        <p style="color: aliceblue;">05 - Inheritance and overriding</p>
    </div>
    <div class="box6 box">
        
    <iframe width="400" height="315"" src="https://www.youtube.com/embed/u4dLB9NP3IA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    
        <p style="color: aliceblue;">06 - Using Classes in CSS</p>
    </div>
    
        </div>
    </div>
        `;
    }
}