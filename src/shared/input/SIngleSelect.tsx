import React, { useRef } from 'react';
import { useField } from 'formik';

type Option = {
  label: string;
  value: string | number;
  icon?: string;
};

interface SingleSelectProps {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  // Upload functionality props
  showUpload?: boolean;
  uploadLabel?: string;
  acceptedFileTypes?: string;
  onFileUpload?: (file: File) => void;
  uploadDisabled?: boolean;
  maxFileSize?: number; // in bytes
  required?: boolean;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  disabled = false,
  className = '',
  showUpload = false,
  uploadLabel = 'Upload',
  acceptedFileTypes = '*',
  onFileUpload,
  uploadDisabled = false,
  required = false,
  maxFileSize = 10 * 1024 * 1024, // 10MB default
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSize) {
      alert(
        `File size must be less than ${(maxFileSize / 1024 / 1024).toFixed(1)}MB`
      );
      return;
    }

    // Call the upload handler if provided
    if (onFileUpload) {
      onFileUpload(file);
    }

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-2 font-nonbureau w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-12 font-medium text-offBlack mb-1.5"
        >
          {label}
          {required && (
            <span className="font-medium text-[13px] absolute text-dangerWarning">
              *
            </span>
          )}
        </label>
      )}

      <div className="flex gap-2">
        {/* Select Input */}
        <select
          id={name}
          {...field}
          disabled={disabled}
          className={`
            block w-full px-3 h-[40px] border rounded-md shadow-sm text-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${
              hasError
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300'
            }
            ${className}
          `.trim()}
        >
          <option value="">
            {placeholder || `Select ${label?.toLowerCase() || 'option'}`}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Upload Button */}
        {showUpload && (
          <>
            <button
              type="button"
              onClick={handleUploadClick}
              disabled={uploadDisabled}
              className={`
                px-4 h-[40px] flex justify-center gap-2 items-center border rounded-md shadow-sm text-sm font-medium text-neutralGrey
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition-colors duration-200 whitespace-nowrap
                ${
                  uploadDisabled
                    ? 'bg-gray-50 text-gray-500 border-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                }
              `.trim()}
            >
              {/* <img src={img.upload} alt="" className="w-[20px] h-[20px]" /> */}
              {uploadLabel}
            </button>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptedFileTypes}
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploadDisabled}
            />
          </>
        )}
      </div>

      {hasError && (
        <p className="mt-1 text-12 text-red-600" role="alert">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default SingleSelect;
