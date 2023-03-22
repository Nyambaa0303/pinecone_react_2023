import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useArticleMutations } from "./articleMutations";
import { useState } from "react";
import { CategoriesSelector } from "./CategoriesSelector";

export function ArticlesNew() {
  const [content, setContent] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { createArticle } = useArticleMutations();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleFileUpload(event) {
    setUploading(true);

    const imageFile = event.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch("http://localhost:8000/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setUploading(false);
      });
  }

  return (
    <>
      <h1 className="mb-4">Шинэ мэдээ</h1>

      <CategoriesSelector
        value={categoryId}
        onChange={(val) => setCategoryId(val)}
      />

      <input
        className="form-control mt-4 mb-4"
        placeholder="Мэдээний гарчиг"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          // console.log({ event, editor, data });
        }}
      />

      <div>
        <input type="file" name="image" onChange={handleFileUpload} />
        {uploading && <div class="spinner-border" role="status"></div>}

        {image && <img src={image.path} width="100" alt="" />}
      </div>

      <button
        onClick={() => createArticle({ title, categoryId, content, image })}
      >
        Хадгалах
      </button>
    </>
  );
}
