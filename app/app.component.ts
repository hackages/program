import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'hackages-app',
  styleUrls: ['css/reset.css', 'css/style.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <main class="cd-main-content">
      <div class="cd-tab-filter-wrapper">
          <div class="cd-tab-filter">
              <ul class="cd-filters">
                  <li class="placeholder"> 
                      <a data-type="all" href="#0"></a> <!-- selected option on mobile -->
                  </li> 
                  <li class="filter"><a class="selected" href="#0" data-type="all">Workshops</a></li>
                  <li class="filter" data-filter=".color-1"><a href="#0" data-type="color-1">HackJam</a></li>
                  <li class="filter" data-filter=".color-2"><a href="#0" data-type="color-2">HackDay</a></li>
                  <li class="filter" data-filter=".color-2"><a href="#0" data-type="color-2">HackCamp</a></li>
              </ul>
          </div>
      </div>

      <section class="cd-gallery">
        <ul>
          <li class="color-1 check1 radio2 option3"><img src="img/img-1.jpg" alt="Image 1"></li>
          <li class="color-2 check2 radio2 option2"><img src="img/img-2.jpg" alt="Image 2"></li>
          <li class="color-1 check3 radio3 option1"><img src="img/img-3.jpg" alt="Image 3"></li>
          <li class="color-1 check3 radio2 option4"><img src="img/img-4.jpg" alt="Image 4"></li>
          <li class="color-1 check1 radio3 option2"><img src="img/img-5.jpg" alt="Image 5"></li>
          <li class="color-2 check2 radio3 option3"><img src="img/img-6.jpg" alt="Image 6"></li>
          <li class="color-2 check2 radio2 option1"><img src="img/img-7.jpg" alt="Image 7"></li>
          <li class="color-1 check1 radio3 option4"><img src="img/img-8.jpg" alt="Image 8"></li>
          <li class="color-2 check1 radio2 option3"><img src="img/img-9.jpg" alt="Image 9"></li>
          <li class="color-1 check3 radio2 option4"><img src="img/img-10.jpg" alt="Image 10"></li>
          <li class="color-1 check3 radio3 option2"><img src="img/img-11.jpg" alt="Image 11"></li>
          <li class="color-2 check1 radio3 option1"><img src="img/img-12.jpg" alt="Image 12"></li>
        </ul>
        <div class="cd-fail-message">No results found</div>
		  </section>
    </main>
  `
})
export class AppComponent { }
