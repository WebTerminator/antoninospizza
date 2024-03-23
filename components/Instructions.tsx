import styles from "@/styles/Shop.module.css";
import { Img } from "./Img";

export const Instructions = () => (
  <>
    <div className={styles["cooking-info"]}>
      <h3>How to cook your pizza?</h3>
      <p>
        Remember to always follow the specific cooking instructions provided
        with your pizza for the best results. With these simple steps,
        you&apos;ll be able to cook your pizza like a pro in no time!
      </p>
    </div>
    <div className={styles["instructions"]}>
      <div>
        <div>
          <Img url="/imgs/shop/step-1.png" alt="" />
        </div>
        <h3>Step 1</h3>
        <p>
          Take off the packaging and unveil the potential for culinary magic.
        </p>
      </div>
      <div>
        <div>
          <Img url="/imgs/shop/step-2.png" alt="" />
        </div>
        <h3>Step 2</h3>
        <p>
          Take off the packaging and unveil the potential for culinary magic.
        </p>
      </div>
      <div>
        <div>
          <Img url="/imgs/shop/step-3.png" alt="" />
        </div>
        <h3>Step 3</h3>
        <p>
          Take off the packaging and unveil the potential for culinary magic.
        </p>
      </div>
    </div>
  </>
);
