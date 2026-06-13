import { ImagePickerProps } from "Outer/types/meals";

export default function ImagePicker({label, name}: ImagePickerProps) {
    return (
        <>
            <label htmlFor="image">label</label>
            <input 
            type="file" 
            id={name} 
            accept="image/png, image/jpeg" 
             name="image"/>
            <button type="button">Pick an image</button>
        </>
    )

}