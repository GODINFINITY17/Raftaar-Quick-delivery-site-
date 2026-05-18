import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from 'react'; // Add at the top
import "./responsive.css";
import "./styles/delivery-theme.css";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import MyList from "./Pages/MyList";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import MyAccount from "./Pages/MyAccount";
import SearchPage from "./Pages/Search";

import { fetchDataFromApi, getStoredUser, postData } from "./utils/api";
import { getDemoProductById, isDemoProductId } from "./data/demoProducts";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [productData, setProductData] = useState([]);

  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setsubCategoryData] = useState([]);
  const [addingInCart, setAddingInCart] = useState(false);

  const [cartData, setCartData] = useState();
  const [myListData, setMyListData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [enableFilterTab, setEnableFilterTab] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isBottomShow, setIsBottomShow] = useState(true);

  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: "",
  });


  useEffect(() => {
    const user = getStoredUser();
    if (user?.userId) {
      fetchDataFromApi(`/api/cart?userId=${user.userId}`).then((res) => {
        if (res) setCartData(res);
      });
    }
  }, [isLogin]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");

    fetchDataFromApi("/api/category").then((res) => {
      const categoryList = Array.isArray(res?.categoryList) ? res.categoryList : [];
      setCategoryData(categoryList);

      const subCatArr = [];
      categoryList.forEach((cat) => {
        if (Array.isArray(cat?.children) && cat.children.length > 0) {
          cat.children.forEach((subCat) => {
            subCatArr.push(subCat);
          });
        }
      });
      setsubCategoryData(subCatArr);
    });

  

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const location = localStorage.getItem("location");
    if (location !== null && location !== "" && location !== undefined) {
      setselectedCountry(location);
    } else {
      setselectedCountry("All");
      localStorage.setItem("location", "All");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCartData = () => {
    const user = getStoredUser();
    if (!user?.userId) return;
    fetchDataFromApi(`/api/cart?userId=${user.userId}`).then((res) => {
      if (res) setCartData(res);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== "" && token !== undefined && token !== null) {
      setIsLogin(true);

      const userData = getStoredUser();
      if (userData) setUser(userData);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const openProductDetailsModal = (id, status) => {
    if (isDemoProductId(id)) {
      const demo = getDemoProductById(id);
      if (demo) {
        setProductData(demo);
        setisOpenProductModal(status);
      }
      return;
    }
    fetchDataFromApi(`/api/products/${id}`).then((res) => {
      if (!res) return;
      setProductData(res);
      setisOpenProductModal(status);
    });
  };

  // const getCountry = async (url) => {
  //   const responsive = await axios.get(url).then((res) => {
  //     setCountryList(res.data.data);
  //   });
  // };

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      setCountryList(Array.isArray(res?.data?.data) ? res.data.data : []);
    } catch (error) {
      console.error("Failed to load countries:", error?.message);
      setCountryList([]);
    }
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertBox({
      open: false,
    });
  };

  const addToCart = (data) => {
    if (isDemoProductId(data.productId)) {
      setAddingInCart(true);
      setTimeout(() => {
        setCartData((prev) => {
          const newCart = prev && Array.isArray(prev) ? [...prev] : [];
          // Check if it already exists
          const existing = newCart.find(item => item.productId === data.productId);
          if (existing) {
             existing.quantity += data.quantity;
             existing.subTotal = existing.quantity * existing.price;
          } else {
             newCart.push({ ...data, _id: "mock-" + Date.now() });
          }
          return newCart;
        });
        setAlertBox({
          open: true,
          error: false,
          msg: "Demo item added to cart",
        });
        setAddingInCart(false);
      }, 500);
      return;
    }

    if (isLogin === true) {
      setAddingInCart(true);
      postData(`/api/cart/add`, data).then((res) => {
        if (res.status !== false) {
          setAlertBox({
            open: true,
            error: false,
            msg: "Item is added in the cart",
          });

          setTimeout(() => {
            setAddingInCart(false);
          }, 1000);

          getCartData();
        } else {
          setAlertBox({
            open: true,
            error: true,
            msg: res.msg,
          });
          setAddingInCart(false);
        }
      });
    } else {
      setAlertBox({
        open: true,
        error: true,
        msg: "Please login first",
      });
    }
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    user,
    setUser,
    categoryData,
    setCategoryData,
    subCategoryData,
    setsubCategoryData,
    openProductDetailsModal,
    alertBox,
    setAlertBox,
    addToCart,
    addingInCart,
    setAddingInCart,
    cartData,
    setCartData,
    getCartData,
    myListData,
    setMyListData,
    searchData,
    setSearchData,
    windowWidth,
    isOpenNav,
    setIsOpenNav,
    setEnableFilterTab,
    enableFilterTab,
    setIsOpenFilters,
    isOpenFilters,
    setIsBottomShow,
    isBottomShow
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Snackbar
          open={alertBox.open}
          autoHideDuration={6000}
          onClose={handleClose}
          className="snackbar"
        >
          <Alert
            onClose={handleClose}
            autoHideDuration={6000}
            severity={alertBox.error === false ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route
            path="/products/category/:id"
            exact={true}
            element={<Listing />}
          />
          <Route
            path="/products/subCat/:id"
            exact={true}
            element={<Listing />}
          />
          <Route
            exact={true}
            path="/product/:id"
            element={<ProductDetails />}
          />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
          <Route exact={true} path="/my-list" element={<MyList />} />
          <Route exact={true} path="/checkout" element={<Checkout />} />
          <Route exact={true} path="/orders" element={<Orders />} />
          <Route exact={true} path="/my-account" element={<MyAccount />} />
          <Route exact={true} path="/search" element={<SearchPage />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}

        {isOpenProductModal === true && <ProductModal data={productData} />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
