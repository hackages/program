"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hackages-app',
            styleUrls: ['css/reset.css', 'css/style.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <main class=\"cd-main-content\">\n      <div class=\"cd-tab-filter-wrapper\">\n          <div class=\"cd-tab-filter\">\n              <ul class=\"cd-filters\">\n                  <li class=\"placeholder\"> \n                      <a data-type=\"all\" href=\"#0\"></a> <!-- selected option on mobile -->\n                  </li> \n                  <li class=\"filter\"><a class=\"selected\" href=\"#0\" data-type=\"all\">Workshops</a></li>\n                  <li class=\"filter\" data-filter=\".color-1\"><a href=\"#0\" data-type=\"color-1\">HackJam</a></li>\n                  <li class=\"filter\" data-filter=\".color-2\"><a href=\"#0\" data-type=\"color-2\">HackDay</a></li>\n                  <li class=\"filter\" data-filter=\".color-2\"><a href=\"#0\" data-type=\"color-2\">HackCamp</a></li>\n              </ul>\n          </div>\n      </div>\n\n      <section class=\"cd-gallery\">\n        <ul>\n          <li class=\"color-1 check1 radio2 option3\"><img src=\"img/img-1.jpg\" alt=\"Image 1\"></li>\n          <li class=\"color-2 check2 radio2 option2\"><img src=\"img/img-2.jpg\" alt=\"Image 2\"></li>\n          <li class=\"color-1 check3 radio3 option1\"><img src=\"img/img-3.jpg\" alt=\"Image 3\"></li>\n          <li class=\"color-1 check3 radio2 option4\"><img src=\"img/img-4.jpg\" alt=\"Image 4\"></li>\n          <li class=\"color-1 check1 radio3 option2\"><img src=\"img/img-5.jpg\" alt=\"Image 5\"></li>\n          <li class=\"color-2 check2 radio3 option3\"><img src=\"img/img-6.jpg\" alt=\"Image 6\"></li>\n          <li class=\"color-2 check2 radio2 option1\"><img src=\"img/img-7.jpg\" alt=\"Image 7\"></li>\n          <li class=\"color-1 check1 radio3 option4\"><img src=\"img/img-8.jpg\" alt=\"Image 8\"></li>\n          <li class=\"color-2 check1 radio2 option3\"><img src=\"img/img-9.jpg\" alt=\"Image 9\"></li>\n          <li class=\"color-1 check3 radio2 option4\"><img src=\"img/img-10.jpg\" alt=\"Image 10\"></li>\n          <li class=\"color-1 check3 radio3 option2\"><img src=\"img/img-11.jpg\" alt=\"Image 11\"></li>\n          <li class=\"color-2 check1 radio3 option1\"><img src=\"img/img-12.jpg\" alt=\"Image 12\"></li>\n        </ul>\n        <div class=\"cd-fail-message\">No results found</div>\n\t\t  </section>\n    </main>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map