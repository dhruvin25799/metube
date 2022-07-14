import styles from "./Page404.module.css";
import { Button } from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles["page404-main"]}>
        <div className={styles["page404-header"]}>
          <h1>404</h1>
          <h3>Not Found</h3>
          <p>The Page you're looking for does not exist.</p>
          <Button
            primary={true}
            onClick={() => navigate("/", { replace: true })}
          >
            Go Back Home
          </Button>
        </div>
      </main>
    </>
  );
};
