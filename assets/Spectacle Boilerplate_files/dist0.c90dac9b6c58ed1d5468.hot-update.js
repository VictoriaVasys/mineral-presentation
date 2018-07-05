webpackHotUpdate(0,{

/***/ "./presentation/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Presentation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__ = __webpack_require__("./node_modules/mineral-ui/Flex/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__ = __webpack_require__("./node_modules/mineral-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text__ = __webpack_require__("./node_modules/mineral-ui/Text/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_spectacle_code_slide__ = __webpack_require__("./node_modules/spectacle-code-slide/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_spectacle_code_slide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_spectacle_code_slide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_kat_png__ = __webpack_require__("./assets/kat.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_kat_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_kat_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_spectacle_lib_utils_preloader__ = __webpack_require__("./node_modules/spectacle/lib/utils/preloader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_spectacle_lib_utils_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_spectacle_lib_utils_preloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_spectacle__ = __webpack_require__("./node_modules/spectacle/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_spectacle_lib_themes_default__ = __webpack_require__("./node_modules/spectacle/lib/themes/default/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_spectacle_lib_themes_default___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_spectacle_lib_themes_default__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Import React








// Import Spectacle Core tags


// Import theme


// Require CSS
__webpack_require__("./node_modules/normalize.css/normalize.css");

var styles = {
  floatingMinerals: function floatingMinerals(_ref) {
    var _ref2;

    var theme = _ref.theme;
    return _ref2 = {
      height: 360,
      alignSelf: "center",
      // display: "block !important",
      // margin: `${theme.baseline_2} auto ${theme.baseline_2}`,
      width: 300

    }, _ref2[theme.bp_home_bigH3] = {
      margin: "0 auto " + theme.baseline_3
    }, _ref2[theme.bp_home_guidelinesMultiColumn] = {
      height: 300,
      flex: "0 0 300px",
      order: 2,
      margin: 0
    }, _ref2;
  },
  markdown: {
    color: "white",
    fontSize: "3rem"
  }
};

var colors = {
  primary: "white",
  secondary: "#2c2c33",
  tertiary: "#fe5879",
  quarternary: "#CECECE",
  penitentiary: "#ea6b43"
};

var floatingMineralsSvg = __webpack_require__("./node_modules/raw-loader/index.js!./assets/minerals.svg");

var FloatingMinerals = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])("div", styles.floatingMinerals);
var Markdown = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])(__WEBPACK_IMPORTED_MODULE_7_spectacle__["Markdown"], styles.markdown);

var TextRoot = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])(__WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text___default.a, function (_ref3) {
  var color = _ref3.color,
      fontSize = _ref3.fontSize;
  return {
    color: color,
    fontFamily: "inherit",
    fontSize: fontSize
    // display: "inline"
  };
});

var TableHeaderRoot = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])(__WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text___default.a, function (_ref4) {
  var color = _ref4.color,
      fontSize = _ref4.fontSize,
      marginRight = _ref4.marginRight,
      width = _ref4.width;
  return {
    textAlign: "right",
    fontFamily: "Montserrat",
    fontSize: fontSize,
    color: color,
    marginRight: marginRight,
    width: width
  };
});

var TableTextRoot = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])(__WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text___default.a, function (_ref5) {
  var color = _ref5.color,
      fontSize = _ref5.fontSize;
  return {
    textAlign: "left",
    fontFamily: "Montserrat",
    fontSize: fontSize,
    color: color
  };
});

var MineralTextFooter = Object(__WEBPACK_IMPORTED_MODULE_2_mineral_ui_styles__["createStyledComponent"])(__WEBPACK_IMPORTED_MODULE_3_mineral_ui_Text___default.a, {
  fontFamily: "Montserrat"
});

