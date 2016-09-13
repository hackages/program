import { Component } from '@angular/core';

@Component({
    template: `
        <header class="cd-header">
            <h1>Education by Hackages</h1>
        </header>
    `,
})
class Header{
    title: string = "Hackages Program";
    constructor(title: string){
        this.title = title;
    }
}