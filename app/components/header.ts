import { Component } from '@angular/core';

@Component({
    template: `
        <header class="cd-header">
            <h1>Education by Hackages</h1>
        </header>
        <main class="cd-main-content">
            <div class="cd-tab-filter-wrapper">
                <div class="cd-tab-filter">
                    <ul class="cd-filters">
                        <li class="placeholder"> 
                            <a data-type="all" href="#0">All</a> <!-- selected option on mobile -->
                        </li> 
                        <li class="filter"><a class="selected" href="#0" data-type="all">All</a></li>
                        <li class="filter" data-filter=".color-1"><a href="#0" data-type="color-1">Color 1</a></li>
                        <li class="filter" data-filter=".color-2"><a href="#0" data-type="color-2">Color 2</a></li>
                    </ul> <!-- cd-filters -->
                </div> <!-- cd-tab-filter -->
            </div> <!-- cd-tab-filter-wrapper -->
        </main>
    `,
})
class Header{
    title: string = "Hackages Program";
    constructor(title: string){
        this.title = title;
    }
}