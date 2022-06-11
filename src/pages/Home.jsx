import Welcome from "../components/Welcome";
import SwiperComponent from "./SwiperComponent";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <SwiperComponent />
      <Welcome />
    </MainLayout>
  );
}
