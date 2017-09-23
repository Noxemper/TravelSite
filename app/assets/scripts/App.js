import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

var mobileMenu = new MobileMenu();
var revealFeatureItems = new RevealOnScroll($(".feature-item"), "85%");
var revealTestimonials = new RevealOnScroll($(".testimonial"), "60%");