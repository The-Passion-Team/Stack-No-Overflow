import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./Editor.css"

interface IEditor {
    value: string
    onChange: any
    readOnly: boolean
    target: string
}

const Editor = ({ value, onChange, readOnly, target }: IEditor) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "code", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            ["link", "image"],
        ],
    }

    const formats = [
        "header",
        "bold",
        "italic",
        "code",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ]

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={(newData) => onChange(newData, target)}
            modules={modules}
            formats={formats}
            readOnly={readOnly || false}
        />
    )
}

export default Editor
