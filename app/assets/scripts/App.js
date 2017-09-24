import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
var revealFeatureItems = new RevealOnScroll($(".feature-item"), "85%");
var revealTestimonials = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();