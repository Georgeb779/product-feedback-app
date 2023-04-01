import style from "./DashBoardSuggestions.module.scss";
import { useQuery } from "react-query";
import { SuggestionsEmpty } from "../SuggestionsEmpty";
import { Suggestions } from "@/services";
import { ProductCard } from "../ProductCard";

export const DashBoardSuggestions = () => {
  const suggestions = new Suggestions();

  const { isLoading, error, data } = useQuery(
    "Get Suggestions",
    suggestions.getSuggestions
  );
  
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.dashboard__container}>
          {data.length == 0 ? (
            <SuggestionsEmpty />
          ) : (
            <>
              {data
                .sort(
                  (a: { upvotes: number }, b: { upvotes: number }) =>
                    b.upvotes - a.upvotes
                )
                .map(
                  (item: {
                    id: string;
                    title: string;
                    description: string;
                    category: string;
                    upvotes: number;
                    Comment: any;
                  }) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      category={item.category}
                      upVotes={item.upvotes}
                      comments={item.Comment}
                      urlIsActive={true}
                    />
                  )
                )}
            </>
          )}
        </div>
      )}
    </>
  );
};
