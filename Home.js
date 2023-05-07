import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <div class="wrapper">
        <div class="boxes">
        <div class="box1 box">
        <iframe width="400" height="315" src="https://www.youtube.com/embed/4DFwbcK2QE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style="color: aliceblue;">Lecture 1 about | What is World Wide Web </p>
    
    </div>
    
    <div class="box2 box">
        <iframe width="400" height="315"  src="https://www.youtube.com/embed/BDuMJnfXB8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style="color: aliceblue;">Lecture 2 about | History of world Wide web </p>
    </div>
    
    <div class="box3 box">
        <iframe width="400" height="315"  src="https://www.youtube.com/embed/HmqqhRB_YsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style="color: aliceblue;">Lecture 3 about | Client and server</p>
    </div>
    
    <div class="box4 box">
        
        <iframe width="400" height="315" src="https://www.youtube.com/embed/-EgSzJ_rNWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        <p style="color: aliceblue;">Lecture 4 about | Lecture 4 (learn through coding quiz)</p>
    </div>
    <div class="box5 box">
        
        <iframe width="400" height="315" src="https://www.youtube.com/embed/jYuFjpd2jlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
        <p style="color: aliceblue;">Lecture 5 about | Object Oriented Programming Java</p>
    </div>
    <div class="box6 box">
        
        <iframe width="400" height="315" src="https://www.youtube.com/embed/VciI3IK5maQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    
        <p style="color: aliceblue;">Lecture 6 about | HTML form</p>
    </div>
    
        </div>
    </div>
    
    
            
        `;
    }
}