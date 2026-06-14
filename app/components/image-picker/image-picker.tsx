'use client';

import { ImagePickerProps } from 'Outer/types/meals';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImagePicker({ label, name }: ImagePickerProps) {
    const imageInputRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    function handlePickClick() {
        imageInputRef.current?.click();
    }

    function handleImageChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) {
            setSelectedFile('');
            setPreviewImage('');
            return;
        }

        setSelectedFile(file.name);

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPreviewImage(fileReader.result as string);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <>
            <label
                className="mb-2 block text-sm font-medium text-green-950"
                htmlFor={name}
            >
                {label}
            </label>

            <input
                ref={imageInputRef}
                className="hidden"
                type="file"
                id={name}
                name={name}
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
            />

            <div className="space-y-4">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <button
                        type="button"
                        onClick={handlePickClick}
                        className="rounded-full border border-green-300 bg-white px-6 py-3 text-sm font-medium text-green-800 transition hover:border-green-500 hover:bg-green-50"
                    >
                        📷 Pick an Image
                    </button>

                    <span className="truncate text-sm text-gray-600">
                        {selectedFile || 'No image selected'}
                    </span>

                </div>

                <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl border border-dashed border-green-200 bg-green-50">

                    {previewImage ? (
                        <Image
                            src={previewImage}
                            alt="Selected meal image"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="text-center">
                            <div className="mb-3 text-5xl">🍽️</div>
                            <p className="font-medium text-green-800">
                                Upload a meal photo
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                PNG or JPEG
                            </p>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
}