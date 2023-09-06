import { Parallax } from "react-parallax";
import styles from "./ParallaxBanner.module.css";

function ParallaxComponent(props) {
  const { url, title } = props;
  return (
    <Parallax bgImage={url} strength={800} blur={{ min: -10, max: 10}}>
      <div className={styles["parallax-container"]}>
        <div className={styles["parallax-title"]}>{title}</div>
      </div>
    </Parallax>
  );
}

function ParallaxBanner() {
  return (
    <div className={styles["ParallaxBanner"]}>
      <ParallaxComponent url="https://png.pngtree.com/background/20210716/original/pngtree-profound-cosmic-background-picture-image_1337172.jpg" title="POP YOURSELF, INFINITE MOMENTS FLOW FROM" />
      <ParallaxComponent url="https://blog.kakaocdn.net/dn/b8Kdun/btqCqM43uim/1sWJVkjEEy4LJMfR3mcqxK/img.jpg" title="PLACES THAT ARE NOT FOREVER" />
      <ParallaxComponent url="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistoryfile%2Ffs15%2F30_tistory_2009_02_24_21_15_49a3e4de817c9%3Foriginal" title="영원하지 않은 공간으로부터의 무한한 순간" />
    </div>
  );
}

export default ParallaxBanner;
