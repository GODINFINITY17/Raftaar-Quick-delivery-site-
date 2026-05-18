import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { MyContext } from "../../App";

const HomeBanner = (props) => {
  const context = useContext(MyContext);

  return (
    <div className="container mt-2">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={context.windowWidth > 992}
          loop={true}
          speed={500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {Array.isArray(props?.data) &&
            props.data.length > 0 &&
            props.data.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <div className="item">
                  <img
                    src={item?.images?.[0]}
                    className="w-100"
                    alt={item?.title || "Promo banner"}
                    style={{ maxHeight: 220, objectFit: "cover" }}
                  />
                  {(item?.title || item?.subtitle) && (
                    <div className="banner-caption">
                      {item.title && <h3>{item.title}</h3>}
                      {item.subtitle && <p>{item.subtitle}</p>}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
