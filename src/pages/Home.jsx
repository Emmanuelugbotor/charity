import Welcome from "../components/Welcome";
import SwiperComponent from "./SwiperComponent";
import MainLayout from "../layout/MainLayout";
import SocialsM from "../components/social";

export default function Home() {
  return (
    <MainLayout>
      {/* <SocialsM /> */}

      <SwiperComponent />
      <Welcome />
    </MainLayout>
  );
}