var MineralText = function MineralText(_ref6) {
  var _ref6$color = _ref6.color,
      color = _ref6$color === undefined ? colors.tertiary : _ref6$color,
      _ref6$fontSize = _ref6.fontSize,
      fontSize = _ref6$fontSize === undefined ? "inherit" : _ref6$fontSize,
      restProps = _objectWithoutProperties(_ref6, ["color", "fontSize"]);

  var rootProps = _extends({ color: color, fontSize: fontSize }, restProps);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextRoot, _extends({ element: "span" }, rootProps));
};

var MineralTextTableHeader = function MineralTextTableHeader(_ref7) {
  var _ref7$color = _ref7.color,
      color = _ref7$color === undefined ? colors.primary : _ref7$color,
      _ref7$fontSize = _ref7.fontSize,
      fontSize = _ref7$fontSize === undefined ? "3rem" : _ref7$fontSize,
      _ref7$marginRight = _ref7.marginRight,
      marginRight = _ref7$marginRight === undefined ? "40px" : _ref7$marginRight,
      _ref7$width = _ref7.width,
      width = _ref7$width === undefined ? "200px" : _ref7$width,
      restProps = _objectWithoutProperties(_ref7, ["color", "fontSize", "marginRight", "width"]);

  var rootProps = _extends({ color: color, fontSize: fontSize, marginRight: marginRight, width: width }, restProps);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableHeaderRoot, rootProps);
};

var MineralTextTable = function MineralTextTable(_ref8) {
  var _ref8$color = _ref8.color,
      color = _ref8$color === undefined ? colors.tertiary : _ref8$color,
      _ref8$fontSize = _ref8.fontSize,
      fontSize = _ref8$fontSize === undefined ? "3rem" : _ref8$fontSize,
      restProps = _objectWithoutProperties(_ref8, ["color", "fontSize"]);

  var rootProps = _extends({ color: color, fontSize: fontSize }, restProps);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableTextRoot, rootProps);
};

