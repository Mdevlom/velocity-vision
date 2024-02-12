import React from "react";
import Image from "next/image";
import { FileIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadthing";

type Props = {
  apiEndpoint: "agencyLogo" | "avatar" | "subaccountLogo";
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col justify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-16 h-16 ">
            <Image
              src={value}
              alt="image telecharger"
              className="object-contain"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items0center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-infigo-500 dark:text-indiigo-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button variant="ghost" type="button" onClick={() => onChange("")}>
          <X className="w-2 h-2" />
          Remove Logo
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
};

export default FileUpload;
