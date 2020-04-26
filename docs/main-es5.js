function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _version_selector_version_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./version-selector/version-selector.component */
    "./src/app/version-selector/version-selector.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _cost_calculator_cost_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cost-calculator/cost-calculator.component */
    "./src/app/cost-calculator/cost-calculator.component.ts");

    function AppComponent_app_cost_calculator_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cost-calculator", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("version", ctx_r0.version);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Axis & Allies Cost Calculator';
        this.version = null;
      }

      _createClass(AppComponent, [{
        key: "onVersionChange",
        value: function onVersionChange(newVersion) {
          this.version = newVersion;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [[1, "body"], [3, "changedVersion"], [3, "version", 4, "ngIf"], [3, "version"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-version-selector", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedVersion", function AppComponent_Template_app_version_selector_changedVersion_2_listener($event) {
            return ctx.onVersionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_cost_calculator_3_Template, 1, 1, "app-cost-calculator", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.version);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _version_selector_version_selector_component__WEBPACK_IMPORTED_MODULE_2__["VersionSelectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _cost_calculator_cost_calculator_component__WEBPACK_IMPORTED_MODULE_5__["CostCalculatorComponent"]],
      styles: ["div.body[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    div.body[_ngcontent-%COMP%] {\r\n        width: 584px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    div.body[_ngcontent-%COMP%] {\r\n        width: 350px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJvZHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpdi5ib2R5IHtcclxuICAgICAgICB3aWR0aDogNTg0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBkaXYuYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _version_selector_version_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./version-selector/version-selector.component */
    "./src/app/version-selector/version-selector.component.ts");
    /* harmony import */


    var _cost_calculator_cost_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cost-calculator/cost-calculator.component */
    "./src/app/cost-calculator/cost-calculator.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/item/item.component.ts");
    /* harmony import */


    var _item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-attribute/item-attribute.component */
    "./src/app/item-attribute/item-attribute.component.ts");
    /* harmony import */


    var _item_count_item_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./item-count/item-count.component */
    "./src/app/item-count/item-count.component.ts");
    /* harmony import */


    var _total_total_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./total/total.component */
    "./src/app/total/total.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _version_selector_version_selector_component__WEBPACK_IMPORTED_MODULE_4__["VersionSelectorComponent"], _cost_calculator_cost_calculator_component__WEBPACK_IMPORTED_MODULE_5__["CostCalculatorComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"], _item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_7__["ItemAttributeComponent"], _item_count_item_count_component__WEBPACK_IMPORTED_MODULE_8__["ItemCountComponent"], _total_total_component__WEBPACK_IMPORTED_MODULE_9__["TotalComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _version_selector_version_selector_component__WEBPACK_IMPORTED_MODULE_4__["VersionSelectorComponent"], _cost_calculator_cost_calculator_component__WEBPACK_IMPORTED_MODULE_5__["CostCalculatorComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"], _item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_7__["ItemAttributeComponent"], _item_count_item_count_component__WEBPACK_IMPORTED_MODULE_8__["ItemCountComponent"], _total_total_component__WEBPACK_IMPORTED_MODULE_9__["TotalComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cost-calculator/cost-calculator.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/cost-calculator/cost-calculator.component.ts ***!
    \**************************************************************/

  /*! exports provided: CostCalculatorComponent */

  /***/
  function srcAppCostCalculatorCostCalculatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CostCalculatorComponent", function () {
      return CostCalculatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../unit.service */
    "./src/app/unit.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _total_total_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../total/total.component */
    "./src/app/total/total.component.ts");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/item/item.component.ts");

    function CostCalculatorComponent_app_item_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-item", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedSubtotal", function CostCalculatorComponent_app_item_0_Template_app_item_changedSubtotal_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSubtotalChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var unit_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unit", unit_r1);
      }
    }

    var CostCalculatorComponent = /*#__PURE__*/function () {
      function CostCalculatorComponent(unitService) {
        _classCallCheck(this, CostCalculatorComponent);

        this.unitService = unitService;
        this.total = 0;
      }

      _createClass(CostCalculatorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.units = this.unitService.getUnits(this.version);
        }
      }, {
        key: "onSubtotalChange",
        value: function onSubtotalChange(change) {
          this.total = this.total - change.old + change.current;
        }
      }]);

      return CostCalculatorComponent;
    }();

    CostCalculatorComponent.ɵfac = function CostCalculatorComponent_Factory(t) {
      return new (t || CostCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_service__WEBPACK_IMPORTED_MODULE_1__["UnitService"]));
    };

    CostCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CostCalculatorComponent,
      selectors: [["app-cost-calculator"]],
      inputs: {
        version: "version"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [[3, "unit", "changedSubtotal", 4, "ngFor", "ngForOf"], [3, "total"], [3, "unit", "changedSubtotal"]],
      template: function CostCalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CostCalculatorComponent_app_item_0_Template, 1, 1, "app-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-total", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.units);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _total_total_component__WEBPACK_IMPORTED_MODULE_3__["TotalComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvc3QtY2FsY3VsYXRvci9jb3N0LWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostCalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cost-calculator',
          templateUrl: './cost-calculator.component.html',
          styleUrls: ['./cost-calculator.component.css']
        }]
      }], function () {
        return [{
          type: _unit_service__WEBPACK_IMPORTED_MODULE_1__["UnitService"]
        }];
      }, {
        version: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 6,
      vars: 0,
      consts: [["href", "https://fonts.google.com/specimen/Bebas+Neue"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Copyright \xA9 2020 Brendan Lestander ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bebas Neue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " font by Ryoichi Tsunekawa\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 80%\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogODAlXHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "dark-border"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Axis & Allies Cost Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/item-attribute/item-attribute.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/item-attribute/item-attribute.component.ts ***!
    \************************************************************/

  /*! exports provided: ItemAttributeComponent */

  /***/
  function srcAppItemAttributeItemAttributeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemAttributeComponent", function () {
      return ItemAttributeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ItemAttributeComponent = /*#__PURE__*/function () {
      function ItemAttributeComponent() {
        _classCallCheck(this, ItemAttributeComponent);
      }

      _createClass(ItemAttributeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemAttributeComponent;
    }();

    ItemAttributeComponent.ɵfac = function ItemAttributeComponent_Factory(t) {
      return new (t || ItemAttributeComponent)();
    };

    ItemAttributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemAttributeComponent,
      selectors: [["app-item-attribute"]],
      inputs: {
        name: "name",
        value: "value"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "item-attribute", "light-border"]],
      template: function ItemAttributeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
        }
      },
      styles: [".item-attribute[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 50px;\r\n    flex-grow: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1hdHRyaWJ1dGUvaXRlbS1hdHRyaWJ1dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWF0dHJpYnV0ZS9pdGVtLWF0dHJpYnV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYXR0cmlidXRlIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemAttributeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-attribute',
          templateUrl: './item-attribute.component.html',
          styleUrls: ['./item-attribute.component.css']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/item-count/item-count.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/item-count/item-count.component.ts ***!
    \****************************************************/

  /*! exports provided: ItemCountComponent */

  /***/
  function srcAppItemCountItemCountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemCountComponent", function () {
      return ItemCountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ItemCountComponent = /*#__PURE__*/function () {
      function ItemCountComponent() {
        _classCallCheck(this, ItemCountComponent);

        this.changedCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
      }

      _createClass(ItemCountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countControl.setValue(0);
        }
      }]);

      return ItemCountComponent;
    }();

    ItemCountComponent.ɵfac = function ItemCountComponent_Factory(t) {
      return new (t || ItemCountComponent)();
    };

    ItemCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemCountComponent,
      selectors: [["app-item-count"]],
      outputs: {
        changedCount: "changedCount"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "item-count", "light-border"], ["type", "number", "min", "0", 1, "item-count-input", 3, "formControl", "change"]],
      template: function ItemCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ItemCountComponent_Template_input_change_3_listener() {
            return ctx.changedCount.emit(ctx.countControl.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.countControl);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: [".item-count[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 60px;\r\n    flex-grow: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center\r\n}\r\n\r\n.item-count-input[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1jb3VudC9pdGVtLWNvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWNvdW50L2l0ZW0tY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvdW50IHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uaXRlbS1jb3VudC1pbnB1dCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item-count',
          templateUrl: './item-count.component.html',
          styleUrls: ['./item-count.component.css']
        }]
      }], function () {
        return [];
      }, {
        changedCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/item/item.component.ts":
  /*!****************************************!*\
    !*** ./src/app/item/item.component.ts ***!
    \****************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../item-attribute/item-attribute.component */
    "./src/app/item-attribute/item-attribute.component.ts");
    /* harmony import */


    var _item_count_item_count_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../item-count/item-count.component */
    "./src/app/item-count/item-count.component.ts");

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent() {
        _classCallCheck(this, ItemComponent);

        this.changedSubtotal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subtotal = 0;
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCountChange",
        value: function onCountChange(newCount) {
          var old = this.subtotal;
          this.subtotal = newCount * this.unit.cost;
          this.changedSubtotal.emit({
            old: old,
            current: this.subtotal
          });
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)();
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      inputs: {
        unit: "unit"
      },
      outputs: {
        changedSubtotal: "changedSubtotal"
      },
      decls: 9,
      vars: 6,
      consts: [[1, "item", "dark-border"], [1, "item-name", "light-border"], ["name", "Move", 3, "value"], ["name", "Attack", 3, "value"], ["name", "Defense", 3, "value"], ["name", "Cost", 3, "value"], [3, "changedCount"], ["name", "Subtotal", 3, "value"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-item-attribute", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-item-attribute", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-item-attribute", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-item-attribute", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-item-count", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCount", function ItemComponent_Template_app_item_count_changedCount_7_listener($event) {
            return ctx.onCountChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-item-attribute", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unit.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unit.move);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unit.attack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unit.defense);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unit.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.subtotal);
        }
      },
      directives: [_item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_1__["ItemAttributeComponent"], _item_count_item_count_component__WEBPACK_IMPORTED_MODULE_2__["ItemCountComponent"]],
      styles: ["@media screen and (min-width: 600px) {\r\n    .item[_ngcontent-%COMP%] {\r\n        height: 50px;\r\n    }\r\n    .item-name[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n    }\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .item[_ngcontent-%COMP%] {\r\n        height: 100px;\r\n        flex-wrap: wrap;\r\n    }\r\n    .item-name[_ngcontent-%COMP%] {\r\n        width: 320px;\r\n    }\r\n}\r\n.item[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.item-name[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgIH1cclxufVxyXG4uaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaXRlbS1uYW1lIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.css']
        }]
      }], function () {
        return [];
      }, {
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changedSubtotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/total/total.component.ts":
  /*!******************************************!*\
    !*** ./src/app/total/total.component.ts ***!
    \******************************************/

  /*! exports provided: TotalComponent */

  /***/
  function srcAppTotalTotalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalComponent", function () {
      return TotalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../item-attribute/item-attribute.component */
    "./src/app/item-attribute/item-attribute.component.ts");

    var TotalComponent = /*#__PURE__*/function () {
      function TotalComponent() {
        _classCallCheck(this, TotalComponent);
      }

      _createClass(TotalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TotalComponent;
    }();

    TotalComponent.ɵfac = function TotalComponent_Factory(t) {
      return new (t || TotalComponent)();
    };

    TotalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TotalComponent,
      selectors: [["app-total"]],
      inputs: {
        total: "total"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "total", "dark-border"], [1, "total-name", "light-border"], [1, "total-spacer", "light-border"], ["name", "Total", 3, "value"]],
      template: function TotalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-item-attribute", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.total);
        }
      },
      directives: [_item_attribute_item_attribute_component__WEBPACK_IMPORTED_MODULE_1__["ItemAttributeComponent"]],
      styles: [".total[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    font-weight: bold;\r\n}\r\n.total-name[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    text-align: center;\r\n}\r\n@media screen and (min-width: 600px) {\r\n    .total-name[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n    }\r\n    .total-spacer[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        height: 45px;\r\n        width: 268px;\r\n        flex-grow: 0;\r\n\r\n        text-align: center\r\n    }\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .total-name[_ngcontent-%COMP%] {\r\n        width: 265px;\r\n    }\r\n    .total-space[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG90YWwvdG90YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTs7UUFFWjtJQUNKO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdG90YWwvdG90YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udG90YWwtbmFtZSB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudG90YWwtbmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXNwYWNlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB3aWR0aDogMjY4cHg7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRvdGFsLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgIH1cclxuICAgIC50b3RhbC1zcGFjZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-total',
          templateUrl: './total.component.html',
          styleUrls: ['./total.component.css']
        }]
      }], function () {
        return [];
      }, {
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/unit.service.ts":
  /*!*********************************!*\
    !*** ./src/app/unit.service.ts ***!
    \*********************************/

  /*! exports provided: UnitService */

  /***/
  function srcAppUnitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitService", function () {
      return UnitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UnitService = /*#__PURE__*/function () {
      function UnitService() {
        _classCallCheck(this, UnitService);
      }

      _createClass(UnitService, [{
        key: "getUnits",
        value: function getUnits(version) {
          switch (version) {
            case "1940":
              return [newUnit("Infantry", 3, 1, 2, 1), newUnit("Artillery", 4, 2, 2, 1), newUnit("Mechanized Infantry", 4, 1, 2, 2), newUnit("Tank", 6, 3, 3, 2), newUnit("AAA (Antiaircraft Artillery)", 5, 0, 0, 1), newUnit("Fighter", 10, 3, 4, 4), newUnit("Tactical Bomber", 11, 3, 3, 4), newUnit("Strategic Bomber", 12, 4, 1, 6), newUnit("Battleship", 20, 4, 4, 2), newUnit("Aircraft Carrier", 16, 0, 2, 2), newUnit("Cruiser", 12, 3, 3, 2), newUnit("Destroyer", 8, 2, 2, 2), newUnit("Submarine", 6, 2, 1, 2), newUnit("Tranport", 7, 0, 0, 2), newUnit("Major Industrial Complex", 30, 0, 0, 0), newUnit("Minor Industrial Complex", 12, 0, 0, 0), newUnit("Industrial Complex Upgrade", 18, 0, 0, 0), newUnit("Air Base", 15, 0, 0, 0), newUnit("Sea Base", 15, 0, 0, 0)];

            case "1942":
              return [newUnit("Infantry", 3, 1, 2, 1), newUnit("Artillery", 4, 2, 2, 1), newUnit("Tank", 6, 3, 3, 2), newUnit("Antiaircraft Artillery", 5, 0, 0, 1), newUnit("Industrial Complex", 15, 0, 0, 0), newUnit("Fighter", 10, 3, 4, 4), newUnit("Bomber", 12, 4, 1, 6), newUnit("Battleship", 20, 4, 4, 2), newUnit("Aircraft Carrier", 14, 1, 2, 2), newUnit("Cruiser", 12, 3, 3, 2), newUnit("Destroyer", 8, 2, 2, 2), newUnit("Submarine", 6, 2, 1, 2), newUnit("Transport", 7, 0, 0, 2)];

            case "1941":
              return [newUnit("Infantry", 3, 1, 2, 1), newUnit("Tank", 6, 3, 3, 2), newUnit("Fighter", 10, 3, 3, 4), newUnit("Bomber", 12, 4, 1, 6), newUnit("Battleship", 16, 4, 4, 2), newUnit("Aircraft Carrier", 12, 1, 2, 2), newUnit("Destroyer", 8, 2, 2, 2), newUnit("Submarine", 6, 2, 1, 2), newUnit("Transport", 7, 0, 0, 2)];

            default:
              return new Array();
          }
        }
      }]);

      return UnitService;
    }();

    UnitService.ɵfac = function UnitService_Factory(t) {
      return new (t || UnitService)();
    };

    UnitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnitService,
      factory: UnitService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    function newUnit(name, cost, attack, defense, move) {
      return {
        name: name,
        cost: cost,
        attack: attack,
        defense: defense,
        move: move
      };
    }
    /***/

  },

  /***/
  "./src/app/version-selector/version-selector.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/version-selector/version-selector.component.ts ***!
    \****************************************************************/

  /*! exports provided: VersionSelectorComponent */

  /***/
  function srcAppVersionSelectorVersionSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersionSelectorComponent", function () {
      return VersionSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var VersionSelectorComponent = /*#__PURE__*/function () {
      function VersionSelectorComponent() {
        _classCallCheck(this, VersionSelectorComponent);

        this.changedVersion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.versionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
      }

      _createClass(VersionSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onVersionSelect",
        value: function onVersionSelect() {
          this.changedVersion.emit(this.versionControl.value);
        }
      }]);

      return VersionSelectorComponent;
    }();

    VersionSelectorComponent.ɵfac = function VersionSelectorComponent_Factory(t) {
      return new (t || VersionSelectorComponent)();
    };

    VersionSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VersionSelectorComponent,
      selectors: [["app-version-selector"]],
      outputs: {
        changedVersion: "changedVersion"
      },
      decls: 11,
      vars: 3,
      consts: [[1, "version-selector", "dark-border"], [1, "version-select"], ["type", "radio", "value", "1940", 3, "formControl", "change"], ["type", "radio", "value", "1942", 3, "formControl", "change"], ["type", "radio", "value", "1941", 3, "formControl", "change"]],
      template: function VersionSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VersionSelectorComponent_Template_input_change_3_listener() {
            return ctx.onVersionSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Europe & Pacific 1940 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VersionSelectorComponent_Template_input_change_6_listener() {
            return ctx.onVersionSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 1942 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VersionSelectorComponent_Template_input_change_9_listener() {
            return ctx.onVersionSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 1941 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.versionControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.versionControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.versionControl);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["p.version-select[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc2lvbi1zZWxlY3Rvci92ZXJzaW9uLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92ZXJzaW9uLXNlbGVjdG9yL3ZlcnNpb24tc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAudmVyc2lvbi1zZWxlY3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VersionSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-version-selector',
          templateUrl: './version-selector.component.html',
          styleUrls: ['./version-selector.component.css']
        }]
      }], function () {
        return [];
      }, {
        changedVersion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';    // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Users\blest\Documents\Axis & Allies Cost Calculator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map