var theme = __WEBPACK_IMPORTED_MODULE_8_spectacle_lib_themes_default___default()({
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary,
  quarternary: colors.quarternary
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

var images = {
  ca: __webpack_require__("./assets/ca-logo-white.png")
};

// preloader({
//   kat
// });

var Presentation = function (_React$Component) {
  _inherits(Presentation, _React$Component);

  function Presentation() {
    _classCallCheck(this, Presentation);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Presentation.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_spectacle__["Deck"],
      { contentWidth: "80vw", transition: ["zoom", "slide"], transitionDuration: 500, theme: theme },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "75vh", marginTop: "18vh", marginBottom: "7vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
              { justifyContent: "center" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FloatingMinerals, {
                dangerouslySetInnerHTML: { __html: floatingMineralsSvg }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, caps: true, textColor: "penitentiary" },
              "Mineral UI Design System"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { margin: "10px 0 0", textColor: "primary", size: 3, bold: true },
              "2018 ASE Training"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "Design Systems"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { margin: "4.5rem 0", textColor: "primary", textSize: "4rem" },
              "Industry wide, everyone is building design systems:"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Google: ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Material"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Twitter: ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Bootstrap"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "IBM: ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Carbon"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Salesforce: ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Lightning"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Shopify: ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Polaris"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { margin: "4.5rem 0", textColor: "primary", textSize: "4rem" },
              "CA's design system = Mineral UI; launched last fall."
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "Allows the company to be unified in its design vision; consistency becomes a by-product, not a mandate Provides an avenue for quick & efficient changes (new products too); built for re-use at scale Developers are free to focus on other important things"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "Why though?"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 0.2 },
                toStyle: [{ opacity: 1 }, { opacity: 0.2 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "Unified design vision"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 0.2 },
                toStyle: [{ opacity: 1 }, { opacity: 0.2 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "Quick & efficient change"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 0.2 },
                toStyle: [{ opacity: 1 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "Cognitive resources"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { transition: ["fade"], bgColor: "secondary", textColor: "primary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["BlockQuote"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_spectacle__["Quote"],
            null,
            "Time is money."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_spectacle__["Cite"],
            null,
            "Benjamin Franklin"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "Is \"Product Teams v Contractor\" piece important here? User Research: Interviews and behavior analysis Info Architecture: Structure design and content organization Interaction Design: Research and user/product workflows Visual Design: Visual layout and information design Prototyping: Build/test product workflows and concept designs Front-end dev: Implement complete interaction and visual designs into product"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "CA Design"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "User Research"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Information Architecture"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Interaction Design"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Visual Design"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Prototyping"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Front-End Dev"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "\u2018Owns\u2019 the overall practice of user experience at CA. Supplies tools/techniques/best practices to enable individual groups to design quicker and more efficiently. Provides the processes to ensure UX is part of CA\u2019s overall workflows & initiatives. Is the communications \u201Cglue\u201D to keep teams coordinated and talking."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "UXD at CA: Design Strategy & Ops"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Tools & best practices"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Processes for UX inclusion"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Communications \u201Cglue\u201D"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", alignItems: "center", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { textColor: "tertiary", width: "2000px" },
              "Exercise time!"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              "Mineral UI includes a component library."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem", width: "20vw" },
              "Components are atomic elements like selects, checkboxes, and pop-up windows."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem", width: "20vw" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Your task"
              ),
              ": Pair & develop a button"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "Encapsulation - implements and advocates for the CA Style Guide, making components automatically on-brand & drop-in-ready Performance - modern apps Flexibility - we don't have opinions on everything, so we offer room for devs who have needs we don't account for Accessibility (a11y) - Considers color to keyboard navigation to screen readers and beyond Responsiveness - quick & simple to add breakpoints Open Source - Increases marketability in the industry"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "What are some Mineral-UI-specific advantages?"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Encapsulation"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Performance"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Flexibility"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Accessibility (a11y)"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Responsiveness"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4.5rem" },
              "Open Source"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "A good rule of thumb for priority when making changes: 1. Always best to use a component as-is for consistency's sake 2. Next, you can reach for theming (from your entire app to a specific component) 3. Lastly, you can style components using CSS-in-JS"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "So... how do I use this thing?"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { margin: "4.5rem 0", textColor: "primary", textSize: "4rem" },
              "Mineral's demo site informs how and when to use our components."
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Component as-is"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Theming"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Styled components"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "Mineral UI Resources"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Table"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableBody"],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      null,
                      "Github"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      null,
                      "https://github.com/mineral-ui/mineral-ui"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      null,
                      "Demo Site"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      null,
                      "http://mineral-ui.com"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      null,
                      "Flowdock"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      null,
                      "https://www.flowdock.com/app/ca-technologies/mineral-ui"
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_spectacle_code_slide___default.a, {
        bgColor: "secondary",
        transition: [],
        lang: "jsx",
        code: __webpack_require__("./node_modules/raw-loader/index.js!./assets/code.example"),
        ranges: [{ loc: [0, 270], title: "What is React?" }, { loc: [0, 1], title: "The Beginning" }, { loc: [1, 2] }, { loc: [1, 2], note: "Heres a note!" }, { loc: [2, 3] }, { loc: [4, 7], image: __WEBPACK_IMPORTED_MODULE_5__assets_kat_png___default.a }, { loc: [8, 10] }]
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_spectacle_code_slide___default.a, {
        bgColor: "secondary",
        transition: [],
        lang: "jsx",
        code: __webpack_require__("./node_modules/raw-loader/index.js!./assets/code.example"),
        ranges: [{ loc: [0, 270], title: "What does Mineral look like?" }, { loc: [0, 1], title: "The Beginning" }, { loc: [1, 2] }, { loc: [1, 2], note: "Heres a note!" }, { loc: [2, 3] }, { loc: [4, 7], image: __WEBPACK_IMPORTED_MODULE_5__assets_kat_png___default.a }, { loc: [8, 10] }]
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "Exercise time again :D"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Goal"
              ),
              ": Transform an html form to use Mineral components"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              "One component together"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "30 minutes"
              ),
              " to propagate & explore"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Notes"],
          null,
          "Great product development is not about features and functionality; it's about solving users' problems User-centered design will change your understanding of who you are developing your software for and how they will use it. Observing your users in their own environment allows you to better understand how they actually use the product We want to build the right products, not just the products right."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "Conclusion: Great Product Development"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 1 },
                toStyle: [{ opacity: 0.2 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "Not just features & functionality"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 0.2 },
                toStyle: [{ opacity: 1 }, { opacity: 0.2 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "User-centered design"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Anim"],
              {
                fromStyle: { opacity: 0.2 },
                toStyle: [{ opacity: 1 }],
                transitionDuration: 300
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
                { textColor: "primary", textSize: "4.5rem" },
                "We want to build the ",
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  MineralText,
                  null,
                  "right products"
                ),
                ", not just the products right."
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { transition: ["fade"], bgColor: "secondary", textColor: "primary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["BlockQuote"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_spectacle__["Quote"],
            null,
            "The biggest waste of all is building something no one wants."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_spectacle__["Cite"],
            null,
            "Eric Ries"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { direction: "column", justifyContent: "between", height: "90vh", marginBottom: "10vh" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { marginTop: "10vh", marginBottom: "-10vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Heading"],
              { size: 1, textColor: "tertiary", width: "2000px" },
              "References & Resources"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Table"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableBody"],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      { width: "300px" },
                      "Central UX wiki"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      { width: "300px" },
                      "design.ca.com"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      { width: "300px" },
                      "CTE Tech Talks"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      { width: "300px" },
                      "https://bit.ly/2MFMQVG"
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableRow"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTableHeader,
                      { width: "300px" },
                      "UX SIG (special interest group)"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_spectacle__["TableItem"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      MineralTextTable,
                      { width: "300px" },
                      "https://km.ca.com/rnd/MyTeams/cte/UXSIG/default.aspx"
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            { alignSelf: "center", justifyContent: "center", marginBottom: "-3.5vh" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              MineralTextFooter,
              {
                appearance: "prose",
                element: "span",
                color: "#CECECE"
              },
              "Copyright \xA9 2018 CA"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { align: "flex-start", transition: ["zoom"], bgColor: "secondary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex___default.a,
          { height: "90vh", alignItems: "center", justifyContent: "evenly" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_spectacle__["Image"], { src: images.ca, width: "250px" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_mineral_ui_Flex__["FlexItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Elisa K Miller"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Design Transformation Coach"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "elisa.miller@ca.com"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "4rem" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                MineralText,
                null,
                "Victoria Vasys"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "Mineral UI Developer"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
              { textColor: "primary", textSize: "3.5rem" },
              "victoria.vasys@ca.com"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_spectacle__["Slide"],
        { transition: ["fade"], bgColor: "secondary", textColor: "primary" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_spectacle__["Text"],
          { textColor: "primary", textSize: "10rem" },
          "Thank you."
        )
      )
    );
  };

  return Presentation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(colors, "colors", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(FloatingMinerals, "FloatingMinerals", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(Markdown, "Markdown", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(TextRoot, "TextRoot", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(TableHeaderRoot, "TableHeaderRoot", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(TableTextRoot, "TableTextRoot", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(MineralTextFooter, "MineralTextFooter", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(MineralText, "MineralText", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(MineralTextTableHeader, "MineralTextTableHeader", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(MineralTextTable, "MineralTextTable", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(theme, "theme", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(images, "images", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");

  __REACT_HOT_LOADER__.register(Presentation, "Presentation", "/Users/vasvi04/presentations/mineral-ase-pittsburgh/presentation/index.js");
}();

;

/***/ })

})
//# sourceMappingURL=0.c90dac9b6c58ed1d5468.hot-update.js.map