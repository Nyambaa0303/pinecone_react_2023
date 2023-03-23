import axios from "axios";

export function useArticleMutations() {
  function createArticle({ title, categoryId, content, image }) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/articles`, {
        title, // title: title,
        categoryId, //  categoryId: categoryId,
        content,
        image,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
        }
      });
  }

  function deleteArticle() {}

  function updateArticle() {}

  return {
    createArticle,
    deleteArticle,
    updateArticle,
  };
}
