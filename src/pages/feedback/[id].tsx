import { Product } from "@/services";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { AddComment, Button, CommentSection, ProductCard } from "@/components";
import style from "./feedback.module.scss";
import { GoBackArrow } from "@/assets/icons";

function ProductPage() {
  const product = new Product();
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useQuery(
    ["Product", id],
    async () => await product.getProductById(id),
    { cacheTime: 60 * 60 * 1000 } // Cache data for an hour
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data) {
    return <div>Invalid product ID</div>;
  }
  if (error) {
    return <>An error has occurred: {error}</>;
  }

  console.log(data);

  return (
    <main className={style.product_feedback__container}>
      <header>
        <nav>
          <Button
            text='Go Back'
            arialabel='Go Back'
            onClick={() => router.back()}
            type='back'
            icon={<GoBackArrow />}
          />
          <Button
            text='Edit Feedback'
            arialabel='Edit Feedback'
            onClick={() => console.log("Edit Feedback")}
            type='edit'
          />
        </nav>
      </header>
      <section className={style.product_feedback__comment_section}>
        <ProductCard
          id={data.id}
          title={data.title}
          description={data.description}
          category={data.category}
          upVotes={data.upvotes}
          comments={data.Comment}
        />
      </section>
      <div className={style.product_feedback_comment__container}>
        <CommentSection id={data.id} />
        <AddComment />
      </div>
    </main>
  );
}

export default ProductPage;
