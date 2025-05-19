import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedRooms from "../../components/FeatuedRooms/FeaturedRooms";
import MyMap from "../../components/MyMap/MyMap";
import Newsletter from "../../components/Newsletter/Newsletter";
import UserReviews from "../../components/UserReviews/UserReviews";
import Swal from "sweetalert2";
import TravelBlogSection from "../../components/TravelBlog/TravelBlog";
import MembershipPerks from "../../components/MemberShip/MemberShip";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FAQs from "../../components/FAQs/FAQs";

function Homepage() {
  useEffect(() => {
Swal.fire({
  imageUrl:
    'https://i.postimg.cc/WpChNVV6/pngtree-up-to-20-off-price-tag-design-png-image-6429660.png',
  imageHeight: 300,
  imageWidth: 400,
  imageAlt: 'A Special Offer Image',
});
  },[])
  return (
    <div>
      <div>
        <Banner />
        <div className="my-8 md:my-10 lg:my-14 space-y-8 md:space-y-12 lg:space-y-16">
          <FeaturedRooms />
          <WhyChooseUs></WhyChooseUs>
          <UserReviews />
          <MyMap />
          <TravelBlogSection></TravelBlogSection>
          <MembershipPerks></MembershipPerks>
          <FAQs></FAQs>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default Homepage