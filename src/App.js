import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import New from "./components/New";
import Pop from "./components/Pop";
import Select from "./components/Select";
import List from "./components/List";
import Detail from "./components/Detail";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    url: "http://localhost:3000/",
    isOpen: false,
    total: 0,
    totalPrice: 0,
    empty: 0,
    cart: [],
    product: [],
    items: [
      {
        id: 1,
        group: 1,
        title: "輕型風衣外套-女",
        price: 399,
        value: 1,
        place: "中國",
        material: "聚酯纖維100%",
        photo1: "https://s3.lativ.com.tw/i/46766/46766_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46766/46766_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46766/46766_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/46766/46766_D_13.jpg"
      },
      {
        id: 2,
        group: 1,
        title: "柔棉寬版長袖襯衫-女",
        price: 490,
        value: 1,
        place: "越南",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46759/46759_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46759/46759_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46759/46759_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/46759/46759_D_12.jpg"
      },
      {
        id: 3,
        group: 1,
        title: "牛仔長袖襯衫-女",
        price: 450,
        value: 1,
        place: "越南",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46737/46737_D_51.jpg",
        photo2: "https://s4.lativ.com.tw/i/46737/46737_D_52.jpg",
        photo3: "https://s1.lativ.com.tw/i/46737/46737_D_11.jpg",
        photo4: "https://s2.lativ.com.tw/i/46737/46737_D_12.jpg"
      },
      {
        id: 4,
        group: 1,
        title: "純棉寬鬆條紋上衣-女",
        price: 399,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/47002/47002_D_01_0.jpg",
        photo2: "https://s4.lativ.com.tw/i/47002/47002_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/47002/47002_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/47002/47002_D_12.jpg"
      },
      {
        id: 5,
        group: 1,
        title: "快乾棉連帽外套-男",
        price: 450,
        value: 1,
        place: "中國",
        material: "棉62%、聚酯纖維38%",
        photo1: "https://s3.lativ.com.tw/i/46304/46304_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46304/46304_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46304/46304_D_11.jpg",
        photo4: "https://s2.lativ.com.tw/i/46304/46304_D_12.jpg"
      },
      {
        id: 6,
        group: 1,
        title: "史努比印花T恤-男",
        price: 299,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46108/46108_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46108/46108_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46108/46108_D_11.jpg",
        photo4: "https://s2.lativ.com.tw/i/46108/46108_D_12.jpg"
      },
      {
        id: 7,
        group: 1,
        title: "極暖羽絨外套-男",
        price: 1490,
        value: 1,
        place: "越南",
        material: "羽絨90%、羽毛10%",
        photo1: "https://s3.lativ.com.tw/i/44248/44248_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/44248/44248_D_02.jpg",
        photo3: "https://s2.lativ.com.tw/i/44248/44248_D_04.jpg",
        photo4: "https://s3.lativ.com.tw/i/44248/44248_D_12SP.jpg"
      },
      {
        id: 8,
        group: 1,
        title: "軟牛仔九分束口褲-女",
        price: 490,
        value: 1,
        place: "中國",
        material: "棉98%、彈性纖維2%",
        photo1: "https://s3.lativ.com.tw/i/40315/40315_D_01_0.jpg",
        photo2: "https://s4.lativ.com.tw/i/40315/40315_D_02_0.jpg",
        photo3: "https://s1.lativ.com.tw/i/40315/40315_D_11_0.jpg",
        photo4: "https://s3.lativ.com.tw/i/40315/40315_D_12.jpg"
      },
      {
        id: 9,
        group: 1,
        title: "水洗飛行外套-女",
        price: 590,
        value: 1,
        place: "中國",
        material: "聚酯纖維90%、彈性纖維10%",
        photo1: "https://s3.lativ.com.tw/i/46949/46949_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46949/46949_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46949/46949_D_11.jpg",
        photo4: "https://s2.lativ.com.tw/i/46949/46949_D_12.jpg"
      },
      {
        id: 10,
        group: 1,
        title: "棉質羅紋條紋七分袖T恤-女",
        price: 249,
        value: 1,
        place: "中國",
        material: "棉95%、彈性纖維5%",
        photo1: "https://s3.lativ.com.tw/i/46380/46380_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46380/46380_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46380/46380_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/46380/46380_D_12.jpg"
      },
      {
        id: 11,
        group: 2,
        title: "Pima 棉條紋背心-女",
        price: 350,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/40388/40388_D_51.jpg",
        photo2: "https://s1.lativ.com.tw/i/40388/40388_D_13.jpg",
        photo3: "https://s3.lativ.com.tw/i/40388/40388_D_25.jpg",
        photo4: "https://s1.lativ.com.tw/i/CommonPicture/2065/43770TW.jpg"
      },
      {
        id: 12,
        group: 2,
        title: "軟牛仔高腰寬褲-女",
        price: 450,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/40294/40294_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/40294/40294_D_02.jpg",
        photo3: "https://s3.lativ.com.tw/i/40294/40294_D_16.jpg",
        photo4: "https://s3.lativ.com.tw/i/40294/40294_D_12.jpg"
      },
      {
        id: 13,
        group: 2,
        title: "牛仔長袖襯衫-男",
        price: 490,
        value: 1,
        place: "越南",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46735/46735_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46735/46735_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46735/46735_D_11.jpg",
        photo4: "https://s2.lativ.com.tw/i/46735/46735_D_12.jpg"
      },
      {
        id: 14,
        group: 2,
        title: "休閒九分褲-男",
        price: 690,
        value: 1,
        place: "中國",
        material: "棉97%、彈性纖維3%",
        photo1: "https://s3.lativ.com.tw/i/46677/46677_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46677/46677_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46677/46677_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/46677/46677_D_13.jpg"
      },
      {
        id: 15,
        group: 2,
        title: "棉質圓領針織外套-女",
        price: 299,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46714/46714_D_31.jpg",
        photo2: "https://s4.lativ.com.tw/i/46714/46714_D_32.jpg",
        photo3: "https://s3.lativ.com.tw/i/46714/46714_D_13.jpg",
        photo4: "https://s2.lativ.com.tw/i/46714/46714_D_12.jpg"
      },
      {
        id: 16,
        group: 2,
        title: "皮克斯系列印花T恤-童",
        price: 168,
        value: 1,
        place: "台灣",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46189/46189_D_51.jpg",
        photo2: "https://s4.lativ.com.tw/i/46189/46189_D_52.jpg",
        photo3: "https://s1.lativ.com.tw/i/46189/46189_D_53.jpg",
        photo4: "https://s2.lativ.com.tw/i/46189/46189_D_14SP.jpg"
      },
      {
        id: 17,
        group: 2,
        title: "STAR WARS系列印花T恤-童",
        price: 168,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46151/46151_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46151/46151_D_11.jpg",
        photo3: "https://s1.lativ.com.tw/i/46151/46151_D_12.jpg",
        photo4: "https://s2.lativ.com.tw/i/46151/46151_D_13.jpg"
      },
      {
        id: 18,
        group: 2,
        title: "極暖羽絨長版外套-童",
        price: 1390,
        value: 1,
        place: "越南",
        material: "羽絨90%、羽毛10%",
        photo1: "https://s1.lativ.com.tw/i/44260/44260_D_03.jpg",
        photo2: "https://s3.lativ.com.tw/i/44260/44260_D_21.jpg",
        photo3: "https://s2.lativ.com.tw/i/44260/44260_D_11.jpg",
        photo4: "https://s4.lativ.com.tw/i/44260/44260_D_14SP.jpg"
      },
      {
        id: 19,
        group: 2,
        title: "寬版船型領針織衫-女",
        price: 490,
        value: 1,
        place: "中國",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/46717/46717_D_01_0.jpg",
        photo2: "https://s4.lativ.com.tw/i/46717/46717_D_02_0.jpg",
        photo3: "https://s3.lativ.com.tw/i/46717/46717_D_13.jpg",
        photo4: "https://s2.lativ.com.tw/i/46717/46717_D_12.jpg"
      },
      {
        id: 20,
        group: 2,
        title: "迪士尼系列刷毛圓領衫-男",
        price: 450,
        value: 1,
        place: "中國",
        material: "棉60%、聚酯纖維40%",
        photo1: "https://s4.lativ.com.tw/i/43229/43229_D_02.jpg",
        photo2: "https://s3.lativ.com.tw/i/43229/43229_D_01.jpg",
        photo3: "https://s4.lativ.com.tw/i/43229/43229_D_14SP.jpg",
        photo4: "https://s2.lativ.com.tw/i/43229/43229_D_12SP.jpg"
      },
      {
        id: 21,
        group: 3,
        title: "抗UV羅紋立領外套-女",
        price: 390,
        value: 1,
        place: "中國",
        material: "棉92%、彈性纖維8%",
        photo1: "https://s3.lativ.com.tw/i/46790/46790_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46790/46790_D_02.jpg",
        photo3: "https://s2.lativ.com.tw/i/46790/46790_D_12.jpg",
        photo4: "https://s4.lativ.com.tw/i/46790/46790_D_14.jpg"
      },
      {
        id: 22,
        group: 3,
        title: "Bra羅紋背心-女",
        price: 399,
        value: 1,
        place: "中國",
        material: "棉95%、彈性纖維5%",
        photo1: "https://s3.lativ.com.tw/i/46341/46341_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/46341/46341_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/46341/46341_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/46341/46341_D_13.jpg"
      },
      {
        id: 23,
        group: 3,
        title: "純棉拉克蘭長袖T恤-男",
        price: 299,
        value: 1,
        place: "台灣",
        material: "棉100%",
        photo1: "https://s3.lativ.com.tw/i/43361/43361_D_51.jpg",
        photo2: "https://s4.lativ.com.tw/i/43361/43361_D_52.jpg",
        photo3: "https://s1.lativ.com.tw/i/43361/43361_D_11_0.jpg",
        photo4: "https://s3.lativ.com.tw/i/43361/43361_D_24SP.jpg"
      },
      {
        id: 24,
        group: 3,
        title: "吸排短袖T恤-男",
        price: 249,
        value: 1,
        place: "中國",
        material: "聚酯纖維86%、彈性纖維14%",
        photo1: "https://s3.lativ.com.tw/i/40060/40060_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/40060/40060_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/40060/40060_D_23.jpg",
        photo4: "https://s4.lativ.com.tw/i/40060/40060_D_25.jpg"
      },
      {
        id: 25,
        group: 3,
        title: "運動空氣層休閒長褲-童",
        price: 399,
        value: 1,
        place: "中國",
        material: "聚酯纖維66%、棉34%",
        photo1: "https://s3.lativ.com.tw/i/43358/43358_D_01.jpg",
        photo2: "https://s4.lativ.com.tw/i/43358/43358_D_02.jpg",
        photo3: "https://s1.lativ.com.tw/i/43358/43358_D_11.jpg",
        photo4: "https://s3.lativ.com.tw/i/43358/43358_D_12SP.jpg"
      }
    ]
  };
  menuOpen = () => {
    $(".nav").slideToggle();
    $(".top").toggleClass("animation1");
    $(".middle").toggleClass("animation2");
    $(".bottom").toggleClass("animation3");
  };
  slide = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    this.setState({ url: "http://localhost:3000/" });
  };
  urlChange1 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    this.setState({ url: "http://localhost:3000/new" });
  };
  urlChange2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    this.setState({ url: "http://localhost:3000/pop" });
  };
  urlChange3 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    this.setState({ url: "http://localhost:3000/select" });
  };
  open = e => {
    this.setState({ isOpen: true });
    const newArray = [...this.state.items];
    const index = newArray.findIndex(x => x.id == e);
    const newItem = {
      id: Date.now(),
      title: newArray[index].title,
      price: newArray[index].price,
      value: newArray[index].value,
      place: newArray[index].place,
      material: newArray[index].material,
      photo1: newArray[index].photo1,
      photo2: newArray[index].photo2,
      photo3: newArray[index].photo3,
      photo4: newArray[index].photo4
    };
    const newProduct = [newItem];
    this.setState({ product: newProduct });
  };
  close = () => {
    this.setState({ isOpen: false });
  };
  close2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    const newArray = [...this.state.cart];
    const newCart = newArray.map(x => {
      return x.price * x.value;
    });
    const newState = newCart.reduce((prev, next) => {
      return prev + next;
    }, 0);
    this.setState({
      isOpen: false,
      url: "http://localhost:3000/list",
      totalPrice: newState
    });
  };
  increment = e => {
    const newArray = [...this.state.product];
    const index = newArray.findIndex(x => x.id == e);
    newArray[index].value++;
    this.setState({ product: newArray });
  };
  decrement = e => {
    const newArray = [...this.state.product];
    const index = newArray.findIndex(x => x.id == e);
    if (newArray[index].value > 1) {
      newArray[index].value--;
    }
    this.setState({ product: newArray });
  };
  add = e => {
    const newArray = [...this.state.product];
    const index = newArray.findIndex(x => x.id == e);
    const newItem = {
      id: Date.now(),
      title: newArray[index].title,
      price: newArray[index].price,
      value: newArray[index].value,
      photo: newArray[index].photo1
    };
    const newState = [...this.state.cart, newItem];
    const totalValue = newState.map(x => x.value);
    const total = totalValue.reduce((prev, next) => {
      return prev + next;
    }, 0);
    let n = this.state.empty;
    this.setState({ cart: newState, total: total, empty: n + 1 });
    alert("已加入購物車");
  };
  thanks = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    if (this.state.empty === 0) {
      alert("您尚未選購商品");
    } else {
      alert("訂單處理中，感謝您的訂購");
      this.setState({ cart: [], total: 0, totalPrice: 0, empty: 0 });
    }
  };
  delete = e => {
    const newArray = [...this.state.cart];
    const newState = newArray.filter(x => x.id !== e);
    const totalValue = newState.map(x => x.value);
    const total = totalValue.reduce((prev, next) => {
      return prev + next;
    }, 0);
    const newCart = newState.map(x => {
      return x.price * x.value;
    });
    const finalState = newCart.reduce((prev, next) => {
      return prev + next;
    }, 0);
    let n = this.state.empty;
    this.setState({
      cart: newState,
      total: total,
      totalPrice: finalState,
      empty: n - 1
    });
  };
  jump = e => {
    var n = e;
    if (n < 2) {
      const wid = 100;
      $(".pic1").css({
        "z-index": 2
      });
      $(".pic3").css({
        "z-index": 0
      });
      $(".pic1").animate(
        {
          left: wid * (n - 1) + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: -wid * n + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: wid * n + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
    } else if (n < 3) {
      const wid = 100;
      $(".pic1").css({
        "z-index": 1
      });
      $(".pic2").css({
        "z-index": 2
      });
      $(".pic1").animate(
        {
          left: wid * (n - 1) + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: wid * (n - 2) + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: -wid * (n - 1) + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
    } else if (n < 4) {
      const wid = 100;
      $(".pic2").css({
        "z-index": 1
      });
      $(".pic3").css({
        "z-index": 2
      });
      $(".pic1").animate(
        {
          left: -wid * (n - 2) + "vw",
          zIndex: 1
        },
        {
          duration: 1000
        }
      );
      $(".pic2").animate(
        {
          left: wid * (n - 2) + "vw",
          zIndex: 0
        },
        {
          duration: 1000
        }
      );
      $(".pic3").animate(
        {
          left: wid * (n - 3) + "vw",
          zIndex: 2
        },
        {
          duration: 1000
        }
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <Router basename="/p5-shopping">
          <Detail
            isOpen={this.state.isOpen}
            product={this.state.product}
            close={this.close}
            close2={this.close2}
            increment={this.increment}
            decrement={this.decrement}
            add={this.add}
          />
          <Nav
            menuOpen={this.menuOpen}
            urlChange1={this.urlChange1}
            urlChange2={this.urlChange2}
            urlChange3={this.urlChange3}
            url={this.state.url}
            slide={this.slide}
            total={this.state.total}
            close2={this.close2}
          />
          <div className="box">
            <Switch>
              <Route
                path="/"
                exact
                render={props => <Content {...props} jump={this.jump} />}
              />
              <Route
                path="/new"
                render={props => (
                  <New {...props} items={this.state.items} open={this.open} />
                )}
              />
              <Route
                path="/pop"
                render={props => (
                  <Pop {...props} items={this.state.items} open={this.open} />
                )}
              />
              <Route
                path="/select"
                render={props => (
                  <Select
                    {...props}
                    items={this.state.items}
                    open={this.open}
                  />
                )}
              />
              <Route
                path="/list"
                render={props => (
                  <List
                    {...props}
                    cart={this.state.cart}
                    totalPrice={this.state.totalPrice}
                    thanks={this.thanks}
                    delete={this.delete}
                    slide={this.slide}
                    empty={this.state.empty}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
