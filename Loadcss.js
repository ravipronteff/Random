// import React from "react";
import { useEffect } from "react";
const useLoadcss = () => {
  // let stylePathVendor = "http://localhost:3000/assets/css/vendor.min.css";
  // let stylePathPlugin = "http://localhost:3000/assets/css/plugins.min.css";
  // let stylePathStyleMin = "http://localhost:3000/assets/css/style.min.css";
  let stylePathStyle = "http://localhost:3000/style.css";
  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePathStyle;
    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [stylePathStyle]);
};
export default useLoadcss;

//  useEffect(() => {
//    var head = document.head;
//    var link = document.createElement("link");

//    link.type = "text/css";
//    link.rel = "stylesheet";
//    link.href = stylePathVendor;

//    head.appendChild(link);

//    return () => {
//      head.removeChild(link);
//    };
//  }, [stylePathVendor]);

//  useEffect(() => {
//    var head = document.head;
//    var link = document.createElement("link");

//    link.type = "text/css";
//    link.rel = "stylesheet";
//    link.href = stylePathPlugin;

//    head.appendChild(link);

//    return () => {
//      head.removeChild(link);
//    };
//  }, [stylePathPlugin]);

//  useEffect(() => {
//    var head = document.head;
//    var link = document.createElement("link");

//    link.type = "text/css";
//    link.rel = "stylesheet";
//    link.href = stylePathStyleMin;

//    head.appendChild(link);

//    return () => {
//      head.removeChild(link);
//    };
//  }, [stylePathStyleMin]);

//   useEffect(() => {
//     var head = document.head;
//     var link = document.createElement("link");

//     link.type = "text/css";
//     link.rel = "stylesheet";
//     link.href = stylePathStyle;

//     head.appendChild(link);

//     return () => {
//       head.removeChild(link);
//     };
//   }, [stylePathStyle]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "http://localhost:3000/assets/js/vendor/jquery-3.6.0.min.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, ["http://localhost:3000/assets/js/vendor/jquery-3.6.0.min.js"]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "http://localhost:3000/assets/js/vendor/vendor.min.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, ["http://localhost:3000/assets/js/vendor/vendor.min.js"]);
// };
