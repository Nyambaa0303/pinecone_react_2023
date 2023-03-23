import axios from "axios";

export function useCreateArticle() {
  function createArticle({ title, categoryId, text }) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/articles`, {
        title, // title: title,
        categoryId, //  categoryId: categoryId,
        text, // text: text,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Success");
        }
      });
  }

  return createArticle;
}
