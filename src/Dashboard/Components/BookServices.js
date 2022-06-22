
const BookServices=()=>{
    return(
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cats</title>
  <style dangerouslySetInnerHTML={{__html: "\n\n    * {\n      font-family: Arial, Helvetica, sans-serif;\n    }\n\n    .product {\n      position: relative;\n      border: gray 2px solid;\n      width: 300px;\n      height: 450px;\n      text-align: center;\n      overflow: hidden;\n      display: inline-block;\n      margin: 10px;\n      box-shadow: 0 0 10px 1px #080808;\n      background-color: white;\n      border-radius: 10px;\n    }\n\n    .product:hover {\n      transform: scale(1.2);\n    }\n\n    .product img {\n      width: 300px;\n      height: 300px;\n    }\n\n    .product .title {\n      margin-top: 20px;\n      font-size: 20px;\n      font-weight: bold;\n      color: black;\n    }\n\n    .product .description {\n      margin: 10px;\n      font-size: 18px;\n      color: gray;\n    }\n\n    .product .price {\n      font-weight: bold;\n      font-size: 20px;\n    }\n\n    .product .ribbon {\n      background-color: red;\n      color: white;\n      text-align: center;\n      height: 50px;\n      line-height: 50px;\n      font-size: 20px;\n      font-weight: bold;\n      text-shadow: 1px 1px 5px black;\n      width: 200px;\n      box-shadow: 0 0 10px 1px #080808;\n    }\n\n    .product .ribbon-right {\n      transform: rotate(45deg);\n      position: absolute ;\n      right: -50px;\n      top: 30px;\n    } \n\n     .product .ribbon-left {\n      transform: rotate(-45deg);\n      position: absolute;\n      left: -50px;\n      top: 30px;\n    } \n\n  " }} />
  <div className="product">
    <div className="ribbon ribbon-right">Popular</div>
    <img src="images/cat.1.jpg" alt />
    <div className="title">Cat 1</div>
    <div className="description">This is a nice cat. Blah blah blah blah blah blah blah....</div>
    <div className="price">INR 10000</div>
  </div>
  <div className="product">
    <img src="images/cat.2.jpg" alt />
    <div className="title">Cat 2</div>
    <div className="description">This is a nice cat. Blah blah blah blah blah blah blah....</div>
    <div className="price">INR 20000</div>
  </div>
  <div className="product">
    <div className="ribbon ribbon-left">Popular</div>
    <img src="images/cat.3.jpg" alt />
    <div className="title">Cat 3</div>
    <div className="description">This is a nice cat. Blah blah blah blah blah blah blah....</div>
    <div className="price">INR 30000</div>
  </div>
  <div className="product">
    <img src="images/cat.4.jpg" alt />
    <div className="title">Cat 4</div>
    <div className="description">This is a nice cat. Blah blah blah blah blah blah blah....</div>
    <div className="price">INR 40000</div>
  </div>
</div>
    )
}
export default BookServices;