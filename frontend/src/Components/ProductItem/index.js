import React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { IoIosImages } from "react-icons/io";
import { formatINR } from "../../utils/formatCurrency";
import { IoAdd } from "react-icons/io5";

const ProductItem = ({ item, itemView }) => {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(MyContext);

  const productId = itemView === "recentlyView" ? item?.prodId : item?.id || item?._id;
  const productName = item?.name || "Product";

  const viewProductDetails = (id) => {
    context.openProductDetailsModal(id, true);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    viewProductDetails(productId);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const displayPrice = formatINR(item?.price);
  const displayOldPrice = item?.oldPrice ? formatINR(item.oldPrice) : null;

  return (
    <div className={`productItem ${itemView || ""}`}>
      <div className="img_rapper">
        <Link to={`/product/${productId}`} aria-label={`View ${productName}`}>
          <div className="productItemSliderWrapper">
            {isLoading ? (
              <Skeleton variant="rectangular" width="100%" height={140}>
                <IoIosImages />
              </Skeleton>
            ) : (
              <img
                src={item?.images?.[0]}
                className="w-100 img1"
                alt={productName}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop";
                }}
              />
            )}
          </div>
        </Link>

        {item?.discount > 0 && (
          <span className="badge badge-primary">{item.discount}% OFF</span>
        )}
      </div>

      <div className="info" title={productName}>
        <Link to={`/product/${productId}`}>
          <h4>{productName}</h4>
        </Link>

        {item?.unit && <div className="product-unit">{item.unit}</div>}

        <span className="delivery-time">⚡ 10 mins</span>

        <Rating
          className="mt-1 mb-0"
          name="read-only"
          value={item?.rating || 4.5}
          readOnly
          size="small"
          precision={0.5}
        />

        <div className="price-row">
          <div className="price-col">
            <span className="netPrice">{displayPrice}</span>
            {displayOldPrice && (
              <span className="oldPrice">{displayOldPrice}</span>
            )}
          </div>
          <Button
            className="btn-add-cart"
            onClick={handleAddToCart}
            aria-label={`Add ${productName} to cart`}
          >
            <IoAdd size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemView: PropTypes.string,
};

ProductItem.defaultProps = {
  itemView: "",
};

export default ProductItem;
