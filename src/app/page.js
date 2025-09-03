import Image from "next/image";

const imageLink = [
  "https://ik.imagekit.io/Gamerskit/mask%20images/Defender%20Black/IMG-20250806-WA0011.jpg?updatedAt=1754488316618",
  "https://ik.imagekit.io/Gamerskit/mask%20images/Defender%20Black/IMG-20250806-WA0012.jpg?updatedAt=1754488316574",
  "https://ik.imagekit.io/Gamerskit/mask%20images/Defender%20Black/IMG-20250806-WA0013.jpg?updatedAt=1754488316570",
  "https://ik.imagekit.io/Gamerskit/mask%20images/Defender%20Black/IMG-20250806-WA0015.jpg?updatedAt=1754488316387"
]

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        {
          imageLink.map((img) => <Image key={img}
            src={img}
            alt="Picture of the author"
            width={800}
            height={500}
          />)
        }
      </div>
    </div>
  );
}
