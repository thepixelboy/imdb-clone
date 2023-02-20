import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        src="/spinner.svg"
        alt="amber circle spinner"
        title="loading page contents..."
        width={200}
        height={200}
      />
    </div>
  );
}
